import { Component, signal, inject } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { Place } from '../place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { DestroyRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal('');
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);
  

  ngOnInit() {
      this.isFetching.set(true);
      const subscription = this.httpClient
        .get<{ places: Place[] }>('http://localhost:3000/user-places')
        .pipe(
          map((resData) => resData.places),
          catchError((error) => {
            return throwError(
              () =>
                new Error(
                  'Something went wrong. Please try again later.'
                )
            );
          })
        )
        .subscribe({
          next: (places) => {
            this.places.set(places);
          },
          error: (error: Error) => { 
            this.error.set(error.message);
          },
          complete: () => {
            this.isFetching.set(false);
          }
        });
  
      this.destroyRef.onDestroy(() => {
        subscription.unsubscribe();
      });
    }
    
    onSelectPlace(selectedPlace: Place) {
      this.httpClient.put('http://localhost:3000/user-places', {
        placeId: selectedPlace.id
      }).subscribe({
        next: (resData) => console.log(resData),
      });
    }
}
