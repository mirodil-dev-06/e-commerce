const QuantityButton = ({ count, maxCount, onIncrease, onDecrease }) => {
  const btnStyle =
    "p-2 cursor-pointer text-[20px] border border-[#8A33FD] bg-[#8A33FD] text-white rounded hover:opacity-85 disabled:cursor-not-allowed disabled:bg-transparent disabled:text-gray-700";

  return (
    <div className="grid grid-cols-4 items-center gap-2 border border-[#8A33FD] rounded-sm">
      <button onClick={onDecrease} disabled={count <= 1} className={btnStyle}>
        −
      </button>

      <span className="col-span-2 text-center text-lg font-semibold">{count}</span>

      <button onClick={onIncrease} disabled={count >= maxCount} className={btnStyle}>
        +
      </button>
    </div>
  );
};

export default QuantityButton;
