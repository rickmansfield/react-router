import {
  FETCH_ADS_ERROR,
  FETCH_ADS_PENDING,
  FETCH_ADS_SUCCESS,
} from "../actions/actionsIndex";

const initialState = {
  pending: true,
  ads: [],
  error: null,
};
export default function adsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ADS_PENDING:
      
      return {
        ...state,
        pending: true,
      };
    case FETCH_ADS_SUCCESS: {
      return {
        ...state,
        pending: false,
        ads: action.ads,
      };
    }
    case FETCH_ADS_ERROR: {
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    }

    default:
      return state;
  }
}

export const getAds = (state) => state.ads;
export const getAdsPending = (state) => state.pending;
export const getAdsError = (state) => state.error;
