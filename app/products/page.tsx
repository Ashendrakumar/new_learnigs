import Link from "next/link";
import React from "react";

const products = [
  { id: 1, name: "Product 1", price: "$10" },
  { id: 2, name: "Product 2", price: "$20" },
  { id: 3, name: "Product 3", price: "$30" },
  { id: 4, name: "Product 4", price: "$40" },
  { id: 5, name: "Product 5", price: "$50" },
  { id: 6, name: "Product 6", price: "$60" },
  { id: 7, name: "Product 7", price: "$70" },
  { id: 8, name: "Product 8", price: "$80" },
  { id: 9, name: "Product 9", price: "$90" },
  { id: 10, name: "Product 10", price: "$100" },
  // Add more products as needed
];

export default function ProductList() {
  return (
    <div className="max-w-2xl mx-auto my-10 p-5">
      <Link href="/">Back</Link>
      <h1 className="text-4xl font-bold mb-4">Product List</h1>
      <ul className="list-disc pl-8">
        {products.map((product) => (
          <li key={product.id} className="mb-2">
            <Link href={`/products/${product.id}`}>
              <h2 className="">{product.name}</h2>
            </Link>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
