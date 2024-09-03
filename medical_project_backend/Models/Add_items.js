const mongoose = require('mongoose');

// Define the AddItems schema
const AddItemsSchema = new mongoose.Schema({
  MedicineName: {
    type: String,
    required: true,
    trim: true,
  },
  MedicineTotalStock: {
    type: Number,
    required: true,
    trim: true,
  },
  ExpiryDateOfMedicine: {
    type: Date,
    required: true,
    trim: true,
  },
  MedicineMarketPrice: {
    type: Number,
    required: true,
    trim: true,
  },
  MedicineSellingPrice: {
    type: Number,
    required: true,
    trim: true,
  },
  PurchasedPriceOfMedicine: {
    type: Number,
    required: true,
    trim: true,
  },
  MedicineLocationInShop: {
    type: String,
    required: true,
    trim: true,
  },
  // You can include other fields relevant to user AddItems here
});

// Create the AddItems model
const AddItems = mongoose.model('Medicine_Details', AddItemsSchema);

module.exports = AddItems;
