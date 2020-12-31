import { createAction, createReducer, on } from '@ngrx/store';
import * as AppState from '../../state/app.state';

import {Product} from '../product';

export interface State extends AppState.State {
  products: ProductState;
}

export interface ProductState {
  showProductCode: boolean,
  currentProduct: Product,
  products: Product[]
}

export const productReducer = createReducer(
  { showProductCode: true },
  on(createAction('[Product] Toggle Product Code'), state => {
    return {
      ...state,
      showProductCode: !state.showProductCode
    };
  })
);
