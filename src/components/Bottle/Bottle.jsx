const Bottle =({bottle,handleAddToCart})=>{
 const {name,img,price,stock}=bottle;
    return (
        <div className="max-w-7xl mx-auto space-y-2 border-2 border-black text-center p-5">
            <img className="h-72 w-72" src={img} alt={name} />
            <h3>Name: {name}</h3>
            <p>Price:$ {price}</p>
            <p>Stock: {stock} remaining</p>
            <button onClick={()=>handleAddToCart(bottle)} className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Buy Now</button>
        </div>
    )
}
export default Bottle;
