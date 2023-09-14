import { useContext } from "react";
import { NavbarContext } from "./Navbar";

const UserContainer = () => {
  const {user,logout,login} = useContext(NavbarContext);
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello There, {user.name.toUpperCase()}</p>
          <button type="button" className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <>
          <p>Please Login</p>
          <button className='btn' onClick={login}>Login</button>
        </>
      )}
    </div>
  );
};
export default UserContainer;
