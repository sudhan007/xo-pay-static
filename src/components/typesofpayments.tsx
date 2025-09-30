const TypesOfPayments = () => {
  return (
    <div className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto  px-10 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-secondary-foreground  mb-2">
          Types Of Education Payments
        </h2>
        <p className="text-muted mb-8">Make Real-Time Payments For</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-evenly gap-4 ">
          {/* School Fees */}
          <div className="bg-[#F7F8F8]  justify-center px-4 py-2 rounded-lg  flex items-center space-x-2 hover:bg-orange-50 transition">
            <span className="text-orange-600 text-2xl">📚</span>{' '}
            {/* Replace with actual icon */}
            <span className="text-primary font-normal">School Fees</span>
          </div>

          {/* College Fees */}
          <div className="bg-[#F7F8F8]    justify-center  px-4 py-2 rounded-lg  flex items-center space-x-2 hover:bg-orange-50 transition">
            <span className="text-orange-600 text-2xl">🎓</span>{' '}
            {/* Replace with actual icon */}
            <span className="text-primary font-normal">College Fees</span>
          </div>

          {/* Coaching Fees */}
          <div className="bg-[#F7F8F8] px-4 py-2    justify-center  rounded-lg  flex items-center space-x-2 hover:bg-orange-50 transition">
            <span className="text-orange-600 text-2xl">👨‍🏫</span>{' '}
            {/* Replace with actual icon */}
            <span className="text-primary font-normal">Coaching Fees</span>
          </div>

          {/* Admission Fees */}
          <div className="bg-[#F7F8F8] px-4 py-2   justify-center  rounded-lg  flex items-center space-x-2 hover:bg-orange-50 transition">
            <span className="text-orange-600 text-2xl">📋</span>{' '}
            {/* Replace with actual icon */}
            <span className="text-primary font-normal">Admission Fees</span>
          </div>

          {/* Institute Fees */}
          <div className="bg-[#F7F8F8] px-4 py-2   justify-center  rounded-lg  flex items-center space-x-2 hover:bg-orange-50 transition">
            <span className="text-orange-600 text-2xl">🏢</span>{' '}
            {/* Replace with actual icon */}
            <span className="text-primary font-normal">Institute Fees</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypesOfPayments;
