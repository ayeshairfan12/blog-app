"use client"

import Sidebar from '@/components/Sidebar';
import React, { useState, useEffect } from 'react';


function StatCard({ title, value, newProducts }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{value}</p>
      <p className="text-gray-500 italic text-sm">
        <span className="text-green-500">+{newProducts}</span> Newly Added Products
      </p>
    </div>
  );
}

const Page = () => {
  const [stats, setStats] = useState({
    users: 0,
    blogs: 0,
    courses: 0,
    enquiries: 0,
    newProducts: 0 // Initial value for newly added products
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats => ({
        users: prevStats.users + 1,
        blogs: prevStats.blogs + 1,
        courses: prevStats.courses + 1,
        enquiries: prevStats.enquiries + 1,
        newProducts: prevStats.newProducts + 1 
      }));
    }, 6000000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=' flex'>
    <Sidebar/>
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <StatCard title="Users" value={stats.users} newProducts={stats.newProducts} />
        </div>
        <div>
          <StatCard title="Blogs" value={stats.blogs} newProducts={stats.newProducts} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <div>
          <StatCard title="Courses" value={stats.courses} newProducts={stats.newProducts} />
        </div>
        <div>
          <StatCard title="Enquiries" value={stats.enquiries} newProducts={stats.newProducts} />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Page;
