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
const inputCoordinates = [102.54303379, 17.99857509]; // Replace with your coordinates

// Call the function with your input coordinates
findNearestPoint(inputCoordinates)
  .then((nearestPoint) => {
    // Log the result
    console.log("Nearest Point Properties:");
    for (const key in nearestPoint) {
      console.log(`${key}: ${nearestPoint[key]}`);
    }
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });


```
