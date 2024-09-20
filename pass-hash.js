const bcrypt = require('bcrypt');

async function hashPassword() {
  const myPassword = 'hola123';
  const hash = await bcrypt.hash(myPassword, 10);
  console.log(hash);
}

hashPassword();
