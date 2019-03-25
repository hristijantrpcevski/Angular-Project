import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewFbService } from '../services/view-fb.service';
import { Photo} from '../photos';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-details-fb',
  templateUrl: './details-fb.component.html',
  styleUrls: ['./details-fb.component.css']
})
export class DetailsFbComponent implements OnInit {
  photoId:number;
  photo:Photo;
  updateForm: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private router: Router,
    private route:ActivatedRoute,
    private service: ViewFbService) {

    this.route.params.subscribe(
      params => this.photoId= params.id);

      this.updateForm= this.formBuilder.group({
        title:[null,Validators.required]
      }) 
   }

  ngOnInit() {
    this.service.getPhoto(this.photoId)
        .subscribe(service => {
          this.photo = service;
          this.updateForm.controls['title'].setValue(this.photo.title)});   
  };
 
  update(){
    if(!this.updateForm.valid) return;

    this.photo.title = this.updateForm.controls.title.value;

    this.service.update(this.photo)
      .subscribe(() =>{
        alert('Photo has been successfully updated')
        console.log(this.photo)
      })
  }

  delete(photo){ 
    if(confirm("Are you sure you want to delete this picture?")){
   
    this.service.delete(photo.id).subscribe(
      response => {
        this.router.navigate(['/view-fb']);
      });

     }

  }
}
