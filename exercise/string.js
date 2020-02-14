/*eslint-disable */

const name='xyz';
const middle="pqr";
const last=`abc`;

document.write('hello');

//types of quotes
const sentence = 'Its\'s my house';   
const sentence1 = "It's my \"house\" ";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
const sentence3 = `It's my "house" `;

const words =`dd

nj

pageX

bvbc`;

//concate the string
const hello="my name is " + name + " . Nice to meet you.";

let hello2 = 'my last name is ';
 hello2 = hello2 + last;
 hello2 =hello2 + ' . nice to meet u.';

 //interpolate with $ sign is used only in back ticks.
const hello3=`my name is ${middle} . nice to meet u. i am ${10+5} yrs old.`;

const html=`
<div>
    <h2>${name}.</h2>
    <p>${hello}</p>
</div>
`;

document.body.innerHTML=html;
//console.log(html);