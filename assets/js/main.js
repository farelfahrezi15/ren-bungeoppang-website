// Pelacakan Konversi GA4 untuk seluruh tombol WhatsApp (.js-wa-btn)
document.addEventListener('DOMContentLoaded', function () {
  const waButtons = document.querySelectorAll('.js-wa-btn');

  waButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const label = btn.getAttribute('data-label') || 'Pesan via WhatsApp';
      const menu = btn.getAttribute('data-menu') || 'Umum';

      // Kirim event konversi 'click_wa' ke Google Analytics 4
      if (typeof gtag === 'function') {
        gtag('event', 'click_wa', {
          event_category: 'conversion',
          event_label: label,
          menu_selected: menu
        });
      }
      console.log('[GA4 Event Triggered] click_wa:', label, '| Menu:', menu);
    });
  });
});


// Pelacakan Konversi GA4 + Sinkronisasi Pesan Otomatis Varian Menu WhatsApp
document.addEventListener('DOMContentLoaded', function () {
  const waButtons = document.querySelectorAll('.js-wa-btn');

  waButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const label = btn.getAttribute('data-label') || 'Pesan via WhatsApp';
      const menu = btn.getAttribute('data-menu') || 'Umum';
      const currentHref = btn.getAttribute('href') || '';

      // Jika href memakai wa.me, pastikan parameter text mengikuti data-menu
      if (currentHref.includes('wa.me/')) {
        const basePart = currentHref.split('?')[0];
        const autoText = `Halo Ren Bungeoppang, saya mau pesan varian ${menu}.`;
        btn.setAttribute('href', `${basePart}?text=${encodeURIComponent(autoText)}`);
      }

      // Kirim event konversi 'click_wa' ke Google Analytics 4
      if (typeof gtag === 'function') {
        gtag('event', 'click_wa', {
          event_category: 'conversion',
          event_label: label,
          menu_selected: menu
        });
      }
      console.log('[GA4 Event Triggered] click_wa:', label, '| Menu:', menu);
    });
  });
});
