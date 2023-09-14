import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarsons';

const MultipleReturnsFetchData = () => {

  const [user,setUser] = useState(null);
  const [isLoading,setIsLoading] = useState(true);
  const [isError,setIsError] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try{
        const response = await fetch(url);
        const theUser = await response.json();

        if (response.ok){
        setUser(theUser);}
        else{
          setIsError(true);
          setIsLoading(false);
          return;
        }
      }
      catch(error){
        console.log(error);
        setIsError(true);
      }
      setIsLoading(false);
    }
    fetchUser();
  },[])

  if (isLoading){
    return <h2>Loading . . .</h2>
  }

  if (isError){
    return <h2>Something went wrong . . .</h2>
  }
  const {avatar_url,company,bio,name} = user;
  return (
    <div className="">
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={avatar_url} alt={name}
      ></img>
      <h3>{name}</h3>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
