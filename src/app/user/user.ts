import { Component, computed, Input, input, Output, output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.html',
    styleUrl: './user.css',
})
export class UserComponent {

    @Input({required: true}) avatar!: string ;
    @Input({required: true}) name!: string;
    @Input ({required: true}) id!: string;
    /*avatar = input.required<string>();
    name = input.required<string>();*/

    /*imagePath = computed(() => {
        return 'assets/users/' + this.avatar();
    });*/

    @Output() select = new EventEmitter<string>();
    //select = output<string>();

    get imagePath(){
        return 'assets/users/' + this.avatar;
    }

    onSelectUser() {
        this.select.emit(this.id);
    }
    
}