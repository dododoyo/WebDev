import {useState} from 'react';

const UserChallenge = () => {

  const [user, setUser] = useState(null);

  const login = () => {
    setUser({name:'John Doe'});
  }

  const logout = () => {
    setUser(null);
  }

  return (
    <>
      {user ? (
        <div>
          <h3>hello there, {user.name}</h3>
          <button type="button" onClick={logout}
          className='btn'>
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <h3>please login</h3>
          <button type="button" onClick={login}
          className='btn '>
            Log In
          </button>
        </div>
      )}
    </>
  );
};

export default UserChallenge;
