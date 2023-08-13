import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import { getOneProductFromAWS } from "@/utils/getProductsFromAWS";

interface IdParams {
  productId: string;
}

const ProductPage = async ({ params }: { params: IdParams }) => {
  const product = await getOneProductFromAWS(params.productId);
  return (
    <div>
      <Container>
        <ProductDetails product={product.data} />
      </Container>
    </div>
  );
};

export default ProductPage;
