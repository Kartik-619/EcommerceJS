import useUserStore from "./../../store/userStore";
import axios from "axios";
// ... imports

const Cart = () => {
  const { userName, cart, setCart } = useUserStore();
  useEffect(()=>{
    const fetchProduct=async()=>{
      try{
        const response= await axios.get('http://localhost:3007/api/products');
       
        setProducts(response.data);
        }catch(err){
          console.log(err);
        }
    }
    fetchProduct();}
  
 ,[] )
  return (

    <div className="min-h-screen w-full bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header Section */}
        <div className="mb-12 border-b border-zinc-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white block">
            Welcome !!
            {userName ? (
              <span className="text-zinc-500"> {userName}</span>
            ) : (
              <span className="text-red-500 text-sm ml-4">(User not found)</span>
            )}
          </h1>
        </div>

        <div className="flex flex-col  lg:flex-row gap-16">
          {/* Left: Items List */}
          <div className="flex-[2]">
            <div className="py-24 flex flex-col items-center justify-center border border-zinc-800 rounded-3xl bg-zinc-900/30">
              {cart.length === 0 ? (
                <><p className="text-xl text-zinc-400">Your bag is empty.</p>
                  <a href="/store" className="mt-6 text-blue-500 hover:underline">
                    Continue shopping
                  </a></>) : (<div className="space-y-6">
                    {
                      cart.map((item) => (
                        <div
                          key={item.id}
                          className="flex justify-between items-center p-6 border border-zinc-800 rounded-2xl bg-zinc-900/40"
                        >
                          <div>
                            <p className="text-lg font-medium">{item.name}</p>
                            <p className="text-sm text-zinc-400">Qty: {item.quantity}</p>
                          </div>

                          <p className="font-semibold">₹{item.price}</p>
                        </div>
                      ))
                    }

                  </div>

              )}
            </div>
          </div>

          {/* Right: Summary Sidebar */}
          <aside className="flex-1">
            <div className="bg-zinc-900/50 backdrop-blur-md p-8 rounded-3xl sticky top-32 border border-zinc-800">
              <h2 className="text-2xl font-semibold mb-6">Summary</h2>
              <button className="w-full mt-10 bg-blue-600 text-white py-4 rounded-xl font-bold">
                Check Out
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
export default Cart;