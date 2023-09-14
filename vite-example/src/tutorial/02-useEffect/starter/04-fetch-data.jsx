import {useState,useEffect} from 'react';

const url = 'https://api.github.com/users';

const FetchData = () => {

  let [users,setUsers] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try{
        const response = await fetch(url);
        const theUsers = await response.json();
        setUsers(theUsers);
        // console.log(theUsers);
      }
      catch (error){
        console.log(error);
      }}
    fetchData();
  }, []);

  return (
    <div className='container'>
      <h2>Github Users</h2>

      <ul className="users">
        {users.map((eachUser) => {
          const {id, login, avatar_url,html_url} = eachUser;
          console.log(eachUser);
          return(<li key={id}>

            <img src={avatar_url} alt={login}></img>
            <div>
              <h5>{login}</h5>
              <a href={html_url} target='_blank'>check profile</a>
            </div>
          </li>)
        })}
      </ul>
    </div>
  )
};
export default FetchData;
