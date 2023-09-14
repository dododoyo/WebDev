import {useState,createContext} from 'react';
import NavLinks from './NavLinks';
export const NavbarContext = createContext();

const Navbar = () => {
    const [user, setUser] = useState({ name: "Logged User" });

    const logout = () => {
      setUser(null);
    }
    const login = () => {
      setUser({name:'Logged User'})
    };
  return (
    <NavbarContext.Provider value={{user,logout,login}}>
    <nav className="navbar">
      <h5>CONTEXT API</h5>
      <NavLinks/>
    </nav>
    </NavbarContext.Provider>
  )
}
export default Navbar