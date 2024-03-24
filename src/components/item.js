import react from 'react';
import itemImg from './Images/itemImage.png'
import './style.css'

const ItemBox= ()=>{
    return(
        <div className='item'>
            <img src={itemImg} alt="Item Photo" style={{ width: '200px', height: '150px' }}  />
            <p >PlayStation 5</p>
            <p >Price: 50,000</p>
            <button className='item-button-buy'>Buy Now</button>
            <button>Add to cart</button>
        </div>
    );
}

export default ItemBox;