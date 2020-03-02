import {returnHi as sayHi,last,middle} from './utils.js';
import wes from './wes.js';

import * as everything from './wes.js';
import {handleButtonClick} from './handlers.js';
//const name = 'pooja';

// console.log(sayHi(name));

// console.log('its working');

// console.log(last,middle);

// // console.log(wes);
// console.log(everything);


const butt=document.querySelector('button');

butt.addEventListener('click',handleButtonClick);