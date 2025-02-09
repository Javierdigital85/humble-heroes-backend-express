import app from "./app";
import db from "./config/database";

const port = process.env.PORT || 8000;

db.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });
});
