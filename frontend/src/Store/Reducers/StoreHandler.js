import { OPERATIONS } from '../../Services';

const STORE_HANDLER = (state, action) => {
  switch (action.type) {
    case OPERATIONS.CREATE: return {
      ...state,
      [action.key]: action.value,
    };
    case OPERATIONS.READ: return state[action.value];
    case OPERATIONS.READ_BY_ID: return {
      ...state,
      [action.key]: state[action.key].find((item) => item.id === action.value),
    };
    case OPERATIONS.UPDATE: return {
      ...state,
      [action.key]: state[action.key].map((item) => (
        item.id === action.value.id ? action.value : item)),
    };
    case OPERATIONS.DELETE: return {
      ...state,
      [action.key]: state[action.key].filter((item) => item.id !== action.value),
    };
    default: return state;
  }
};
export default STORE_HANDLER;
