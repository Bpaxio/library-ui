import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorRoutingModule } from './authors-routing.module';

@NgModule({
  imports: [
    AuthorRoutingModule,
    MaterialModule
  ],
  declarations: [
    AuthorEditComponent,
    AuthorListComponent
  ],
  entryComponents: [
  ]

})
export class AuthorsModule { }
