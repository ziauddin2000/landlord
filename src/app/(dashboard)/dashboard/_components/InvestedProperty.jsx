const InvestedProperty = ({ item, onViewDetails }) => {
  return (
    <div className="rounded-xl border border-[#E5E5E5] p-4 mb-4">
      <div className="flex items-center gap-3 mb-2">
        <img
          src={item.image}
          alt={item.name}
          className="w-14 h-14 rounded-md object-cover"
        />
        <div>
          <div className="font-[500] text-[18px] text-t-primary">
            {item.name}
          </div>
          <div className="text-[14px] text-t-secondary">{item.startDate}</div>
        </div>
        {item.status === "Active" ? (
          <span className="ml-auto bg-[#E6F0FF] text-[#0065FF] font-[500] px-3 py-1 rounded text-[14px]">
            {item.status}
          </span>
        ) : (
          <span className="ml-auto bg-[#CDFDC6] text-[#04A755] font-[500] px-3 py-1 rounded text-[14px]">
            {item.status}
          </span>
        )}
      </div>
      {/* progress bar */}
      {item.isInvested && (
        <div className="border border-[#F0F0F0] rounded-lg p-3 my-3">
          <div className="flex justify-between text-[14px] font-[500] text-t-secondary mb-1">
            <span>({item.totalFunded})</span>
            <span>{item.fundedLimit}</span>
          </div>
          <div className="w-full bg-[#F0F0F0] h-2 rounded-full mb-2">
            <div
              className="bg-primary h-2 rounded-full"
              style={{ width: "100%" }}
            ></div>
          </div>
          <div className="flex flex-wrap items-center justify-between mt-2">
            <span className="text-[14px] font-[500] text-t-secondary">
              {item.funded}% Funded
            </span>
            <div className="flex items-center bg-white border border-[#E5E5E5] rounded-full px-3 py-1">
              <div className="flex -space-x-2">
                {item.investorsImage.map((image, index) => {
                  return (
                    <img
                      src={image}
                      key={index}
                      className="w-7 h-7 rounded-full border-2 border-white"
                    />
                  );
                })}
              </div>
              <span className="text-[14px] font-[500] text-t-secondary ml-2">
                {item.investors} Investors
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center my-3">
        <span className="text-[16px] text-t-primary font-[500]">
          Investment Amount
        </span>
        <span className="text-[16px] text-t-primary font-[500]">
          {item.investmentAmount}
        </span>
      </div>
      <button
        className="w-full border border-[#E5E5E5] rounded-lg py-2 text-[16px] font-[500] text-t-primary hover:bg-[#F5F5F5] cursor-pointer"
        onClick={() => onViewDetails(item.id)}
      >
        View Details
      </button>
    </div>
  );
};

export default InvestedProperty;
