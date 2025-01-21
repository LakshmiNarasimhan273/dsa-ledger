# 📚 Understanding Big O Time Complexity  

Big O Time Complexity is a way to measure how efficiently an algorithm performs as the size of its input grows. It describes the relationship between the input size (**n**) and the number of operations the algorithm performs.  

---

## 📌 Key Concepts  

1. **Linear Time (O(n))**:  
   - The algorithm's execution time increases proportionally with the size of the input.  
   - **Example**: Searching for an element in an unsorted list by checking each item one by one.  
     - If the list has 5 items, it takes 5 steps; with 50 items, it takes 50 steps.  

2. **Constant Time (O(1))**:  
   - The execution time remains the same, regardless of the input size.  
   - **Example**: Accessing an element in an array by its index.  
     - Whether the array has 5 items or 5000, it takes only one step.  

---

## 📖 Rule Block of Big O  

- **Worst Case**: Always account for the worst-case scenario. *(Refer to `TimeComplexity.js` for examples.)*  
- **Remove Constants**: Ignore constants like O(2) or O(3) in the final complexity. Big O notation focuses on scalability.  
- **Different Inputs, Different Variables**: Use distinct variables for different inputs.  
  - Example: For `O(n + m)`, `n` and `m` are separate inputs.  
  - If inputs are nested (e.g., two arrays), it becomes `O(n * m)`.  
- **Drop Non-Dominant Terms**: In a combination of terms, only the one with the highest growth rate matters.  

---

## 🔍 When Will You Encounter These Complexities?  

1. **O(n)**:  
   - When the algorithm processes each element of the input individually.  
   - Example: Loops that iterate through all elements.  

2. **O(1)**:  
   - When the algorithm retrieves or computes something directly without looping or recursion.  
   - Example: Accessing an array element by index.  

---

### 🔔 Important Note  

- **Constants Are Ignored**: In Big O notation, constants like O(2) or O(3) are irrelevant as they don’t impact scalability.  

---

### Happy Learning and Optimizing! 🚀  
