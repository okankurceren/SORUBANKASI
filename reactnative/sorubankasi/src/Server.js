const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// JSON verilerini işleyebilmek için body-parser kullanıyoruz
app.use(bodyParser.json());

// Kullanıcı veritabanımız (gerçek bir uygulamada bir veritabanı kullanmalısınız)
const users = [
  { username: 'user1', password: 'pass1' },
  { username: 'user2', password: 'pass2' },
];

// Giriş endpoint'i
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Kullanıcı adı ve şifreyi kontrol et
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    // Kullanıcı bulundu, giriş başarılı
    res.json({ success: true, message: 'Giriş başarılı' });
  } else {
    // Kullanıcı bulunamadı, giriş başarısız!
    res.json({ success: false, message: 'Kullanıcı adı veya şifre hatalı' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
