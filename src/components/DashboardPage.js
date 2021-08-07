import React from 'react';
import BlogDetails from './BlogDetails';
import DashboardHeader from './DashboardHeader';
import PostList from './PostList';

//private page

const DashboardPage = () => (
    <div>
       <BlogDetails /> 
       <DashboardHeader />
       <PostList />
    </div>
);

export default DashboardPage;
