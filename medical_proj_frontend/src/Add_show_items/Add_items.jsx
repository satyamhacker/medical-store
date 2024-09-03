import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import myImage from "../assets/medical_store.avif"; // Adjust the path based on your project structure
import { Link } from "react-router-dom";
import Add_items_api from "../api/Add_items_api";
function Add_items() {
  const [medicineName, setMedicineName] = useState("");
  const [medicineStock, setMedicineStock] = useState();
  const [expiryDateOfMedicine, setExpiryDateOfMedicine] = useState("");
  const [medicineMarketPrice, setMedicineMarketPrice] = useState();
  const [medicineSellingPrice, setMedicineSellingPrice] = useState();
  const [purchasedPriceOfMedicine, setPurchasedPriceOfMedicine] = useState();
  const [medicineLocationInShop, setMedicineLocationInShop] = useState("");

  useEffect(() => {
    let storedJwt = localStorage.getItem("emailJwt");
    if (!storedJwt) {
      alert("please Login first");
      window.location.href = "login";
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the state based on the input name
    switch (name) {
      case "medicineName":
        setMedicineName(value);
        break;
      case "medicineStock":
        setMedicineStock(value);
        break;
      case "expiryDateOfMedicine":
        setExpiryDateOfMedicine(value);
        break;
      case "medicineMarketPrice":
        setMedicineMarketPrice(value);
        break;
      case "medicineSellingPrice":
        setMedicineSellingPrice(value);
        break;
      case "purchasedPriceOfMedicine":
        setPurchasedPriceOfMedicine(value);
        break;
      case "medicineLocationInShop":
        setMedicineLocationInShop(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const Medicine_data = {
      MedicineName: medicineName,
      MedicineTotalStock: medicineStock,
      ExpiryDateOfMedicine: expiryDateOfMedicine,
      MedicineMarketPrice: medicineMarketPrice,
      MedicineSellingPrice: medicineSellingPrice,
      MedicineLocationInShop: medicineLocationInShop,
      PurchasedPriceOfMedicine: purchasedPriceOfMedicine,
    };

    const Add_medical_items_to_database = async () => {
      const response = await Add_items_api(Medicine_data);
      console.log("test", response);
      if (response == "Medicine added") {
        alert("Medicine added");
      } else {
        alert("There is some network error please try again later");
      }
    };
    Add_medical_items_to_database();
  };

  return (
    <>
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${myImage})` }}
      >
        <div className="d-flex align-items-center justify-content-center">
          <Form>
            <InputGroup className="mb-3">
              <Button
                variant="outline-secondary"
                id="button-addon1"
                className="bg-white text-black p-2 text-lg font-bold"
              >
                Medicine Name:
              </Button>
              <Form.Control
                type="text"
                placeholder="Enter Medicine Name"
                name="medicineName"
                value={medicineName}
                onChange={handleInputChange}
                required
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <Button
                variant="outline-secondary"
                id="button-addon1"
                className="bg-white text-black p-2 text-lg font-bold"
              >
                Total Stock Of Medicine:
              </Button>
              <Form.Control
                type="number"
                placeholder="Enter Medicine Stock"
                name="medicineStock"
                value={medicineStock}
                onChange={handleInputChange}
                required
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <Button
                variant="outline-secondary"
                id="button-addon1"
                className="bg-white text-black p-2 text-lg font-bold"
              >
                Expiry Date Of Medicine:
              </Button>
              <Form.Control
                type="date"
                placeholder="Enter Expiry Date"
                name="expiryDateOfMedicine"
                value={expiryDateOfMedicine}
                onChange={handleInputChange}
                required
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <Button
                variant="outline-secondary"
                id="button-addon1"
                className="bg-white text-black p-2 text-lg font-bold"
              >
                Medicine Market Price:
              </Button>
              <Form.Control
                type="number"
                placeholder="Enter Market Price"
                name="medicineMarketPrice"
                value={medicineMarketPrice}
                onChange={handleInputChange}
                required
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <Button
                variant="outline-secondary"
                id="button-addon1"
                className="bg-white text-black p-2 text-lg font-bold"
              >
                Medicine Selling Price:
              </Button>
              <Form.Control
                type="number"
                placeholder="Enter Selling Price"
                name="medicineSellingPrice"
                value={medicineSellingPrice}
                onChange={handleInputChange}
                required
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <Button
                variant="outline-secondary"
                id="button-addon1"
                className="bg-white text-black p-2 text-lg font-bold"
              >
                Purchased Price Of Medicine:
              </Button>
              <Form.Control
                type="number"
                placeholder="Enter Purchased Price of Medicine"
                name="purchasedPriceOfMedicine"
                value={purchasedPriceOfMedicine}
                onChange={handleInputChange}
                required
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <Button
                variant="outline-secondary"
                id="button-addon1"
                className="bg-white text-black p-2 text-lg font-bold"
              >
                Location of Medicine Inside Shop:
              </Button>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter Location in Shop"
                name="medicineLocationInShop"
                value={medicineLocationInShop}
                onChange={handleInputChange}
                required
                className="resize-none border rounded-md p-2 focus:outline-none focus:border-blue-500"
              />
            </InputGroup>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Add_items
            </Button>
          </Form>
        </div>
        <Link to="/showitems" className="font-bold bg-white">
          Show All Medicine_Items page
        </Link>
      </div>
    </>
  );
}

export default Add_items;
