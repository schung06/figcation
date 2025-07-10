import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-wishlist',
    standalone: true, 
    templateUrl: './wishlist.html',
    styleUrl: './wishlist.css',
    imports: []
})

export class WishlistComponent {
    @Input() name?: string;
}