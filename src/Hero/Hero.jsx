export default function Hero(){

    // const backgroundStyle = {
    //     backgroundImage: "url('/src/assets/axtraImage/1.webp')",
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     height: "100vh",
    //     width: "80%",
    //   };
    
    return(

        <div className="mt-28 bg-white pb-5 pl-16  ">
           
            <div className="header text-black  pr-8 flex ">
                <h2 className="text-3xl"> DIGITAL</h2>
                <div className="divider w-28 bg-black ml-10" style={{height:"1px"}}></div>
                <div className=" w-full justify-items-end"><img className=" " src="/src/assets/axtraImage/6.png" alt="" /></div>
            </div>
            <div className="head_line flex gap-10" >
                <div className=""><h2 className=" text-black  w-2/4 " style={{fontSize:"260px",lineHeight:".82",fontWeight:"600"}}>MARK</h2></div>
                <div className="justify-items-end text-black w-2/4 mr-16 flex">
                    <div className="flex items-center">
                        <video className="w-1/2" src=""></video>
                        <h1 className="w-1/2 ml-10 font-medium">WATCH <br /> VIDEO INTRO</h1>
                    </div>
                </div>
            </div>
            <div className="middle-text flex pr-16">
                <div className="content-center text-lg"><h2>Static and dynamic secure code review can prevent a day before your product is even released. We can integrate with yor dev environment</h2></div>
                <div className="relative z-20"><h2 className="  text-black  ml-10 w-2/4" style={{fontSize:"260px",lineHeight:".82", fontWeight:"600"}}>ETING</h2></div>
            </div>
            <div className="bg-photo flex justify-end" >
            <button className="animate-bounce w-10 h-20 border rounded-full border-black m-auto">
               <img className="m-auto" src="/src/assets/axtraImage/arrow.webp" alt="" />
            </button>
            <div className="bg-img relative z-10 -top-16 justify-items-end" >
                <img  src="/src/assets/axtraImage/1.webp " style={{width:"80%"}}  alt="" />
            </div>
            </div>

        </div>
    )
}