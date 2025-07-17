import { Component, Input } from '@angular/core';
import { WishlistService } from './wishlist.service';

@Component({
    selector: 'app-wishlist',
    templateUrl: './wishlist.html',
    styleUrl: './wishlist.css',
})

export class WishlistComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) userId!: string;
  isAddingWish = false;
  

  constructor(private wishlistService: WishlistService) {
    
  }
    
  
  get selectedUserWishes() {
    return this.wishlistService.getUserWishes(this.userId);
  }


  onStartAddWish() {
    this.isAddingWish = true;
  }

  onCloseAddWish() {
    this.isAddingWish = false;
  }

}