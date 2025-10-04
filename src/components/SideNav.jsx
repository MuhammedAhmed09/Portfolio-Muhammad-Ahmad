import { useState } from 'react'
import { AiFillMessage } from 'react-icons/ai';
import { FaBars, FaUser } from 'react-icons/fa';
import { FaBarsStaggered } from 'react-icons/fa6';
import { IoMdClose, IoMdCodeWorking } from 'react-icons/io';
import { MdHome } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const Links = [
    { id: 1, icon: <MdHome />, page: "Home", path: "/" },
    { id: 2, icon: <FaUser />, page: "About Me", path: "/about" },
    { id: 3, icon: <FaBarsStaggered />, page: "C.V", path: "/my-cv" },
    { id: 4, icon: <IoMdCodeWorking />, page: "Projects", path: "/projects" },
    { id: 5, icon: <AiFillMessage />, page: "Contact Me", path: "/contact" },
  ];

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-[#21252998] z-[998]" onClick={() => setIsOpen(false)} />
      )}

      <div onClick={() => setIsOpen(false)} className={`${isOpen ? 'flex' : 'hidden lg:flex'} w-full lg:w-52 h-screen bg-[#212529] text-white px-[2%] fixed z-[999] items-center justify-center`}>
        <ul className="flex flex-col gap-4">
          {Links.map((link) => (
            <li key={link.id}>
              <Link
                to={link.path}
                className={link.path === location.pathname ? "text-[#80ed99]" : ""}
              >
                <div className='flex items-center gap-4 mx-1 font-bold'>
                  <p>{link.icon}</p>
                  <p>{link.page}</p>
                </div>
              </Link>
              <hr className='text-[#343a40]' />
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:hidden fixed p-2 z-[999] text-[#80ed99]/70 text-xl">
        <button className='cursor-pointer bg-gray-100/10 rounded-full p-2'>
          {!isOpen ? (
            <FaBars onClick={() => setIsOpen(true)} />
          ) : (
            <IoMdClose onClick={() => setIsOpen(false)} />
          )}
        </button>
      </div>
    </>
  );
};

export default SideNav;
