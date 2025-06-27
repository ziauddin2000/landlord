import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
const InvestmentChart = ({ chartData }) => {
  return (
    <>
      {/* Tabs */}
      <div className="flex justify-center md:justify-start gap-2 mb-2">
        {["D", "W", "M", "Y"].map((label) => (
          <button
            key={label}
            className={`px-3 py-1 border rounded-sm text-[16px] font-[500] cursor-pointer ${
              label === "Y"
                ? "bg-white border border-primary text-primary font-semibold"
                : "border-gray-200 text-t-secondary"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Chart */}
      <ResponsiveContainer
        width="100%"
        height={200}
        className="text-[12px] mt-5"
      >
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#FF9900"
            strokeWidth={1}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default InvestmentChart;
