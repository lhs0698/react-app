import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #e0e0e0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CounterBox = styled.div`
  background-color: white;
  width: 500px;
  height: 300px;
  border: 1px solid;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  .count-number {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .count-eventBtn {
    margin: 20px;
  }
`;

function Counter() {
  const [counter, setCounter] = useState(0);

  const add = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };

  const minus = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <Container>
      <CounterBox>
        <div className="count-number">
          {counter}
          <div className="count-eventBtn">
            <button onClick={add}>+</button>
            <button onClick={minus}>-</button>
          </div>
        </div>
      </CounterBox>
    </Container>
  );
}

export default Counter;
