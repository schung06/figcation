import { Component, EventEmitter, Input, inject } from '@angular/core';
import { DatePipe } from '@angular/common';

import { type Wish } from './wish.model'; 
import { CardComponent } from '../../shared/card/card';
import { WishlistService } from '../wishlist.service';

@Component({
    selector: 'app-wish',
    standalone: true, 
    templateUrl: './wish.html',
    styleUrl: './wish.css',
    imports: [CardComponent, DatePipe]
})

export class WishComponent {
    @Input({ required: true }) wish!: Wish;
    
    private wishlistService = inject(WishlistService);

    onCompleteWish() {
        this.wishlistService.removeWish(this.wish.id);
    }
}