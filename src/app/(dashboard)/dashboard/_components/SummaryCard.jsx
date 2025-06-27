const SummaryCard = ({ item }) => {
  return (
    <div className="bg-[#f5f5f5] rounded-xl py-6 px-5 flex flex-row sm:flex-col md:flex-row items-center gap-5 sm:w-[33%] xl:w-full">
      <div className="bg-[#fff] p-3 rounded-md">
        <img
          src={item.icon}
          alt="icon"
          className="min-w-8 h-8 md:min-w-6 md:h-6 lg:min-w-8 lg:h-8"
        />
      </div>
      <div className="sm:text-center md:text-left">
        <h4 className="text-[24px] font-[700] text-t-primary">{item.value}</h4>
        <p className="text-[16px] text-t-secondary"> {item.name}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
