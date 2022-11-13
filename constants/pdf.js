import React from "react";
import PDFView from "../comps/pdf";
import { PDFDownloadLink } from "@react-pdf/renderer";

export default function PdfPage() {
  return (
    <div className="section">
      <h1>PdfPage</h1>
      <PDFDownloadLink document={<PDFView />} filename="FORM">
        {({ loading }) =>
          loading ? (
            <button>Loading Document...</button>
          ) : (
            <button>Download</button>
          )
        }
      </PDFDownloadLink>
    </div>
  );
}
