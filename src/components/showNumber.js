function generateRandomNumbers(){
    let numbers = [];
    while (numbers.length < 5) {
        let item = Math.floor(Math.random() * 32 + 5);
        if (numbers.indexOf(item) === -1) {
            numbers.push(item);
        };
    }
	let result = numbers.sort(function(a, b) {
        return a - b;
    });
    return result;
}

let showNumber = generateRandomNumbers();
export default showNumber;