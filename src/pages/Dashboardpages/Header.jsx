import React from "react";
import { FaUserCircle, FaChalkboardTeacher } from "react-icons/fa";
import { useRole } from "../../context/RoleContext"; // Import RoleContext

const Header = ({ title }) => {
  const { role } = useRole(); // Get role from context

  return (
    <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-gray-100">{title}</h1>
      <div className="text-teal-600 text-3xl">
        {role === "teacher" ? <FaChalkboardTeacher /> : <FaUserCircle />}
      </div>
    </header>
  );
};

export default Header;
