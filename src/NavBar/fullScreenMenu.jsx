import { IoSearchSharp } from "react-icons/io5";
import CollapsibleMenu from "./Collapse";
import { IoClose } from "react-icons/io5";


export default function FullScreenMenu({openHandler}){

    return(
        // <div className="grid grid-cols-12 border mt-10 bg-black gap-0  absolute">
        <div className="fixed inset-0 bg-black  grid grid-cols-12 items-center justify-center text-white z-50 overflow-y-auto">
        {/* logo side */}
        <div className="col-span-2 hidden md:block">
            <div className="logo border-opacity-10 border-b-gray-50 border-b mt-5 ">
                <a href="">   <img className="mb-5 m-auto" src="/src/assets/axtraImage/logo 2.webp" alt="" /></a>

            </div>
            <div className="follow_us p-10 text-white border-opacity-10 border-b-gray-50 border-b">
                <h2 className="mb-5 text-2xl font-semibold ">Follow Us</h2>
                <ul className="text-xl font-medium ">
                    <li><a href="" className="hover:text-[#999] hover:duration-1000">Dribble</a></li>
                    <li><a href="" className="hover:text-[#999] hover:duration-1000">Behance</a></li>
                    <li><a href="" className="hover:text-[#999] hover:duration-1000">Instagram</a></li>
                    <li><a href="" className="hover:text-[#999] hover:duration-1000">Facebook</a></li>
                    <li><a href="" className="hover:text-[#999] hover:duration-1000">Twitter</a></li>
                    <li><a href="" className="hover:text-[#999] hover:duration-1000">Youtube</a></li>
                </ul>
            </div>
            <div className="footerSection p-10 pl-5 text-white">
                <ul className="text-xl font-medium ">
                    <li><a href="" className="hover:text-[#999] hover:duration-1000">About</a></li>
                    <li><a href="" className="hover:text-[#999] hover:duration-1000">Contact</a></li>
                    <li><a href="" className="hover:text-[#999] hover:duration-1000">Carier</a></li>
                    <li><a href="" className="hover:text-[#999] hover:duration-1000">Blog</a></li>
                </ul>
            </div>

        </div>
        {/* midle side */}
        <div className="col-span-full md:col-span-7 border-opacity-10 border-x-gray-50 border-x ">
            < CollapsibleMenu />
        </div>
        {/* close site */}
        <div className="col-span-3 hidden md:block px-5 pt-5">
            <div className="btn btn-ghost btn-circle flex justify-self-end ">
                <button onClick={openHandler} > <IoClose className="text-4xl " />
                </button>
            </div>

            <div>
                <label className="input input-bordered flex items-center gap-2 bg-black p-8 rounded-full mt-5">
                    <input type="text" className="grow bg-black " placeholder="Search" />
                     <button className=""><IoSearchSharp className="text-2xl"/></button>
                </label>
            </div>
            <div className ="contact">
            <h2 className="text-2xl text-white mt-10">Get in touch</h2>
                    <ul className="text-white mt-5">
                        <li><a href="" className="hover:text-gray-600 hover:duration-1000">+(02) - 094 980 547</a></li>
                        <li className="my-2"><a className="hover:text-gray-600 hover:duration-1000" href="">info@extradesign.com</a></li>
                        <li>230 Norman Street New York,</li>
                        <li>QC (USA) H8R 1A1</li>
                    </ul>
                    <img className="ml-28" src="/src/assets/axtraImage/offCanvas2.webp" alt="" />
                    <img className="m-0 p-0" src="/src/assets/axtraImage/offCanvas.webp" alt="" />
            </div>
            
        </div>
    </div>
    )
}