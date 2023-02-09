import React from "react";


function Memo() {
  const users = [
    {
      id: 1,
      name: "hyun su",
      age: 27,
    },
    {
      id: 2,
      name: "hyun",
      age: 30
    }
  ];

  return (
    <div>
      <div>Memo</div>
      <div>
        {users.map((user) => {
          return <div key={user.id}>{user.name}</div>;
        })}
      </div>
    </div>
  );
}

export default Memo;
