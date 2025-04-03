import React from "react";

export default async function DocsPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const { slug } = await params;
  return (
    <div className="max-w-2xl mx-auto my-10 p-5">
      <h1 className="text-4xl font-bold mb-4">Documentation Page {slug}</h1>
    </div>
  );
}
