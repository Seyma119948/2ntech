import Catagories from "../componennts/catagories/Catagories";
import Header from "../componennts/Header/Header";
import Promotion from "../componennts/promotion/Promotion";
const Home = () => {
  return (
    <>
      <Header />
      <div
        className="home px-6 flex md:flex-row flex-col justify-between gap-10
   md:pb-0 pb-40"
      >
        <div
          className="catagories flex-1 overflow-auto max-h-[calc(100vh_-_112px)]
    md:pb-10  "
        >
          <Catagories />
        </div>
        <div className="promotion flex-[4] md:mr-[24px] md:pb-0 pb-50 max-h-[calc(100vh_-_112px)] overflow-y-auto pb-10">
          <Promotion />
        </div>
      </div>
    </>
  );
};

export default Home;
