type ProductPageProps = Readonly<{ params: { productId: string } }>;
import React from "react";

export const generateMetadata = async ({ params }: ProductPageProps) => {
  const { productId } = await params;
  return {
    title: "Product Details" + productId,
    description: "View the details of a specific product.",
  };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { productId } = await params;
  return (
    <div>
      <h1>Product Details for Product ID: {productId}</h1>
    </div>
  );
}
