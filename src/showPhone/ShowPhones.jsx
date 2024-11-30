import { useEffect, useState } from "react"
import Phone from "../Phone/Phone"
import Carts from "../purchaseCarts/Carts"

export default function ShowPhones() {

    let [phones, setPhones] = useState([])

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => {
                setPhones(data); // Process your data
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [])


    let [newPrice, updatePrice] = useState('')
    let [storage, setStorage] = useState(0);
    let [newColor, setColor] = useState('')


    let handlePriceChange = (value, id) => {
        updatePrice({
            ...newPrice,
            [id]: value
        })
    }


    const handlePriceShow = (id) => {

        let getPrice = newPrice[id];
        // alert(getPrice)
        if (!getPrice.trim() || isNaN(getPrice) || (getPrice < 20)) {
            alert("Please enter a valid price more than $20.");
            return;
        }
        const updatedPhones = phones.map((phone) => {
            if (phone.id === id) {
                return { ...phone, price: getPrice }
            } else {
                return phone;
            }
        }
        );
        setPhones(updatedPhones);
        updatePrice({
            ...newPrice,
            [id]: ''
        })
    };

    let handleStorageChange = (newStorageValue, id) => {
        const newStorage = phones.map((phone) => {
            if (id === phone.id) {
                return {
                    ...phone,
                    storage: newStorageValue
                }
            }
            return phone;
        })
        setPhones(newStorage)

    }

    let handleColor = (value, id) => {
        setColor({
            ...newColor, // Keep other inputs unchanged
            [id]: value, // Update the color input for the specific product
        });
    }

    let handleColorShow = (id) => {
        let getColor = newColor[id]

        let isString = typeof getColor === "string" && isNaN(getColor)
        if (!isString) {
            alert("Please enter a valid color name.");
            return;
        }

        let changeColor = phones.map(phone => {
            if (phone.id === id) {
                return { ...phone, color: getColor }
            }
            return phone;
        })
        setPhones(changeColor)
        //clear this color input
        setColor({
            ...newColor,
            [id]: "",
        });

    }

    let [items, setItem] = useState([])
    let handleCart = (item) => {
        let newItems = [...items, item]
        setItem(newItems)
    }

    let handleCartRemove = (id) => {
        // console.log(id,'idddd')
        let rem = items.filter((item) => item.id != id)
        setItem(rem)

    }

    return (
        <>
        <div>
        <h2 className="text-center mt-16 text-2xl text-black font-bold">Smart Phones Gallary</h2>
            <div className="grid grid-cols-5 p-3 gap-2 py-10 ">
                <div className="col-span-4 grid md:grid-cols-2 gap-3 ">
                    {phones.map((phone, idx) => <Phone key={idx} phone={phone} newPrice={newPrice} handlePriceChange={handlePriceChange} handlePriceShow={handlePriceShow} handleStorageChange={handleStorageChange} storage={storage} handleColor={handleColor} newColor={newColor} handleColorShow={handleColorShow} handleCart={handleCart}  ></Phone>)}
                   
                </div>
                {/* Purchased item Section  */}
                <div className="bg-stone-900 py-5 px-2 rounded-md">
                    <h2 className="text-3xl text-center text-zinc-50">{items.length} Items Added</h2>
                    <Carts items={items} handleCartRemove={handleCartRemove}></Carts>
                </div>
            </div>
            </div>
        </>
    )
}