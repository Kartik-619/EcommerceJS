import useUserStore from "../../store/userStore";

const inputClass =
  "w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-black placeholder-neutral-500 transition-all focus:outline-none focus:border-black focus:ring-2 focus:ring-black/10";

const CheckOutForm = () => {
  const cart = useUserStore((state) => state.cart);

  return (
    <div className="min-h-screen w-full bg-neutral-50 flex items-center justify-center px-4">
      <form className="w-full max-w-2xl  h-full  max-h-xl rounded-2xl bg-white p-8 shadow-lg space-y-6">
        
        {/* Header */}
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold text-black">
            Checkout
          </h2>
          <p className="text-md text-neutral-500">
            Enter your delivery and contact details
          </p>
        </div>

        {/* Inputs */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className={inputClass}
          />

          <input
            type="email"
            placeholder="Email address"
            className={inputClass}
          />

          <input
            type="text"
            placeholder="Full name"
            className={inputClass}
          />

          <input
            type="tel"
            placeholder="Phone number"
            className={inputClass}
          />

          <input
            type="text"
            placeholder="Delivery address"
            className={inputClass}
          />
        </div>

        {/* CTA */}
        <h3 className="e px-4 py-3 text-md text-black ">*Proceed to see the order summary

        </h3>
        <button
          type="submit"
          className="w-full rounded-lg bg-black py-3 text-sm font-medium text-white transition hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-black/20"
        >
          Proceed for Summary
        </button>
      </form>
    </div>
  );
};

export default CheckOutForm;
