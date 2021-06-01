import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms'
import { ListdataService } from '../listdata.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  form: FormGroup;
  submitted = true;
  checkArrayhobbie: any;
  alert: boolean = false
  Data: Array<any> = [
    { name: 'playing', value: 'playing ' },
    { name: 'singing', value: 'singing' },
    { name: 'writting', value: 'writting' },
    { name: 'cooking', value: 'cooking' }
  ];

  constructor(private list: ListdataService, private fb: FormBuilder, private router: Router) {

    this.form = this.fb.group({
      checkArray: this.fb.array([])
    })


  }

  ngOnInit(): void {
  }

  infromation = new FormGroup({
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    address2: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    zip: new FormControl('', [Validators.required, Validators.pattern("[0-9]{6}")]),
    gender: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
    phonenumber: new FormControl('', [Validators.required, Validators.pattern("[8,9,6,7][0-9]{9}")]),
    hobbies: new FormControl('', Validators.required),
  }
  )
  get fname() { return this.infromation.get('fname') };
  get lname() { return this.infromation.get('lname') };
  get address() { return this.infromation.get('address') };
  get address2() { return this.infromation.get('address2') };
  get city() { return this.infromation.get('city') };
  get state() { return this.infromation.get('state') };
  get zip() { return this.infromation.get('zip') };
  get gender() { return this.infromation.get('gender') };
  get email() { return this.infromation.get('email') };
  get phonenumber() { return this.infromation.get('phonenumber') };
  get hobbies() { return this.infromation.get('hobbies') };

  data(value) {
    //console.log(this.infromation.value.hobbies);
    this.infromation.value.hobbies = this.checkArrayhobbie;
    //console.log(this.infromation.value)
    //console.log(this.checkArrayhobbie,"this.checkArrayhobbie")
    // console.log(this.infromation.value.hobbies)
    this.list.sava(this.infromation.value).subscribe((result) => {
      this.alert = true
      this.router.navigateByUrl('/uslidata');

    })
    // this.infromation.reset({})


  }
  closeAleret() {
    this.alert = false
  }
  // onReset(){
  //   this.submitted = false;

  // }
  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;

    if (e.target.checked) {

      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any = FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }

        i++;

      })
    }

    // this.infromation.value.hobbies=checkArray.value;
    this.checkArrayhobbie = checkArray.value;
    //this.checkArrayhobbie=checkArray.value;
  }



}
