
import { Link } from 'react-router-dom';
import { IoCartSharp } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <nav className="flex justify-center p-4 bg-gray-500">
        <ul className="flex space-x-4 text-black">
          <li className="cursor-pointer"><Link to='/home'>Home</Link></li>
          <li className="cursor-pointer"><Link to='/products'>Products</Link></li>
          <li className="cursor-pointer"><IoCartSharp /></li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
