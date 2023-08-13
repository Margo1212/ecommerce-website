"use client";
import Container from "@/app/components/Container";
import Image from "next/image";
import { useState } from "react";

interface ProductDetailsProps {
  product: any;
}

export type CartProductType = {
  id: string;
  name: string;
  category: string;
  quantity: number;
  price: number;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    category: product.category,
    quantity: 1,
    price: product.price,
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="w-12 h-12">
        {/* <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
        /> */}
      </div>
      <div>
        <div>
          <h2 className="text-3xl font-medium text-slate-700">
            {product.name}
          </h2>
        </div>
        <div>
          <h2 className="text-3xl font-medium text-slate-700">
            {product.model}
          </h2>
        </div>
        <div>
          <span className="font-semibold">CATEGORY: {product.category}</span>
        </div>
        <div className={product.isInStock ? "text-teal-400" : "text-rose-400"}>
          {product.isInStock ? "In Stock" : "Out of stock"}
        </div>
        <div>quantity</div>
        <div>add to cart</div>
      </div>
    </div>
  );
};

export default ProductDetails;
