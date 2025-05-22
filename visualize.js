/**
 * Visualization tool for Safe Coordinates Challenge
 */

const { isSafe } = require('./robotGrid');

/**
 * Creates a visual grid representation of safe and unsafe coordinates
 * @param {number} size - Size of the grid to visualize (will show -size to +size in both directions)
 */
function visualizeGrid(size) {
    console.log(`Safe/Unsafe Grid (${size}x${size}):`);
    console.log('✅ = Safe, 💣 = Mined');
    
    for (let y = size; y >= -size; y--) {
        let row = '';
        for (let x = -size; x <= size; x++) {
            if (x === 0 && y === 0) {
                row += '🤖'; // Robot starting position
            } else {
                row += isSafe(x, y) ? '✅' : '💣';
            }
        }
        console.log(row);
    }
}

// Visualize a 5x5 grid around the origin
visualizeGrid(5);

/**
 * Visualize a path between two points if one exists
 * @param {number} a - Starting x-coordinate
 * @param {number} b - Starting y-coordinate
 * @param {number} x - Destination x-coordinate
 * @param {number} y - Destination y-coordinate
 */
function visualizePath(a, b, x, y) {
    const { shortestSafeJourney } = require('./robotGrid');
    
    const steps = shortestSafeJourney(a, b, x, y);
    
    console.log(`\nPath from (${a},${b}) to (${x},${y}):`);
    if (steps === -1) {
        console.log('No safe path exists!');
    } else {
        console.log(`Shortest path length: ${steps} steps`);
    }
}

// Example path visualizations
visualizePath(0, 0, 5, 5);
visualizePath(0, 0, 10, 10);
visualizePath(3, 4, 6, 9);