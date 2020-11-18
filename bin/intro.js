const chalk = require ('chalk');
module.exports = function () {
  console.log ('\n');
  console.log (
    chalk
      .rgb (209, 141, 240)
      .bold ('█▀▀ █  █ █▀▀█ █▀▀█ █▀▄▀█ █▀▀█ █▀▀▄ █▀▀█ █▀▄▀█ █▀▀ █▀▀█')
  );
  console.log (
    chalk
      .rgb (255, 90, 130)
      .bold ('█   █▀▀█ █▄▄▀ █  █ █ ▀ █ █▄▄█ █  █ █  █ █ ▀ █ █▀▀ █▄▄▀')
  );
  console.log (
    chalk
      .rgb (255, 202, 87)
      .bold ('▀▀▀ ▀  ▀ ▀ ▀▀ ▀▀▀▀ ▀   ▀ ▀  ▀ ▀  ▀ ▀▀▀▀ ▀   ▀ ▀▀▀ ▀ ▀▀')
  );
};
