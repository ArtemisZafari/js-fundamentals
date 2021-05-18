const reverseString = function(str) {
	let strList = [];
	let i=0;
	for (i; i<str.length; i++) {
		strList.push(str[i]);
	}
	strList.reverse();

	let newStr = ''
	let j=0;
	for (j; j<str.length; j++) {
		newStr += strList[j];
	}
	return newStr;
}

module.exports = reverseString