import React from "react";
import { Review } from "../types/Products"; // Adjust import path as needed

interface ReviewSectionProps {
  reviews: Review[];
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
  return (
    <section className="flex justify-center items-center flex-col w-full">

      <h4 className="text-lg font-bold mb-4">Customer Reviews</h4>
      {reviews.length > 0 ? (
        <ul className="space-y-4 w-full p-4 lg:w-1/2 md:w-full md:p-4">
          {reviews.map((review: Review, index: number) => (
            <li key={index} className="border border-gray-300 p-4 rounded-lg">
              <p className="font-bold text-gray-900">{review.reviewerName}</p>
              <p className="text-gray-600">{review.comment}</p>
              <div className="mt-2 flex items-center">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21 16.54 14.53 22 9.27H15.81L12 2 8.19 9.27H2L7.46 14.53 5.82 21 12 17.27z" />
                  </svg>
                ))}
                {Array(5 - review.rating)
                  .fill(null)
                  .map((_, i) => (
                    <svg
                      key={i + review.rating}
                      className="w-4 h-4 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21 16.54 14.53 22 9.27H15.81L12 2 8.19 9.27H2L7.46 14.53 5.82 21 12 17.27z" />
                    </svg>
                  ))}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet.</p>
      )}
    </section>
  );
};

export default ReviewSection;
