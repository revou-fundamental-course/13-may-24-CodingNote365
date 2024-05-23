document.addEventListener('DOMContentLoaded', () => {
    const switchButton = document.getElementById('switchButton');
    const luasSection = document.getElementById('luasSection');
    const kelilingSection = document.getElementById('kelilingSection');
    const luasHasil = document.getElementById('luasHasil');
    const kelilingHasil = document.getElementById('kelilingHasil');
    const luasPenjabaran = document.getElementById('luasPenjabaran');
    const kelilingPenjabaran = document.getElementById('kelilingPenjabaran');
  
    switchButton.addEventListener('click', () => {
      if (luasSection.classList.contains('active')) {
        luasSection.classList.remove('active');
        kelilingSection.classList.add('active');
        switchButton.textContent = 'Switch to Luas Segitiga';
      } else {
        luasSection.classList.add('active');
        kelilingSection.classList.remove('active');
        switchButton.textContent = 'Switch to Keliling Segitiga';
      }
    });
  
    document.getElementById('hitungLuas').addEventListener('click', () => {
      const alas = parseFloat(document.getElementById('alas').value);
      const tinggi = parseFloat(document.getElementById('tinggi').value);
      if (isNaN(alas) || isNaN(tinggi)) {
        luasHasil.textContent = 'Input tidak valid';
        luasPenjabaran.textContent = '';
      } else {
        const luas = 0.5 * alas * tinggi;
        luasPenjabaran.textContent = `1/2 * ${alas} * ${tinggi}`;
        luasHasil.textContent = luas.toFixed(2);
      }
    });
  
    document.getElementById('hitungKeliling').addEventListener('click', () => {
      const sisiA = parseFloat(document.getElementById('sisiA').value);
      const sisiB = parseFloat(document.getElementById('sisiB').value);
      const sisiC = parseFloat(document.getElementById('sisiC').value);
      if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
        kelilingHasil.textContent = 'Input tidak valid';
        kelilingPenjabaran.textContent = '';
      } else {
        const keliling = sisiA + sisiB + sisiC;
        kelilingPenjabaran.textContent = `${sisiA} + ${sisiB} + ${sisiC}`;
        kelilingHasil.textContent = keliling.toFixed(2);
      }
    });
  });
  