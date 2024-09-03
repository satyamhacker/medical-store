import React from "react";
import baseUrlBackend from "./Base_url_backend";

const Update_medicine_location_api = async (data, updateLocationValue) => {
  //console.log(data, updateLocationValue)

  let MedicineName = data.MedicineName;
  let MedicineTotalStock = data.MedicineTotalStock;
  let MedicineLocationToUpdate = updateLocationValue;

  try {
    const response = await fetch(baseUrlBackend + "/updateMedicineLocation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        MedicineName,
        MedicineTotalStock,
        MedicineLocationToUpdate,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to post data");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default Update_medicine_location_api;
