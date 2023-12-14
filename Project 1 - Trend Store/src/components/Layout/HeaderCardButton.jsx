import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import CardIcon from "../Cart/CardIcon";
import "./HeaderCardButton.css";

const HeaderCardButton = ({ onShowCart }) => {
  const cartCtx = useContext(CartContext);

  const totalItemInCart = cartCtx.items.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.amount;
  }, 0);

  return (
    <button className="button" onClick={onShowCart}>
      <span className="icon">
        <CardIcon />
      </span>
      <span>Sepetim</span>
      <span className="badge">{totalItemInCart}</span>
    </button>
  );
};

export default HeaderCardButton;
