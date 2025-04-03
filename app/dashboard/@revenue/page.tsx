import React from "react";

interface Review {
  id: number;
  reviewer: string;
  comment: string;
  rating: number;
}

const reviews: Review[] = [
  { id: 1, reviewer: "John Doe", comment: "Great product!", rating: 5 },
  {
    id: 2,
    reviewer: "Jane Smith",
    comment: "Not bad, could be better.",
    rating: 3,
  },
  {
    id: 3,
    reviewer: "Sam Johnson",
    comment: "Terrible experience.",
    rating: 1,
  },
];

const ReviewTable: React.FC = () => {
  return (
    <div>
      <h1>Review Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Reviewer</th>
            <th>Comment</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.id}>
              <td>{review.id}</td>
              <td>{review.reviewer}</td>
              <td>{review.comment}</td>
              <td>{review.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewTable;
