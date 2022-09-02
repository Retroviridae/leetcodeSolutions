const kClosest = function(points, k) {
    // Write helper function to get length of hypotenuse
    const getDist = point => point[0]**2 + point[1]**2;
    // Initialize distances array
    const distances = Array(points.length);
    // Iterate
    for (let i = 0; i < points.length; i++){
        // Push an array of [distance from origin, the points] into distances
        distances[i] = [getDist(points[i]), ...points[i]]
    }
    // Sort distances
    distances.sort((a, b) => a[0] - b[0]);
    // Initialize result
    const result: number[][] = [];
    // Iterate up to k
    for (let i = 0; i < k; i++) {
        // Push the points of the first k points in distances into result
        result.push(distances[i].slice(1));
    }
    // Return result
    return result;
};

// Write helper function to get length of hypotenuse
// Initialize distances array
// Iterate
    // Push an array of [distance from origin, the points] into distances
// Sort distances
// Initialize result
// Iterate up to k
    // Push the points of the first k points in distances into result
// Return result

