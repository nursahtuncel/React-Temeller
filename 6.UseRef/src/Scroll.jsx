import React, { useRef } from "react";

const Scroll = () => {
  const topRef = useRef(null);

  const upToTop = () => {
    topRef.current.scrollIntoView();
  };

  return (
    <div>
      <p>
        <b>Açıklama:</b> Sayfanın en aşşağısına kaydırmış olan kullanıcıyı
        yukarı geri göndermek için useRef'le yönlendirmek istedğimiz elemanı
        seçeriz.
      </p>
      <h3 ref={topRef}>Sayfanın Başı</h3>
      {new Array(50).fill(1).map((item, key) => (
        <div
          style={{ padding: "8px", border: "1px solid red", margin: "20px" }}
          key={key}
        >
          kart
        </div>
      ))}
      <h3>Sayfanın Sonu</h3>

      <button onClick={upToTop}>
        başa dön<nav></nav>
      </button>
    </div>
  );
};

export default Scroll;
