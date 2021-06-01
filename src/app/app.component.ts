import { Component } from '@angular/core';
import{OkgoogleService} from './okgoogle.service';
import { FormControl,FormGroup,Validators} from '@angular/forms'


// export class data{
//   constructor(
//     public email:string,
//     public password:number
//     ){}
//   }



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'testprojdemo';
//    login(data)
//   {
//     console.log(data)
   
//   }

//  loginform=new FormGroup(
//       {
//         email:new FormControl('',Validators.required),
//         password:new FormControl('',Validators.required),
//         phonenumber:new FormControl('',[Validators.required,Validators.pattern("[8,9,6,7][0-9]{9}")]),
//         address:new FormControl('',Validators.required),
//         file:new FormControl('',Validators.required),
//         lname:new FormControl('',Validators.required),
//         fname:new FormControl('',Validators.required)
//       }
//     )
  
//    get email(){return this.loginform.get('email') }
//    get password(){return this.loginform.get('password')}
//    get phonenumber(){return this.loginform.get('phonenumber')}
//    get address(){return this.loginform.get('address')}
//    get file(){return this.loginform.get('file')}
//    get lname(){return this.loginform.get('lname')}
//    get fname(){return this.loginform.get('fname')}


  // alerts: Alert[];

  // constructor() {
  //   this.reset();
  // }

  // close(alert: Alert) {
  //   this.alerts.splice(this.alerts.indexOf(alert), 1);
  // }

  // reset() {
  //   this.alerts = Array.from(ALERTS);
  // }
  // -----------------------------------------------------------------------------------------------------
  // data=[];
  // constructor(private user:OkgoogleService)
  // {
  //   this.user.getdata().subscribe(data=>
  //     {
  //        console.log(data);    //import thayi.
  //       this.data = data;
  //     })
  // }
 
}
