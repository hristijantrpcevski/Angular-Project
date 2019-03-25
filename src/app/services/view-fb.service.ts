import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Photo, ICreatePhoto } from '../photos';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ViewFbService{

  
  private url = "https://jsonplaceholder.typicode.com/photos"

  constructor(private http: HttpClient) { }
 
  getAll() {
    return this.http.get<Photo[]>(this.url);
  }

  getPhoto(photoId) {
    return this.http.get<Photo>(this.url + '/' + photoId);
  }

  create(request: ICreatePhoto){
    return this.http.post<Photo>(this.url, request, httpOptions)
  }

  update(photos: Photo){
    return this.http.put<Photo>(`${this.url}/${photos.id}`, photos,httpOptions)
  }  
     
  delete(id) {
    return this.http.delete(`${this.url}/${id}`)
  }
}
