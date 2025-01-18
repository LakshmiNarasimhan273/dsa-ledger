* Big O Time Complexity is a way to measure how efficiently an algorithm performs as the size of its input grows. It describes the relationship between input size (n) and the number of operations the algorithm performs.

* Key Differences:
    Linear Time (O(n)):

    - The algorithm's execution time increases proportionally with the size of the input.
    - Example: Searching for an element in an unsorted list by checking each item one by one.
     If the list has 5 items, it takes 5 steps; with 50 items, it takes 50 steps.

    Constant Time (O(1)):
    - The execution time remains the same, regardless of the input size.
    - Example: Accessing an element in an array by its index.Whether the array has 5 items or 5000,
     it takes only one step.


* When will you encounter these complexities?
    - O(n): When an algorithm needs to process each element of the input individually (e.g., loops over all elements).
    - O(1): When the algorithm directly retrieves or computes something without looping or recursion.
--------------------------------------------------------------------------------------------------------------------
NOTE:- No need to keep constants like O(2) or O(3) in the final complexity because Big O notation ignores constants.
--------------------------------------------------------------------------------------------------------------------