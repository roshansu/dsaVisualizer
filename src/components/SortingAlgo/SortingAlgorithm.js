export let index;

export default function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    index = [];
    console.log('bubblesort')
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
                index.push([i, i+1, true]);
            }
            else{
                index.push([i, i+1, false]);
            }
        }
        n--;
    } while (swapped);

    // return arr;
}

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i; // Assume the first element is the minimum
        
        index.push(minIndex)
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Update the minimum index
            }
        }

        if (minIndex !== i) {
            // Swap the found minimum element with the first element
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

