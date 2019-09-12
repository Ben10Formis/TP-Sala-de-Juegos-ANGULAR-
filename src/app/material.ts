import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule], //utilizar los modulos de diseño
  exports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule],
})
export class MaterialModule { }