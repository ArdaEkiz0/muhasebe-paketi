# AGENTS.md — muhasebe-paketi site deposu

Bu depo iki makinede çalışır: Windows (asıl) ve Mac (ikinci, Claude Code).

## Makine kuralları (her ajan uyacak)
- `main`'e doğrudan push ve merge YOK. Tüm iş branch'te.
- Windows'tan çıkan branch: `<konu>` (ör. `seo-basliklar`).
- Mac'ten çıkan branch: `mac/<konu>` (ör. `mac/landing-v2`).
- Merge, deploy ve canlı doğrulama YALNIZ Windows makinesinden.
- Mac'teki ajan (Claude Code): `mac/*` branch'ine commit'le, push'la, işi bırak — merge'i Windows tarafı yapar.
- Bu depoya Mac'ten `git push origin main` yapan bir komut asla çalıştırılmamalı.

## Site içerik kuralları (mevcut bekçi kurallarla birebir)
- Sitede GitHub'a hiçbir gönderme (link, metin, referans) geçmez.
- "Deneme" vaadi yoktur (deneme kaldırıldı): ücretsiz deneme / trial metni yazılmaz. "Ücretsiz" yalnız Finansal Hesaplayıcı hediyesi için geçerlidir.
- Yayın sonrası muhasebepaketi.com.tr canlıda kontrol edilir (bu Windows'un işi).

## Ortam notları
- Mac'te build/test aracı Windows'taki zincirin aynısı olmayabilir; şüphede işi Windows'a bırak, sadece branch hazırla.
