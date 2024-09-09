import useCart from "../hooks/useCart";
import Payment from "../components/Payment";

const CheckOut = () => {
  const { cartItems } = useCart(); // Extract cartItems from useCart

  console.log(cartItems); // Add this line to check if cartItems has data

  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center m-8 p-12">
        <div className="lg:col-span-1  p-10 ">
          <h1 className="text-4xl font-bold mb-4">Checkout</h1>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-black">
                Your Cart Items
              </h2>
              <ul className="list-disc pl-5">
                {cartItems.map((item) => (
                  <li key={item.id} className="mb-4 list-none ">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-16 object-contain mr-4"
                        />
                        <div>
                          <p className="font-bold">{item.title}</p>
                          <p>Price: £{item.price.toFixed(2)}</p>
                          <p>Quantity: {item.quantity}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <h3 className="text-xl font-semibold">Total:</h3>
                <p className="text-lg font-bold">
                  £
                  {cartItems
                    .reduce((acc, item) => acc + item.price * item.quantity, 0)
                    .toFixed(2)}
                </p>
              </div>
             
            </div>
          )}
        </div>
        <div className="lg:col-span-1">
          <Payment />
        </div>
      </section>
    </>
  );
};

export default CheckOut;
