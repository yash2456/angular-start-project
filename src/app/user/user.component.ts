import { Component, OnInit , TemplateRef} from '@angular/core';
import{ FormControl,FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
import{OkgoogleService}  from '../okgoogle.service'

// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
  
})
export class UserComponent implements OnInit {
  //  filename:any
  // modalRef: BsModalRef;


  login =new FormGroup({
      title:new FormControl(''),
      author:new FormControl(''),
      
      file:new FormControl('')

    })

  constructor(private ok:OkgoogleService,private router: Router ) { }
  alert:boolean=false
  ngOnInit(): void {
  }

  // openModal(template: TemplateRef<any>) {                              ,private modalService: BsModalService
  //   this.modalRef = this.modalService.show(template);
  // }
  y1()
  {
  //  this.login.value.file=this.url
   this.ok.sava(this.login.value).subscribe((result)=>{
    this.alert=true
    this.router.navigateByUrl('/adminlist');
   })
  //  this.login.reset({})
 

  }
  closeAleret()
  {
    this.alert=false
  }
 
 url="../../assets/images/images.png"
uploadFile(e) {
  if(e.target.files){
   var reader=new FileReader()
   reader.readAsDataURL(e.target.files[0])
   reader.onload=(event:any)=>{
     this.url=event.target.result
  //    console.log(this.url);
  //    var fileName = File[0];
  // var fileType = fileName.type;
   
   }
  }
//  this.login.value.filename=this.url

}
}


 // selectfile(event: any){
  //   const file =<File>event.target.files[0];
  //   const filename =file.name
  //   console.log(filename)
  //   this.ok.file(filename).subscribe((result=>{
  //    console.log(result);
  //   })
  //   )


 
  
//   afuConfig = {
//     multiple: false,
//     formatsAllowed: ".jpg,.png",
//     maxSize: "1",
//     uploadAPI:  {
//       url:"https://example-file-upload-api",
//       method:"POST",
//       headers: {
//      "Content-Type" : "text/plain;charset=UTF-8",
//      "Authorization" : `Bearer ${File}`
//       },
//       params: {
//         'page': '1'
//       },
//       responseType: 'blob',
      
//     },
//     theme: "dragNDrop",
//     hideProgressBar: true,
//     hideResetBtn: true,
//     hideSelectBtn: true,
//     fileNameIndex: true,
//     replaceTexts: {
//       selectFileBtn: 'Select Files',
//       resetBtn: 'Reset',
//       uploadBtn: 'Upload',
//       dragNDropBox: 'none',
//       attachPinBtn: 'Attach Files...',
//       afterUploadMsg_success: 'Successfully Uploaded !',
//       afterUploadMsg_error: 'Upload Failed !',
//       sizeLimit: 'Size Limit'
//     }
// }

// yash(e: File[]){
//   // console.log("value");
//   // const qqq =e.target.files
//   // console.log(qqq);
 
//   var fileName = File[0];
//   var fileType = fileName.type;
//    console.log(fileType);
   
// }