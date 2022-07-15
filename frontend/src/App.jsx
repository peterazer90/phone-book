import React, { useMemo, useReducer } from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';

import { LANGUAGE_CONTEXT, STORE_CONTEXT } from './Hooks/Contexts';
import { useLanguage } from './Hooks';
import Home from './Pages';
import { Reducer, Store } from './Store';
import TRANSLATION from './Translation';

function App() {
  const [state, dispatch] = useReducer(Reducer.StoreHandler, Store);
  const { language, setLanguage } = useLanguage();

  const languageContextValues = useMemo(() => ({
    translation: TRANSLATION[language],
    setLanguage,
    language,
  }), [language]);

  const storeContextValues = useMemo(() => ({
    store: state,
    storeDispatch: dispatch,
  }), [state]);

  return (
    <LANGUAGE_CONTEXT.Provider value={languageContextValues}>
      <STORE_CONTEXT.Provider value={storeContextValues}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </STORE_CONTEXT.Provider>
    </LANGUAGE_CONTEXT.Provider>
  );
}
export default App;
