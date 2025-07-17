import { type NewWishData } from "./wish/wish.model";
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'}) 
export class WishlistService{
    private wishes = [
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

    getUserWishes(userId: string) {
        return this.wishes.filter((wish) =>  wish.userId === userId);
    }

    addWish(wishData: NewWishData, userId: string) {
        this.wishes.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: wishData.title,
            summary: wishData.summary,
            dueDate: wishData.date
        })
    }

    removeWish(id: string) {
        this.wishes = this.wishes.filter((wish) => wish.id !== id);
    }

}