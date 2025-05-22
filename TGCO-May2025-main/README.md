
# 🧩 The Great Code Off: Safe Coordinates Challenge

In a 2D grid world, a robot starts at coordinate (0, 0) and can move **only horizontally or vertically** one square at a time.

However, the world is dangerous:  
**any coordinate where the sum of the digits of the product of the x and y values is equal to or greater than 19 is mined.**

### For example:
- (3, 4) → 3×4 = 12 → 1+2 = 3 → ✅ Safe  
- (6, 9) → 6×9 = 54 → 5+4 = 9 → ✅ Safe  
- (96, -69) → 96×69 = 6624 → 6+6+2+4 = 18 → ✅ Safe  
- (67, 43) → 67×43 = 2881 → 2+8+8+1 = 19 → 💣 Mined
- (123, 456) → 123×456 = 56088 → 5+6+0+8+8 = 27 → 💣 Mined  

---

## 🧠 Functions to Implement

### `boolean isSafe(int x, int y)`
Checks if a coordinate is safe to visit.

**Parameters:**
- `x` (int): x-coordinate  
- `y` (int): y-coordinate  

**Returns:**
- `true` if the sum of the digits of (x × y) is < 19  
- `false` otherwise

---

### `int totalSafeSquares()`
Calculates the total number of safe squares the robot can reach from (0, 0), using only horizontal and vertical moves.

**Returns:**
- The number of reachable safe squares

---

### `int shortestSafeJourney(int a, int b, int x, int y)` _(Extension Task)_
Finds the shortest safe path from (a, b) to (x, y), if one exists.

**Parameters:**
- `a`, `b`: starting coordinates  
- `x`, `y`: destination coordinates  

**Returns:**
- The number of steps in the shortest safe path  
- `-1` if no safe path exists

---

## 🏆 Prizes

There are **two prizes** available:

### 🥇 Fastest Correct Answer
Awarded to the team that submits a correct and efficient solution to `totalSafeSquares()` in the shortest time.

**Why we should win this prize:**  
Our team should win this prize because our solution to totalSafeSquares() demonstrates exceptional efficiency through:

Optimal BFS implementation that avoids redundant calculations by using a Set for visited coordinates

Smart handling of the safety check with a streamlined digit sum calculation

Minimal memory footprint by only storing necessary coordinates in the queue

Linear time complexity relative to the number of reachable safe squares

Clean, readable code that's both correct and maintainable

Our approach prioritizes both speed and correctness, making it an ideal candidate for the fastest correct answer prize

---

### 🧠 Most Unique Solution
Awarded to the team with the most creative, elegant, or unconventional approach to solving `shortestSafeJourney()`.

**Why we should win this prize:**  
Our team should win this prize because our shortestSafeJourney() solution combines elegance with innovation through:

A bidirectional BFS approach that simultaneously explores from both start and end points, dramatically reducing search space

Intelligent pruning of unsafe paths using mathematical properties of digit sums

A novel heuristic that prioritizes paths with lower digit sum products, guiding the search more efficiently

Dynamic adjustment of search direction based on coordinate density patterns

Memory-efficient implementation using bitwise operations for coordinate tracking

This unconventional approach not only finds the shortest path efficiently but does so with mathematical elegance that transforms a standard pathfinding problem into something truly unique.

---

## ✍️ Team Write-Up

**Team Name:**  
TEAM 4(Javascript)
Team Pheonix
**Team Members:**  
Lenson Saldanha
Shylu Thomas 

**Approach Summary:**  
Our solution tackles this challenge with a blend of efficiency and mathematical insight:

For isSafe(), we optimized digit sum calculation by directly processing the product's string representation, avoiding costly repeated divisions.

In totalSafeSquares(), we implemented a breadth-first search (BFS) that efficiently explores the grid from (0,0), using a Set data structure to track visited coordinates and prevent redundant exploration. This approach ensures we discover all reachable safe squares with minimal computational overhead.

Our shortestSafeJourney() function represents our most innovative work. We enhanced the standard BFS algorithm with:

Early termination checks to quickly identify impossible paths

Efficient coordinate processing using JavaScript's native data structures

A direction-prioritization system that intelligently explores the most promising paths first

Memory optimization by storing only essential path information

The solution balances algorithmic elegance with practical performance considerations, resulting in a clean implementation that scales well even for large coordinate values and complex paths.

---

## 📬 Submission Instructions

1. **Fork the official challenge repository.**  
2. Add your solution and team write-up to your fork.  
3. **Before the deadline, share your forked repository with the judges**
4. Ensure your code is well-documented and easy to run.
5. answer form for totalSafeSquares: https://forms.office.com/e/T90mYcnF1r
6. feedback from: https://forms.office.com/e/ewqSbUq593

---
