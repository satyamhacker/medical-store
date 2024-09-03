import React from "react";
import baseUrlBackend from "./Base_url_backend";
export const Signup_api = async (formData) => {
  try {
    const response = await fetch(baseUrlBackend + "/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
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

export const login_api = async (formData) => {
  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
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
