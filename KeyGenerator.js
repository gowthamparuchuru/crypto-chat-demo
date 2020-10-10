const bcrypt = require("bcryptjs");

const saltRounds = 10;

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(">> Input your crypto key?\n", (plainKey) => {
  const hash = bcrypt.hashSync(plainKey, saltRounds);
  console.log(">> Your Hashed Key:");
  console.log(hash);
  readline.close();
});
