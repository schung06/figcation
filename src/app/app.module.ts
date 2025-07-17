import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user';
import { WishlistComponent } from './wishlist/wishlist';

@NgModule({
    declarations: [AppComponent], 
    bootstrap: [AppComponent],
    imports: [BrowserModule, HeaderComponent, UserComponent, WishlistComponent]

})
export class AppModule { }