import { Component, computed, Input, input, Output, output, EventEmitter} from '@angular/core';

import { type User } from './user.model';
import { CardComponent } from '../shared/card/card';

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.html',
    styleUrl: './user.css',
    imports: [CardComponent]
})
export class UserComponent {

    @Input({required: true}) user!: User;
    @Input({required: true}) selected!: boolean;

    @Output() select = new EventEmitter<string>();
   

    get imagePath(){
        return 'assets/users/' + this.user.avatar;
    }

    onSelectUser() {
        this.select.emit(this.user.id);
    }
    
}