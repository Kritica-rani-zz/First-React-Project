import React from 'react';
class CartItem extends React.Component {

    // increaseQuantity = () => {

    //     this.setState({
    //         qty: this.state.qty + 1
    //     });

    // }
    // decreseQuantity = () => {
    //     const { qty } = this.state;
    //     if (qty === 0) {
    //         return;
    //     }
    //     this.setState({
    //         qty: this.state.qty - 1
    //     });
    
    render() {
        console.log("prps", this.props)
        const { price, title, qty } = this.props.product;
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs {price}</div>
                    <div style={{ color: '#777' }}>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        {/*Buttons*/}

                        <img alt="increase"
                         className="action-icons"
                          src="https://icons.iconarchive.com/icons/iconsmind/outline/48/Add-icon.png"
                           onClick={() => this.props.OnIncreaseQuantity(this.props.product)} 
                           />

                        <img
                         alt="decrease"
                          className="action-icons" 
                          src="https://icons.iconarchive.com/icons/iconfactory/kidcons/32/Subtract-icon.png" 
                          onClick={() => this.props.OnDecreaseQuantity(this.props.product)}
                           />
                        <img alt="delete" className="action-icons" 
                        src="https://icons.iconarchive.com/icons/icons8/windows-8/48/Editing-Delete-icon.png" 
                        onClick={() => this.props.deleteQuantity(this.props.product.id)}/>
                    </div>

                </div>
            </div>
        );
    }
}
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4

    }
}

export default CartItem;