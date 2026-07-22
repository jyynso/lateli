function Cart() {
  return (
    <div className="min-h-screen px-4 pt-24">
      <h1 className="p-8 text-2xl text-center font-bold">Your Cart</h1>
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-6 md:flex-row md:items-start">
        <div className="flex w-full max-w-md flex-col items-center p-5">
          <div className="flex flex-row gap-5">
            <img className="rounded-md object-cover w-30 h-20" src="/placeholder.png" />
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold">Title</h1>
              <p className="text-sm">Artist</p>
              <p className="text-sm">Size</p>
            </div>
            <div className="flex flex-col gap-1 ml-10">
              <p className="text-sm font-semibold">Price</p>
            </div>
          </div>
        </div>

        <div className="flex w-full max-w-md h-50 flex-col gap-2 rounded-md bg-(--bg-card) p-5 shadow-sm">
          <h1 className="text-xl font-semibold text-left">Order Summary</h1>
          <p>Subtotal</p>
          <p className="text-lg font-semibold">Total</p>
          <button
            type="submit" className="rounded-sm p-2.5 mt-auto cursor-pointer bg-(--accent-charcoalBlue) text-(--bg-white)">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;