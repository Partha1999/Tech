import React, { useState, useEffect } from 'react';

const MyComponent = () => {

  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("E:\Phitron\python prac again\json.json");
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchData();
  }, []); 
  return (
    <div>
      {jsonData ? (
        <div>
          <h1>{jsonData.title}</h1>
          <p>{jsonData.description}</p>
          {}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default MyComponent;
