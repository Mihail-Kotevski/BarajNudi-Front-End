import { useCallback, useEffect, useState } from "react";

const MOCK_API_DATA = [
  {
    id: 1,
    title: "Voyage into the Nebula",
    description: "Discover the vibrant colors of the Andromeda Nebula.",
    imageUrl: "https://placehold.co/800x400/10b981/ffffff?text=Nebula+1",
  },
  {
    id: 2,
    title: "The Silent Forest",
    description: "A peaceful retreat into the dense, foggy woods.",
    imageUrl: "https://placehold.co/800x400/ef4444/ffffff?text=Forest+2",
  },
  {
    id: 3,
    title: "Urban Sunset Glow",
    description: "The last light over the towering city skyline.",
    imageUrl: "https://placehold.co/800x400/3b82f6/ffffff?text=City+3",
  },
  {
    id: 4,
    title: "Mountain Peaks",
    description: "Majestic, snow-capped mountains at dawn.",
    imageUrl: "https://placehold.co/800x400/f59e0b/ffffff?text=Mountain+4",
  },
  {
    id: 5,
    title: "Ocean Waves",
    description: "Crashing waves on a pristine tropical beach.",
    imageUrl: "https://placehold.co/800x400/8b5cf6/ffffff?text=Ocean+5",
  },
];

const Carousel = () => {
  const [data, setData] = useState<
    {
      id: number;
      title: string;
      description: string;
      imageUrl: string;
    }[]
  >([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    setData(MOCK_API_DATA);
    return () => {};
  }, []);

  const totalSlides = data.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  }, [totalSlides]);

  useEffect(() => {
    if (totalSlides > 1) {
      const autoPlay = setInterval(nextSlide, 5000);
      return () => clearInterval(autoPlay);
    }
  }, [totalSlides, nextSlide]);
  let currentItem = data[currentIndex];
  // if (isLoading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen bg-gray-50">
  //       <div className="flex flex-col items-center p-8 bg-white shadow-xl rounded-lg">
  //         <div className="w-8 h-8 border-4 border-t-4 border-gray-200 border-t-indigo-500 rounded-full animate-spin mb-3"></div>
  //         <p className="text-gray-600 font-medium">Loading content...</p>
  //       </div>
  //     </div>
  //   );
  // }

  // if (totalSlides === 0) {
  //   return (
  //     <div className="flex justify-center items-center h-screen bg-gray-50 text-red-600 font-bold">
  //       No items found in the API response.
  //     </div>
  //   );
  // }
  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      <div className="relative h-56 overflow-hidden rounded-lg md:h-85">
        <div
          className="active-1 duration-700 ease-in-out default:1"
          data-carousel-item
        >
          <img
            // src={currentItem.imageUrl}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            // alt={currentItem.imageUrl}
          />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/docs/images/carousel/carousel-2.svg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {data.map((_, id) => (
          <button
            key={id}
            onClick={() => setCurrentIndex(id)}
            type="button"
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              id === currentIndex ? "bg-gray-900/60 w-4" : "bg-gray-600/40"
            }`}
            aria-current="true"
            aria-label={`Go to slide ${id + 1}`}
            data-carousel-slide-to="0"
          ></button>
        ))}
      </div>
      <button
        onClick={prevSlide}
        type="button"
        className="absolute top-0 start-0 z-9 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-7 h-40 rounded dark:bg-gray-700/20 dark:group-hover:bg-gray-900/30 group-focus:outline-none">
          <svg
            className="w-4 h-4 dark:text-gray-200 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        onClick={nextSlide}
        type="button"
        className="absolute top-0 end-0 z-9 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-7 h-40 rounded dark:bg-gray-700/20 dark:group-hover:bg-gray-900/30 group-focus:outline-none">
          <svg
            className="w-4 h-4 dark:text-gray-200 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
