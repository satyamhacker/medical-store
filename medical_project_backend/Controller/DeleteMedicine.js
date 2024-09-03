const allItems = require("../Models/Add_items");


const deleteMedicine = async (req, res) => {
    const { MedicineName, MedicineTotalStock } = req.body;
  
    console.log(MedicineName, MedicineTotalStock);
  
    try {
      // Use the findOneAndDelete method to delete a document based on a condition
      const deleteMedicineRequest = await allItems.findOneAndDelete({
        MedicineName: MedicineName,
        MedicineTotalStock: MedicineTotalStock,
      });
  
      // Check if a document was deleted
      if (deleteMedicineRequest) {
        res.status(201).json("Medicine deleted successfully");
      } else {
        res.status(404).json("Medicine not found");
      }
  
    } catch (error) {
      console.error('Error deleting medicine:', error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };


module.exports = {
  deleteMedicine,
};