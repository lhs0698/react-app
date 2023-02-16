import React, { useState, useRef } from "react";
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
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "유현수1",
      email: "yohs0698@naver.com",
    },
    {
      id: 2,
      username: "유현수2",
      email: "9888jinnn@naver.com",
    },
    {
      id: 3,
      username: "유현수3",
      email: "yohs0698@alt-a.net",
    },
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]);

    setInputs({
      username,
      email
    });
    nextId.current += 1;
    console.log(users);
  };

  // const onRemove = (id) => {
  //   setUsers(users.filter(user => user.id !== id ))
  //   console.log(users)
  // }

  return (
    <Container>
      <CounterBox>
        <div>
          <Link to="/">
            <Button>메인 페이지 이동</Button>
          </Link>
        </div>
        <input
          type="text"
          placeholder="username"
          onChange={onChange}
          name="username"
        />
        <input
          type="text"
          placeholder="email"
          onChange={onChange}
          name="email"
        />
        <button onClick={onCreate}>추가</button>
        
        
        {
          users.map(user => {
            return (
              <div key={user.id}>
                <div>{user.username} {user.email}</div>
                {/* <button onClick={onRemove}>제거</button> */}
              </div>
            )
          })
        }
      </CounterBox>
    </Container>
  );
}

export default Memo;
