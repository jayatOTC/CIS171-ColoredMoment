// Jay Allen 
// Mar 25, 19
// A Colored Moment
//

// constants but const does not work
//
var chalk = require('chalk');
var moment = require('moment');
var log = console.log;
var dayOfWeek = moment().format('dddd');
var greeting = 'morning'; 
// purposely lower case to ensure it changes

var hourOfDay = moment().format('HH');
// console.log(moment().format('HH:'));
// 
// after a while of thinking, we can have one line printed
// and fulfill the requirements,  
//
if (hourOfDay < 13)
//  log(chalk.cyan.underline('Good Morning'));
  greeting = 'Morning';
else
  if (hourOfDay < 18)
  // log(chalk.redBright.underline('Good Afternoon'));
    greeting = 'Afternoon';
  else
    //  log(chalk.magenta.underline('Good Evening'));
    greeting = 'Evening';

log(chalk.red.underline('Good ') +
chalk.redBright.underline(greeting) +
chalk.cyan.underline('. Today is ') +
chalk.redBright.underline.bold(dayOfWeek));

