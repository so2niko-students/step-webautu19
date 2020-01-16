const phones = [];
const phonesN = parseInt(prompt('Enter a count of phones', 2));
for(let i = 0; i < phonesN; i++){
    phones[i] = [];
    phones[i].push(prompt('Enter a name of phone', `phone: ${i + 1}`));
    for(let j = 0; j < 2; j++){
        phones[i].push(parseFloat(prompt(`Enter a price of phone #${j + 1}`, 100)));
    }
}
console.log(phones);