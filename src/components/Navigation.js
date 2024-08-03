import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Navigation() {
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <Link className='link' to={`/`}>Home</Link>
                </li>
                <li>
                    <Link className='link' to={`/profiles`}>Profiles List</Link>
                </li>
                <li>
                    <Link className='link' to={`/about`}>About</Link>
                </li>
    
            </ul>
        </nav>
        <Outlet />
    </header>
  )
}
