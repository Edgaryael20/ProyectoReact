import "./CartItem.css"



function CartItem(props: any){
    let {product, OnIncrement, OnDecrement} = props;
        return(
           <div className="item">
            <img className="image" src = {product.image} alt={product.name} width={200} height={200}/>
            <p className="description">{product.name}</p>
            <div className="quantity-controls">
            <button className="cant" onClick={() => OnDecrement(product.id)}>-</button>
            <span className="cant">{product.quantity}</span>
            <button className="cant" onClick={() => OnIncrement(product.id) }>+</button>
            </div>
            <p className="precio">${(product.Price * product.quantity).toFixed(2)}</p>
           </div>
        );

}

export default CartItem;