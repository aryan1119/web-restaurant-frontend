const convertedObject = { 1: ['Amazon', 'Google', 'Microsoft'], 5: ['TCS', 'Infosys'] };
const itemsArray = [];
const currentArray = Object.keys(convertedObject);

currentArray.forEach((item) => {
	convertedObject[item].forEach((arrayItem, index) => {
		itemsArray.push({
			parentId: item,
			id: index + 1,
			name: arrayItem
		});
	});
});
console.log(itemsArray, '---');

// Output Object
