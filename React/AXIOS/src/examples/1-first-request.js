import { useEffect } from 'react';
import axios from 'axios';
// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products';

const fetchData = async () => {
  try {
    const response = await axios.get(url);
    console.log(response);
  } catch (error) {
    console.log(error.response);
  }
}

const FirstRequest = () => {
  useEffect(() => {
    console.log('first axios request');
    fetchData()
  }, []);

  return <h2 className='text-center'>first request</h2>;
};
export default FirstRequest;
