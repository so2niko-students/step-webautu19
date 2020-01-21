let str = ' Dnipr🎪petrovsk is a city      ';
// console.log(str.indexOf(' ', 4));//Ищет позицию подстроки в строке
// console.log(str.lastIndexOf('o', 6));
// console.log(str.search('p'));//отличие - нет стартовой позиции и работают регулярные выражения
// console.log(str.includes('rop'));//return boolean
// console.log(`Длина строки: ${str.length}`);
// console.log('Abc'.repeat(3));
// console.log(str[5], str.charAt(5));
// console.log(str.charCodeAt(5));//Порядковый код символа
// console.log(str.concat('Hello', 'Bye', 'Adios'));//Конкатенация строк
// console.log('OOP'.toLowerCase());
// console.log(str.toUpperCase());
// console.log(`Old string: ${str}, new string: ${str.trim()}.`);
// console.log(str.replace('p', 'Eagle'));//Поддерживает работу с регулярными выражениями
// console.log(str.split('et'));
console.log(str.substr(8, 4));//порядковый номер и длина
console.log(str.substring(3, 5));//с какого по какой (индекс, индекс) (a, b) от a до b
console.log(str.slice(3));
console.log(str.substr(3));
console.log(str.slice(3, 10));
