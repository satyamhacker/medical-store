const AddItems = require('../Models/Add_items');

const additems = async (req, res) => {

  try {
    // Extract data from the request body
    const {
      MedicineName,
      MedicineTotalStock,  
      ExpiryDateOfMedicine,
      MedicineMarketPrice,
      MedicineSellingPrice,  
      PurchasedPriceOfMedicine,
      MedicineLocationInShop,
    } = req.body;

    // Check if required fields are provided
    if (!MedicineName || !MedicineTotalStock || !ExpiryDateOfMedicine || !MedicineMarketPrice || !MedicineSellingPrice || !PurchasedPriceOfMedicine || !MedicineLocationInShop) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create a new medicine data record in the database
    const newMedicineData = await AddItems.create({
      MedicineName,
      MedicineTotalStock,  
      ExpiryDateOfMedicine,
      MedicineMarketPrice,
      MedicineSellingPrice,  
      PurchasedPriceOfMedicine,
      MedicineLocationInShop,
    });

    // Respond with a success message
    res.status(201).json("Medicine added");
  
  } catch (error) {
    console.error("Error creating medicine data:", error);
    // Handle the error and respond with an error status code
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  additems,
};
