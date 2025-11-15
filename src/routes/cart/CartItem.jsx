import { FaTrashCan } from "react-icons/fa6";
import QuantityButton from "../../components/QuantityButton";

const CartItem = ({ item, removeItem, updateQuantity }) => {
  return (
    <div className="border-b border-[#E4E7ED] py-4">
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-[auto_1fr_auto] 
          gap-4 
          items-center
        "
      >
        <div className="flex justify-center sm:justify-start">
          <div className="bg-[#E4E7ED] rounded-xl p-3">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded"
            />
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-[#3F4646] leading-tight">
            {item.title}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Sotuvchi: <span className="font-medium">{item.brand}</span>
          </p>

          <p className="text-gray-500 mt-1">
            Narx: <span className="font-medium">{item.price} $</span>
          </p>

          <p className="font-semibold text-[#8A33FD] mt-1">
            Jami: ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>

        <div className="flex flex-col items-end gap-3">
          <button
            onClick={() => removeItem(item.id)}
            className="flex items-center gap-1 text-[#8A33FD] cursor-pointer hover:text-[#6f29c9] text-sm transition"
          >
            <FaTrashCan /> Yo‘q qilish
          </button>

          <QuantityButton
            count={item.quantity}
            maxCount={item.minimumOrderQuantity}
            onIncrease={() => updateQuantity(item.id, "increase")}
            onDecrease={() => updateQuantity(item.id, "decrease")}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
