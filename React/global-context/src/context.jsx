import {createContext,useState,useContext} from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = (props) => {
  const {name,setName} = useState('peter');

  return <GlobalContext.Provider value={{name,setName}}>
    {props.children}
  </GlobalContext.Provider>
}

export default AppContext;