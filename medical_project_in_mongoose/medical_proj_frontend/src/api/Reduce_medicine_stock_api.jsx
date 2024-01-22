import React from 'react'
const Base_Url = import.meta.env.VITE_REACT_APP_FRONTEND_BASE_URL;


const Reduce_medicine_stock_api=async (reduceStockNumber, MedicineName)=> {
  
    // console.warn('saaa',reduceStockNumber, MedicineName)
    try {
        const response = await fetch(Base_Url+"/reducestock", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },                                                               
          body: JSON.stringify({MedicineName,reduceStockNumber}),                                                                                                                            
        });                                                          
                                                                                                                                         
        if (!response.ok) {
          throw new Error("Failed to post data");
        }
    
        const result = await response.json();
        return result;
      } catch (error) {
        console.log(error);
      }




}

export default Reduce_medicine_stock_api
