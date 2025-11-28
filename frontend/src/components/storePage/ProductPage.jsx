import { useParams } from 'react-router-dom';
import products from '../../constants/data';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(item => item.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="text-sm text-gray-500">
            <a href="/" className="hover:text-gray-700">Home</a>
            <span className="mx-2">/</span>
            <a href="/store" className="hover:text-gray-700">Store</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{product.model}</span>
          </div>
        </nav>

        {/* Product Grid */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="flex items-center justify-center p-4">
              <img
                src={product.image}
                alt={product.model}
                className="w-full max-w-md object-cover rounded-lg"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              {/* Category */}
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">
                {product.category}
              </span>
              
              {/* Model Name */}
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {product.model}
              </h1>

              {/* Price */}
              <div className="mb-6">
                <p className="text-4xl font-bold text-gray-900">
                  {product.currency}{product.price}
                </p>
                <p className="text-green-600 text-sm mt-1">In stock • Free shipping</p>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description || `Experience the latest innovation in ${product.category} technology with the ${product.model}. Designed for performance and style.`}
                </p>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Latest generation technology
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Premium build quality
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Apple ecosystem integration
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-blue-600 text-white py-4 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
                  Buy Now
                </button>
                <button className="flex-1 border-2 border-gray-300 text-gray-700 py-4 px-8 rounded-full text-lg font-semibold hover:border-gray-400 transition-colors duration-200">
                  Add to Cart
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center text-sm text-gray-500 space-x-6">
                  <span className="flex items-center">
                    <span className="mr-2">🔄</span>
                    14-day return
                  </span>
                  <span className="flex items-center">
                    <span className="mr-2">🛡️</span>
                    1-year warranty
                  </span>
                  <span className="flex items-center">
                    <span className="mr-2">🚚</span>
                    Free delivery
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 3)
              .map(relatedProduct => (
                <div key={relatedProduct.id} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                  <img src={relatedProduct.image} alt={relatedProduct.model} className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="font-semibold text-gray-900">{relatedProduct.model}</h3>
                  <p className="text-lg font-bold text-gray-900">{relatedProduct.currency}{relatedProduct.price}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;