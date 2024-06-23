document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;
  
      // Nomor WhatsApp tujuan
      const waNumber = '6282392891122'; // format internasional tanpa tanda +
      
      // Format pesan
      const waMessage = `Halo, nama saya ${name}. Nomor telepon saya adalah ${phone}. Pesan: ${message}`;
  
      // Membuka aplikasi WhatsApp dengan pesan terformat
      const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
      
      // Membuka URL WhatsApp
      window.open(waUrl, '_blank');
    });
  });
  