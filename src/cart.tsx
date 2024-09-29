
import {useState} from "react";
import CartItem from "./CartItem";
import "./Cart.css"
function Cart(){

 let initialCart = [
 {
    id:  1,
    name: 'Semillas de girasol',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsIJKjdKhmPMKXEQ8OPaoc3rsNUBd0sLkCbQ&s',
    Price: 10.0,
    quantity: 0,

 },

{
    id:  2,
    name: 'Almendras',
    image: 'https://elpoderdelconsumidor.org/wp-content/uploads/2021/04/almendras-b.jpg',
    Price: 20.0,
    quantity: 0,
},
{
    id:  3,
    name: 'semillas de cafe',
    image: 'https://img.freepik.com/fotos-premium/granos-cafe-taza_9083-10306.jpg?w=360',
    Price: 30.0,
    quantity: 0,
},

{
    id:  4,
    name: 'Nueces',
    image: 'https://img.freepik.com/fotos-premium/monton-nueces-sobre-fondo-blanco_664644-2654.jpg',
    Price: 50.0,
    quantity: 0,
},
];
const [cart, setCart] = useState(initialCart);

const handleIncrement = (productId: any) => {
    setCart((prevCart) =>
    prevCart.map((product) => 
    product.id === productId
    ? {...product,quantity:product.quantity + 1}
    :product
    
    )
    
    );


};


const handleDecrement = (productId: any) => {
    setCart((prevCart) =>
    prevCart.map((product) => 
    product.id === productId && product.quantity>0
    ? {...product,quantity:product.quantity - 1}
    :product
    
    )
    
    );


};


const handlePay = () => {
    alert(`Total a pagar: $${totalPrice.toFixed(2)}`);
};

const totalPrice = cart.reduce(

        (total, product) => total + product.Price * product.quantity, 0

);


return (<div className="cart">
    <h3 className="cart-title">Carrito de compras</h3>
    <div className="cart-container">
    <section className="cart-items">
    {cart.map((product) => (
        <CartItem 
        key = {product.id}
        product = {product}
        OnIncrement = {handleIncrement}
        OnDecrement = {handleDecrement} 
        
        />
    ))}
    </section>
    <aside className="cart-summary">
    <h4>Total</h4>
    <p>${totalPrice.toFixed(2)}</p>
    <button className="pay-button" onClick={handlePay}>Pagar</button>
    </aside>
    </div>

</div>
);

}

export default Cart