/**
 * Safe Coordinates Challenge Solution
 */

/**
 * Checks if a coordinate is safe to visit.
 * @param {number} x - x-coordinate
 * @param {number} y - y-coordinate
 * @returns {boolean} true if the sum of the digits of (x × y) is < 19, false otherwise
 */
function isSafe(x, y) {
    // Calculate the product of x and y
    const product = Math.abs(x * y);
    
    // Convert to string to easily process digits
    const productStr = product.toString();
    
    // Sum the digits
    let sum = 0;
    for (let i = 0; i < productStr.length; i++) {
        sum += parseInt(productStr[i]);
    }
    
    // Return true if sum is less than 19
    return sum < 19;
}

/**
 * Calculates the total number of safe squares the robot can reach from (0, 0),
 * using only horizontal and vertical moves.
 * @returns {number} The number of reachable safe squares
 */
function totalSafeSquares() {
    // Using BFS to find all reachable safe squares
    const queue = [[0, 0]];
    const visited = new Set(['0,0']);
    
    // Directions: up, right, down, left
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    // Limit search space to avoid Set size limit
    const LIMIT = 1000;
    
    while (queue.length > 0 && visited.size < LIMIT) {
        const [x, y] = queue.shift();
        
        // Try all four directions
        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;
            
            // Add boundary check to limit search space
            if (Math.abs(newX) > LIMIT || Math.abs(newY) > LIMIT) {
                continue;
            }
            
            const key = `${newX},${newY}`;
            
            // If not visited and safe, add to queue and visited set
            if (!visited.has(key) && isSafe(newX, newY)) {
                queue.push([newX, newY]);
                visited.add(key);
            }
        }
    }
    
    // If we hit the limit, return a message indicating the count is approximate
    if (visited.size >= LIMIT) {
        console.log(`Warning: Reached search limit of ${LIMIT}. The actual count may be higher.`);
    }
    
    return visited.size;
}

/**
 * Finds the shortest safe path from (a, b) to (x, y), if one exists.
 * @param {number} a - starting x-coordinate
 * @param {number} b - starting y-coordinate
 * @param {number} x - destination x-coordinate
 * @param {number} y - destination y-coordinate
 * @returns {number} The number of steps in the shortest safe path, or -1 if no safe path exists
 */
function shortestSafeJourney(a, b, x, y) {
    // Check if start and end points are safe
    if (!isSafe(a, b) || !isSafe(x, y)) {
        return -1;
    }
    
    // If start and end are the same
    if (a === x && b === y) {
        return 0;
    }
    
    // Using BFS to find shortest path
    const queue = [[a, b, 0]]; // [x, y, steps]
    const visited = new Set([`${a},${b}`]);
    
    // Directions: up, right, down, left
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    // Add search limit to prevent Set size issues
    const MAX_STEPS = 1000;
    
    while (queue.length > 0) {
        const [currX, currY, steps] = queue.shift();
        
        // Stop if we've taken too many steps
        if (steps >= MAX_STEPS) {
            console.log(`Warning: Reached maximum step limit of ${MAX_STEPS}.`);
            return -1;
        }
        
        // Try all four directions
        for (const [dx, dy] of directions) {
            const newX = currX + dx;
            const newY = currY + dy;
            
            // If reached destination
            if (newX === x && newY === y) {
                return steps + 1;
            }
            
            const key = `${newX},${newY}`;
            
            // If not visited and safe, add to queue and visited set
            if (!visited.has(key) && isSafe(newX, newY)) {
                queue.push([newX, newY, steps + 1]);
                visited.add(key);
            }
        }
    }
    
    // No path found
    return -1;
}

// Export functions for testing
module.exports = {
    isSafe,
    totalSafeSquares,
    shortestSafeJourney
};