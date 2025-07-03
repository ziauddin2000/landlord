import Link from "next/link";
import { CiGift } from "react-icons/ci";
import Plans from "./Plans";

const ChoosePlan = () => {
  return (
    <div className="py-3">
      {/* Premium Trial */}
      <div className="bg-white px-5 py-8 sm:p-6 rounded-lg max-w-3xl w-[90%] transform transition-all relative">
        <h2 className="flex items-start sm:items-center gap-2">
          <CiGift className="text-[30px]" />
          <span className="text-[18px] font-[700] text-t-primary">
            You're currently on a Premium Trial
          </span>
        </h2>

        <p className="mt-3 text-t-secondary text-[16px] font-[400]">
          Your trial ends in 14 days. Upgrade now to avoid losing access to
          premium features like investment tools and full maintenance control.
        </p>

        <Link
          href="#"
          className="mt-5 inline-block py-2 px-3 text-center bg-primary hover:bg-[#c77700] hover:text-white rounded-md text-[16px] font-medium text-white  cursor-pointer "
        >
          Upgrade Now
        </Link>
      </div>
      {/* Subscription Plans */}
      <Plans></Plans>
    </div>
  );
};

export default ChoosePlan;
