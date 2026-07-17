import Navigation from "../components/Navigation";
import ToggleTheme from "../components/ToggleTheme";

function Cart() {
  return (
    <div>
      <Navigation />
      <ToggleTheme />
      
      <div className=" bg-(--bg-light) min-h-screen no-scrollbar">
        <h1 className="text-center mt-10">wowzers</h1>
      </div>
    </div>
  )
}

export default Cart;