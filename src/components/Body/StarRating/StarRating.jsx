import React from "react";

const StarRating = ({ rating, maxStars = 5, size = 20 }) => {
  const stars = [];

  for (let i = 1; i <= maxStars; i++) {
    const starValue = i;
    let fillPercentage = 0;

    if (rating >= starValue) {
      fillPercentage = 100; // Full star
    } else if (rating > starValue - 1) {
      fillPercentage = (rating - (starValue - 1)) * 100; // Partial star
    }

    stars.push(
      <div key={i} className="relative inline-block">
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className="text-gray-300"
        >
          {/* Background star (empty) */}
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill="currentColor"
          />

          {/* Foreground star (filled) */}
          <defs>
            <clipPath id={`clip-${i}-${rating}`}>
              <rect x="0" y="0" width={`${fillPercentage}%`} height="100%" />
            </clipPath>
          </defs>
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill="#FFD700"
            clipPath={`url(#clip-${i}-${rating})`}
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">{stars}</div>
      <span className="ml-1 text-sm font-medium text-gray-600">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

export default StarRating;
