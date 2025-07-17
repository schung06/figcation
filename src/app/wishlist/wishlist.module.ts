import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WishlistComponent } from './wishlist';
import { WishComponent } from './wish/wish';
import { NewWishComponent } from './new-wish/new-wish';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        WishlistComponent,
        WishComponent,
        NewWishComponent
    ],
    exports: [WishlistComponent],
    imports: [CommonModule, FormsModule, SharedModule]
})
export class WishlistModule { }