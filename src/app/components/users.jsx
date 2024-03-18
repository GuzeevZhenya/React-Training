import React, { useState } from "react";
import User from "./user";
import { Pagination } from "./Pagination";
const Users = ({ users, ...rest }) => {
    const count = users.length
    const pageSize = 6
    const [currentPage, setCurrentPage] = useState(1);
    const haandlerChange = (page) => {

        setCurrentPage(page)
    }

    const paginate = (users, currentPage, pageSize) => {
        const startIndex = (currentPage - 1) * pageSize
        return [...users].splice(startIndex, pageSize)
    }


    const pageData = paginate(users, currentPage, pageSize);
    return (
        <>
            {users.length > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Провфессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {pageData.map((user) => (
                            <User key={user._id} {...rest} {...user} />
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination currentPage={currentPage} onPageChange={haandlerChange} pageSize={pageSize} itemCount={count} />
        </>
    );
};

export default Users;
