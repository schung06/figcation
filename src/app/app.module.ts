import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user';
import { WishlistComponent } from './wishlist/wishlist';
import { CardComponent } from './shared/card/card';
import { WishComponent } from './wishlist/wish/wish';
import { NewWishComponent } from './wishlist/new-wish/new-wish';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent,
        CardComponent,
        WishlistComponent,
        WishComponent,
        NewWishComponent
    ], 
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule]

})
export class AppModule { }