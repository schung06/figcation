import { Component, EventEmitter, Input, Output } from '@angular/core';

import { type Wish } from './wish.model'; 

@Component({
    selector: 'app-wish',
    standalone: true, 
    templateUrl: './wish.html',
    styleUrl: './wish.css',
    imports: []
})

export class WishComponent {
    @Input({ required: true }) wish!: Wish;
    @Output() complete = new EventEmitter<string>();

    onCompleteWish() {
        this.complete.emit(this.wish.id);
    }
}