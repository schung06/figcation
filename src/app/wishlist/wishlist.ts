import { Component, Input } from '@angular/core';
import { WishComponent } from './wish/wish';
import { NewWishComponent } from './new-wish/new-wish';
import { type NewWishData } from './wish/wish.model';
import { WishlistService } from './wishlist.service';

@Component({
    selector: 'app-wishlist',
    standalone: true, 
    templateUrl: './wishlist.html',
    styleUrl: './wishlist.css',
    imports: [WishComponent, NewWishComponent]
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