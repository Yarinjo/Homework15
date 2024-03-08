let user = document.querySelector('#userName');
let test = 'color';
let userName = user.innerHTML;


let user1 = document.querySelector('.field-js')
let user1Inner = user1.innerHTML;
let user1Outer = user1.outerHTML;


const button = document.querySelector('.btn');
button.addEventListener('click', function(event) {
    alert(`Tnanks for youre feedback ${userName}`);
  });

  console.log(user);
  console.log(userName);
  console.log(user1);
  console.log(user1Inner);
  console.log(user1Outer);


const yorNumber = document.querySelector('.contact-button');
console.log(yorNumber);


let numberCounter;

function enterNumber(number) {
    numberCounter = prompt('Enter youre number', '093...');
    alert(`we call you in 30 minutes on this number: ${numberCounter}`)
    return number;
}
yorNumber.addEventListener('click', enterNumber);
