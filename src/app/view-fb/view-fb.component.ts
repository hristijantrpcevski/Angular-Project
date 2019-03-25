import { Component, OnInit } from '@angular/core';
import { ViewFbService } from '../services/view-fb.service';
import { Photo } from '../photos';


@Component({
  selector: 'app-view-fb',
  templateUrl: './view-fb.component.html',
  styleUrls: ['./view-fb.component.css']
})
export class ViewFbComponent implements OnInit {
  photos: Photo[];
  
  constructor(private service: ViewFbService) { }

  ngOnInit() {
    this.service.getAll()
            .subscribe( photos => this.photos = photos)
  }
}

