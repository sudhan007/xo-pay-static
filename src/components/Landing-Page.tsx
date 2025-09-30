// import hero from '../../public/hero.png';
// import { Button } from './ui/button';
// const LandingPage = () => {
//   return (
//     <div className="flex items-stretch h-[80vh]">
//       {/* Left Column - Text Content */}
//       <div className="w-1/2 p-16 flex flex-col justify-start bg-gradient-to-r from-orange-50">
//         <div>
//           <p className="mb-4 text-sm font-medium tracking-wide text-brand">
//             Pay Education Fees Anytime, Anywhere
//           </p>

//           <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
//             Simplifying Tuition & School
//             <br className="hidden sm:block" />
//             Fee Payments
//           </h1>

//           <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
//             Education builds personal growth, social progress, and economic
//             development. Timely fee payments ensure uninterrupted learning. With
//             our app, paying school, college, or institute fees is simple,
//             secure, and instant.
//           </p>

//           <div className="mt-10">
//             <Button className="h-11 rounded-full bg-brand px-6 text-base font-semibold text-brand-foreground hover:opacity-95">
//               <span className="mr-2">Download App</span>
//               {/* download icon */}
//               <svg
//                 className="size-5"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 aria-hidden="true">
//                 <path
//                   d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
//                   stroke="currentColor"
//                   strokeWidth="1.8"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Right Column - Image */}
//       <div className="w-1/2 relative">
//         <img
//           src={hero} // Replace with the actual image path
//           alt="Father and daughter learning"
//           className="object-cover w-full h-full"
//         />
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
import hero from '../../public/hero.png';
import { Button } from './ui/button';

const LandingPage = () => {
  return (
    <div className="flex  flex-col-reverse lg:flex-row items-stretch min-h-[600px] lg:h-[80vh]">
      {/* Left Column - Text Content */}
      <div className="w-full lg:w-1/2 p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-r from-orange-50">
        <div className="max-w-3xl mx-auto lg:mx-0">
          <p className="mb-3 sm:mb-4 text-xs sm:text-base font-medium tracking-wide text-primary">
            Pay Education Fees Anytime, Anywhere
          </p>

          <h1 className="text-pretty text-secondary-foreground text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-semibold leading-tight">
            Simplifying Tuition & School
            <br className="hidden sm:block" />
            Fee Payments
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-[#414D48] font-normal ">
            Education builds personal growth, social progress, and economic
            development. Timely fee payments ensure uninterrupted learning. With
            our app, paying school, college, or institute fees is simple,
            secure, and instant.
          </p>

          <div className="mt-6 sm:mt-8 lg:mt-10">
            <Button className="h-10 sm:h-11 rounded-full bg-[#FF5500] px-5 sm:px-6 text-sm sm:text-base font-semibold text-secondary hover:opacity-95">
              <span className="mr-2">Download App</span>
              {/* download icon */}
              <svg
                className="size-4 sm:size-5"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true">
                <path
                  d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="w-full lg:w-1/2 relative min-h-[300px] sm:min-h-[400px] lg:min-h-0">
        <img
          src={hero}
          alt="Father and daughter learning"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default LandingPage;
