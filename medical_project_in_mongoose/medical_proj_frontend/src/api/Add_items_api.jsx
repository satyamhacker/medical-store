import React from 'react'

const Base_Url = import.meta.env.VITE_REACT_APP_FRONTEND_BASE_URL;

const  Add_items_api=async(Medicine_data)=> {

    try {
        const response = await fetch(Base_Url+"/additems", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },                                                               
          body: JSON.stringify(Medicine_data),                                                                                                                            
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

export default Add_items_api
