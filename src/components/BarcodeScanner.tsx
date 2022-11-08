import React, { useEffect } from "react";

type Props = {
  onScan: (barcode: number) => void;
};

function BarcodeScanner(props: Props) {
  const barcodeInputRef = React.useRef(null);
  useEffect(() => {
    //@ts-ignore
    barcodeInputRef.current.focus();
  }, []);
  return (
    <input
      ref={barcodeInputRef}
      className="barcode-scanner"
      type="number"
      onKeyDown={(e) => {
        if (e.code === "Enter") {
          //@ts-ignore
          const barcode = e.target.value;
          props.onScan(barcode);
          //@ts-ignore
          e.target.value = "";
        }
      }}
      onBlur={(e) => {
        e.target.focus();
      }}
    />
  );
}

export default BarcodeScanner;
