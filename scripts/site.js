
const seconds = (new Date()).getSeconds()

const p = document.querySelector('p');
const h1 = document.querySelector('h1');
console.log(h1);



setTimeout (() => 
{
    p.textContent = 'General Kenobi!' + seconds
}, 2000)

setTimeout (() => {
    if (seconds % 2 == 1)
    {
        p.style.color = 'red'
    }
    else
    {
        p.style.color = 'green'
    }
}, 3000)