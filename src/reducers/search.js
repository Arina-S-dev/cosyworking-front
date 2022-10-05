export const initialState = {
  city: '',
  date_list: '',
  equipments: [],
  workspaces: [],
  modaleFilterIsOpen: false,
  modaleCalendarIsOpen: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_MODAL_FILTERS':
      return {
        ...state,
        modaleFilterIsOpen: !state.modaleFilterIsOpen,
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
        date_list: '',
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
      };

    default:
      return state;
  }
};

export default reducer;
