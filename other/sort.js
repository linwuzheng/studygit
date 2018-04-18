// http://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html
// http://www.sczyh30.com/posts/Algorithm/algorithm-quicksort/


/**
 * 
 * @param {number} arr 
 */
function quickSort(arr = [], left, right){
    if(arr.length <= 1){
        return arr;
    }

    if(left < right){
        const mid = partition2(arr, left, right);
        quickSort(arr, left, mid - 1);
        quickSort(arr, mid + 1, right);
    }
}

function partition1(arr = [], left, right) {
    let i = left, j = right;
    let pivot = arr[left];
    while (i < j) {
        while (i < j && arr[j] > pivot)
            j--;
        if (i < j) {
            arr[i] = arr[j];
            i++;
        }
        while (i < j && arr[i] < pivot)
            i++;
        if (i < j) {
            arr[j] = arr[i];
            j--;
        }
    }
    arr[i] = pivot;
    return i;
}

function partition2(arr = [], left, right) {
    let i = left, j = right;
    let pivot = arr[left];
    while(i < j){
        while(i<j && arr[j]>pivot) j--;
        while(i<j && arr[i]<=pivot) i++;

        if(i < j){
            swap(arr, i++, j--);
        }
    }
    if(arr[i] > pivot){
        swap(arr, i-1, left)
        return i-1;
    }

    swap(arr, i, left)
    return i;
}

function swap(arr, i, j){
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}



const arr = [30, 24, 5, 58, 18, 36, 42, 39];
quickSort(arr, 0, arr.length-1);
console.log(arr)