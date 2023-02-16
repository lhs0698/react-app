import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {

    const [users, setUsers] = useState(null);
    const [loading, setLoding] = useState(false);
    const [error, setError] = useState(null);


    const fetchUsers = async () => {
        try {
            // 요청이 시작 할 때에는 error와 users를 초기화하고
            setError(null);
            setUsers(null);
            setLoding(true);
            // loading 상태를 true로 바꾼다
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users/'
                // 'https://jsonplaceholder.typicode.com/users/showmeerror
            );
            // console.log(response)
            setUsers(response.data) // 데이터는 response.data에 들어가 있다
        } catch (e) {
            setError(e)
        }
        setLoding(false);
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    if (loading) return <div>...로딩중</div>
    if (error) return <div>에러가 발생했습니다</div>
    if (!users) return null;


    return (
        <ul>
            {
                users.map(user => (
                    <li key={user.id}>
                        {user.username} ({user.address.city})
                    </li>
                ))
            }
            <button onClick={fetchUsers}>다시</button>
        </ul>
    )
}

export default Users;
