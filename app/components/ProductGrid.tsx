
import { useAppContext } from "../context/AppContext";
import ProductCard from "./ProductCard";


const ProductGrid = ({ products }) => {
  const { searchQuery, filters, addToCart } = useAppContext();

  const filtered = products.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filters.categories.length === 0 || filters.categories.includes(p.category);
    const matchesBrand = filters.brands.length === 0 || filters.brands.includes(p.brand);
    const matchesPrice = p.price <= filters.priceRange;

    return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
  });

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
      ))}
    </section>
  );
};
export default ProductGrid;