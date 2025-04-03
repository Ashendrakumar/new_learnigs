import Link from "next/link";

export default function F1Page() {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-4">F1 Page</h1>
      <Link href="f1/f2">F2</Link>
    </div>
  );
}
