import React, { useMemo, useState } from 'react';

const UseMemo = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(10);

  // heavy calculation
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <>
      <button onClick={() => setCount1(count1 + 1)}>
        count1 - {count1}
      </button>

      <button onClick={() => setCount2(count2 + 1)}>
        count2 - {count2}
      </button>

      <h2>{isEven ? "Even" : "Odd"}</h2>
    </>
  );
};

export default UseMemo;
