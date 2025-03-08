const express = require('express');
const router = express.Router();

// Örnek kullanıcı verileri (gerçek uygulamada bir veritabanından gelecektir)
const users = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@lunadevs.com',
    password: 'admin123',
    role: 'admin',
    createdAt: '2023-01-01'
  },
  {
    id: 2,
    username: 'developer',
    email: 'dev@lunadevs.com',
    password: 'dev123',
    role: 'developer',
    createdAt: '2023-02-15'
  },
  {
    id: 3,
    username: 'user',
    email: 'user@example.com',
    password: 'user123',
    role: 'user',
    createdAt: '2023-03-20'
  }
];

// Giriş sayfası
router.get('/login', (req, res) => {
  if (req.session.user) {
    return res.redirect('/');
  }
  res.render('auth/login', {
    title: 'Giriş Yap - LunaDevs',
    error: null,
    req: req
  });
});

// Giriş işlemi
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  // Kullanıcı doğrulama - Bu basit bir örnek, gerçek uygulamalarda daha güvenli olmalıdır
  const user = users.find(user => user.email === email && user.password === password);
  
  if (!user) {
    return res.render('auth/login', {
      title: 'Giriş Yap - LunaDevs',
      error: 'Hatalı email veya şifre!',
      req: req
    });
  }
  
  // Kullanıcı bilgilerini session'a kaydet (şifreyi hariç tut)
  const { password: _, ...userWithoutPassword } = user;
  req.session.user = userWithoutPassword;
  
  res.redirect('/');
});

// Kayıt sayfası
router.get('/register', (req, res) => {
  if (req.session.user) {
    return res.redirect('/');
  }
  res.render('auth/register', {
    title: 'Kaydol - LunaDevs',
    error: null,
    req: req
  });
});

// Kayıt işlemi - Basit bir örnek
router.post('/register', (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  
  // Basit doğrulama
  if (!username || !email || !password) {
    return res.render('auth/register', {
      title: 'Kaydol - LunaDevs',
      error: 'Tüm alanlar doldurulmalıdır!',
      req: req
    });
  }
  
  if (password !== confirmPassword) {
    return res.render('auth/register', {
      title: 'Kaydol - LunaDevs',
      error: 'Şifreler eşleşmiyor!',
      req: req
    });
  }
  
  // Email kontrolü
  if (users.some(user => user.email === email)) {
    return res.render('auth/register', {
      title: 'Kaydol - LunaDevs',
      error: 'Bu email adresi zaten kullanılıyor!',
      req: req
    });
  }
  
  // Gerçek uygulamada veritabanına kayıt yapılır
  // Burada sadece başarılı kaydı simüle ediyoruz
  
  // Giriş sayfasına yönlendir
  res.redirect('/auth/login?registered=true');
});

// Çıkış yap
router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.error('Oturum sonlandırma hatası:', err);
    }
    res.redirect('/');
  });
});

module.exports = router; 