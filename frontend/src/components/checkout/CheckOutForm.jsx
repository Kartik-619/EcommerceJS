import useUserStore from "../../store/userStore";

const CheckOutForm=()=>{
    const cart = useUserStore((state) => state.cart);
    return(
        <div className="h-full w-full bg-white flex items-center justify-center p-4">
            <form className=" bg-slate-300 border-2 border-black rounded-xl p-8  space-y-6 w-full max-w-md">
                <input
                    placeholder="username"
                    type="name"
                    className="w-full bg-white border border-black text-black rounded-lg px-4 py-3 focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_10px_#00f0ff] transition-all"

                />
                 <input
                    placeholder="email"
                    type="email"
                    className="w-full bg-white border border-black text-black rounded-lg px-4 py-3 focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_10px_#00f0ff] transition-all"

                />
                 <input
                    placeholder="Full Name"
                    type="name"
                    className="w-full bg-white border border-black text-black rounded-lg px-4 py-3 focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_10px_#00f0ff] transition-all"

                />
                 <input
                    placeholder="Phone Number"
                    type="tel"
                    className="w-full bg-white border border-black text-black rounded-lg px-4 py-3 focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_10px_#00f0ff] transition-all"

                />
                 <input
                    placeholder="Address for delivery"
                    type="name"
                    className="w-full bg-white border border-black text-black rounded-lg px-4 py-3 focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_10px_#00f0ff] transition-all"

                />
                <h2>List of items :</h2>
                <ul>
                    {
                        cart.map((i)=>(
                            <li key={i.productId}>{i.productId}*{i.quantity}</li>
                        ))
                    }
                </ul>
               
                   <button
                    className="w-full bg-white border border-black text-black rounded-lg px-4 py-3 focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_10px_#00f0ff] transition-all"
                   >Proceed to Pay</button>
            </form>
        </div>
    )
}
export default CheckOutForm;