import { Input } from "antd";
import { SearchOutlined, HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="border-b mb-6">
      <header className="py-4 px-6 flex justify-between items-center gap-10">
        <div className="logo">
          <a href="/">
            <h2 className="text-2xl font-bold md:text-4xl">ATA İLKOKULU</h2>
          </a>
        </div>
        <div className="header-search flex-1 flex justify-center">
          <Input
            size="large"
            placeholder="..."
            prefix={<SearchOutlined />}
            className="rounded-full max-w-[800px]"
          />
        </div>
        <div
          className="menu-links flex justify-between 
        items-center gap-7 md:static fixed z-50 bottom-0 md:w-auto w-screen md:bg-transparent bg-white
        left-0 md:border-t-0 border-t md:px-0 px-4 py-1"
        >
          <Link
            to={"/"}
            className="menu-link flex flex-col hover:text-[#40a9ff] 
            transition-all"
          >
            <HomeOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Ana Sayfa</span>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
