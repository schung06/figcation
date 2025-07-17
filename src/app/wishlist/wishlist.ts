import { Component, Input } from '@angular/core';
import { WishComponent } from './wish/wish';
import { NewWishComponent } from './new-wish/new-wish';
import { type NewWishData } from './wish/wish.model';


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

    wishes = [
        {
    id: 't1',
    userId: 'u1',
    title: 'Tokyo Skytree',
    summary:
      'Visit the tallest structure in Japan and enjoy panoramic views of the city.',
    dueDate: '2025-12-31',
      },
  
  {
    id: 't2',
    userId: 'u2',
    title: 'Studio Ghibli Museum',
    summary: 'Explore the magical world of Studio Ghibli with exhibits and short films.',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Teamlab Borderless',
    summary:
      'Experience a digital art museum with immersive installations and interactive exhibits.',
    dueDate: '2024-06-15',
  },

    ];
  
  get selectedUserWishes() {
    return this.wishes.filter((wish) =>  wish.userId === this.userId);
  }

  onCompleteWish(id: string) {
    this.wishes = this.wishes.filter((wish) => wish.id !== id);
  }

  onStartAddWish() {
    this.isAddingWish = true;
  }

  onCancelAddWish() {
    this.isAddingWish = false;
  }

  onAddWish(wishData: NewWishData) {
    this.wishes.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: wishData.title,
      summary: wishData.summary,
      dueDate: wishData.date
    })
    this.isAddingWish = false;
  }
}