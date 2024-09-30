
import { createContext, useState } from "react";

const CardContext = createContext();

export const CartContextContainer = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total,setTotal]=useState(0)

    const handleAddCart = (CartImage, CartTitle, CartDescription,price) => {
        
    const itemExists = cart.find((item) => item.image === CartImage);

    if (!itemExists) {
        setCart([...cart, { image: CartImage, productName: CartTitle, description: CartDescription, price }]);
        setTotal(total + price);
    }
}
    
     const handleRemoveCart = (image,price) => {
            setCart(cart.filter(item => item.image !== image));
            setTotal(total-price)
        }
    
    
    return (
        <CardContext.Provider value={{ cart, handleAddCart , handleRemoveCart,total}}>
            {children}
        </CardContext.Provider>
    );
};

export default CardContext;
