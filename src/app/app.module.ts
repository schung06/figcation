import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user';
import { SharedModule } from './shared/shared.module';
import { WishlistModule } from './wishlist/wishlist.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent
    ], 
    bootstrap: [AppComponent],
    imports: [BrowserModule, SharedModule, WishlistModule]

})
export class AppModule { }