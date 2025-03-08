const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// Veri dosyasının yolu
const dataFilePath = path.join(__dirname, '../data/veriler.json');

// Verileri dosyadan okuma fonksiyonu
function getPluginsData() {
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

// Tüm eklentileri listele
router.get('/', (req, res) => {
  const plugins = getPluginsData();
  res.render('plugins/index', {
    title: 'Eklentiler - LunaDevs',
    plugins: plugins
  });
});

// Eklenti detayı
router.get('/:name', (req, res) => {
  const plugins = getPluginsData();
  const plugin = plugins.find(p => p.name === req.params.name);
  
  if (!plugin) {
    return res.status(404).render('404', {
      title: 'Eklenti Bulunamadı',
      path: req.url
    });
  }
  
  res.render('plugins/detail', {
    title: `${plugin.name} - LunaDevs`,
    plugin: plugin
  });
});

module.exports = router; 