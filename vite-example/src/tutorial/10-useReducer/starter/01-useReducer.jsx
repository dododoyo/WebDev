import React from 'react';
import { data } from '../../../data';
import reducer from './reducer';

const defaultState = { people: data, isLoading: false };


const ReducerBasics = () => {

  const [state,dispatch] = React.useReducer(reducer,defaultState);

  const removeItem = (id) => {
    dispatch({type:"REMOVE_ITEM",payload:{id}})
    // setPeople(people.filter((eachPerson) => eachPerson.id !== id));
  };

  const clearItems = () => {
    dispatch({type:'CLEAR_LIST'});
    // setPeople([]);
  }

  const resetItems = () => {
    dispatch({type:'RESET_LIST'});
    // setPeople(data);
  }

  return (
    <div>
      {state.people?.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}

      {state.people.length ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearItems}
        >
          clear items
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetItems}
        >
          reset items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
