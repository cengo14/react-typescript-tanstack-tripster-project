# Otel Rezervasyon Sistemi

Bu proje, kullanıcıların otel bilgilerini görüntüleyebileceği, rezervasyon yapabileceği ve otel ekleyebileceği bir web uygulamasıdır. **React** ve **TypeScript** ile geliştirilmiş olup, veriler **data.json**'da saklanmaktadır. Frontend tarafında **TanStack Query**, **Formik** ve **Tailwind CSS** kullanılmıştır.

## Özellikler

- **Otel Ekleme:** Form alanı kullanılarak yeni otel bilgisi eklenebilir.
- **Listeleme:** Otellerin listelenmesi ve detay bilgilerinin görüntülenmesi.
- **Filtreleme:**
  - **İsme Göre:** Kullanıcılar otelleri isimlerine göre filtreleyebilir.
  - **Konuma Göre:** İstenilen konumda bulunan oteller listelenebilir.
- **Sıralama:**
  - Fiyatına göre artan veya azalan sıralama.
  - Alfabetik olarak (A-Z veya Z-A) sıralama.
- **Form Doğrulama:** Formik ile rezervasyon ve otel ekleme formları için doğrulama.
- **Modern Tasarım:** Kullanıcı dostu ve responsive tasarım için Tailwind CSS kullanımı.
- **Gerçek Zamanlı Veri Yönetimi:** TanStack Query sayesinde hızlı ve kesintisiz veri yönetimi.

## Kullanılan Teknolojiler

### Frontend:

- **React**
- **TypeScript**
- **TanStack Query**
- **Formik**
- **Tailwind CSS**
- **Axios**

### Backend:

- **Node.js**
- **Express.js**

## Kurulum ve Çalıştırma

### Backend

1. Proje dizinine gidin:
   ```bash
   cd backend
   ```
2. Gerekli bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
3. Sunucuyu başlatın:
   ```bash
   npm start
   ```

### Frontend

1. Proje dizinine gidin:
   ```bash
   cd frontend
   ```
2. Gerekli bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
3. Uygulamayı başlatın:
   ```bash
   npm run dev
   ```

## Ekran Görüntüleri

![Uygulama Görünümü](./screenshots/ss.gif)

## Katkıda Bulunma

1. Bu projeyi forklayın.
2. Yeni bir dal oluşturun:
   ```bash
   git checkout -b yeni-ozellik
   ```
3. Değişikliklerinizi commit edin:
   ```bash
   git commit -m "Yeni bir özellik eklendi"
   ```
4. Dalınızı push edin:
   ```bash
   git push origin yeni-ozellik
   ```
5. Pull Request oluşturun.

## Lisans

Bu proje MIT Lisansı ile lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına bakabilirsiniz.
