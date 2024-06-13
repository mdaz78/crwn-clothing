import Button from "../button/button.component";

import "./cart-dropdown.styles.scss";

const CardDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>Go To Checkout</Button>
    </div>
  );
};

export default CardDropDown;
