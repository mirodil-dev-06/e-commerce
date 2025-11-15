import { useEffect, useState } from "react";
import { Container } from "../../utils/Utils";
import empty_cart from "../../images/empty_cart.png";
import CartItem from "../cart/CartItem";
import CartSummary from "../cart/CartSummary";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const saveCart = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    saveCart(updatedCart);
  };

  const updateQuantity = (id, type) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        const newQty = type === "increase" ? item.quantity + 1 : item.quantity - 1;
        return { ...item, quantity: Math.max(newQty, 1) };
      }
      return item;
    });

    saveCart(updatedCart);
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <Container>
        <div className="py-20 flex flex-col items-center text-center gap-6">
          <img
            src={empty_cart}
            alt="Empty Cart"
            className="w-[220px] sm:w-[260px]"
          />
          <h1 className="text-[#3C4242] text-2xl sm:text-3xl font-bold">
            Your cart is empty and sad :(
          </h1>
          <p className="text-[#807D7E] text-base">
            Add something to make it happy!
          </p>

          <Link
            to="/"
            className="py-3 px-10 bg-[#8A33FD] text-white rounded-lg hover:opacity-80 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <h1 className="text-xl sm:text-2xl font-bold py-5 text-[#3F4646]">
        Savatingizdagi mahsulotlar: {cartItems.length} ta
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="md:col-span-3 border border-[#E4E7ED] rounded-xl p-4">
          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                removeItem={removeItem}
                updateQuantity={updateQuantity}
              />
            ))}
          </div>
        </div>

        <div className="md:col-span-1">
          <CartSummary totalPrice={totalPrice} totalItems={cartItems.length} />
        </div>

      </div>
    </Container>
  );
};

export default Cart;
