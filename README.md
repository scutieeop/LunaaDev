# LunaDevs - Minecraft Plugin Pazarlama Sitesi

LunaDevs, Minecraft sunucu sahipleri için yüksek kaliteli eklentiler sunan bir pazarlama platformudur. Kullanıcılar hem ücretsiz hem de premium eklentileri keşfedebilir, indirebilir ve satın alabilirler.

## Özellikler

- **Eklenti Pazarı**: Kategoriler halinde düzenlenmiş Minecraft eklentileri
- **Kullanıcı Hesapları**: Kayıt, giriş ve kullanıcı profilleri
- **Detaylı Eklenti Sayfaları**: Ekran görüntüleri, özellikler ve yorumlarla kapsamlı eklenti bilgileri
- **Duyarlı Tasarım**: Tüm cihazlarda mükemmel görünüm
- **Arama ve Filtreleme**: Eklentileri kolayca bulma
- **Satın Alma Sistemi**: Premium eklentiler için ödeme sistemi
- **JSON Veri Yönetimi**: Eklentiler JSON dosyaları üzerinden kolayca yönetilir

## Teknolojiler

- **Frontend**: HTML, CSS, JavaScript, Bootstrap 5
- **Backend**: Node.js, Express.js
- **Şablonlama Motoru**: EJS (Embedded JavaScript)
- **Veri Saklama**: JSON dosyaları

## Kurulum

1. Repoyu klonlayın
   ```
   git clone https://github.com/kullaniciadi/lunadevs.git
   cd lunadevs
   ```

2. Bağımlılıkları yükleyin
   ```
   npm install
   ```

3. Uygulamayı başlatın
   ```
   npm start
   ```

4. Tarayıcıda aşağıdaki adresi açın
   ```
   http://localhost:3001
   ```

## Proje Yapısı

```
lunadevs/
├── public/                 # Statik dosyalar
│   ├── css/                # CSS dosyaları
│   ├── js/                 # JavaScript dosyaları
│   └── images/             # Resimler
├── routes/                 # Express route'ları
├── data/                   # JSON veri dosyaları
│   └── veriler.json        # Eklenti verileri
├── views/                  # EJS şablonları
│   ├── partials/           # Yeniden kullanılabilir şablonlar
│   ├── plugins/            # Eklenti sayfaları
│   └── errors/             # Hata sayfaları
├── app.js                  # Ana uygulama dosyası
├── package.json            # Proje metadata ve bağımlılıklar
└── README.md               # Proje dokümantasyonu
```

## Veri Yönetimi

Bu uygulama veritabanı yerine JSON dosyaları kullanır. Verileri düzenlemek için:

1. `data/veriler.json` dosyasını açın
2. Dosyada bulunan örneklere göre eklenti ve öne çıkan eklenti bilgilerini ekleyin
3. JSON formatına uygun olduğundan emin olun
4. Uygulamayı yeniden başlatın veya sayfa yenilendiğinde değişiklikler görünecektir

Daha detaylı bilgi için `data/README.md` dosyasına bakabilirsiniz.

## Geliştirme Yapısı

Şu anda bu uygulama yalnızca frontend temelli çalışmaktadır. Gerçek bir kullanım için:

1. Veritabanı entegrasyonu eklenmeli (MongoDB/MySQL)
2. Gerçek kullanıcı kimlik doğrulama sistemi kurulmalı
3. Ödeme sistemi entegre edilmeli (Stripe, PayPal vb.)
4. Eklenti yönetimi için admin paneli eklenmeli

## Katkıda Bulunma

1. Bu repoyu forklayın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inize push edin (`git push origin feature/AmazingFeature`)
5. Bir Pull Request oluşturun

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır - detaylar için [LICENSE](LICENSE) dosyasına bakın.

## İletişim

LunaDevs - [info@lunadevs.com](mailto:info@lunadevs.com)

Proje Linki: [https://github.com/kullaniciadi/lunadevs](https://github.com/kullaniciadi/lunadevs) 