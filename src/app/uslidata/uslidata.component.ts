import { Component, OnInit } from '@angular/core';
import{ListdataService} from '../listdata.service'
@Component({
  selector: 'app-uslidata',
  templateUrl: './uslidata.component.html',
  styleUrls: ['./uslidata.component.css']
})
export class UslidataComponent implements OnInit {

  constructor(private list:ListdataService) { }
 value:any=[]
  ngOnInit(): void {
    this.list.getlist().subscribe((result)=>{
     
      // console.log(result);
      this.value=result;
    })
  }
  deletlist(item){
    console.log(this.value)
    this.value.splice(this.value.findIndex(x=>x.id==item),1)
    this.list.deletlist(item).subscribe((result)=>{
      // console.log(result)
    })

  }
  
}
