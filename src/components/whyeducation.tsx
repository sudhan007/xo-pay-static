import phoneImage from '../../public/mobile-hand.png';

const WhyPaySection = () => {
  const features = [
    {
      text: 'Simple & User-Friendly',
    },
    {
      text: 'Timely Reminders',
    },
    {
      text: 'Make Payment Anytime, Anywhere',
    },
    {
      text: 'Digital Records',
    },
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
          {/* Left - Phone Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative max-w-xs sm:max-w-sm lg:max-w-md">
              <img
                src={phoneImage}
                alt="Education Payment App"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-secondary-foreground  mb-3 sm:mb-4 leading-normal  md:leading-relaxed">
              Why Pay Education Fees
              <br />
              Through Our App?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 lg:mb-10">
              Convenient, Secure, And Hassle-Free Payments
            </p>

            {/* Features List */}
            <div className="space-y-4 sm:space-y-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center justify-start lg:justify-start gap-3 sm:gap-4">
                  {/* Check Icon */}
                  <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-green-500 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-base sm:text-base lg:text-xl font-semibold text-gray-800">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPaySection;
