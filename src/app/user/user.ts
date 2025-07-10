import { Component, computed, Input, input } from '@angular/core';

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.html',
    styleUrl: './user.css',
})
export class UserComponent {

    @Input({required: true}) avatar!: string ;
    @Input({required: true}) name!: string;
    /*avatar = input.required<string>();
    name = input.required<string>();*/

    /*imagePath = computed(() => {
        return 'assets/users/' + this.avatar();
    });*/

    get imagePath(){
        return 'assets/users/' + this.avatar;
    }

    onSelectUser() {

    }
}