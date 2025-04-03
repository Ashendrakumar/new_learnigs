const data = {
  labels: ["Red", "Green", "Blue"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

export default function Users() {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-4">Users</h1>
    </div>
  );
}
