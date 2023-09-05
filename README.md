# prediction_address_lao

**prediction_address_lao** is a Node.js package that offers predictions for location information in Laos, specifically provinces, districts, and villages.

## Installation

To use this package in your Node.js project, you can install it via npm:

```bash
npm install prediction_address_lao
```


## Usage
```
const findNearestPoint = require('prediction_address_lao');

const inputLongitude = 102.44820999; // Replace with the desired longitude
const inputLatitude = 17.98316999; // Replace with the desired latitude

try {
  const nearestPoint = findNearestPoint(inputLongitude, inputLatitude);
  if (nearestPoint) {
    console.log("Nearest Point Properties:");
    for (const key in nearestPoint) {
      if (nearestPoint.hasOwnProperty(key)) {
        console.log(`${key}: ${nearestPoint[key]}`);
      }
    }
  } else {
    console.log("No matching coordinates found in the JSON data.");
  }
} catch (error) {
  console.error(error.message);
}
```
