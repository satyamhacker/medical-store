import React from 'react'

const Delete_medicine_api=async(data) =>{
  
    try {
        const response = await fetch('http://localhost:3000/deletemedicine', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            MedicineName: data.MedicineName,
            MedicineTotalStock: data.MedicineTotalStock,
          }),
        });
  
        if (response.ok) {
          console.log('Medicine deleted successfully', response.ok);
         return response.ok;
          
          // Handle success, e.g., update state or show a success message
        } else {
          console.error('Failed to delete medicine');
          // Handle error, e.g., show an error message
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle network errors or other exceptions
      }

}

export default Delete_medicine_api
