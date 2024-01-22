const AddItem = require('../Models/Add_items');

const updateMedicineLocation = async (req, res) => {
  const { MedicineName, MedicineTotalStock, MedicineLocationToUpdate } = req.body;

  //console.log('data came from frontend==>', MedicineName, MedicineTotalStock, MedicineLocationToUpdate)

  try {
    // Find the medicine in the database
    const foundMedicine = await AddItem.findOne({
      MedicineName: MedicineName,
      MedicineTotalStock: MedicineTotalStock
    });

    console.log('test', foundMedicine)

    if (foundMedicine) {
      // Medicine found, update its location
      foundMedicine.MedicineLocationInShop = MedicineLocationToUpdate;

      // Save the changes to the database
      await foundMedicine.save();

      //console.log('Medicine location updated successfully.');

      res.status(201).json({ message: true });
    } else {
      console.log('Medicine not found in the database.');
      res.status(404).json({ error: 'Medicine not found' });
    }
  } catch (error) {
    console.error('Error updating medicine location:', error);
    // Handle the error and respond with an error status code
    res.status(500).json({ error: 'Internal Server Error' });
  }




};

module.exports = {
  updateMedicineLocation
};
