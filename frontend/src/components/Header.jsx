import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="flex justify-between p-4 bg-gray-500">
        <ul className="flex space-x-4 text-white">
          <li className="cursor-pointer"><Link to='/home'>Home</Link></li>
          <li className="cursor-pointer"><Link to='/products'>Products</Link></li>
          <li className="cursor-pointer">Cart</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
