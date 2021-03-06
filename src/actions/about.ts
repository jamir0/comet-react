import * as $ from 'jquery';
import mirror from '../utils/mirror';

export const types = mirror(
  'About', {
    GetDataError  : undefined,
    GetDataSuccess: undefined,
    Init          : undefined
  }
);

export function changeText() {
  return (dispatch) => {
    $.ajax(
      {
        url: '/api/data',
        success() {
          return dispatch({type: types.GetDataSuccess, success: true});
        },
        error() {
          return dispatch({type: types.GetDataError, success: false});
        }
      }
    );
  };
}
