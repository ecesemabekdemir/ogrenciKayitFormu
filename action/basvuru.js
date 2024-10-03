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
  }
  for (const key in errors) {
    if (Object.prototype.hasOwnProperty.call(errors, key)) {
      const element = errors[key];
      if (element) return { errors };
    }
  }
}
