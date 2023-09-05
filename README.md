# prediction_address_lao

**prediction_address_lao** is a Node.js package that offers predictions for location information in Laos, specifically provinces, districts, and villages.

## Installation

To use this package in your Node.js project, you can install it via npm:

```bash
npm install prediction_address_lao
```


## Usage
```
const findNearestPoint = require("prediction_address_lao");

// Input coordinates in the format [latitude, longitude]
const inputCoordinates = [102.54397558, 18.00387184];

// Call the function to find the nearest point
findNearestPoint(inputCoordinates)
  .then((nearestPoint) => {
    if (nearestPoint) {
      console.log("Nearest Point Properties:");
      for (const key in nearestPoint) {
        console.log(`${key}: ${nearestPoint[key]}`);
      }
    } else {
      console.log("No matching coordinates found.");
    }
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

```
