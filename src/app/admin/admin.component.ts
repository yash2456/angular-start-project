import { Component, OnInit } from '@angular/core';
import{ FormControl,FormGroup} from '@angular/forms'
import{ActivatedRoute} from '@angular/router'

import{OkgoogleService} from '../okgoogle.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  alert:boolean=false;
  edit =new FormGroup({
    title:new FormControl(''),
    author:new FormControl('')
  })

  constructor( private router:ActivatedRoute ,private ok:OkgoogleService) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.ok.getcurrentok(this.router.snapshot.params.id).subscribe((result)=>{
      console.log(result)
       this. edit =new FormGroup({
        title:new FormControl(result['title']),
        author:new FormControl(result['author'])
      })
    
    })
  }
   
  update(){
    console.log('item',this.edit.value);
    this.ok.updateok(this.router.snapshot.params.id,this.edit.value).subscribe((result)=>{
    console.log("result",result);
      this.alert=true
    })
    
  }
  closeAleret(){
        this.alert=false
  }

}
