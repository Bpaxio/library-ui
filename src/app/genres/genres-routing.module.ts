import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenreTableComponent } from './genre-table/genre-table.component';
import { GenreEditComponent } from './genre-edit/genre-edit.component';

const routes: Routes = [
  {path: 'genres', component: GenreTableComponent},
  {path: 'genre/:id', component: GenreEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class GenresRoutingModule {
}
