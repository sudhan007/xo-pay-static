import process1 from '@/assets/process1.png';
import process2 from '@/assets/process2.png';
import process3 from '@/assets/process3.png';
import process4 from '@/assets/process4.png';

const HowToPay = () => {
  return (
    <div className=" py-8  md:py-12 px-4 bg-gray-50">
      <div className="w-full  text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-secondary-foreground mb-2 leading-normal  md:leading-relaxed">
          How To Pay Education Fee On
          <br className="hidden md:block" />
          &nbsp; Xopay?
        </h2>
        <p className="text-muted font-[350] mb-8">
          Convenient, Secure, And Hassle-Free Payments
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  md:gap-16">
          <div className="flex flex-col items-center p-4 ">
            <div className="">
              <img src={process1} className="h-[200px]" />
            </div>
            <p className="text-gray-800 font-medium pt-4">
              Select "Education Fees" On Home Screen
            </p>
          </div>

          <div className="flex flex-col items-center p-4 ">
            <div className="">
              <img src={process2} className="h-[200px]" />
            </div>
            <p className="text-gray-800 font-medium pt-4">
              Select "Education Fees" On Home Screen
            </p>
          </div>

          <div className="flex flex-col items-center p-4 ">
            <div className="">
              <img src={process3} className="h-[200px]" />
            </div>
            <p className="text-gray-800 font-medium pt-4">
              Select "Education Fees" On Home Screen
            </p>
          </div>

          <div className="flex flex-col items-center p-4 ">
            <div className="">
              <img src={process4} className="h-[200px]" />
            </div>
            <p className="text-gray-800 font-medium pt-4">
              Select "Education Fees" On Home Screen
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPay;
