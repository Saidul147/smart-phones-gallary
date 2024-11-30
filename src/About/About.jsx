import './aboutCss.css'
import { FiArrowUpRight } from "react-icons/fi";



export default function About() {


    

    let imgDiv = {
        overflow: 'hidden',
        position: 'relative',
        // width: 'calc(100% - 40px)',
        height: '660px',
    }


    let imgStyle = {
        position: 'absolute',
        bottom: 0,
        objectFit: 'cover',
        width: "100% !important",
        height: " 120% !important",
        margin: "auto"

    }

    return (
        <div className="after-effect bg-black pl-10 mt-14">
            <div className="about-container pt-32 pb-28 " >
                <div className="row flex  bg-black">
                    <div className='w-1/2' style={imgDiv}>
                    <img className='imgStyle2' src="images2/2.webp" alt="" style={imgStyle} />
                    </div>
                    <div className='w-1/2 py-10 overflow-hidden  '>
                        <div className='bg-black relative z-10 pt-6 pb-10 text-white'>
                            <h2 className='text-xl mb-4 font-medium'> WHO WE ARE</h2>
                            <h2 className='text-5xl font-semibold'>We are leading <br />
                                digital marketing <br />
                                agency.</h2>
                        </div>
                        <div className="sub-text pl-40 mt-8 font-medium">
                            <h2>
                                We’re a team of strategic mdigital marketing <br />
                                working globally with largest brands, We believe <br />
                                that progress only happens when you refused to <br />
                                play things safe. We combine ideas and <br />
                                behaviors, and insights with design, <br />
                                technological data to produce brand <br />
                                experiences that customers love our services.
                            </h2>
                            <button className='btn-style  mt-10'>
                                <div className='m-auto flex items-center'> Details {<FiArrowUpRight className='font-bold text-2xl'/>
                                } </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}