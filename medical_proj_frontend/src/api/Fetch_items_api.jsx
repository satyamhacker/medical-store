import React from "react";

import baseUrlBackend from "./Base_url_backend";

const Fetch_items_api = async () => {
  console.log("sss", baseUrlBackend);
  try {
    // Make a GET request using fetch
    const response = await fetch(baseUrlBackend + "/fetchitems");

    // Check if the request was successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON response
    const data = await response.json();

    return data;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error("Fetch error:", error.message);
  }
};

export default Fetch_items_api;
