const CheckOutForm=()=>{
    return(
        <div>
            <form className=" bg-white border-2 border-black rounded-xl p-8  space-y-6 w-full max-w-md">
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
                   
            </form>
        </div>
    )
}
export default CheckOutForm;