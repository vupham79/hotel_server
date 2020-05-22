import hotel from "./hotel";
import admin from "./admin";
import user from "./user";

export default (app) => {
  app.use("/hotel", hotel);
  app.use("/admin", admin);
  app.use("/user", user);
};
