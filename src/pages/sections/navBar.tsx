import { GoLocation } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="fixed w-full top-0 left-0 flex justify-between space-between px-3 py-1 bg-primary shadow-xl z-10">
        <Link to="/" className="flex items-center">
          <img src="src/assets/logo.png" alt="" width={"120px"} />
        </Link>
        <div className="flex bg-white w-3/6 rounded overflow-hidden">
          <button className="flex items-center focus:outline-none whitespace-nowrap px-2">
            <GoLocation className="text-xl" />
            <span className="px-2">Локација</span>
          </button>
          <button className="flex items-center focus:outline-none whitespace-nowrap px-2">
            <CiSearch className="text-xl" />
            <span className="px-2">Тип</span>
          </button>
          <input
            type="text"
            placeholder={`Внеси текст...`}
            className="
            flex text-gray-800 text-lg w-full
            focus:outline-none focus:ring-0
            placeholder:text-gray-400
          "
          />
          <button className="flex items-center focus:outline-none whitespace-nowrap bg-orange-btn px-4 text-2xl">
            <CiSearch />
          </button>
        </div>
        <div>
          <Link to={"/about"}>
            <button
              className={`text-white transition-transform duration-400 ease-in-out hover:scale-104 focus:outline-none font-medium text-sm px-5 py-2.5 text-center dark:focus:ring-gray-500 me-2`}
            >
              Како Функционира?
            </button>
          </Link>
          <Link to={"/login"}>
            <button
              className={`text-orange-btn transition-transform duration-400 ease-in-out hover:scale-104 focus:outline-none font-medium text-sm px-5 py-2.5 text-center dark:focus:ring-gray-500 me-2`}
            >
              Понуди Услуга
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
