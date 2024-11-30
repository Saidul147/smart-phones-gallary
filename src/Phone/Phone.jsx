import { useEffect, useState } from "react"


export default function Phone({ phone, handlePriceChange, handlePriceShow, newPrice, handleStorageChange, storage,handleColor,newColor,handleColorShow,handleCart }) {

    console.log(storage)

    return (
        <div key={phone.id}>
            <div className="card bg-slate-900 w-100 shadow-xl p-5 rounded-xl">
                <figure>
                    <img className="rounded-md" style={{height:'500px'}}
                        src={phone.image}
                        alt={phone.name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {phone.name}
                        <div className="badge badge-secondary">{phone.brand}</div>
                    </h2>
                    <div className="my-2 ">
                        <div className="">
                            <div className="flex border-b pb-3 hover:border-green-600">
                                <h2 className="w-1/2 ">Price:</h2>
                                <span className="badge badge-primary text-2xl p-4 w-1/2">${phone.price}</span>
                            </div>                           

                            <div className="flex border-b pb-3 mt-3 hover:border-green-600">
                            <h2 className=" w-1/2 ">Storage: </h2>
                            <span className="badge badge-primary text-md p-4 w-1/2">{storage ? storage : phone.storage}</span>
                            </div>                           

                            <div className="flex border-b pb-3 mt-3 hover:border-green-600" >
                            <h2 className="  w-1/2 ">Color:</h2>
                            <span className="badge badge-primary text-md p-4 w-1/2 " >{ phone.color}</span>
                            </div>
                          
                        </div>
                        <div className="flex mt-3">
                            <input
                                type="text"
                                placeholder="update price"
                                className="input input-bordered input-accent w-full "
                                value={newPrice[phone.id] || ''}
                                onChange={(e)=>handlePriceChange(e.target.value,phone.id)} />
                            <button className="btn" onClick={() => handlePriceShow(phone.id)} >Update Price</button>
                        </div>
                    </div>
                    <div>

                        <div className="flex ">

                            <select className="select select-secondary w-full "
                                onChange={(e) => handleStorageChange(e.target.value, phone.id)}  >
                                <option disabled selected>Pick the best Option</option>
                                <option value="64GB">64 GB</option>
                                <option value="128GB">128 GB</option>
                                <option value="256GB">256 GB</option>
                            </select>
                        </div>
                    </div>
                    <div className="">

                        <div className="flex my-3">
                            <input
                                type="text"
                                placeholder="Add Colors"
                                className="input input-bordered input-accent w-full " 
                                value={newColor[phone.id] || ""}
                                onChange={(e)=>handleColor(e.target.value,phone.id)}
                                />
                            <button className="btn" onClick={() => handleColorShow(phone.id)} >Add Color</button>
                        </div>
                    </div>
                    <div className="">
                        <button className="btn btn-outline btn-success btn-block" onClick={()=>handleCart(phone)}>Add To the Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}