import fs from "fs";
import path from "path";

// Path to JSON file
const filePath = path.join("assets", "earthquakeData.json");

// Read JSON file
fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  try {
    const jsonData = JSON.parse(data); // Parse JSON

    // Check if data is an array
    if (!Array.isArray(jsonData)) {
      console.error("JSON data is not an array.");
      return;
    }

  // Find the earthquake with the highest magnitude
    let highestMagnitudeRecord = null;

  
    jsonData.forEach((entry) => {
      const magnitude = parseFloat(entry.magnitude); // Adjust if magnitude is a string
      if (magnitude > (highestMagnitudeRecord?.magnitude || 0)) {
        highestMagnitudeRecord = entry;
      }
    });

    // Display details of the highest magnitude earthquake
    if (highestMagnitudeRecord) {
      console.log("Earthquake with Highest Magnitude:");
      console.log("Country:", highestMagnitudeRecord.country);
      console.log("Magnitude:", highestMagnitudeRecord.magnitude);
      console.log("Date:", highestMagnitudeRecord.date);
    } else {
      console.log("No valid earthquake records found.");
    }

    // Display the total count of earthquake records
    console.log("Total Earthquake Records:", jsonData.length); // Should print 200

  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
});
