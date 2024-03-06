
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <nav className="flex flex-col">
        <a href="./dashboeard" className="p-4 hover:bg-gray-700">Dashboard</a>
        <a href="#" className="p-4 hover:bg-gray-700">Users</a>
        <a href="#" className="p-4 hover:bg-gray-700">Employees</a>
        <a href="#" className="p-4 hover:bg-gray-700">Attendance </a>
        <a href="#" className="p-4 hover:bg-gray-700">Courses</a>
        <a href="#" className="p-4 hover:bg-gray-700">Blogs</a>
        <a href="#" className="p-4 hover:bg-gray-700">inquiry</a>
        <a href="#" className="p-4 hover:bg-gray-700">Certificate</a>
        <a href="#" className="p-4 hover:bg-gray-700">Program</a>
      </nav>
    </aside>
  );
}

export default Sidebar;
