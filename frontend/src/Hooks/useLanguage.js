import { useEffect, useState } from 'react';

import LocalStorage from '../Utils';

function useLanguage() {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const lang = LocalStorage.GET('language');
    if (!lang) LocalStorage.SET('language', language);
    else { setLanguage(lang); }
  }, [language]);

  return { language, setLanguage };
}

export default useLanguage;
