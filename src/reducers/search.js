export const initialState = {
  city: '',
  date_list: [],
  equipments: [],
  workspaces: [],
  modaleFilterIsOpen: false,
  modaleCalendarIsOpen: false,
  equipmentsListFromAPI: '',
  equipementsAPIisLoading: true,
  worspacesAPIisLoading: true,
  calendarHomePageIsOpen: false,
  citiesFromAPIGouv: [],
  dateAppear: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'EMPTY_STATE':
      return {
        ...state,
        city: '',
        date_list: [],
        equipments: [],
        workspaces: [],
        dateAppear: false,
      };
    case 'DATE_APPEAR_ON_HOMEPAGE':
      return {
        ...state,
        dateAppear: true,
      };
    case 'OPEN_MODAL_FILTERS':
      return {
        ...state,
        modaleFilterIsOpen: true,
      };
    case 'CLOSE_MODAL_FILTERS':
      return {
        ...state,
        modaleFilterIsOpen: false,
      };
    case 'OPEN_MODAL_CALENDAR':
      return {
        ...state,
        modaleCalendarIsOpen: true,
      };
    case 'CLOSE_MODAL_CALENDAR':
      return {
        ...state,
        modaleCalendarIsOpen: false,
      };
    case 'SEARCH_CITY':
      return {
        ...state,
        city: action.city,
      };
    case 'ADD_FILTER':
      return {
        ...state,
        equipments: [
          ...state.equipments,
          action.filters,
        ],
      };
    case 'REMOVE_FILTER':
      return {
        ...state,
        equipments: state.equipments.filter((filter) => filter !== action.value),
      };
    case 'REMOVE_DATES':
      return {
        ...state,
        date_list: [],
      };
    case 'ADD_DATES':
      return {
        ...state,
        date_list: action.dates,
      };
    case 'SAVE_WORKSPACES':
      return {
        ...state,
        workspaces: action.workspaces,
        worspacesAPIisLoading: false,
      };
    case 'SAVE_EQUIPMENTS':
      return {
        ...state,
        equipmentsListFromAPI: action.equipmentsListFromAPI,
        equipementsAPIisLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
