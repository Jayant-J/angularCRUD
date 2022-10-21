import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', redirectTo: '/all', pathMatch: 'full'},
  {path:'all', component: HomeComponent},
  {path:'add', component: AddPostComponent},
  {path:'edit/:id', component: EditPostComponent},
  {path:'**', redirectTo: 'all'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
