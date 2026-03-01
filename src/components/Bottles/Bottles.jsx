import { use, useState } from "react";
import Bottle from "../Bottle/Bottle";
import { addToStoredCart } from "../../utilits/localstorage";


const Bottles = ({bottlePromise}) => {

    const bottles = use(bottlePromise);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (bottle) => {
       console.log('bottle added', bottle);
       const newCart = [...cart, bottle];
         setCart(newCart);
         addToStoredCart(bottle.id);
    }

console.log(bottles);
    return (
        <div className="max-w-7xl mx-auto space-y-6">
            <h1>Bottles : {bottles.length}</h1>
            <p>Cart Items: {cart.length}</p>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-5 justify-center items-center ">
                {
                bottles.map(bottle=><Bottle 
                    key={bottle.id} 
                    bottle={bottle}
                    handleAddToCart={handleAddToCart}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;