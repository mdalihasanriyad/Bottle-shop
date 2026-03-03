import { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import { addToStoredCart,getStoreCart } from "../../utilits/localstorage";
import Cart from "../Cart/Cart";

const Bottles = ({ bottlePromise }) => {
      const [cart, setCart] = useState([]);
  const bottles = use(bottlePromise);

 useEffect(() => {
        const storedCartIds = getStoreCart();
        // console.log(storedCartIds, bottles);

        const storedCart = [];

        for (const id of storedCartIds) {
            // console.log(id);
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if (cartBottle) {
                storedCart.push(cartBottle);
            }
        }

        console.log('stored cart', storedCart);
        setCart(storedCart);

    }, [bottles])




  const handleAddToCart = (bottle) => {
    console.log("bottle added", bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToStoredCart(bottle.id);
  };

  console.log(bottles);
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <h1>Bottles : {bottles.length}</h1>
      <p>Cart Items: {cart.length}</p>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-5 justify-center items-center ">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
