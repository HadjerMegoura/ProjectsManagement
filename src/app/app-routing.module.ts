import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAddComponent } from './form-add/form-add.component';
import { FormUpdateComponent } from './form-update/form-update.component';
import { HomeComponent } from './home/home.component';
import {AdminHomeComponent} from './admin-home/admin-home.component';



const routes: Routes = [
  {path : 'add',component:FormAddComponent},
  {path : 'update',component:FormUpdateComponent},
  {path : 'home',component:HomeComponent},
  {path : 'admin-home',component:AdminHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FormAddComponent,FormUpdateComponent,HomeComponent,AdminHomeComponent]
