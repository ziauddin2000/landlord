const EmptyMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 h-full">
      <img
        src="../../../../../../assets/images/icons/chat-gray-ic.svg"
        alt="Chat Icon"
        className="w-[120px] h-[120px]"
      />
      <h2 className="text-xl font-semibold text-t-secondary">No message yet</h2>
      <p className="text-sm text-t-secondary">
        Start the conversation by sending a message
      </p>
    </div>
  );
};

export default EmptyMessage;
