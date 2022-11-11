import router from "../../api/routes/pdf";
import express from "express";

const app = express();
app.use(express.json());
app.use(router);
// app.listen(3005, () => console.log(`server running on port 3005`));
