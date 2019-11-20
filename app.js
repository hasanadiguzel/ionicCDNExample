const urunGir = document.querySelector('#input-urun');
const miktarGir = document.querySelector('#input-tutar');
const temizleBtn = document.querySelector('#btn-temizle');
const ekleBtn = document.querySelector('#btn-ekle');
const urunListesi = document.querySelector('#urun-listesi');
const toplamtutarYaz = document.querySelector('#toplam-tutar');

let toplamTutar = 0;

const temizle = () => {
        urunGir.value = '';
        miktarGir.value = '';
};

ekleBtn.addEventListener('click', () => {
    const eklenenUrun = urunGir.value;
    const eklenenTutar = miktarGir.value;

    if(
        eklenenUrun.trim().length <= 0 || eklenenTutar <= 0 || eklenenTutar.trim().length <=0 
    ) {
        return;
    }

    const yeniUrun = document.createElement('ion-item');
    yeniUrun.textContent = eklenenUrun + ': ' + eklenenTutar + ' TL';
    urunListesi.appendChild(yeniUrun);
    toplamTutar += +eklenenTutar;
    toplamtutarYaz.textContent = toplamTutar + ' TL';
    temizle();

});

temizleBtn.addEventListener('click', temizle);