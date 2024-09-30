import image1 from "../assets/homeimage/add-to-cart-3046.png";
import CardContext from "../store/CartContext";
import { useContext } from "react";
import { LuIndianRupee } from "react-icons/lu";

function Card({ item }) {
  const { CartImage, CartTitle, CartDescription, price } = item;
  const { handleAddCart } = useContext(CardContext);

  return (
    <div className="rounded-2xl shadow-lg shadow-slate-400  ">
      <img className="p-5 rounded-xl " src={CartImage} alt="image" />

      <div className="pl-5">
        <div>
          <p className="text-[#088178]">{CartTitle}</p>
          <h3 className="font-medium text-lg">{CartDescription}</h3>
        </div>
        <div className="flex justify-between text-lg">
          <span className="text-slate-700 font-semibold flex items-center">
            <LuIndianRupee />
            {price}
          </span>

          <button
            className=" w-20 flex items-center justify-center rounded-md shadow-md shadow-slate-400 mr-5 mb-3  bg-slate-100 hover:bg-green-500 " 
            onClick={() =>
              handleAddCart(CartImage, CartTitle, CartDescription, price)
            }
          >
            <img className="mx-2 my-1 w-10" src={image1} alt="add to cart" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
