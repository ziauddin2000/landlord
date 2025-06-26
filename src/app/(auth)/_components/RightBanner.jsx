import Image from "next/image";

const RightBanner = () => {
  return (
    <div
      className="hidden md:flex w-1/2 items-center justify-center relative bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/auth-bg.png')" }}
    >
      <div className="absolute inset-0 bg-opacity-60 z-0"></div>
      <div className="z-10">
        <Image
          src="/assets/images/logo.svg"
          alt="Logo"
          height={250}
          width={120}
          className="object-contain
                      w-[120px] h-[250px]
                      lg:w-[175px] lg:h-[300px]"
          priority
        />
      </div>
    </div>
  );
};

export default RightBanner;
