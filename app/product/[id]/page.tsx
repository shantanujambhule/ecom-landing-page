import ProductDetail from '@/app/components/ProductDetail';
import mockProducts from '@/app/data/mockProducts';

interface PageProps {
  params: { id: string };
}

export default function ProductPage({ params }: PageProps) {
  const productId = parseInt(params.id);
  const product = mockProducts.find((p) => p.id === productId);

  if (!product) {
    return (
      <main className="min-h-screen pt-32 px-4 text-center">
        <p className="text-gray-500">Product not found.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-32 px-4 md:px-10 lg:px-40">
      <ProductDetail product={product} />
    </main>
  );
}
