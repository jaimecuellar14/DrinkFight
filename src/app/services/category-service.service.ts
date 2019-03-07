import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  category_data:{};
  popOver:any;
  constructor() { }

  setCatogryData(name,icon,id){
    this.category_data = {
      name:name,
      icon:icon,
      id:id
    };
  }

  getCategoryData(){
    return this.category_data;
  }

  getPopoverCtrl(){
    return this.popOver;
  }

  setPopoverCtrl(popover){
    this.popOver = popover;
  }
}
