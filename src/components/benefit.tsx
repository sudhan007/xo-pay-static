import phoneImage from '../../public/mobilemockup.png';

const BenefitsSection = () => {
  const leftBenefits = [
    {
      icon: (
        <svg
          className="w-10 h-10 sm:w-12 sm:h-12"
          viewBox="0 0 24 24"
          fill="currentColor">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.54-.93-6-4.82-6-9V8.3l6-3.11 6 3.11V11c0 4.18-2.46 8.07-6 9z" />
          <path d="M9 12h2v5H9zm4-3h2v8h-2z" />
        </svg>
      ),
      title: '18,000+ Institutions Covered',
      description: 'Pay Directly To Schools, Colleges, And Institutes.',
    },
    {
      icon: (
        <svg
          className="w-10 h-10 sm:w-12 sm:h-12"
          viewBox="0 0 24 24"
          fill="currentColor">
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
          <circle
            cx="9"
            cy="12"
            r="8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      title: 'Multi-Child Tracking',
      description: 'Manage Multiple Fee Payments Easily.',
    },
  ];

  const rightBenefits = [
    {
      icon: (
        <svg
          className="w-10 h-10 sm:w-12 sm:h-12"
          viewBox="0 0 24 24"
          fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
        </svg>
      ),
      title: 'Low Service Fee',
      description:
        'Convenient And Affordable Payment Charges Compared To Other Payment Platforms.',
    },
    {
      icon: (
        <svg
          className="w-10 h-10 sm:w-12 sm:h-12"
          viewBox="0 0 24 24"
          fill="currentColor">
          <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          <path
            d="M13 17.5l4-4-1.41-1.41L13 14.67l-2.59-2.58L9 13.5l4 4z"
            transform="translate(0 -3)"
          />
        </svg>
      ),
      title: 'Fast, Safe & Secure',
      description: 'Industry-Standard Security With Instant Processing.',
    },
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl px-2  md:mx-auto  sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-3 sm:mb-4 leading-normal  md:leading-relaxed">
            Benefits Of Paying Education
            <br />
            Fees On Xopay
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted font-normal">
            Convenient, Secure, And Hassle-Free Payments
          </p>
        </div>

        {/* Benefits Grid - Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
          {/* Left Benefits */}
          <div className="space-y-12">
            {leftBenefits.map((benefit, index) => (
              <div key={index} className="text-left">
                <div className="flex justify-start mb-4">
                  <div className="text-orange-500">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-secondary-foreground mb-2 ">
                  {benefit.title}
                </h3>
                <p className="text-muted">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Center Phone Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={phoneImage}
                alt="Xopay Mobile App"
                className="w-full max-w-sm drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right Benefits */}
          <div className="space-y-12">
            {rightBenefits.map((benefit, index) => (
              <div key={index} className="text-left">
                <div className="flex justify-start mb-4">
                  <div className="text-orange-500">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-secondary-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden">
          {/* Phone Image */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <img
              src={phoneImage}
              alt="Xopay Mobile App"
              className="w-64 sm:w-80 drop-shadow-2xl"
            />
          </div>

          {/* All Benefits in Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {[...leftBenefits, ...rightBenefits].map((benefit, index) => (
              <div key={index} className="text-center sm:text-left">
                <div className="flex justify-center sm:justify-start mb-3 sm:mb-4">
                  <div className="text-orange-500">{benefit.icon}</div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
