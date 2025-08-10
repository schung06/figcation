import { inject, Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, throwError } from 'rxjs';
import { ErrorService } from '../shared/error.service';

/**
 * Service to manage places, including fetching available places,
 * user-specific places, and adding/removing places from the user's list.
 */

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private errorService = inject(ErrorService);
  private httpClient = inject(HttpClient);
  private userPlaces = signal<Place[]>([]);

  loadedUserPlaces = this.userPlaces.asReadonly();

  //wrapper around the HTTP call to fetch available places
  loadAvailablePlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/places',
      'Failed to load available places.'
    );
  }

  loadUserPlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/user-places',
      'Failed to load your selected places.'
    ).pipe(
      tap({
        next: (userPlaces) => this.userPlaces.set(userPlaces)
    }));
  }

  addPlaceToUserPlaces(place: Place) {
    const prevPlaces = this.userPlaces();

    if (!prevPlaces.some((p) => p.id === place.id)) {
      // Only add the place if it is not already in the user's places
      this.userPlaces.set([...prevPlaces, place]);
    }

    return this.httpClient
      .put('http://localhost:3000/user-places', {
        placeId: place.id
      }).pipe(
        catchError(error => {
          this.userPlaces.set(prevPlaces); // revert to previous state on error
          this.errorService.showError('Failed to store selected place.');
          return throwError(() => new Error('Failed to store selected place.'))
        })
      );
  }

  removeUserPlace(place: Place) { }
  
  private fetchPlaces(url: string, errorMessage: string) {
    return this.httpClient
      .get<{ places: Place[] }>(url)
      .pipe(
        map((resData) => resData.places),
        catchError((error) => {
          return throwError(
            () =>
              new Error(errorMessage)
          );
        })
      );
  }
}
