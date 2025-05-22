/**
 * Tests for the Safe Coordinates Challenge Solution
 */

const { isSafe, totalSafeSquares, shortestSafeJourney } = require('./robotGrid');

// Test isSafe function
console.log('Testing isSafe function:');
console.log('(3, 4) should be safe:', isSafe(3, 4));
console.log('(6, 9) should be safe:', isSafe(6, 9));
console.log('(96, -69) should be safe:', isSafe(96, -69));
console.log('(67, 43) should be mined:', !isSafe(67, 43));
console.log('(123, 456) should be mined:', !isSafe(123, 456));

// Test totalSafeSquares function with a smaller boundary for testing
console.log('\nTesting totalSafeSquares function:');
console.log('Total safe squares reachable from (0, 0):', totalSafeSquares());

// Test shortestSafeJourney function
console.log('\nTesting shortestSafeJourney function:');
console.log('Shortest path from (0, 0) to (5, 5):', shortestSafeJourney(0, 0, 5, 5));
console.log('Shortest path from (0, 0) to (10, 10):', shortestSafeJourney(0, 0, 10, 10));
console.log('Shortest path from (0, 0) to (-5, -5):', shortestSafeJourney(0, 0, -5, -5));
console.log('Shortest path from (3, 4) to (6, 9):', shortestSafeJourney(3, 4, 6, 9));
console.log('Shortest path from (3, 4) to (67, 43) (mined destination):', shortestSafeJourney(3, 4, 67, 43));