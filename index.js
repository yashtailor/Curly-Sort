// function to sort an array of objects based on a specific take

// first parameter is an array of objects
// second parameter is the key, if the key is not present in any element that the function will add that
// to the element and assign null : type String
// if the type of the element is not an object(any of it), then it simply returns;
function curlysort(arr,key){
    let isValidArray = true;
    // case 1: if the array of objects doesn't have all the elements as objects
    for(let i=0;i<arr.length;i++){
        // weird behaviour with js where is show array type as object that's
        // why a separte helper for checking array
        if(Array.isArray(arr[i])){
            isValidArray = false;
            break;
        }else if(typeof(arr[i])!='object'){
            isValidArray = false;
            break;
        }
    }
    // if not valid then simply return
    if(!isValidArray)return arr;
    for(let i=0;i<arr.length;i++){
        // checking if property doesn't exists then add the property and assign null
        if(!arr[i].hasOwnProperty(key)){
            arr[i][key] = null;
        }
    }
    // finally sorting the array on basis of key
    arr.sort((e1,e2)=>{
        if(e1[key] < e2[key])return -1;
        else return 1;
    });

    // returning the sorted array
    return arr;
}

module.exports = curlysort;

