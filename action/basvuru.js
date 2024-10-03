"use server";

export async function BasvuruYapAksiyonu(formObj, step) {
  let errors = {};
  if (step == 1) {
    errors = {
      name: !formObj.name && "İsim boş olamaz",
      surname: !formObj.surname && "Soyad boş olamaz",
      phone: !formObj.phone && "Telefon alanı boş olamaz",
      tcno: !formObj.tcno && "TCNO alanı boş olamaz",
    };
  } else if (step == 2) {
    errors = {
      sinavPuan: !formObj.sinavPuan && "Sınav puanı boş olamaz",
      mulakatNot: !formObj.mulakatNot && "mulakatNot boş olamaz",
      puan: !formObj.puan && "puan alanı boş olamaz",
      radio: !formObj.radio && "radio alanı boş olamaz",
    };
  } else if (step == 3) {
    errors = {
      donemEgitmeni: !formObj.donemEgitmeni && "Dönem Eğitmeni boş olamaz",
      bolum: !formObj.bolum && "Bölüm boş olamaz",
      sinif: !formObj.sinif && "Sınıf alanı boş olamaz",
      ogrenciNo: !formObj.ogrenciNo && "Öğrenci numarası alanı boş olamaz",
    };
  } else if (step == 4) {
    errors = {
      odev: !formObj.odev && "Ödev boş olamaz",
      katilim: !formObj.katilim && "Katilim boş olamaz",
      newProje: !formObj.newProje && "newProje alanı boş olamaz",
      zaman: !formObj.zaman && "zaman numarası alanı boş olamaz",
      ders: !formObj.ders && "ders numarası alanı boş olamaz",
      sertifika: !formObj.sertifika && "sertifika numarası alanı boş olamaz",
    };
  } 


  for (const key in errors) {
    if (Object.prototype.hasOwnProperty.call(errors, key)) {
      const element = errors[key];
      if (element) return { errors };
    }
  }
}
