import products from '../../constants/data';
import ProductList from './ProductList';

const Store = () => {
  return (
    <section className="min-h-screen w-full bg-gray-50 py-8 px-4">
      {/* Header */}
      <div className="text-center mb-12 mt-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          Welcome to Apple Store!!
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the latest Apple products and innovations
        </p>
      </div>

      {/* Products Grid - 1 column on mobile, 4 columns on desktop */}
        <ProductList/>

      {/* Empty State */}
      {products.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">No products available at the moment.</p>
        </div>
      )}
    </section>
  );
};

export default Store;