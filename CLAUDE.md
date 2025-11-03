# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Proje Hakkında

Bu repo, [The Odin Project](https://www.theodinproject.com/) online kursundan öğrenilen konuları arşivlemek için oluşturulmuş bir öğrenim deposudur. Tüm notlar, kod örnekleri ve dokümanlar Türkçe olarak tutulmaktadır.

## Önemli Kurallar

### Dil ve Karakter Kodlaması

**KRİTİK**: Bu projede tüm Markdown (`.md`) dosyaları **Türkçe** dilinde yazılmalıdır ve **UTF-8** karakter kodlaması kullanılmalıdır.

- Tüm README.md dosyaları Türkçe karakter desteği ile yazılmalıdır (ö, ü, ğ, ş, ç, ı, İ)
- Dosyalar oluşturulurken veya düzenlenirken UTF-8 encoding kullanılmalıdır
- Türkçe karakterlerin bozuk göründüğü her durumda dosya yeniden UTF-8 ile yazılmalıdır

### İçerik Yapısı

- Her kurs bölümü ve alt konusu için ayrı klasörler bulunur
- Her klasörde bir `README.md` dosyası bulunmalıdır
- README.md dosyaları ilgili konunun kapsamlı açıklamasını, örneklerini ve kaynaklarını içermelidir

## Dizin Yapısı

```
odin/
├── README.md                          # Ana proje tanıtımı
├── CLAUDE.md                          # Bu dosya
└── js/                                # JavaScript ve ilgili kurslar
    └── 1 - Intermediate HTML and CSS Course/
        ├── 1 - Introduction/
        │   └── README.md
        ├── 2 - Emmet/
        │   └── README.md
        └── [diğer konular]/
```

## Dosya Oluşturma ve Düzenleme

### Yeni Konu Ekleme

1. İlgili kurs klasörü altında numaralandırılmış yeni bir klasör oluşturun
   - Format: `[numara] - [Konu Adı]/`
   - Örnek: `3 - CSS Flexbox/`

2. Klasör içine `README.md` dosyası oluşturun

3. README.md şablonu:
   ```markdown
   # [Konu Başlığı]

   ## [Konu] Nedir?

   [Açıklama]

   ## Temel Kavramlar

   [İçerik]

   ## Örnekler

   [Kod örnekleri]

   ## Kaynaklar

   - [İlgili kaynaklar]
   ```

### README.md Yazım Kuralları

- Başlıklar açık ve anlaşılır olmalı
- Kod örnekleri code block'lar içinde verilmeli
- Önemli noktalar **kalın** yazılmalı
- Listeler için madde işaretleri kullanılmalı
- Her README en sonunda "Kaynaklar" bölümü içermeli

## Git Kullanımı

Bu bir öğrenim arşivi olduğu için:
- Sık commit yapılması önerilir
- Her yeni konu için ayrı commit atılabilir
- Commit mesajları Türkçe veya İngilizce olabilir

## Önemli Notlar

- Bu repo kişisel öğrenim amaçlıdır
- İçerik The Odin Project müfredatını takip eder
- Düzenli olarak güncellenecektir
- Tüm dokümanlar Türkçe dilinde tutulmalıdır
