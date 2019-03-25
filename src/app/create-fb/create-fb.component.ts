import { Component} from '@angular/core';
import { ViewFbService } from '../services/view-fb.service';
import { Photo, ICreatePhoto } from '../photos';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-fb',
  templateUrl: './create-fb.component.html',
  styleUrls: ['./create-fb.component.css']
})
export class CreateFbComponent {
  photo:Photo = null;
 

  public formGroup: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private service: ViewFbService,
    private router:ActivatedRoute) {
    this.formGroup = formBuilder.group({
        photoUrl: [null, Validators.required],
        title: [null, Validators.required],
    })
   }
 
   save(): void {
    if(!this.formGroup.valid) {
        return;
    }

    const request: ICreatePhoto = {
        title: this.formGroup.controls.title.value,
        thumbnailUrl: this.formGroup.controls.photoUrl.value
    };

    this.service.create(request).subscribe(
      (response)=>{
        this.photo = response;
      }
    )
  }



}
