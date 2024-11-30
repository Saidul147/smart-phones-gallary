export default function Cart({ item ,handleCartRemove}) {
    let {image,name,price,id,color,storage} = item
    console.log(item, 'from cart')
    return (
        <div className="bg-stone-950 rounded-md">
            <div className="card-side shadow-xl mt-5 ">
                <figure>
                    <img className="h-2/4"
                        src={image}
                        alt="Movie" />
                </figure>
                <div className="">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                    
                </div>
            </div>
            <div className="">
                <h2>Color: {color}</h2>
                <h2>storage: {storage}</h2>
            </div>
            <div className="flex justify-end">
                        <button onClick={() => handleCartRemove(id)} className="btn btn-error border-t-pink-800 ">Remove</button>
                        </div>
        </div>
    )
}
