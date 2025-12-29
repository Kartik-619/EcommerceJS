import CheckOutForm from "./CheckOutForm";

const CheckOutPage=()=>{
    return(
        <div className="min-h-screen w-full bg-white text-black pt-24">
            <h3 className="text-3xl bold">Fill in the details to order the items in the cart!!</h3>

            <CheckOutForm/>

        </div>
    )
}
export default CheckOutPage;