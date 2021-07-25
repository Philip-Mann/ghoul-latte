import React from 'react';
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
    <>
    <div className="footer fixed-bottom">
        <span>
        <p>Ghoul Latte - 2021 - 

        <Link to="/admin" > Admin</Link>
        </p>

        </span>
    </div>
   
    </> 
    )
}