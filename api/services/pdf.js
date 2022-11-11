import PDFDocument from "pdfkit";

function buildPdf(dataCallback, endCallback) {
  const doc = new PDFDocument();
  //   doc.pipe(fs.createWriteStream("member.pdf"));
  doc.on("data", dataCallback);
  doc.on("end", endCallback);
  doc.fontSize(25).text("Contetful Membership Card");
  doc.end;
}

export default buildPdf;
