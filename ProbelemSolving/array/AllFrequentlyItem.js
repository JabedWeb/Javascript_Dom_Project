var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];


var frequency = []; 
var visited = -1;
for (var i = 0; i < arr1.length; i++) {
    var count = 1;
    for (var j = i + 1; j < arr1.length; j++) {
        if (arr1[i] == arr1[j]) {
            count++;
            // To avoid counting same element again
            frequency[j] = visited;
        }
    }
        frequency[i] = count;
}

// Print frequency of each element
for (var i = 0; i < frequency.length; i++) {
    //
    if (frequency[i] != visited)
        console.log(arr1[i] + " == " + frequency[i]);
}

