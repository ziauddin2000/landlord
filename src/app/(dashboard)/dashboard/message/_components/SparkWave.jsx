const SparkWave = ({ playing }) => {
  const bars = [8, 16, 12, 20, 10, 18, 14, 22, 10, 16, 8, 20];
  return (
    <div className="flex items-end gap-[2px] h-6" style={{ width: "100px" }}>
      {bars.map((h, i) => (
        <div
          key={i}
          className={`flex-1 rounded bg-gray-400 transition-all duration-200
            ${playing ? "animate-wave" : ""}
          `}
          style={{
            height: `${h}px`,
            animationDelay: playing ? `${i * 0.1}s` : "0s",
            minWidth: "3px",
            maxWidth: "5px",
          }}
        />
      ))}
    </div>
  );
};

export default SparkWave;
