import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewWishData } from '../wish/wish.model';
import { WishlistService } from '../wishlist.service';

@Component({
    selector: 'app-new-wish',
    standalone: true, 
    templateUrl: './new-wish.html',
    styleUrl: './new-wish.css',
    imports: [FormsModule]
})

export class NewWishComponent {
    @Input({ required: true }) userId!: string;
    @Output() close = new EventEmitter<void>();
    enteredTitle = ''; 
    enteredSummary = '';
    enteredDate = '';

    private wishlistService = inject(WishlistService);
    
    onCancel() {
        this.close.emit();
    }

    onSubmit() {
        this.wishlistService.addWish({
            title: this.enteredTitle,
            summary: this.enteredSummary,
            date: this.enteredDate
        }, this.userId);
        this.close.emit();
    }
}

