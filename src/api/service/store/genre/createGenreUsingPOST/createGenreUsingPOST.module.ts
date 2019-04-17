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
import {CreateGenreUsingPOSTFormService} from './createGenreUsingPOST.service';

import {CreateGenreUsingPOSTEffects} from './states/effects';
import {CreateGenreUsingPOSTReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, CreateGenreUsingPOSTReducer),
    NgrxEffectsModule.forFeature([CreateGenreUsingPOSTEffects]),
  ],
  providers: [
    GenreService,
    CreateGenreUsingPOSTFormService,
  ],
})
export class CreateGenreUsingPOSTModule {}
