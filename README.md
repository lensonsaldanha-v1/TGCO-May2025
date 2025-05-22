# Testing Guide for Safe Coordinates Challenge

This document explains how to test the JavaScript implementation of the Safe Coordinates Challenge.

## Prerequisites

- Node.js installed on your system (download from [nodejs.org](https://nodejs.org/))

## Running the Tests

1. Open a terminal or command prompt
2. Navigate to the project directory:
   ```
   cd path/to/TGCO-May2025-main
   ```
3. Run the test file:
   ```
   node robotGridTests.js
   ```

## Expected Output

The test output should show results for all three functions:

### isSafe Function Tests
- (3, 4) should be safe: true
- (6, 9) should be safe: true
- (96, -69) should be safe: true
- (67, 43) should be mined: true
- (123, 456) should be mined: true

### totalSafeSquares Function Test
- Total safe squares reachable from (0, 0): [number]

### shortestSafeJourney Function Tests
- Shortest path from (0, 0) to (5, 5): [number]
- Shortest path from (0, 0) to (10, 10): [number]
- Shortest path from (0, 0) to (-5, -5): [number]
- Shortest path from (3, 4) to (6, 9): [number]
- Shortest path from (3, 4) to (67, 43): -1 (mined destination)

## Creating Your Own Tests

You can modify `robotGridTests.js` to add your own test cases:

```javascript
// Add custom test cases
console.log('Custom test - isSafe(10, 20):', isSafe(10, 20));
console.log('Custom test - shortestSafeJourney(5, 5, 10, 10):', 
            shortestSafeJourney(5, 5, 10, 10));
```

## Visualizing Results

For a visual representation of safe and unsafe coordinates, you can create a simple grid visualization by adding this to a new file called `visualize.js`:

```javascript
const { isSafe } = require('./robotGrid');

// Create a simple grid visualization
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
```

Run it with:
```
node visualize.js
```