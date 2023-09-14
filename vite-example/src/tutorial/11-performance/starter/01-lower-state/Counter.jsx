import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);

  return <button className='btn' onClick={() => setCount(count + 1)} style={{
    marginBottom: '1rem'
  }}>
        count {count}
      </button>;
}
export default Counter