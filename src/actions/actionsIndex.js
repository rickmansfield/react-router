export const FETCH_ADS_PENDING = "FETCH_ADS_PENDING";
export const FETCH_ADS_SUCCESS = "FETCH_ADS_SUCCESS";
export const FETCH_ADS_ERROR = "FETCH_ADS_ERROR";

/* ADS ****************************/

export function fetchAdsPending() {
  return {
    type: FETCH_ADS_PENDING,
    pending: true,
  };
}

export function fetchAdsSuccess(ads) {
  return {
    type: FETCH_ADS_SUCCESS,
    ads: ads,
    pending: false,
  };
}

export function fetchAdsError(error) {
  return {
    type: FETCH_ADS_ERROR,
    pending: false,
    error: error,
  };
}