import React, { useState } from "react";
import QRCode from "qrcode.react";
export default function App() {
  const [inptvalue, setinptvalue] = useState("");
  const [shown, setshown] = useState(false);
  const inputchange = (e) => {
    setinptvalue(e.target.value);
  };
  const clickme = () => {
    setshown(!shown);
  };

  return (
    <section>
      {!shown ? (
        <div className="text-center">
          <input
            type="text"
            onChange={inputchange}
            name=""
            id=""
            value={inptvalue}
          />{" "}
          <br />
          <button onClick={clickme}>Gernate</button>
        </div>
      ) : (
        ""
      )}

      <div>
        {shown ? (
          <QRCode
            value={inptvalue}
            size={400}
            level="M"
            backgroundColor="#ffffff"
            borderColor="#000000"
          />
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
