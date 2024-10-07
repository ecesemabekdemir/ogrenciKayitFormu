"use server";

export async function BasvuruYapAksiyonu(formObj, step) {
  let errors = {};
  if (step == 1) {
    errors = {
      name: !formObj.name && "*İsim alanı boş bırakılamaz",
      surname: !formObj.surname && "*Soyad alanı boş bırakılamaz",
      phone: !formObj.phone && "*Telefon alanı boş bırakılamaz",
      tcno: !formObj.tcno && "*TCNO girilmesi zorunludur",
    };
  } else if (step == 2) {
    errors = {
      sinavPuan: !formObj.sinavPuan && "alan boş bırakılamaz",
      mulakatNot: !formObj.mulakatNot && "alan boş bırakılamaz",
      puan: !formObj.puan && "alan boş bırakılamaz",
      radio: !formObj.radio && "alan boş bırakılamaz",
    };
  } else if (step == 3) {
    errors = {
      donemEgitmeni: !formObj.donemEgitmeni && "alan boş bırakılamaz",
      bolum: !formObj.bolum && "alan boş bırakılamaz",
      sinif: !formObj.sinif && "alan boş bırakılamaz",
      ogrenciNo: !formObj.ogrenciNo && "Öğrenci numarası girilmesi zorunludur",
    };
  } else if (step == 4) {
    errors = {
      odev: !formObj.odev && "alan boş bırakılamaz",
      katilim: !formObj.katilim && "alan boş bırakılamaz",
      newProje: !formObj.newProje && "alan boş bırakılamaz",
      zaman: !formObj.zaman && "alan boş bırakılamaz",
      ders: !formObj.ders && "alan boş bırakılamaz",
      sertifika: !formObj.sertifika && "alan boş bırakılamaz",
    };
  }

  for (const key in errors) {
    if (Object.prototype.hasOwnProperty.call(errors, key)) {
      const element = errors[key];
      if (element) return { errors };
    }
  }
}
