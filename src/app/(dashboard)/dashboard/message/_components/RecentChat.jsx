import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const RecentChat = () => {
  const chatData = [
    {
      id: 1,
      type: "Tenant",
      image: "https://github.com/shadcn.png",
      name: "John Doe",
      message: "Lorem ipsum dolor sit amet...",
      time: "Now",
      unread: 1,
    },
    {
      id: 2,
      type: "Vendor",
      image: "https://github.com/shadcn.png",
      name: "John Doe",
      message: "Lorem ipsum dolor sit amet...",
      time: "Now",
      unread: 1,
    },
    {
      id: 3,
      type: "Investor",
      image: "https://github.com/shadcn.png",
      name: "John Doe",
      message: "Lorem ipsum dolor sit amet...",
      time: "5 min",
      unread: 0,
    },
    {
      id: 4,
      type: "Tenant",
      image: "https://github.com/shadcn.png",
      name: "John Doe",
      message: "Lorem ipsum dolor sit amet...",
      time: "5 min",
      unread: 0,
    },
    {
      id: 5,
      type: "Vendor",
      image: "https://github.com/shadcn.png",
      name: "John Doe",
      message: "Lorem ipsum dolor sit amet...",
      time: "Now",
      unread: 1,
    },
    {
      id: 6,
      type: "Investor",
      image: "https://github.com/shadcn.png",
      name: "John Doe",
      message: "Lorem ipsum dolor sit amet...",
      time: "5 min",
      unread: 0,
    },
    {
      id: 7,
      type: "Tenant",
      image: "https://github.com/shadcn.png",
      name: "John Doe",
      message: "Lorem ipsum dolor sit amet...",
      time: "Now",
      unread: 1,
    },
    {
      id: 8,
      type: "Vendor",
      image: "https://github.com/shadcn.png",
      name: "John Doe",
      message: "Lorem ipsum dolor sit amet...",
      time: "Now",
      unread: 1,
    },
    {
      id: 9,
      type: "Investor",
      image: "https://github.com/shadcn.png",
      name: "John Doe",
      message: "Lorem ipsum dolor sit amet...",
      time: "5 min",
      unread: 0,
    },
    {
      id: 10,
      type: "Tenant",
      image: "https://github.com/shadcn.png",
      name: "John Doe",
      message: "Lorem ipsum dolor sit amet...",
      time: "Now",
      unread: 1,
    },
  ];

  return (
    <div className="pt-8">
      <h2 className="text-lg font-medium text-t-primary">Recent Chat</h2>

      <Tabs defaultValue="Tenant" className="py-3">
        <TabsList className="w-full h-[50px]">
          <TabsTrigger value="Tenant" className="cursor-pointer">
            Tenant
          </TabsTrigger>
          <TabsTrigger value="Vendor" className="cursor-pointer">
            Vendor
          </TabsTrigger>
          <TabsTrigger value="Investor" className="cursor-pointer">
            Investor
          </TabsTrigger>
        </TabsList>
        {/* Tenant */}
        <TabsContent value="Tenant">
          <div className="space-y-3 mt-2">
            {/*  Chat Profile */}
            {chatData
              .filter((chat) => chat.type === "Tenant")
              .map((chat) => (
                <div
                  key={chat.id}
                  className="flex justify-between items-center gap-2 border border-[#EDEDED] py-3 px-4 rounded-lg cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={chat.image}
                      className="h-[60px] w-[60px] rounded-full"
                      alt="Profile Image"
                    />
                    <div>
                      <h4 className="text-base font-medium text-t-primary">
                        {chat.name}
                      </h4>
                      <p className="text-t-primary text-sm">
                        {chat.message.length > 20
                          ? chat.message.substring(0, 20) + "..."
                          : chat.message}
                      </p>
                    </div>
                  </div>
                  <div className="text-center flex items-center flex-col justify-center gap-2">
                    <p className="text-sm text-t-secondary font-medium">
                      {chat.time}
                    </p>
                    {chat.unread > 0 && (
                      <div className="h-[22px] w-[22px] bg-primary text-white flex items-center justify-center rounded-full text-xs font-normal">
                        {chat.unread}
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </TabsContent>
        {/* Vendor */}
        <TabsContent value="Vendor">
          <div className="space-y-3 mt-2">
            {/*  Chat Profile */}
            {chatData
              .filter((chat) => chat.type === "Vendor")
              .map((chat) => (
                <div
                  key={chat.id}
                  className="flex justify-between items-center gap-2 border border-[#EDEDED] py-3 px-4 rounded-lg cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={chat.image}
                      className="h-[60px] w-[60px] rounded-full"
                      alt="Profile Image"
                    />
                    <div>
                      <h4 className="text-base font-medium text-t-primary">
                        {chat.name}
                      </h4>
                      <p className="text-t-primary text-sm">
                        {chat.message.length > 20
                          ? chat.message.substring(0, 20) + "..."
                          : chat.message}
                      </p>
                    </div>
                  </div>
                  <div className="text-center flex items-center flex-col justify-center gap-2">
                    <p className="text-sm text-t-secondary font-medium">
                      {chat.time}
                    </p>
                    {chat.unread > 0 && (
                      <div className="h-[22px] w-[22px] bg-primary text-white flex items-center justify-center rounded-full text-xs font-normal">
                        {chat.unread}
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </TabsContent>
        {/* Investor */}
        <TabsContent value="Investor">
          <div className="space-y-3 mt-2">
            {/*  Chat Profile */}
            {chatData
              .filter((chat) => chat.type === "Investor")
              .map((chat) => (
                <div
                  key={chat.id}
                  className="flex justify-between items-center gap-2 border border-[#EDEDED] py-3 px-4 rounded-lg cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={chat.image}
                      className="h-[60px] w-[60px] rounded-full"
                      alt="Profile Image"
                    />
                    <div>
                      <h4 className="text-base font-medium text-t-primary">
                        {chat.name}
                      </h4>
                      <p className="text-t-primary text-sm">
                        {chat.message.length > 20
                          ? chat.message.substring(0, 20) + "..."
                          : chat.message}
                      </p>
                    </div>
                  </div>
                  <div className="text-center flex items-center flex-col justify-center gap-2">
                    <p className="text-sm text-t-secondary font-medium">
                      {chat.time}
                    </p>
                    {chat.unread > 0 && (
                      <div className="h-[22px] w-[22px] bg-primary text-white flex items-center justify-center rounded-full text-xs font-normal">
                        {chat.unread}
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RecentChat;
