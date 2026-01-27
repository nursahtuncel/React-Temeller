import React, { useState } from "react";
import Modal from "./higherOrderComponents/Modal";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Modal Aç</button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Bilgi"
      >
        <p>Bu bir children modal denemesidir</p>
      </Modal>
      
      {/* <Modal 
         isOpen={open}
        onClose={() => setOpen(false)}
        title="inform">
       bu yazı children olarak geldi
      </Modal> */}
    </div>
  );
};

export default App;
