import { useNavigate } from "react-router-dom";
import "./style.css";

const Catagories = () => {
  //const onFinish = () => {};
  const navigate = useNavigate();
  return (
    <ul className="flex gap-4 md:flex-col text-10">
      <li className="category-item" onClick={() => navigate("/classes")}>
        <span>SINIFLARIMIZ</span>
      </li>
      <li className="category-item" onClick={() => navigate("/teachers")}>
        <span>ÖĞRETMEN KADROMUZ</span>
      </li>

      <li
        className="category-item"
        onClick={() => navigate("/administrations")}
      >
        <span>İDARİ KADROMUZ</span>
      </li>
    </ul>
  );
};
export default Catagories;
