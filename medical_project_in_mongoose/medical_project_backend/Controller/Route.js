const express = require("express");
const app = express();
const signupLogin = require("./Signup_Login");
const additem = require("./Add_item");
const fetchitems = require("./Fetch_items");
const deletemedicine = require("./DeleteMedicine");
const Reduce_Medicine_Stock = require("./Reduce_medicine_stock");
const updateMedicineLocation = require('./updateMedicineLocation');

const cors = require('cors');

const port = 3000; // Port number on which your server will run

app.use(cors()); // Enable CORS for all routes


// Middleware to parse JSON requests
app.use(express.json());

app.post("/signup", signupLogin.signupCreate);
app.post("/login", signupLogin.login);
app.post("/additems", additem.additems);
app.get("/fetchitems", fetchitems.fetchitems);
app.post("/updateMedicineLocation", updateMedicineLocation.updateMedicineLocation);
app.delete("/deletemedicine", deletemedicine.deleteMedicine);
app.post("/reducestock", Reduce_Medicine_Stock.reduceMedicineStock)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
