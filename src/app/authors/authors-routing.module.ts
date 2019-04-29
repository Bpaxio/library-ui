import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { AuthorListComponent } from './author-list/author-list.component';

const routes: Routes = [
  {path: 'authors', component: AuthorListComponent},
  {path: 'author/:id', component: AuthorEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule {
}
