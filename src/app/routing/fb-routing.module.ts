import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateFbComponent } from '../create-fb/create-fb.component'
import { ViewFbComponent } from '../view-fb/view-fb.component'
import { DetailsFbComponent } from '../details-fb/details-fb.component';


const routes: Routes = [
  {path: '', redirectTo: '/view-fb', pathMatch: 'full' },
  {path: 'view-fb' , component: ViewFbComponent},
  {path: 'create-new', component: CreateFbComponent },
  {path: 'details/:id', component: DetailsFbComponent},
  {path: '**', redirectTo: '/view-fb'}
] 

@NgModule({
  imports: [
    RouterModule.forRoot(routes) ,
    CommonModule
  ],
  exports : [
    RouterModule
  ],
  declarations: []
})
export class FbRoutingModule { }
