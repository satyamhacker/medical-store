import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import randomColor from "randomcolor";
import myImage from "../assets/medical_store.avif";
import Fetch_items_api from "../api/Fetch_items_api";
import Delete_medicine_api from "./Delete_medicine_api";
import Reduce_medicine_stock_api from "../api/Reduce_medicine_stock_api";
import Update_medicine_location_api from "../api/Update_medicine_location_api";

function Show_items() {
  const [inputBoxData, setInputBoxData] = useState("");
  const [medical_data, setMedical_data] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [reduceStockNumber, setReduceStockNumber] = useState(null);
  const [showReduceStockInput, setShowReduceStockInput] = useState(false);
  const [
    showUpdateMedicineLocationInputBox,
    setShowUpdateMedicineLocationInputBox,
  ] = useState(false);
  const [updateLocationValue, setUpdateLocationValue] = useState(null);

  useEffect(() => {
    let storedJwt = localStorage.getItem("emailJwt");
    if (!storedJwt) {
      alert("please Login first");
      window.location.href = "login";
    }
  }, []);

  const Fetch_medical_items = async () => {
    try {
      const Fetch_items_response = await Fetch_items_api();
      setMedical_data([...medical_data, ...Fetch_items_response]);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  useEffect(() => {
    Fetch_medical_items();
  }, []);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInputBoxData(inputValue);
    performSearch(inputValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      performSearch(inputBoxData);
    }
  };

  const performSearch = (searchTerm) => {
    const filteredItems = medical_data.filter((data) =>
      data.MedicineName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredItems);
  };

  const deleteMedicineButton = async (data) => {
    const response = await Delete_medicine_api(data);

    if (response === true) {
      alert("Medicine deleted successfully");
      window.location.reload();
    } else {
      alert("Error deleting medicine, try again later");
    }
  };

  const reduceStockButton = async (index, e, data) => {
    setSelectedCardIndex(index);
    setReduceStockNumber(e.target.value);
    setShowReduceStockInput(true);

    if (reduceStockNumber > 0) {
      try {
        const response = await Reduce_medicine_stock_api(
          reduceStockNumber,
          data.MedicineName
        );

        if (response && response.message === true) {
          alert("Stock reduced Successfully");
          window.location.reload();
        } else {
          alert("Please try again later");
        }
      } catch (error) {
        console.error("Error reducing medicine stock:", error);
      }
    }
  };

  const handleUpdateMedicineLocationButton = async (index, e, data) => {
    setSelectedCardIndex(index);
    setShowUpdateMedicineLocationInputBox(true);
    setUpdateLocationValue(data.MedicineLocationInShop);
    //console.warn('update location testing', updateLocationValue)

    if (updateLocationValue != null) {
      try {
        const response = await Update_medicine_location_api(
          data,
          updateLocationValue
        );

        if (response && response.message === true) {
          alert("Medicine Location updated Successfully");
          window.location.reload();
        } else {
          alert("Please try again later");
        }
      } catch (error) {
        console.error("Error reducing medicine stock:", error);
      }
    }
  };

  const renderMedicalCards = () => {
    const dataToRender = filteredData.length > 0 ? filteredData : medical_data;

    return (
      <div className="d-flex flex-wrap rounded-xl">
        {dataToRender.map((data, index) => (
          <Card
            key={index}
            style={{
              width: "25rem",
              margin: "10px",
              backgroundColor: randomColor(),
              display:
                selectedCardIndex === null || selectedCardIndex === index
                  ? "block"
                  : "none",
            }}
          >
            <Card.Body>
              <Card.Title className="text-2xl bg-yellow-500 rounded-xl">
                MedicineName-:{data.MedicineName}
              </Card.Title>
              <Card.Title className="bg-white-500 my-3">
                MedicineTotalStock-:{data.MedicineTotalStock}
                <br />
                {showReduceStockInput && (
                  <Form.Control
                    required
                    type="number"
                    placeholder="Reduce Stock Number"
                    value={reduceStockNumber}
                    onChange={(e) => setReduceStockNumber(e.target.value)}
                  />
                )}
                <Button
                  variant="info"
                  className="bg-zinc-50"
                  onClick={(e) => reduceStockButton(index, e, data)}
                >
                  Reduce Stock
                </Button>
              </Card.Title>

              <Card.Title className="bg-green-500 rounded-full my-1">
                MedicineMarketPrice-:{data.MedicineMarketPrice}
              </Card.Title>
              <Card.Title className="bg-red-500 my-3">
                MedicineSellingPrice-:{data.MedicineSellingPrice}
              </Card.Title>
              <Card.Title className="bg-green-500 my-1">
                PurchasedPriceOfMedicine-:{data.PurchasedPriceOfMedicine}
              </Card.Title>

              <Card.Title className="bg-purple-500 my-1">
                MedicineLocationInShop-:{data.MedicineLocationInShop}
              </Card.Title>
              <br />
              {showUpdateMedicineLocationInputBox && (
                <Form.Control
                  required
                  as="textarea"
                  rows={3}
                  placeholder="Update Location of this Medicine"
                  value={updateLocationValue}
                  onChange={(e) => setUpdateLocationValue(e.target.value)}
                />
              )}

              <Button
                variant="info"
                className="bg-purple-300"
                onClick={(e) =>
                  handleUpdateMedicineLocationButton(index, e, data)
                }
              >
                Update Medicine Location
              </Button>

              <Card.Title className="bg-red-500 rounded-xl my-3">
                ExpiryDateOfMedicine-:{data.ExpiryDateOfMedicine}
              </Card.Title>

              <Button
                className="bg-white text-black text-xl italic bg-gradient-to-r  hover:from-pink-500 hover:to-red-500"
                onClick={() => deleteMedicineButton(data)}
              >
                Delete Medicine
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="bg-cover" style={{ backgroundImage: `url(${myImage})` }}>
        <Form.Control
          required
          type="text"
          placeholder="Search Medicine By Name"
          value={inputBoxData}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />

        <Button variant="info" onClick={() => performSearch(inputBoxData)}>
          Search Medicine
        </Button>
        <br />

        {renderMedicalCards()}
      </div>
    </>
  );
}

export default Show_items;
