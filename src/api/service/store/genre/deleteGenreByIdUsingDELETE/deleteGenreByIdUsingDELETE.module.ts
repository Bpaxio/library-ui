/* tslint:disable:max-line-length */
/**
 * Api Documentation
 * 1.0
 * Api Documentation
 * urn:tos
 * Apache 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 * localhost:8083
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {GenreService} from '../../../controllers/Genre';
import {FormsSharedModule} from '../../forms-shared.module';
import {DeleteGenreByIdUsingDELETEFormService} from './deleteGenreByIdUsingDELETE.service';

import {DeleteGenreByIdUsingDELETEEffects} from './states/effects';
import {DeleteGenreByIdUsingDELETEReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, DeleteGenreByIdUsingDELETEReducer),
    NgrxEffectsModule.forFeature([DeleteGenreByIdUsingDELETEEffects]),
  ],
  providers: [
    GenreService,
    DeleteGenreByIdUsingDELETEFormService,
  ],
})
export class DeleteGenreByIdUsingDELETEModule {}
