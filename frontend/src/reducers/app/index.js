export const LOADING = "LOADING";
export const LOADING_SUCCESS = "LOADING_SUCCESS";
export const LOADING_FAIL = "LOADING_FAIL";
export const SELECT_MARKER = "SELECT_MARKER";
export const TOGGLE_SHOW_MARKERS = "TOGGLE_SHOW_MARKERS";

const INITIAL_STATE = {
    isLoading: false,
    isError: false,
    errorMessage: "",
    markers: [],
    selectedMarker: null,
    shouldShowMarkers: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true
      };
    case LOADING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        markers: action.payload.markers
      };
    case LOADING_FAIL:
      return {
        ...state,
        isLoading: false
      };
    case SELECT_MARKER:
      return {
        ...state,
        selectedMarker: action.payload.index !== null ? state.markers[action.payload.index] : null
      };
    case TOGGLE_SHOW_MARKERS:
      return {
        ...state,
        shouldShowMarkers: !state.shouldShowMarkers
      };
    default:
      return state;
  }
};