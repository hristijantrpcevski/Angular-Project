import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ViewFbComponent } from './view-fb/view-fb.component';
import { ViewFbService } from './services/view-fb.service';
import { CreateFbComponent } from './create-fb/create-fb.component';
import { FbRoutingModule } from './routing/fb-routing.module';
import { DetailsFbComponent } from './details-fb/details-fb.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../app/material';



@NgModule({
  declarations: [
    AppComponent,
    ViewFbComponent,
    CreateFbComponent,
    DetailsFbComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FbRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,   
  ],
  providers: [ 
    ViewFbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
