// Receipt.jsx
import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./Receipt.css";

export default function Receipt({ data }) {
  const receiptRef = useRef();

  const downloadPDF = async () => {
    const el = receiptRef.current;
    // Use a high scale for better quality
    const canvas = await html2canvas(el, { scale: 2, useCORS: true });
    const imgData = canvas.toDataURL("image/png");

    // A4 in mm: 210 x 297
    const pdf = new jsPDF("p", "mm", "a4");
    // calculate width/height for A4 while maintaining aspect ratio
    const pageWidth = 210;
    const imgProps = pdf.getImageProperties(imgData);
    const pdfHeight = (imgProps.height * pageWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pdfHeight);
    pdf.save(`receipt-${Date.now()}.pdf`);
  };

  const downloadJPG = async () => {
    const el = receiptRef.current;
    const canvas = await html2canvas(el, { scale: 2, useCORS: true });
    canvas.toBlob((blob) => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `receipt-${Date.now()}.jpg`;
      a.click();
      URL.revokeObjectURL(a.href);
    }, "image/jpeg", 0.95);
  };

  return (
    <div>
      <div className="actions">
        <button onClick={downloadPDF}>Download PDF</button>
        <button onClick={downloadJPG}>Download JPG</button>
      </div>

      <div className="receipt-wrapper" ref={receiptRef}>
        {/* Design your receipt using plain HTML/CSS */}
        <div className="receipt">
          <header>
            <h2>{data.businessName}</h2>
            <p>{data.address}</p>
          </header>

          <section className="items">
            {data.items.map((it, i) => (
              <div key={i} className="item">
                <span className="desc">{it.name}</span>
                <span className="qty">{it.qty}</span>
                <span className="price">{it.price}</span>
              </div>
            ))}
          </section>

          <footer>
            <div>Total: {data.total}</div>
            <div>Thank you!</div>
          </footer>
        </div>
      </div>
    </div>
  );
}
