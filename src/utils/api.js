// src/utils/api.js
const API_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

// Define a function to fetch data from the API
export const fetchKanbanData = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      // Handle errors here if needed
      throw new Error('Failed to fetch data');
    }

    // Parse the response as JSON
    const data = await response.json();

    return data;
  } catch (error) {
    // Handle errors here
    throw error;
  }
};
