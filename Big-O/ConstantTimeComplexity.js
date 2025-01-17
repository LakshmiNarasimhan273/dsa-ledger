// **__ CONSTANT TIME CALCULATION __**
const boxes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // 10 Elements

function logBoxes(boxes){
    console.log(boxes[0]); // Number of operation O(1)
    console.log(boxes[1]); // Number of operation O(1)
}

logBoxes(boxes); 
// At the conclusion of the final callback, the overall 
// time complexity of the operation will be O(2).


