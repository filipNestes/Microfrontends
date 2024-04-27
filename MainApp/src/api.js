const apiUrl = "http://localhost:3100/data";

// Funkcia pre odoslanie dát
export const sendData = async (category, data) => {
  const response = await fetch(`${apiUrl}/${category}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to send data");
  }

  return await response.text();
};

// Funkcia na získanie dát
export const fetchData = async (category) => {
  const response = await fetch(`${apiUrl}/${category}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return await response.json();
};
