const axios = require("axios");

async function findNearestPoint(inputLongitude, inputLatitude) {
  const url =
    "https://data.opendevelopmentmekong.net/geoserver/ODMekong/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=ODMekong%3Adata&outputFormat=application%2Fjson";
  try {
    // Fetch JSON data from the URL
    const response = await axios.get(url);
    const data = response?.data?.features; // Already parsed JSON
    // console.log("🚀 ~ file: index.js:10 ~ findNearestPoint ~ data:", data)

    // Initialize variables to store the nearest point and its properties
    let nearestPoint = null;
    let nearestDistance = Number.POSITIVE_INFINITY; // Initialize with a large value

    // Define the Haversine distance calculation function
    function calculateDistance(coord1, coord2) {
      const [lon1, lat1] = coord1;
      const [lon2, lat2] = coord2;
      const radius = 6371; // Earth's radius in kilometers
      const radLat1 = (lat1 * Math.PI) / 180;
      const radLon1 = (lon1 * Math.PI) / 180;
      const radLat2 = (lat2 * Math.PI) / 180;
      const radLon2 = (lon2 * Math.PI) / 180;
      const dLon = radLon2 - radLon1;
      const dLat = radLat2 - radLat1;
      const a =
        Math.pow(Math.sin(dLat / 2), 2) +
        Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(dLon / 2), 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = radius * c;
      return distance;
    }

    // Iterate through the features in the JSON data
    
    for (const feature of data) {
      if (feature.geometry.type === "Point") {
        // Extract the coordinates of the current feature
        const coordinates = feature.geometry.coordinates;

        // Calculate the distance between the input and current coordinates
        const distance = calculateDistance(
          [inputLongitude, inputLatitude],
          coordinates
        );

        // Check if this is the nearest point so far
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestPoint = feature.properties;
        }
      }
    }

    // Return the properties of the nearest point
    return nearestPoint;
  } catch (error) {
    throw error;
  }
}

module.exports = findNearestPoint;
