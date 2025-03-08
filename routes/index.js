const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// Veri dosyasının yolu
const dataFilePath = path.join(__dirname, '../data/veriler.json');

// Verileri dosyadan okuma fonksiyonu
function getData() {
  try {
    // Dosya yoksa boş dizi döndür
    if (!fs.existsSync(dataFilePath)) {
      return [];
    }
    const rawData = fs.readFileSync(dataFilePath);
    return JSON.parse(rawData);
  } catch (error) {
    console.error('Veri dosyası okunurken hata oluştu:', error);
    return [];
  }
}

// Ana sayfa
router.get('/', (req, res) => {
  const plugins = getData();
  
  res.render('index', {
    title: 'LunaDevs - Minecraft Plugin Marketplace',
    plugins: plugins
  });
});

// Hakkımızda sayfası
router.get('/about', (req, res) => {
  res.render('about', {
    title: 'Hakkımızda - LunaDevs'
  });
});

// İletişim sayfası
router.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'İletişim - LunaDevs'
  });
});

module.exports = router; 