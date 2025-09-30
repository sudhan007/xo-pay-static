import phoneImage from '@/assets/mobilemockup.png';

const BenefitsSection = () => {
  const leftBenefits = [
    {
      icon: (
        <div className="p-3 rounded-lg bg-white ">
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M28.5808 17.935C28.5575 12.5892 28.36 8.6075 28.1708 5.9825C28.0788 4.61993 27.5027 3.33515 26.5466 2.36004C25.5904 1.38494 24.3172 0.783752 22.9567 0.665C20.7067 0.456667 17.6592 0.25 14.4167 0.25C11.1917 0.25 8.15833 0.454167 5.9125 0.661667C4.54321 0.783571 3.26252 1.39063 2.30129 2.3734C1.34005 3.35618 0.761529 4.65001 0.67 6.02167C0.466667 8.87167 0.25 13.2533 0.25 19C0.25 26.7092 0.445 32.3775 0.556667 34.9808C0.588933 35.7273 0.908609 36.4323 1.44881 36.9484C1.98901 37.4646 2.70787 37.7518 3.455 37.75H33.8275C34.7884 37.7527 35.713 37.3829 36.407 36.7183C37.101 36.0537 37.5104 35.146 37.5492 34.1858C37.6383 31.9358 37.75 28.325 37.75 24.4167C37.75 21.4117 37.6183 18.7058 37.4767 16.6617C37.2767 13.7817 35.0333 11.4967 32.135 11.295C31.7606 11.2694 31.365 11.2444 30.9483 11.22C31.0283 13.4142 31.0833 16.0067 31.0833 19C31.0833 24.8417 30.9792 29.3767 30.8792 32.375C30.8682 32.7012 30.7301 33.0101 30.4944 33.2358C30.2587 33.4615 29.9441 33.5861 29.6178 33.5829C29.2915 33.5798 28.9793 33.4491 28.748 33.2189C28.5167 32.9887 28.3847 32.6771 28.38 32.3508C28.5224 27.902 28.5902 23.4511 28.5833 19C28.5833 18.6389 28.5825 18.2839 28.5808 17.935ZM9.83333 7.33333C10.2754 7.33333 10.6993 7.50893 11.0118 7.82149C11.3244 8.13405 11.5 8.55797 11.5 9V10.6667C11.5 11.1087 11.3244 11.5326 11.0118 11.8452C10.6993 12.1577 10.2754 12.3333 9.83333 12.3333C9.39131 12.3333 8.96738 12.1577 8.65482 11.8452C8.34226 11.5326 8.16667 11.1087 8.16667 10.6667V9C8.16667 8.55797 8.34226 8.13405 8.65482 7.82149C8.96738 7.50893 9.39131 7.33333 9.83333 7.33333ZM11.5 18.1667C11.5 17.7246 11.3244 17.3007 11.0118 16.9882C10.6993 16.6756 10.2754 16.5 9.83333 16.5C9.39131 16.5 8.96738 16.6756 8.65482 16.9882C8.34226 17.3007 8.16667 17.7246 8.16667 18.1667V19.8333C8.16667 20.2754 8.34226 20.6993 8.65482 21.0118C8.96738 21.3244 9.39131 21.5 9.83333 21.5C10.2754 21.5 10.6993 21.3244 11.0118 21.0118C11.3244 20.6993 11.5 20.2754 11.5 19.8333V18.1667ZM19 7.33333C19.442 7.33333 19.8659 7.50893 20.1785 7.82149C20.4911 8.13405 20.6667 8.55797 20.6667 9V10.6667C20.6667 11.1087 20.4911 11.5326 20.1785 11.8452C19.8659 12.1577 19.442 12.3333 19 12.3333C18.558 12.3333 18.134 12.1577 17.8215 11.8452C17.5089 11.5326 17.3333 11.1087 17.3333 10.6667V9C17.3333 8.55797 17.5089 8.13405 17.8215 7.82149C18.134 7.50893 18.558 7.33333 19 7.33333ZM20.6667 18.1667C20.6667 17.7246 20.4911 17.3007 20.1785 16.9882C19.8659 16.6756 19.442 16.5 19 16.5C18.558 16.5 18.134 16.6756 17.8215 16.9882C17.5089 17.3007 17.3333 17.7246 17.3333 18.1667V19.8333C17.3333 20.2754 17.5089 20.6993 17.8215 21.0118C18.134 21.3244 18.558 21.5 19 21.5C19.442 21.5 19.8659 21.3244 20.1785 21.0118C20.4911 20.6993 20.6667 20.2754 20.6667 19.8333V18.1667ZM14.8333 25.25C13.9358 25.25 13.2167 25.3042 12.6458 25.3833C11.1575 25.5883 10.37 26.8625 10.3158 28.2375C10.2677 29.6022 10.2457 30.9678 10.25 32.3333C10.25 33.3108 10.2583 34.14 10.2708 34.8417C10.273 34.9507 10.3179 35.0546 10.3958 35.1309C10.4737 35.2073 10.5784 35.25 10.6875 35.25H18.9792C19.0882 35.25 19.193 35.2073 19.2709 35.1309C19.3488 35.0546 19.3937 34.9507 19.3958 34.8417C19.4083 34.14 19.4167 33.3108 19.4167 32.3333C19.4167 30.4808 19.3875 29.1617 19.3508 28.2375C19.2967 26.8625 18.5092 25.5883 17.0208 25.3833C16.2956 25.2884 15.5647 25.2439 14.8333 25.25Z"
              fill="#FF5500"
            />
          </svg>
        </div>
      ),
      title: '18,000+ Institutions Covered',
      description: 'Pay directly to schools, colleges, and institutes.',
    },
    {
      icon: (
        <div className="p-3 rounded-lg bg-white ">
          <svg
            width="36"
            height="42"
            viewBox="0 0 36 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M35.5 6.89502L18 0.77002L0.5 6.89502V21C0.5 28.2223 4.9345 33.271 9.068 36.4053C11.5636 38.2785 14.3009 39.8061 17.2055 40.9465C17.4038 41.0212 17.6033 41.0924 17.804 41.16L18 41.23L18.1995 41.16C18.5821 41.0271 18.9614 40.8847 19.337 40.733C22.042 39.6185 24.5942 38.1643 26.932 36.4053C31.0672 33.271 35.5 28.2223 35.5 21V6.89502ZM16.2518 26.9763L8.83 19.551L11.3045 17.0748L16.2535 22.0255L26.1533 12.1258L28.6295 14.6003L16.2518 26.9763Z"
              fill="#FF5500"
            />
          </svg>
        </div>
      ),
      title: 'Multi-Child Tracking',
      description: 'Manage Multiple Fee Payments Easily.',
    },
  ];

  const rightBenefits = [
    {
      icon: (
        <div className="p-3 rounded-lg bg-white ">
          <svg
            width="36"
            height="42"
            viewBox="0 0 36 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M35.5 6.89502L18 0.77002L0.5 6.89502V21C0.5 28.2223 4.9345 33.271 9.068 36.4053C11.5636 38.2785 14.3009 39.8061 17.2055 40.9465C17.4038 41.0212 17.6033 41.0924 17.804 41.16L18 41.23L18.1995 41.16C18.5821 41.0271 18.9614 40.8847 19.337 40.733C22.042 39.6185 24.5942 38.1643 26.932 36.4053C31.0672 33.271 35.5 28.2223 35.5 21V6.89502ZM16.2518 26.9763L8.83 19.551L11.3045 17.0748L16.2535 22.0255L26.1533 12.1258L28.6295 14.6003L16.2518 26.9763Z"
              fill="#FF5500"
            />
          </svg>
        </div>
      ),
      title: 'Low Service Fee',
      description:
        'Convenient And Affordable Payment Charges Compared To Other Payment Platforms.',
    },
    {
      icon: (
        <div className="p-3 rounded-lg bg-white ">
          <svg
            width="18"
            height="36"
            viewBox="0 0 18 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.25 0.5V19.75H5.5V35.5L17.75 14.5H10.75L17.75 0.5H0.25Z"
              fill="#FF5500"
            />
          </svg>
        </div>
      ),
      title: 'Fast, Safe & Secure',
      description: 'Industry-Standard Security With Instant Processing.',
    },
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl px-2  md:mx-auto  sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-3 sm:mb-4 leading-normal  md:leading-relaxed">
            Benefits Of Paying Education
            <br />
            Fees On Xopay
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted font-normal">
            We provide a reliable and rewarding experience for students and
            parents
          </p>
        </div>

        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
          <div className="space-y-12">
            {leftBenefits.map((benefit, index) => (
              <div key={index} className="text-left">
                <div className="flex justify-start mb-4">
                  <div className="text-orange-500">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-medium text-secondary-foreground mb-2 ">
                  {benefit.title}
                </h3>
                <p className="text-muted">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <img
                src={phoneImage}
                alt="Xopay Mobile App"
                className="w-full max-w-sm drop-shadow-2xl"
              />
            </div>
          </div>

          <div className="space-y-12">
            {rightBenefits.map((benefit, index) => (
              <div key={index} className="text-left">
                <div className="flex justify-start mb-4">
                  <div className="text-orange-500">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-medium text-secondary-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:hidden">
          <div className="flex justify-center mb-8 sm:mb-12">
            <img
              src={phoneImage}
              alt="Xopay Mobile App"
              className="w-64 sm:w-80 drop-shadow-2xl"
            />
          </div>

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
