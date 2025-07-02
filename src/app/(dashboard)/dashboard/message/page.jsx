import ChatBox from "./_components/ChatBox";
import EmptyMessage from "./_components/EmptyMessage";
import RecentChat from "./_components/RecentChat";
import SearchUser from "./_components/SearchUser";

const Message = () => {
  return (
    <div className="px-3 py-4 sm:px-4 sm:py-4 lg:px-7 lg:py-4 bg-[#f5f5f5] min-h-screen">
      <div className="py-3">
        <h2 className="text-[#707070] font-medium text-base">Messages</h2>
      </div>

      <div className="grid grid-cols-12 gap-4 py-3 lg:h-[80vh]">
        <div className="col-span-12 lg:col-span-5 xl:col-span-4 bg-white rounded-md py-8 px-4 xl:px-8 h-full overflow-y-auto chat-list">
          <SearchUser></SearchUser>
          <RecentChat></RecentChat>
        </div>
        <div className="hidden lg:block col-span-12 lg:col-span-7 xl:col-span-8 bg-white rounded-md h-full overflow-y-auto">
          {/* If empty or no profile select for chat show empty message */}
          {/* <EmptyMessage></EmptyMessage> */}
          <ChatBox></ChatBox>
        </div>
      </div>
    </div>
  );
};

export default Message;
