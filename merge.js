var firstArray = [0,3,4,10],
secondArray = [1,2],
newArray = [];

function mergeArray (first, second) {

	var fLen = first.length, sLen = second.length;

	if ( (fLen == 0) || (sLen == 0) ) {
		if (fLen == 0 && sLen == 0) {
			return;
		}
		if ((fLen > 0) && (sLen == 0)) {
			newArray.push(first.shift());
		}
		if ((sLen > 0) && (fLen == 0)) {
			newArray.push(second.shift());
		}

	}else{
		newArray.push( (first[0] > second[0]) ? second.shift() : first.shift() );
	}
	mergeArray(first, second);
}

mergeArray(firstArray, secondArray);
console.log(newArray);
