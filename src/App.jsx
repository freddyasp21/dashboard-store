import { useState } from "react";
import {
  RiMenuFill,
  RiUser3Line,
  RiAddFill,
  RiPieChart2Line,
  RiCloseFill,
  RiSearchLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import Sidebar from "./components/shared/Sidebar";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      {/* Menu movil */}
      <nav className="bg-[#1F1F2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="text-white p-2">
          <RiUser3Line />
        </button>
        <button className="text-white p-2">
          <RiAddFill />
        </button>
        <button className="text-white p-2">
          <RiPieChart2Line />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseFill /> : <RiMenuFill />}
        </button>
      </nav>

      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20">
        <div className="lg:col-span-6 md:p-8">
          {/* header */}
          <header className="">
            {/* title and search*/}
            <div className="flex flex-col gap-4 mb-6 md:flex-row md:justify-between md:items-center">
              <div>
                <h1 className="text-2xl text-white font-bold">Jeager Resto</h1>
                <p className="text-gray-500">29/3/2023</p>
              </div>
              <form>
                <div className="w-full relative">
                  <RiSearchLine className="absolute left-2 top-1/2 -translate-y-1/2 text-white font-medium" />
                  <input
                    type="text"
                    className="bg-[#1F1F2B] w-full py-2 pl-10 rounded-lg text-white outline-none font-medium"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
            {/* tabs */}
            <nav className="text-white flex items-center justify-between font-semibold mb-6 lg:justify-start md:gap-8">
              <a
                href="#"
                className="pr-4 py-2 relative before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:-bottom-[1px] before:rounded-full text-[#ec7c6a]"
              >
                Hot dishes
              </a>
              <a href="#" className="pr-4 py-2">
                Cold dishes
              </a>
              <a href="#" className="pr-4 py-2">
                Soup
              </a>
              <a href="#" className="pr-4 py-2">
                Grill
              </a>
            </nav>
          </header>
          {/* title content */}
          <div className="flex items-center justify-between text-white mb-20">
            <h2 className="text-xl text-white font-bold">Choose Dishes</h2>
            <button className="bg-[#1F1F2B] flex items-center gap-4 py-2 px-4 rounded-lg">
              <RiArrowDownSLine />
              Dine in
            </button>
          </div>
          {/* content */}
          <div className="p-8 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {/* card */}
            <div className="bg-[#1F1F2B] p-8 rounded-xl flex flex-col items-center gap-2 text-gray-100 text-center">
              <img
                src="/src/assets/img/comida.png"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nopdle</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>

            {/* card */}
            <div className="bg-[#1F1F2B] p-8 rounded-xl flex flex-col items-center gap-2 text-gray-100 text-center">
              <img
                src="/src/assets/img/dish.png"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nopdle</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
            {/* card */}
            <div className="bg-[#1F1F2B] p-8 rounded-xl flex flex-col items-center gap-2 text-gray-100 text-center">
              <img
                src="/src/assets/img/comida.png"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nopdle</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>

            {/* card */}
            <div className="bg-[#1F1F2B] p-8 rounded-xl flex flex-col items-center gap-2 text-gray-100 text-center">
              <img
                src="/src/assets/img/dish.png"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nopdle</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
            {/* card */}
            <div className="bg-[#1F1F2B] p-8 rounded-xl flex flex-col items-center gap-2 text-gray-100 text-center">
              <img
                src="/src/assets/img/comida.png"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nopdle</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>

            {/* card */}
            <div className="bg-[#1F1F2B] p-8 rounded-xl flex flex-col items-center gap-2 text-gray-100 text-center">
              <img
                src="/src/assets/img/dish.png"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nopdle</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 fixed lg:static right-0 bg-[#1f1d2b] top-0 w-full h-full">
          {/* order */}
          <div className="relative pt-16 text-gray-300 p-8">
            <RiCloseFill className="absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl"/>
            <h1 className="text-xl my-4">Order #145566</h1>
            <div className="">
              <button className="bg-[#ec7c6a]">Dine in</button>
              <button className=""></button>
              <button className=""></button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
