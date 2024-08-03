import React from 'react'
import { Link } from 'react-router-dom';

export default function ProfileList() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div>
            <h1>Profile List</h1>
            <ul>
                {numbers.map((num, index) => (
                    <li key={index}>
                        <Link className='link' to={`/profiles/${num}`}>
                            Profile {num}
                        </Link>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}
