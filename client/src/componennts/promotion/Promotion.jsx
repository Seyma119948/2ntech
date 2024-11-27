const Promotion = () => {
  return (
    <div className="promotion-wrapper_1 grid gap-3">
      <div className="promotion-item border hover:shadow-lg cursor-pointer transition-all select-none">
        <div className="promotion-img">
          <img
            src="https://findikli.meb.gov.tr/meb_iys_dosyalar/2019_11/04090956_okul.jpg"
            alt=""
            className="h-45 object-cover w-full border hover:shadow-lg cursor-pointer transition-all select-none-b"
          />
        </div>
        <div className="promotion-info">
          <span className="font-bold">
            Anıtkabir'e Düzenlediğimiz Gezimiz...
          </span>
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
              src="data:image/jpeg;base64,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"
              alt=""
              className="h-50 object-cover  border hover:shadow-lg cursor-pointer transition-all select-none"
            />
          </div>
          <div className="promotion-info">
            <span className="font-bold">Şubat Ayı Piknik Etkinliğimiz...</span>
          </div>
        </div>
        <div className="promotion-item border hover:shadow-lg cursor-pointer transition-all select-none">
          <div className="promotion-img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF3dFN11w410FLzj3VAkz6iIGV9a3YmjLtkg&s"
              alt=""
              className="h-50 object-cover  border hover:shadow-lg cursor-pointer transition-all select-none"
            />
          </div>
          <div className="promotion-info">
            <span className="font-bold">
              Ekim Ayında Düzenlenen Santranç Turnuvamız...
            </span>
          </div>
        </div>
        <div className="promotion-item border hover:shadow-lg cursor-pointer transition-all">
          <div className="promotion-img">
            <img
              src="https://acarlarfsm.meb.k12.tr/meb_iys_dosyalar/09/06/421602/resimler/2019_11/k_12140548_unnamed_1.jpg"
              alt=""
              className="h-50 object-cover  border-b"
            />
          </div>
          <div className="promotion-info">
            <span className="font-bold">2024 Fidan Dikimi...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
