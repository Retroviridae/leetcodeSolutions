const floodFill = function(image, sr, sc, newColor) {
    // Do nothing if target pixel is same color as new color
    if (newColor === image[sr][sc]) return image;
    // Call recursive dfs on the target pixel
    fill(image, sr, sc, image[sr][sc], newColor);
    // Return image
    return image;
};

// Write the recursive helper function passing in image, coordinates, the new color, and the target pixel original color
function fill(image, sr, sc, color, newColor) { 
    if (
        // Check if the column/row are out of bounds
        sr < 0 || 
        sc < 0 || 
        // Too far right
        sr >= image.length || 
        // Too low
        sc >= image[sr].length || 
        // Or if pixel is different from target pixel (Also catches if target has been updated already)
        image[sr][sc] !== color
    ) {
        // Do nothing
        return;
    }
    // Update color
    image[sr][sc] = newColor;
    // Call helper function on all adjacent pixels
    fill(image, sr-1, sc, color, newColor)
    fill(image, sr+1, sc, color, newColor)
    fill(image, sr, sc-1, color, newColor)
    fill(image, sr, sc+1, color, newColor)
}
// sr >= image.length ||
// sc >= image[sr].length ||
let image = [[1,1,1],[1,1,0],[1,0,1]]
floodFill(image,1,1,2)

// Think paint bucket from msPaint

// Check if newColor is the same as the current color
    // If it is, nothing should change so return the image
// Call recursive dfs on the target pixel
// Write the recursive helper function
    // If the column/row are out of bounds or the pixel is not the same color as the target pixel
        // Do nothing (Return)
    // Set pixel to new color
    // Call helper function on all adjacent pixels
// Return the image in the original function