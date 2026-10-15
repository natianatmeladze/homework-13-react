import { useCart } from "../context/useCart"

const Checkout = () => {
  const {cart} = useCart()
  return (
    <>
      <div className="mt-10">
        <ul className="grid grid-cols-2 w-200 mx-auto gap-4 p-5 justify-center">
          {cart.map((product) => (
            <li
            className="flex justify-between items-center p-4 gap-7 bg-white border border-gray-200 rounded-lg"
            key={product.id}>
              <h2 className="font-medium text-gray-800">{product.title}</h2>
              <h3 className="font-semibold text-purple-600">${product.price}</h3>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Checkout
