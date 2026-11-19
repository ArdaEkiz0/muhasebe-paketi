// KDV sayfaları: indirme butonuna "nereden başlayacağım" ipucu.
// CSP: satır içi betik yasak; bu dosya 'self' kaynağından yüklenir.
// driver.js 1.14.0 — yalnız hints modülü (tura gerek yok).
(function () {
  "use strict";
  if (!window.driverHints || !window.driverHints.hints) return;
  if (!document.getElementById("hero-indir")) return;

  var en = /^en\b/i.test(document.documentElement.lang || "");
  var m = en
    ? {
        button: "Got it",
        title: "See how it works first",
        description:
          "Pick your invoice folder and ledger; the program matches by " +
          "document number and lists the differences. " +
          '<a href="#nasil" class="link">How it works in 3 steps →</a>',
      }
    : {
        button: "Anladım",
        title: "Önce nasıl çalıştığını görün",
        description:
          "Fatura klasörünüzü ve muavin defterinizi seçin; program " +
          "belge numarasından eşleştirir, farkları listeler. " +
          '<a href="#nasil" class="link">3 adımda nasıl çalışır? →</a>',
      };

  window.driverHints
    .hints({
      buttonText: m.button,
      hints: [
        {
          id: "kdv-nereden-basla",
          element: "#hero-indir",
          // Mavi butonun üst kenarına, kontrast için amber beacon.
          beacon: { side: "top", align: "end", offsetX: -6, offsetY: -14 },
          popover: {
            title: m.title,
            description: m.description,
            side: "bottom",
            showButton: true,
          },
        },
      ],
    })
    .show();
})();
