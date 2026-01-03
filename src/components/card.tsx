import React from "react";
import type { Card } from "../interfaces/interfaces";
import { Link } from "react-router-dom";

// // Star rating utility function (optional, but clean)
// const StarRating = ({ rating }) => {
//   const fullStars = Math.floor(rating);
//   const hasHalfStar = rating % 1 !== 0;
//   const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

//   return (
//     <div className="flex items-center space-x-0.5 text-yellow-500">
//       {/* Full Stars */}
//       {[...Array(fullStars)].map((_, i) => (
//         <svg key={`full-${i}`} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//           <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
//         </svg>
//       ))}
//       {/* Half Star */}
//       {hasHalfStar && (
//         <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//           <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27V2Z"/>
//         </svg>
//       )}
//       {/* Empty Stars */}
//       {[...Array(emptyStars)].map((_, i) => (
//         <svg key={`empty-${i}`} className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 24 24">
//           <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
//         </svg>
//       )}
//     </div>
//   );
// };

const ServiceCard = ({
  title,
  description,
  imageUrl,
  providerName,
  price,
  rating,
  reviewsCount,
}: Card) => {
  return (
    <div
      className=" bg-white rounded-l overflow-hidden shadow-lg 
      hover:shadow-xl transition-shadow duration-300 ease-in-out
      flex my-5 w-full h-80"
    >
      <div className="w-2/5 relative h-full">
        <img className="h-full wfull object-cover" src={imageUrl} alt={title} />
        <div className="absolute inset-x-0 bottom-0 from-black/70 via-black/30 to-transparent p-4">
          <h3 className="text-xl font-bold text-white leading-tight">
            {title}
          </h3>
        </div>
      </div>
      <div className=" p-4 flex flex-col grow">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-medium text-gray-600 truncate">
            By:{" "}
            <span className="text-indigo-600 hover:text-indigo-800 cursor-pointer">
              {providerName}
            </span>
          </p>
        </div>
        <p className="text-gray-700 text-sm mb-4 grow">
          {description.length > 90
            ? `${description.substring(0, 90)}...`
            : description}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="text-left">
            <p className="text-xs text-gray-500 font-medium">Starting From</p>
            <p className="text-2xl font-extrabold text-green-600">{price}</p>
          </div>
          <Link
            to={"/cardinfo"}
            className="
              bg-indigo-600 hover:bg-indigo-700 text-white 
              font-semibold py-2 px-4 rounded-lg 
              transition duration-150 ease-in-out shadow-md
            "
            onClick={() => console.log("View Details clicked")}
          >
            Види Повеќе
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
