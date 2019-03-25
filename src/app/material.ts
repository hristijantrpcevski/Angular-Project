import {MatButtonModule, MatCheckboxModule, MatGridListModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule,
           MatCheckboxModule,
           MatInputModule,
           MatToolbarModule,
           MatDividerModule,
           MatCardModule,
           MatSidenavModule,
          MatGridListModule],
  exports: [MatButtonModule,
           MatCheckboxModule,
           MatInputModule,
           MatToolbarModule,
           MatDividerModule,
           MatCardModule,
           MatSidenavModule,
           MatGridListModule]
})
export class MaterialModule { }