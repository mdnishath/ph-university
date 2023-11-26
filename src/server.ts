import app from "./app";
import { PORT } from "./app/config";

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
