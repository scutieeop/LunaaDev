const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

// Express uygulamasını başlat
const app = express();

// View engine olarak EJS kullan
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Tüm şablonlara varsayılan değişkenleri ekle
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// Routes
const indexRoutes = require('./routes/index');
const pluginRoutes = require('./routes/plugins');

app.use('/', indexRoutes);
app.use('/plugins', pluginRoutes);

// 404 sayfası
app.use((req, res) => {
  res.status(404).render('404', {
    title: '404 - Sayfa Bulunamadı',
    path: req.url
  });
});

// Port ayarı
const PORT = process.env.PORT || 3001;

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor...`);
}); 