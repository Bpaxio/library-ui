import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';
import { GenreEditComponent } from './genre-edit/genre-edit.component';
import { GenreTableComponent } from './genre-table/genre-table.component';
import { GenresRoutingModule } from './genres-routing.module';
import { CreateGenreDialogComponent } from './create-genre/create-genre.component';

@NgModule({
  imports: [
    MaterialModule,
    GenresRoutingModule
  ],
  declarations: [
    GenreTableComponent,
    GenreEditComponent,
    CreateGenreDialogComponent
  ],
  entryComponents: [
    CreateGenreDialogComponent
  ]
})
export class GenresModule {
}
