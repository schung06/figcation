import { Component, EventEmitter, Input, Output } from '@angular/core';

import { type Wish } from './wish.model'; 
import { CardComponent } from '../../shared/card/card';

@Component({
    selector: 'app-wish',
    standalone: true, 
    templateUrl: './wish.html',
    styleUrl: './wish.css',
    imports: [CardComponent]
})

export class WishComponent {
    @Input({ required: true }) wish!: Wish;
    @Output() complete = new EventEmitter<string>();

    onCompleteWish() {
        this.complete.emit(this.wish.id);
    }
}