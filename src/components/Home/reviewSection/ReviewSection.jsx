
import { useState } from "react";


const reviews = [
  {
    id: 1,
    name: "Talia Noah",
    rating: 5,
    comment:
      "Grovana has completely transformed the way I care for my plants. As someone who always struggled to keep my indoor plants alive, the AI assistant has been a lifesaver. It scans my plants with such accuracy and provides personalized advice like adjusting sunlight, watering schedules, and even recommending fertilizers. My once-struggling plants are now thriving, and I couldn't be happier!",
    date: "March 27, 2024",
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    comment:
      "The plant health scanning feature is incredible! It helped me identify and treat a pest problem before it could spread to my other plants. The personalized care tips are spot-on, and the UI is so intuitive. Definitely worth every penny!",
    date: "March 25, 2024",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    rating: 5,
    comment:
      "As a first-time plant parent, this app has been my go-to resource. The AI recommendations are incredibly helpful, and I love how it tracks my plants' progress over time. My monstera has never looked better!",
    date: "March 20, 2024",
  },
];

export const ReviewSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <div className="w-full">
      <div className="py-12 md:py-24 bg-[#F2FCE2] md:w-[60%] md:float-right md:h-[80%] relative w-full h-auto">
      
        <img
          src="lovable-uploads/comment.png"
          alt="comment"
          className="hidden md:block absolute h-[80%] top-[10%] left-[-150px]"
        />

        <h2 className="text-3xl md:text-4xl text-center mb-8 md:mb-16 text-[#142718] w-full font-[lora] md:top-[-20px] relative md:absolute">
          What Our Clients Say
        </h2>

        <div className="container mx-auto px-4 md:pl-40">
          <div className="relative overflow-hidden">
           
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>

          
            <div className="hidden md:block">
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
                aria-label="Previous review"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
                aria-label="Next review"
              >
                →
              </button>
            </div>

            
            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    index === activeIndex ? "bg-[#2E5B41]" : "bg-gray-300"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReviewCard = ({ review }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start p-6 md:p-8">
      <div className="flex-1 space-y-3 md:space-y-4">
        <h3 className="text-xl md:text-2xl font-semibold">{review.name}</h3>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          {review.comment}
        </p>
        <p className="text-gray-500 text-xs md:text-sm">{review.date}</p>
      </div>
    </div>
  );
};


//////////////////////////////////////////BUTTON///////////////////////////////////////////////




// import { useState } from "react";

// const reviews = [
//   {
//     id: 1,
//     name: "Talia Noah",
//     rating: 5,
//     comment:
//       "Grovana has completely transformed the way I care for my plants. As someone who always struggled to keep my indoor plants alive, the AI assistant has been a lifesaver. It scans my plants with such accuracy and provides personalized advice like adjusting sunlight, watering schedules, and even recommending fertilizers. My once-struggling plants are now thriving, and I couldn't be happier!",
//     date: "March 27, 2024",
//   },
//   {
//     id: 2,
//     name: "Michael Chen",
//     rating: 5,
//     comment:
//       "The plant health scanning feature is incredible! It helped me identify and treat a pest problem before it could spread to my other plants. The personalized care tips are spot-on, and the UI is so intuitive. Definitely worth every penny!",
//     date: "March 25, 2024",
//   },
//   {
//     id: 3,
//     name: "Sarah Johnson",
//     rating: 5,
//     comment:
//       "As a first-time plant parent, this app has been my go-to resource. The AI recommendations are incredibly helpful, and I love how it tracks my plants' progress over time. My monstera has never looked better!",
//     date: "March 20, 2024",
//   },
// ];

// export const ReviewSection = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isOpen, setIsOpen] = useState(false); 

//   const handleNext = () => {
//     setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
//   };

//   const handlePrev = () => {
//     setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
//   };

//   return (
//     <div className="w-full">
//       <div className="py-12 md:py-24 bg-[#F2FCE2] md:w-[60%] md:float-right md:h-[80%] relative w-full h-auto">
      
//         <img
//           src="lovable-uploads/comment.png"
//           alt="comment"
//           className="hidden md:block absolute h-[80%] top-[10%] left-[-150px]"
//         />

        
//         <div className="relative">
        

// <h2 className="text-3xl md:text-4xl text-center mb-8 md:mb-16 text-[#142718] w-full font-[lora] md:top-[-120px] md:left-6 relative md:absolute">
//   What Our Clients Say
// </h2>


         
//           <button
//       onClick={() => setIsOpen(true)}
//       className="absolute top-[-100px] right-5 bg-[#2E5B41] hover:bg-[#234732] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors"
//       aria-label="Add Review"
// >
//   +
// </button>
//         </div>

//         <div className="container mx-auto px-4 md:pl-40">
//           <div className="relative overflow-hidden">
           
//             <div
//               className="flex transition-transform duration-300 ease-in-out"
//               style={{ transform: `translateX(-${activeIndex * 100}%)` }}
//             >
//               {reviews.map((review) => (
//                 <div key={review.id} className="w-full flex-shrink-0">
//                   <ReviewCard review={review} />
//                 </div>
//               ))}
//             </div>

//             <div className="flex justify-center gap-2 mt-8">
//               {reviews.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActiveIndex(index)}
//                   className={`h-3 w-3 rounded-full transition-colors ${
//                     index === activeIndex ? "bg-[#2E5B41]" : "bg-gray-300"
//                   }`}
//                   aria-label={`Go to review ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

    
//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
//             <h2 className="text-lg font-bold">Add Your Review</h2>
//             <p className="text-sm text-gray-500 mb-4">Share your experience with Grovana</p>

//             <form className="mt-4 flex flex-col gap-4">
//           <div className="w-full">
//     <label className="border p-3 rounded-lg w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer transition-colors">
//       <input type="file" accept="image/*" className="hidden" />
//        Upload Photo
//     </label>
//   </div>


//               <textarea placeholder="Your Review" className="border p-2 rounded-lg w-full h-24"></textarea>
//               <button type="submit" className="bg-[#2E5B41] hover:bg-[#234732] text-white p-2 rounded-lg transition-colors">
//   Submit
// </button>

//             </form>

         
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//             >
//               ✖
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const ReviewCard = ({ review }) => {
//   return (
//     <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start p-6 md:p-8">
//       <div className="flex-1 space-y-3 md:space-y-4">
//         <h3 className="text-xl md:text-2xl font-semibold">{review.name}</h3>
//         <p className="text-gray-700 leading-relaxed text-sm md:text-base">
//           {review.comment}
//         </p>
//         <p className="text-gray-500 text-xs md:text-sm">{review.date}</p>
//       </div>
//     </div>
//   );
// };





