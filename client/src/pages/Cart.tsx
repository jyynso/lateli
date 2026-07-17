function Cart() {
  return (
    <div className="min-h-screen pt-24 bg-(--bg-light)">
      <h1 className="text-center text-2xl font-semibold p-8">Your Cart</h1>

      <div className="flex flex-row justify-center gap-10">
        <div className="flex flex-col items-center p-10 rounded-md shadow-lg w-80  bg-(--bg-card)">
          <h1 className="text-lg font-semibold">Items</h1>
        </div>

        <div className="flex flex-col items-center p-10 rounded-md shadow-lg w-60 bg-(--bg-card)">
          <h1 className="text-lg font-semibold">Order Summary</h1>
        </div>
      </div>
    </div>
  );
}

export default Cart;