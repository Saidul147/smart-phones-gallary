import Cart from "../singleCart/Cart"


export default function Carts({items,handleCartRemove}) {

    return (
     <>
     {items.map((item) => <Cart item={item} handleCartRemove = {handleCartRemove}></Cart>)}
     </>
    )
}