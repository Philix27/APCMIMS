import buildPdf from "../services/pdf";
import express from "express";

const router = express.Router();

router.get("/pdf", (req, res, next) => {
  const stream = res.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-Disposition": "attachment;filename=member.pdf",
  });
  buildPdf(
    (chunck) => stream.write(chunck),
    () => stream.end()
  );
});

export default router;
