import { getProductsFromAWS } from "@/utils/getProductsFromAWS";
import Container from "./components/Container";
import ProductCard from "./components/products/ProductCard";

export default async function Home() {
  const products = await getProductsFromAWS();
  console.log(products);

  return (
    <div className="p-8">
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {products.data.map((product: any) => {
            return <ProductCard key={product.id} data={product} />;
          })}
        </div>
      </Container>
    </div>
  );
}
