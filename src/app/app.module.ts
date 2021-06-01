import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio'

import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { UserlistComponent } from './userlist/userlist.component';
import { AdminlistComponent } from './adminlist/adminlist.component'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms' //reactive from use.
import { AngularFileUploaderModule } from "angular-file-uploader";
import { UslidataComponent } from './uslidata/uslidata.component'
import { ModalModule } from 'ngx-bootstrap/modal';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    UserlistComponent,
    AdminlistComponent,
    UslidataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatButtonModule,
    MatSliderModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,//.forRoot(),
    ReactiveFormsModule,
    AngularFileUploaderModule,
    MatRadioModule,
    ModalModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
