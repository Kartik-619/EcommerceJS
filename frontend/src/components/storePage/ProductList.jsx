import { Link } from 'react-router-dom';
import { useEffect ,useState} from 'react';
import axios from "axios";

const ProductList=()=>{
  const [products,setProducts]=useState([]);
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
   
  
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id}  >
                
          <div
            
            className="bg-white border border-gray-400 rounded-2xl p-8 w-full hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-between h-full group"
          >
            {/* Product Image - Larger size */}
            <div className="h-72 w-72 flex items-center justify-center mb-6">
              <img
                src={item.images?.[0]?.url}
                alt={item.model}
                className="object-cover h-full w-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Product Info */}
            <div className="text-center w-full">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3 line-clamp-2">
                {item.model}
              </h2>
              <p className="text-gray-500 text-base mb-4 capitalize">
                {item.category}
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {item.currency}{item.basePrice}
              </p>
            </div>

            {/* Buy Button */}
            <button className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-full text-base font-semibold hover:bg-blue-700 transition-colors duration-200">
              Buy Now
            </button>
          </div></Link>
        ))}
      </div>
    )
}
export default ProductList;