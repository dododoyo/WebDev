import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {useState} from  'react';

const Question = ({ eachQuestion }) => {
  const [show,setShow] = useState(false);
  const { id, title, info } = eachQuestion;
  return (
    <div className="question">
      <header>
        <h5>{title}</h5>
        <button
          onClick={() => {
            setShow(!show);
          }}
          className="question-btn"
        >
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>

      {show && <p>{info}</p>}
    </div>
  );
};
export default Question;
