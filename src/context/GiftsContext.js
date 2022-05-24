import React, { useState } from 'react';

const Context = React.createContext({});

export function GiftsContextProvider({ children }) {
  const [gifts, setGifts] = useState([]);
  return (
    <Context.Provider value={{ gifts, setGifts }}>{children}</Context.Provider>
  );
}
export default Context;
