function bubbleSort(arr, length)
{
    debugger;
    var i, j, temp;
    var swapped;
    for (i = 0; i < length - 1; i++) 
    {
        swapped = false;
        for (j = 0; j < length - i - 1; j++) 
        {
            if (arr[j] > arr[j + 1]) 
            {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (swapped == false)
        break;
    }
}


var arr = [64,34,25,12,22,11,90];
console.log(bubbleSort(arr, arr.length));