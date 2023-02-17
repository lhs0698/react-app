import React, { useState,} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: #e0e0f0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CounterBox = styled.div`
  background-color: white;
  width: 500px;
  height: 500px;
  border: 1px solid;
  border-radius: 10px;
`;

const Button = styled.button`
  background-color: white;
  margin: 3px;
  border: 0px;
`;

function Memo() {

  const [memos, setMemos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  // const [update, setUpdate] = useState(null);


  // input 상태 
  const onChange = (e) => {
    setInputValue(e.target.value)
  }

  // 추가하기
  const onCreate = () => {
    setMemos([...memos, inputValue]);
    setInputValue('')
  }
  
  // update 하기 위한 onCreate 추가 
  // const onCreate = () => {
  //   if (update === null) {
  //     setMemos([...memos, inputValue])
  //   } else {
  //     const newMemos = [...memos];
  //     newMemos[update] = inputValue;
  //     setMemos(newMemos);
  //     setUpdate(null)
  //   }
  //   setInputValue('');
  // }
  
  // 삭제
  const onRemove = (index) => {
    const newmemos = [...memos];
    newmemos.splice(index,1);
    setMemos(newmemos);
  }
  
  // //수정하기
  // const onUpdate = (index) => {
  //   setUpdate(index);
  //   setInputValue(memos[index])
  // }

  console.log(memos)

  return (
    <Container>
      <CounterBox>
        <div>
          <Link to="/">
            <Button>메인 페이지 이동</Button>
          </Link>
        </div>
        <div>todolist</div>
        
        <ul>
          {
            memos.map((memo, index) => (
              <li key={index}>
                {memo} <button onClick={onRemove}>제거</button>
              </li>
            ))
          }
        </ul>
        <input type="text" value={inputValue} onChange={onChange} />
        <button onClick={onCreate}>추가</button>

        {/* <ul>
          {
            memos.map((memo, index) => (
              <li key={index}>
                {update === index ? (
                  <>
                    <input type="text" value={inputValue} onChange={onChange} />
                    <button onClick={onCreate}>추가</button>
                    <button onClick={setUpdate(null)}>cancel</button>
                  </>
                ) : (
                  <>
                    {memo}
                    <button onClick={onUpdate}>update</button>
                    <button onClick={onRemove}>Remove</button>
                  </>
                )}
              </li>
            ))
          }
        </ul>
        <input type="text" value={inputValue} onChange={onChange} />
        <button onClick={onCreate}>{update === null ? '추가' : '수정'}</button> */}
        
      </CounterBox>
    </Container>
  );
}

export default Memo;
