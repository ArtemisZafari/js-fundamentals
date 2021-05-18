const repeatString = function(str, num) {
	if (num<0) {
		return 'ERROR';
	}
	let newStr = ''
	let i=0;
	for (i; i<num; i++) {
		newStr += str;
	}
return newStr;
}

module.exports = repeatString