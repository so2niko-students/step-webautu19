
function load(txt, url){
    fetch(url)
    .then(req => req.json())
    .then(data => console.log(txt, data));
}

load('Alexander', 'https://spreadsheets.google.com/feeds/cells/1LcrS9V_5dXLQviVrh8vdAYOW4lpYOFGrbcfdxx0Sdt8/1/public/full?alt=json');

load('Vladislav', 'https://spreadsheets.google.com/feeds/cells/1lW3KL0zJgyQPNUWOT_FR3zL9VkT99tEDO1O2KzcmB3w/1/public/full?alt=json');
