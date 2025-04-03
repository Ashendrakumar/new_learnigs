"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const orderHandler = () => {
    alert("Order placed successfully!");
    router.back();
    // router.push("/");
    // router.refresh();
    // router.forward();
    // router.replace("/");
  };
  return (
    <div className="max-w-2xl mx-auto my-10 p-5">
      <h1 className="text-4xl font-bold mb-4">Order Product</h1>
      <p className="mb-4">Please click the button below to order the product</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={orderHandler}
      >
        place Order
      </button>
    </div>
  );
}
