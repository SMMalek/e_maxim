import React from 'react'

const Users = () => {

    return (
        <div>
            <ul>
                {["Alex", "Nefa", "Mohesen", "Samu", "Luci"].map((user, idx) => {
                    return <li key={idx}> {user}</li>
                })}
            </ul>
        </div>
    );
}

export default Users;
