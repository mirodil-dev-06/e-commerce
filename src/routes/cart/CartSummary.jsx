const CartSummary = ({ totalPrice, totalItems }) => {
  return (
    <div className="col-span-1 border-2 border-[#E4E7ED] rounded-md p-4 h-[200px]">
      <h2 className="font-bold text-[17px] mb-4">Buyurtmangiz</h2>

      <div className="flex justify-between mb-2">
        <span>Products ({totalItems}):</span>
        <span>{totalPrice.toFixed(2)} $</span>
      </div>

      <p className="mt-3 text-xl font-semibold">
        Grand Total: <span className="text-[#8A33FD]">${totalPrice.toFixed(2)}</span>
      </p>

      <button className="w-full p-2 mt-4 rounded-lg bg-[#8A33FD] text-white text-[18px] font-normal hover:opacity-75 transition">
       Proceed To Checkout
      </button>
    </div>
  );
};

export default CartSummary;
