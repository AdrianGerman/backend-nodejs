const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'hola123';
  const hash = '$2b$10$kBPDFDJMP1sPhXIPNWQEU.91n2Fzp4kQQKNPt2QNo8jMmQCbWX5EK';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
