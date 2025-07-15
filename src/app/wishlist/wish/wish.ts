import { Component, Input } from '@angular/core';

import { type Wish } from './wish.model'; 

@Component({
    selector: 'app-wish',
    standalone: true, 
    templateUrl: './wish.html',
    styleUrl: './wish.css',
    imports: []
})

export class WishComponent {
    @Input({required: true}) wish!: Wish;
}