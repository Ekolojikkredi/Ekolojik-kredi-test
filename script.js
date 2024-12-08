let toplamKredi = 0;
const atikPuanlari = {
  plastik: 5,
  cam: 2,
  metal: 8,
  elektronik: 10,
  yağ: 15,
  tekstil: 3
};

// Bölüm değiştirme
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById(sectionId).style.display = 'block';
}

// Kayıt işlemi
document.getElementById('kayitForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Kayıt başarıyla tamamlandı!');
  showSection('');
});

// Atık Girişi işlemi
document.getElementById('veriGirisiForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const atikTuru = document.getElementById('atikTuru').value;
  const miktar = parseFloat(document.getElementById('miktar').value);

  if (atikTuru && miktar > 0) {
    const puan = atikPuanlari[atikTuru] * miktar;
    toplamKredi += puan;

    alert(`Atık eklendi! Kazanılan Puan: ${puan.toFixed(2)}`);
    document.getElementById('toplamKredi').textContent = toplamKredi.toFixed(2);
    showSection('');
  } else {
    alert('Geçerli bir miktar giriniz.');
  }
});
