const InvestmentReturn = ({ investmentReturnData }) => {
  let investmentReturn = investmentReturnData[0];

  return (
    <div className="bg-[#f8f8f8] rounded-xl p-6 flex flex-col items-center justify-center text-center space-y-5 col-span-1 sm:col-span-5">
      <div>
        <p className="text-[16px] text-t-secondary font-[500]">
          Total Investment Return
        </p>
        <h2 className="text-[32px] font-[700] text-t-primary">
          {investmentReturn.total}
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-2 text-[16px] font-[500]">
          <img
            src="/assets/images/icons/graph-green.svg"
            alt="graph"
            className="w-[30px]"
          />
          <p className="text-[#04A755]">{investmentReturn.return}</p>
          <p>Monthly return</p>
        </div>
      </div>
      <button className="bg-[#DE8704] text-white text-[16px] py-2 px-4 rounded-md hover:bg-[#c77700] w-fit flex items-center gap-1 cursor-pointer">
        <img
          src="/assets/images/icons/withdraw-ic.svg"
          alt="withdraw"
          className="w-[20px]"
        />
        <span>Withdraw</span>
      </button>
    </div>
  );
};

export default InvestmentReturn;
