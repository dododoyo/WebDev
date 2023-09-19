import React, { useState } from 'react';
import {FiChevronRight,FiChevronLeft} from 'react-icons/fi';
import {FaQuoteRight} from 'react-icons/fa';
import { shortList,list,longList } from './data';


const App = () => {
  const [people,setPeople] = useState(longList);
  const [index,setIndex] = useState(0);

  return (

    <main>

      <header className="section">
        <div className="title">
          <h2>
            <span>/</span> Reviews
          </h2>
        </div>
      </header>

      <div className="slider-container">
        
      </div>

    </main>
  );
};
export default App;




