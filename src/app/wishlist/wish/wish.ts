import { Component, EventEmitter, Input, inject } from '@angular/core';

import { type Wish } from './wish.model'; 
import { WishlistService } from '../wishlist.service';

@Component({
    selector: 'app-wish',
    templateUrl: './wish.html',
    styleUrl: './wish.css'
})

export class WishComponent {
    @Input({ required: true }) wish!: Wish;
    
    private wishlistService = inject(WishlistService);

    onCompleteWish() {
        this.wishlistService.removeWish(this.wish.id);
    }
}