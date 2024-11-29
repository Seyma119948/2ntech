const Promotion = () => {
  return (
    <div className="promotion-wrapper_1 grid gap-3">
      <div className="promotion-item border hover:shadow-lg cursor-pointer transition-all select-none">
        <div className="promotion-img">
          <img
            src="https://image.hurimg.com/i/hurriyet/75/0x0/5eefa44d67b0a819bc19af4f.jpg"
            alt=""
            className="h-45 object-cover w-full border hover:shadow-lg cursor-pointer transition-all select-none-b"
          />
        </div>
        <div className="promotion-info">
          <span className="font-bold">Kamp Etkinliğimiz...</span>
        </div>
      </div>
      <div
        className="promotion-wrapper_2 grid gap-3"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr)",
        }}
      >
        <div className="promotion-item border hover:shadow-lg cursor-pointer transition-all select-none">
          <div className="promotion-img">
            <img
              src="https://s1.dmcdn.net/v/SkD-c1W4WN87Gh_7b/x1080"
              alt=""
              className="h-50 object-cover  border hover:shadow-lg cursor-pointer transition-all select-none"
            />
          </div>
          <div className="promotion-info">
            <span className="font-bold">Yıl Sonu Gösterisi..</span>
          </div>
        </div>
        <div className="promotion-item border hover:shadow-lg cursor-pointer transition-all select-none">
          <div className="promotion-img">
            <img
              src="https://media-cdn.t24.com.tr/media/stories/2015/04/raw_turkiye-okulu-kirmada-bir-numara_223493827.jpg"
              alt=""
              className="h-50 object-cover  border hover:shadow-lg cursor-pointer transition-all select-none"
            />
          </div>
          <div className="promotion-info">
            <span className="font-bold">Fulbol Maçı Etkinliği...</span>
          </div>
        </div>
        <div className="promotion-item border hover:shadow-lg cursor-pointer transition-all">
          <div className="promotion-img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe2Km9t0JMx_tKKjb6zM3TscnXrx48v7lZvA&s"
              className="h-50 object-cover  border-b"
            />
          </div>
          <div className="promotion-info">
            <span className="font-bold">Okul Fotoğrafımız...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
