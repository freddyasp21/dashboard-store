import React from "react";
import {
  RiHome6Line,
  RiRefund2Line,
  RiPieChart2Line,
  RiMailLine,
  RiNotification2Line,
  RiSettings3Line,
  RiLogoutCircleLine,
} from "react-icons/ri";

function Sidebar(props) {
  const { showMenu } = props;

  return (
    <div
      className={`bg-[#1F1F2B] fixed top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${
        showMenu ? "left-0" : "-left-full"
      }`}
    >
      <div>
        <ul className="pl-4">
          <li>
            <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">
              Logo
            </h1>
          </li>

          <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
            <a
              href="#"
              className="bg-[#ec7c6a] p-4 flex justify-center rounded-lg text-white"
            >
              <RiHome6Line className="text-2xl" />
            </a>
          </li>

          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] group-hover:text-white p-4 flex justify-center rounded-lg text-[#ec7c6a] transition-colors"
            >
              <RiRefund2Line className="text-2xl" />
            </a>
          </li>

          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] group-hover:text-white p-4 flex justify-center rounded-lg text-[#ec7c6a] transition-colors"
            >
              <RiPieChart2Line className="text-2xl" />
            </a>
          </li>

          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] group-hover:text-white p-4 flex justify-center rounded-lg text-[#ec7c6a] transition-colors"
            >
              <RiMailLine className="text-2xl" />
            </a>
          </li>

          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] group-hover:text-white p-4 flex justify-center rounded-lg text-[#ec7c6a] transition-colors"
            >
              <RiNotification2Line className="text-2xl" />
            </a>
          </li>

          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] group-hover:text-white p-4 flex justify-center rounded-lg text-[#ec7c6a] transition-colors"
            >
              <RiSettings3Line className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
      <div className="">
        <ul className="pl-4">
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] group-hover:text-white p-4 flex justify-center rounded-lg text-[#ec7c6a] transition-colors"
            >
              <RiLogoutCircleLine className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
