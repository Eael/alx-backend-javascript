/**
 * A program to be executed from the commandline
 * @param {string} name The name of the user
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const inp = process.stdin.read();
  if (inp) {
    process.stdout.write(`Your name is: ${inp}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
