import React from 'react';
import { Link } from 'react-router-dom';

const DashboardHeader = () => (
    <div className="header-content">
        <div className="filter-container">
            <input className="text-input" placeholder="Search posts"></input>
            <select className="select" name="filter">
                <option value="byTitle">By Title</option>
                <option value="byDate">By Date</option>
            </select>
        </div>
        <div className="button-container">
             <Link className="button" to="/create">Add Post</Link>
        </div>
    </div>
)

export default DashboardHeader;