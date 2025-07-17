import { NgModule } from '@angular/core';
import { CardComponent } from './card/card';

@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent]
})
export class SharedModule { }