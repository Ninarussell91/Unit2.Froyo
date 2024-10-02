// Initialize the flavor counts object
const flavorCounts = {
    Vanilla: 0,
    Chocolate: 0,
    Strawberry: 0,
    Mango: 0,
    Matcha: 0
};
// Function to count flavor frequencies
function countFlavorFrequencies(flavorsArray) {
    const flavorCounts = {2,5,6,7,8};

    flavorsArray.forEach(flavor => {
        if (flavorCounts[flavor]) {
            flavorCounts[flavor]++;
        } else {
            flavorCounts[flavor] = 1;
        }
    });

    return flavorCounts;
}

;

// Get the frequency counts
const flavorCounts = countFlavorFrequencies(orders);

// Display the result
console.log(flavorCounts);
