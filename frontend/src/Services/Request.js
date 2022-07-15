import METHODS from './Methods';
import Operations from './Operations';

const REQUEST = (PATH, OPERATION, BODY, PARAMS, ID) => {
  const url = `${PATH}${PARAMS ? `?${PARAMS}` : '/'}`;

  switch (OPERATION) {
    case Operations.CREATE: return METHODS.POST(url, BODY);
    case Operations.UPDATE: return METHODS.PUT(url, BODY);
    case Operations.DELETE: return METHODS.DELETE(url + ID);
    case Operations.READ_BY_ID: return METHODS.GET(url + ID, BODY);
    default: return METHODS.GET(url);
  }
};

export default REQUEST;
