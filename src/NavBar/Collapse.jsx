import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";



const CollapsibleMenu = () => {
  const [openSections, setOpenSections] = useState({
    home:false,
    about:false,
    service: false,
    pages: false,
    blog: false,
    contact:false
  });

  console.log(openSections)
  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="bg-black text-white w-full mt-5 text-4xl overflow-scroll max-h-screen ">
      {/* Home Section */}
      <div className="mt-8"> 
      <div className="flex justify-between items-center pl-10  border-opacity-10 border-y-gray-50 border-y">
        <span>HOME</span>
        <button onClick={() => toggleSection("home")} className=" p-5 bg-gray-700 text-4xl">
          {openSections.home ? <FiMinus /> : <FaPlus className=" " /> }
        </button>

      
        </div>
          {/* //submenu */}
          {openSections.home && (
          <div className="bg-transparent px-6 py-2">
            <ul className="ml-8">
            <li className="p-5"><a href="" className="hover:tracking-wide hover:duration-800 text-2xl">Digital Marketing</a></li>
            <li className="p-5"><a href="" className="hover:tracking-wide hover:duration-800 text-2xl">Digital Marketing Dark</a></li>
            <li className="p-5"><a href="" className="hover:tracking-wide hover:duration-800 text-2xl">Design Studio</a></li>
            <li className="p-5"><a href="" className="hover:tracking-wide hover:duration-800 text-2xl">Design Studio Dark</a></li>
            <li className="p-5"><a href="" className="hover:tracking-wide hover:duration-800 text-2xl">Digital Agency</a></li>
            </ul>
          </div>
        )}
      </div>
      {/* about section */}
      <div className="flex justify-between items-center pl-10  p-5  border-opacity-10 border-b-gray-50 border-b">
        <span>ABOUT</span>
        <button onClick={() => toggleSection("about")} className=" p-5">
          
        </button>
      </div>

      {/* Service Section */}
      <div>
      <div className="flex justify-between items-center pl-10  border-opacity-10 border-b-gray-50 border-b">
        <span>SERVICE</span>
        <button onClick={() => toggleSection("service")} className=" p-5 bg-gray-700 text-4xl">
          {openSections.service ? <FiMinus /> : <FaPlus className=" " />}
        </button>
      </div>
      {openSections.service && (
          <div className="bg-transparent px-6 py-2">
            <ul className="ml-8">
            <li className="p-5"><a href="" className="hover:tracking-wide hover:duration-800 text-2xl">Service</a></li>
            <li className="p-5"><a href="" className="hover:tracking-wide hover:duration-800 text-2xl">Service Dark</a></li>
            <li className="p-5"><a href="" className="hover:tracking-wide hover:duration-800 text-2xl">Service v2</a></li>
            </ul>
          </div>
        )}
        </div>

      {/* Pages Section */}
      <div>
      <div className="flex justify-between items-center pl-10  border-opacity-10 border-b-gray-50 border-b">
        <span>PAGES</span>
        <button onClick={() => toggleSection("pages")} className=" p-5 bg-gray-700 text-4xl">
          {openSections.pages ? <FiMinus /> : <FaPlus className=" " />}
        </button>
      </div>
      {openSections.pages && (
          <div className="bg-transparent px-6 py-2">
            <ul className="ml-8">
            <li className="p-5"><a href="" className="hover:tracking-wide hover:duration-800 text-2xl">Pages</a></li>
            <li className="p-5"><a href="" className="hover:tracking-wide hover:duration-800 text-2xl">Pages Dark</a></li>
            <li className="p-5"><a href="" className="hover:tracking-wide hover:duration-800 text-2xl">Pages v2</a></li>
            </ul>
          </div>
        )}
      </div>
      {/* Blog Section */}
      <div>
        <div className="flex justify-between items-center pl-10   border-opacity-10 border-b-gray-50 border-b">
          <span>BLOG</span>
          <button onClick={() => toggleSection("blog")} className=" p-5 bg-gray-700 text-4xl">
            {openSections.blog ? <FiMinus /> : <FaPlus className=" " />}
          </button>
        </div>

        {/* Blog Submenu */}
        {openSections.blog && (
        <div className="bg-transparent px-6 py-2">
            <ul className="ml-8">
            <li className="p-5"><a href="" className="hover:tracking-wide hover:duration-1000 text-2xl">Blog</a></li>
            <li className="p-5"><a href="" className="hover:tracking-wide hover:duration-1000 text-2xl">Blog Dark</a></li>
            <li className="p-5"><a href="" className="hover:tracking-wide hover:duration-1000 text-2xl">Blog v2</a></li>
            <li className="p-5"><a href="" className="hover:tracking-wide hover:duration-1000 text-2xl">Blog v2 dark</a></li>
            </ul>
          </div>
        )}
      </div>
      {/* CONTACT */}
      <div className="flex justify-between items-center pl-10  border-opacity-10 border-b-gray-50 border-b">
        <span>CONTACT</span>
        <button onClick={() => toggleSection("contact")} className=" p-5 bg-gray-700 text-4xl">
          {openSections.contact ? <FiMinus /> : <FaPlus className=" " />}
        </button>
      </div>
    </div>
  );
};

export default CollapsibleMenu;
