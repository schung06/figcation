import { Component, Input } from '@angular/core';
import { WishComponent } from './wish/wish';

@Component({
    selector: 'app-wishlist',
    standalone: true, 
    templateUrl: './wishlist.html',
    styleUrl: './wishlist.css',
    imports: [WishComponent]
})

export class WishlistComponent {
    @Input() name?: string;
}