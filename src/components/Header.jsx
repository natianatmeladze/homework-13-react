import { Link } from "react-router";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/useCart";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const handleCart = () => {
    navigate("/checkout")
  };
  return (
    <>
      <div className="flex justify-around px-6 py-5 items-center">
        <nav className="flex gap-5">
          <Link
            className="p-3 font-medium bg-purple-200 text-purple-800 text-lg rounded-lg"
            to="/"
          >
            Home
          </Link>
          <Link
            className="p-3 font-medium bg-purple-200 text-purple-800 text-lg rounded-lg"
            to="/checkout"
          >
            Checkout
          </Link>
        </nav>
        <div  onClick={handleCart} className="flex gap-[5px] items-center ">
          <ShoppingCart
            size={24}
            className="cursor-pointer text-purple-900"
          />
          <h3 className="font-bold text-lg text-purple-800 cursor-pointer">{cart.length}</h3>
        </div>
      </div>
    </>
  );
};

export default Header;
