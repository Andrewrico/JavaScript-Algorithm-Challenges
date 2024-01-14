# Sorting Algorithm with Comparator

This repository contains a sorting algorithm implemented in JavaScript using a Comparator class for custom comparison functions.

## Comparator Class

The `Comparator` class provides a flexible mechanism for defining custom comparison functions. It includes the following methods:

- `constructor(compareFunction)`: Initializes the comparator with a custom comparison function. If no function is provided, it uses the default comparison function.

- `defaultCompareFunction(a, b)`: The default comparison function used when none is provided. It returns 0 if `a` is equal to `b`, -1 if `a` is less than `b`, and 1 if `a` is greater than `b`.

- `equal(a, b)`: Checks if two elements are equal based on the comparison function.

- `lessThan(a, b)`: Checks if `a` is less than `b` according to the comparison function.

- `greaterThan(a, b)`: Checks if `a` is greater than `b` according to the comparison function.

- `lessThanOrEqual(a, b)`: Checks if `a` is less than or equal to `b` according to the comparison function.

- `greaterThanOrEqual(a, b)`: Checks if `a` is greater than or equal to `b` according to the comparison function.

- `reverse()`: Reverses the comparison function, effectively reversing the order of comparisons.

## Sort Class

The `Sort` class serves as a base class for sorting algorithms. It includes a `comparator` instance of the `Comparator` class and methods for initializing sorting callbacks.

- `constructor(originalCallbacks)`: Initializes the `Sort` class with sorting callbacks and a `Comparator` instance.

- `initSortingCallbacks(originalCallbacks)`: Initializes sorting callbacks, providing default empty functions if none are provided.

- `sort()`: Abstract method that must be implemented by subclasses. Throws an error if not implemented.

## QuickSort Class

The `QuickSort` class extends the `Sort` class and implements the quicksort algorithm.

- `sort(originalArray)`: Recursively sorts an array using the quicksort algorithm with the provided comparison and visiting callbacks.


## Example Usage

<iframe height="300" style="width: 100%;" scrolling="no" title="Sorting Algorithm with Javascript" src="https://codepen.io/Andrew-Rico/embed/QWodLex?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Andrew-Rico/pen/QWodLex">
  Sorting Algorithm with Javascript</a> by Andrew Rico (<a href="https://codepen.io/Andrew-Rico">@Andrew-Rico</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


```javascript
const arrayToSort = [5, 3, 7, 1, 8, 2, 4, 6];
const quickSort = new QuickSort();

// Custom visitingCallback to log each visited element
const visitingCallback = (element) => console.log('Visiting element:', element);

// Sorting the array using QuickSort
const sortedArray = quickSort.sort(arrayToSort, { visitingCallback });

console.log('Sorted Array:', sortedArray);
