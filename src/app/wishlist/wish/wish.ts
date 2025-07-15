import { Component, Input } from '@angular/core';

interface Wish{
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;

}

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