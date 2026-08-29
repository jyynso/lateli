import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="p-6 lg:px-20 mt-40 ">
      <section id='footer'>
        <span className="block h-px bg-black"/>
        <div className="py-10 flex flex-row justify-between">
          <h2 className="font-semibold text-xl">lateli</h2>
          <span className="flex flex-row gap-20">
            <Link to={"/products"} className="font-semibold">browse</Link>
            <button 
              className="font-semibold cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              back to top
            </button>
          </span>
        </div>
        <p>© 2026 lateli </p>
      </section>
    </div>
  );
}

export default Footer;