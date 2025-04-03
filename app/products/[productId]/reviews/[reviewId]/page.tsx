export default async function ReviewDetails({
  params,
}: Readonly<{ params: { reviewId: string } }>) {
  const { reviewId } = await params;
  if (reviewId == "1") {
    throw new Error("Review not found");
  }
  return (
    <div className="max-w-2xl mx-auto my-10 p-5">
      <h1 className="text-4xl font-bold mb-4">Review Details</h1>
      <p>
        Review ID: <span className="font-bold">{reviewId}</span>
      </p>
    </div>
  );
}
