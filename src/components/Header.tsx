import { IoMdNotificationsOutline } from "react-icons/io";

const Header = () => {
  return (
    <header className="flex justify-between items-center h-20 w-full shadow-md z-10 px-6">
      {/* <Image
        src=""
        alt="No Logo"
        height={100}
        width={100}
        className="h-10 w-10"
      /> */}
      <div className="h-10 w-10 test" />

      <div className="flex gap-3 items-center">
        <IoMdNotificationsOutline />
        <div className="rounded-full h-6 w-6 border border-blue-300"></div>
        <span className="text-base font-semibold">John Carter</span>
      </div>
    </header>
  );
};

export default Header;
