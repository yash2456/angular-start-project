import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent} from './user/user.component'
import {AdminComponent} from './admin/admin.component'
import{AdminlistComponent} from './adminlist/adminlist.component'
import{UserlistComponent} from './userlist/userlist.component'
import{UslidataComponent} from './uslidata/uslidata.component'
const routes: Routes = [     //
  {
    path:'user', 
    component : UserComponent
  },
  {
    path:'admin/:id', 
    component : AdminComponent
  },
  {
    path:'userlist', 
    component : UserlistComponent
  },
  {
    path:'adminlist', 
    component : AdminlistComponent
  },
  {
    path:'uslidata',
    component:UslidataComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
