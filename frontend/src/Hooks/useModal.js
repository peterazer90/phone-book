import { useEffect, useState } from 'react';

function useModal() {
  const [active, setActive] = useState(false);
  /// ////////////////////////////////////////////////////////////////////
  useEffect(() => {
    let body = document.querySelector('body');
    body = body.classList;
    if (active) body.add('overflow-hidden');
    else body.remove('overflow-hidden');
  }, [active]);
  /// ////////////////////////////////////////////////////////////////////
  return {
    active, setActive,
  };
}

export default useModal;
