import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import SubscriptionList from "./SubscriptionList";

const ManageSubscription = () => {
  return (
    <div className="py-3">
      {/* Subscribed Plan */}
      <div className="bg-white px-5 py-8 sm:p-6 rounded-lg transform transition-all relative">
        <h4 className="text-t-secondary text-base font-medium mb-2">Premium</h4>
        <h2 className="text-[18px] font-[700] text-t-primary">
          $29.00 per month
        </h2>
        <p className="mt-3 text-t-secondary text-[16px] font-[400]">
          Your subscription renews on Aug 28, 2024
        </p>

        {/* payment card */}
        <div className="mt-5 flex items-center gap-2">
          <div className="p-2 rounded-md border border-[#d6d6d64b]">
            <img
              src="/assets/images/icons/visa-ic.svg"
              className="w-10"
              alt="Visa"
            />
          </div>
          <p className="text-t-secondary text-sm font-[400]">
            <span>****</span> 4251
          </p>
        </div>

        <Link
          href="#"
          className="w-fit mt-5 flex items-center gap-2 py-2 px-3 text-center bg-white text-t-primary border border-[#C2C2C2] rounded-md text-[16px] font-medium  cursor-pointer "
        >
          <FiPlus /> Add payment method
        </Link>
      </div>
      {/* Subscription List */}
      <SubscriptionList />
    </div>
  );
};

export default ManageSubscription;
