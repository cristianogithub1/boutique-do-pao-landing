// src/sections/CatalogSection.tsx
import ProductCard from '@/components/ProductCard';
import products from '@/data/products';

const CatalogSection = () => {
    return (
        <section id="products" className="py-16 bg-bread-light">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-bread-dark">Nossos Produtos</h2>
                    <p className="text-bread-secondary mt-2">Selecione e encomende seus favoritos</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CatalogSection;