import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewWishData } from '../wish/wish.model';

@Component({
    selector: 'app-new-wish',
    standalone: true, 
    templateUrl: './new-wish.html',
    styleUrl: './new-wish.css',
    imports: [FormsModule]
})

export class NewWishComponent {
    @Output() cancel = new EventEmitter<void>();
    @Output() add = new EventEmitter <NewWishData>();
    enteredTitle = ''; 
    enteredSummary = '';
    enteredDate = '';
    
    onCancel() {
        this.cancel.emit();
    }

    onSubmit() {
        this.add.emit({
            title: this.enteredTitle,
            summary: this.enteredSummary,
            date: this.enteredDate
        });
    }
}

