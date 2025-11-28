import { useParams } from 'react-router-dom';
import products from '../../constants/data';

const ProductPage = () => {
  // 1. Extract ID from URL
  const { id } = useParams();
  
  // 2. Find the product by ID
  const product = products.find(item => item.id === id);
  
  // 3. Handle product not found
  if (!product) {
    return <div>Product not found</div>;
  }
  
  // 4. Display product details (expand your existing card layout)
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Product details layout */}
        <div className="bg-white rounded-2xl p-8">
          <img src={product.image} alt={product.model} />
          <h1>{product.model}</h1>
          <p>{product.currency}{product.price}</p>
          {/* Add more details like description, specs, etc. */}
        </div>
      </div>
    </div>
  );
};