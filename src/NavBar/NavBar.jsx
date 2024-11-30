import { useState } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import CollapsibleMenu from "./Collapse";
import FullScreenMenu from "./fullScreenMenu";
import '../wave-css/wave.css'

// import {FaWindowClose} from "react-icons/fa";

export default function NavBar() {

    let [open, setOpen] = useState(true)
    let [searchOn, searchSet] = useState(true)

    let openHandler = () => {
        setOpen(!open)
    }
    let searchHandler = () => {
        searchSet(!searchOn)
    }
 


    return (
        <>   
            <div className="navbar text-black border-b fixed top-0 left-0 w-full bg-white p-5 z-50">
                <div className="navbar-start xl:w-1/12">
                    <a href="">
                        <img className="" style={{ width: '136px', height: '45px' }} src="public/images2/logo.webp" alt="" />
                    </a>

                </div>
                {/* ------------dropdown menu ---------------- */}
                <div className="navbar-center text-base xl:flex justify-evenly hidden w-10/12">
                    {<ul className="flex justify-evenly w-full ">
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="">HOME</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-black text-white  w-96 p-4 shadow mt-5">
                              <div className="flex text-center">
                              <div>
                                <h2 className="text-2xl my-3">Agency</h2>
                               <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Digital Marketing</a></li>
                                <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Digital Marketing Dark</a></li>
                                <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Design Studio</a></li>
                                <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Design Studio Dark</a></li>
                                <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Digital Agency</a></li>
                               </div>
                               <div>
                                <h2 className="text-2xl  my-3">Agency Dark</h2>
                               <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Digital Marketing</a></li>
                                <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Digital Marketing Dark</a></li>
                                <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Design Studio</a></li>
                                <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Design Studio Dark</a></li>
                                <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Digital Agency</a></li>
                               </div>
                              </div>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0}  role="button" className="">ABOUT</div>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="">PAGES</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-black text-white  w-96 p-4 shadow mt-5">
                              <div className="flex text-center">
                              <div>
                                <h2 className="text-2xl my-3">Portfolio</h2>
                               <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Digital Marketing</a></li>
                                <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Digital Marketing Dark</a></li>
                                <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Design Studio</a></li>
                                <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Design Studio Dark</a></li>
                                <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Digital Agency</a></li>
                               </div>
                               <div>
                                <h2 className="text-2xl  my-3">Others</h2>
                               <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Digital Marketing</a></li>
                                <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Digital Marketing Dark</a></li>
                                <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Design Studio</a></li>
                                <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Design Studio Dark</a></li>
                                <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Digital Agency</a></li>
                               </div>
                              </div>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="">SERVICES</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-black text-white  w-96 p-4 shadow mt-5">
                              <div className="flex text-center">
                              <div>
                               <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Service</a></li>
                                <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Service v2</a></li>
                                <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Service v3</a></li>
                                <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Service v4</a></li>
                                <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Show More Service</a></li>
                               </div>
                              </div>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="">TEAM</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-black text-white  w-96 p-4 shadow mt-5">
                              <div className="flex text-center">
                              <div>
                               <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Team</a></li>
                                <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Team v2</a></li>
                                <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Team v3</a></li>
                                <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Team v4</a></li>
                                <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Show More Team</a></li>
                               </div>
                              </div>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="">BLOG</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-black text-white  w-96 p-4 shadow mt-5">
                              <div className="flex text-center">
                              <div>
                               <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Blog</a></li>
                                <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Blog v2</a></li>
                                <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Blog v3</a></li>
                                <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Blog v4</a></li>
                                <li className=""><a href="" className="hover:tracking-wide hover:duration-800 text-base">Show More Blogs</a></li>
                               </div>
                              </div>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="">CONTACT</div>
                        </div>


                    </ul>}
                </div>
                <div className="navbar-end xl:w-1/12">
                    <button className="btn btn-ghost btn-circle text-2xl" onClick={searchHandler}>
                        {searchOn ? <IoSearchSharp /> : <IoClose className="bg-transparent" />}
                        {searchOn || <div className="form-control absolute mt-32 mr-20 bg-slate-200 p-3 rounded-md duration-1000" >
                            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto bg-white " />
                        </div>}

                    </button>
                    <div className="">
                        <div className="btn btn-ghost btn-circle" onClick={openHandler}>
                            <button  className="text-2xl "> <MdOutlineMenuOpen />
                            </button>
                        </div>
                        {open|| <FullScreenMenu openHandler={openHandler} />}
                    </div>

                </div>
            </div>

            {/* close section */}

        </>
    )
}