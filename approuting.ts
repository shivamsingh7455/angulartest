import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
const routes: Routes = [
    {path:"view", component:ViewComponent},
    {path:"add", component:AddComponent},
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
