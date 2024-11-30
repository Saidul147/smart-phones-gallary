import Cart from "../singleCart/Cart"


export default function Carts({items,handleCartRemove}) {
console.log(items,'yyyyyyy')
    return (
     <>
     {items.map((item) => <Cart item={item} handleCartRemove = {handleCartRemove}></Cart>)}
     </>
    )
}