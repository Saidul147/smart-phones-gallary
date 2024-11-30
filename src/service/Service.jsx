import '../About/aboutCss.css'

export default function Service() {

    return (
        <div className="pl-10 ">
        <div className="service pl-10 ">
            <div className="service-container pt-32 pb-28 border-b  " >
                <div className="row flex justify-center ">
                    <div className=' py-10 overflow-hidden  '>
                        <div className=' relative z-10 pt-6 pb-10 text-black bg-white '>
                            <h2 className='text-xl mb-4 font-medium text-gray-400'> SERVICES</h2>
                            <h2 className='text-5xl font-semibold'>Our marketing <br />
                                Services </h2>
                        </div>
                        <div className="sub-text pl-40 mt-8 font-medium">
                            <h2 className='text-base  text-gray-400 '>
                                Consumers today rely heavily on digital means to <br />
                                research products. We research a brand of bldend <br />
                                engaging with it, according to the meanwhile, 51% <br />
                                of consumers say they use Google to research <br />
                                products before buying.
                            </h2>
                            <button className='btn-style  mt-10'>
                                <div className='m-auto'> Details</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        {/* service list */}
        </div>
        <div className="service-list mt-16 ml-10 text-black border-b ">
            <div className="list-1 grid grid-cols-4 mb-10">
                <div className='col-span-1 font-bold text-3xl'>
                    <h2>SEARCH ENGINE <br /> OPTIMIZATION</h2>
                    </div>
                <div className='col-span-1 font-medium'>
                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy</p>
                    <div className='mt-5'>
                        <li>+ Logo Design</li>
                        <li>+ Advertisement</li>
                        <li>+ Promotion</li>
                    </div>
                </div>
                <div className='col-span-2 justify-items-center pr-10'>
                <button className='btn-style '>
                                <div className='m-auto'> Details</div>
                            </button>
                </div>
            </div>
        </div>
        <div className="service-list mt-16 ml-10 text-black border-b">
            <div className="list-1 grid grid-cols-4 mb-10">
                <div className='col-span-1 font-bold text-3xl'>
                    <h2>EMAIL <br /> MARKETING</h2>
                    </div>
                <div className='col-span-1 font-medium'>
                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy</p>
                    <div className='mt-5'>
                        <li>+ Logo Design</li>
                        <li>+ Advertisement</li>
                        <li>+ Promotion</li>
                    </div>
                </div>
                <div className='col-span-2 justify-items-center pr-10'>
                <button className='btn-style '>
                                <div className='m-auto'> Details</div>
                            </button>
                </div>
            </div>
        </div>
        <div className="service-list mt-16 ml-10 text-black border-b">
            <div className="list-1 grid grid-cols-4 mb-10">
                <div className='col-span-1 font-bold text-3xl'>
                    <h2>CONTENT <br /> MARKETIING</h2>
                    </div>
                <div className='col-span-1 font-medium'>
                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy</p>
                    <div className='mt-5'>
                        <li>+ Logo Design</li>
                        <li>+ Advertisement</li>
                        <li>+ Promotion</li>
                    </div>
                </div>
                <div className='col-span-2 justify-items-center pr-10'>
                <button className='btn-style '>
                                <div className='m-auto'> Details</div>
                            </button>
                </div>
            </div>
        </div>
        <div className="service-list mt-16 ml-10 text-black border-b ">
            <div className="list-1 grid grid-cols-4 mb-10">
                <div className='col-span-1 font-bold text-3xl'>
                    <h2>SOCIAL <br /> MARKETING</h2>
                    </div>
                <div className='col-span-1 font-medium'>
                    <p>We help brands stand out through aweful, elegant visual design. Our design mainly philosophy</p>
                    <div className='mt-5'>
                        <li>+ Logo Design</li>
                        <li>+ Advertisement</li>
                        <li>+ Promotion</li>
                    </div>
                </div>
                <div className='col-span-2 justify-items-center pr-10'>
                <button className='btn-style '>
                                <div className='m-auto'> Details</div>
                            </button>
                </div>
            </div>
        </div>
        </div>
    )
}