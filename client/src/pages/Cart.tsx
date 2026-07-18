function Cart() {
  return (
    <div className="min-h-screen px-4 pt-24">
      <h1 className="p-8 text-center text-2xl font-semibold">Your Cart</h1>

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-6 md:flex-row md:items-start">
        <div className="flex w-full max-w-md flex-col items-center p-5">
          <h1 className="text-xl font-semibold">Items</h1>
        </div>

        <div className="flex w-full max-w-md h-50 flex-col gap-2 rounded-md bg-(--bg-card) p-5 shadow-sm">
          <h1 className="text-xl font-semibold text-left">Order Summary</h1>
          <p>Subtotal</p>
          <p className="text-lg font-semibold">Total</p>
          <button className="rounded-sm p-2.5 mt-auto bg-(--accent-charcoalBlue) text-(--bg-white)">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;