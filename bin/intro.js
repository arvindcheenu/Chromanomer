const chalk = require ('chalk');
module.exports = function () {
  console.log ('\n');
  console.log (
    `${chalk.red ('█▀▀ █ █')} ${chalk.green ('█▀█ █▀█')} ${chalk.yellow ('█▀▄▀█ ▄▀█')} ${chalk.blue ('▀█▀ ▄▀█')} ${chalk.magenta ('▀▄▀ █▄█')}`
  );
  console.log (
    `${chalk.red ('█▄▄ █▀█')} ${chalk.green ('█▀▄ █▄█')} ${chalk.yellow ('█ ▀ █ █▀█')} ${chalk.blue (' █  █▀█')} ${chalk.magenta ('█ █  █ ')}\n`
  );
};
