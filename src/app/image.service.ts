import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from './image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient) { }

  baseurl = 'https://server-ecom-1.onrender.com/image/';

  postImage(image:Image){
    return this.http.post<any>(`${this.baseurl}addImage`, image);
  }

  getAllImage(){

    return this.http.get<any>(`${this.baseurl}getAllImage`);

  }

  
  deleteImageById(id:number){

    return this.http.delete<any>(`${this.baseurl}deleteImageById/${id}`,{ observe: 'response', responseType: 'text' as 'json' });

  }

  
  updateImageById(id:number,image:Image){
    return   this.http.put<any>(`${this.baseurl}updateImageById/${id}`,image);   
     

  }

  getImageById(id:number){

    return this.http.get<any>(`${this.baseurl}getImageById/${id}`);

  }



  






}
