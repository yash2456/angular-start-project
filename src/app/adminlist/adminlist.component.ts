import { Component, OnInit } from '@angular/core';
import{OkgoogleService} from '../okgoogle.service' ///// umeru servise
import { Router } from '@angular/router';

import{ FormControl,FormGroup} from '@angular/forms'
import { $ } from 'protractor';

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.css']
})
export class AdminlistComponent implements OnInit {
  closeModalEvent:any; 
    login =new FormGroup({
    title:new FormControl(''),
    author:new FormControl(''),
    
    file:new FormControl('')

  })

 
  constructor(private ok:OkgoogleService,private router: Router) { }     ///service
  list:any=[];
 
  
  ngOnInit(): void {
    this.ok.getlist().subscribe((result)=>{
      console.log(result);  
      this.list=result;                           //service call kari
    })                 
  }
  deleteok(item){
    console.log(this.list)
    this.list.splice(this.list.findIndex(x=>x.id==item),1)
    this.ok.deleteok(item).subscribe((result)=>{
      console.log(result)
    
    })
  }
 y1(){
    this.ok.sava(this.login.value).subscribe((result)=>{
      this.router.navigateByUrl('/adminlist');
  
    
    //  model
    })
      
 }
 url="../../assets/images/images.png"
uploadFile(e) {
  if(e.target.files){
   var reader=new FileReader()
   reader.readAsDataURL(e.target.files[0])
   reader.onload=(event:any)=>{
     this.url=event.target.result

   
   }
  }

 
}
onCloseModal(event: any){
  this.closeModalEvent.emit(false);  
 }


}
