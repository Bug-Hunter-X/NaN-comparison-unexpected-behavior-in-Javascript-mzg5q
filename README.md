# NaN Comparison Unexpected Behavior in JavaScript

This repository demonstrates an uncommon and sometimes surprising behavior in JavaScript when comparing NaN (Not a Number) values.

## The Problem

In JavaScript, NaN is a special value representing an undefined or unrepresentable numeric value.  The peculiar aspect is that NaN is never equal to itself, regardless of whether you use the loose comparison operator (==) or the strict equality operator (===).

The `bug.js` file contains a function `foo` that illustrates this. It attempts to compare two numbers for equality, but when both numbers are NaN, the function returns `false` even though it should logically return `true` when it is checking for equality.

## The Solution

The solution involves using the `Number.isNaN()` function to correctly check for NaN values.  `Number.isNaN()` is specifically designed for determining if a value is NaN. This method gives reliable results unlike the equality operators. The `bugSolution.js` file demonstrates this.

## How to Use

1. Clone the repository.
2. Open the `bug.js` and `bugSolution.js` files to see the buggy code and its corrected version.
3. Run the files using Node.js or a similar JavaScript environment to see the unexpected results and the correct result.