"use server";

export async function BasvuruYapAksiyonu(prevState, values) {
  let errors = {};
  if (formObj.step == 1) {
    errors = {
      name: !values.name && "İsim boş olamaz",
      surname: !values.surname && "Soyad boş olamaz",
      phone: !formObj.phone && "Telefon alanı boş olamaz",
      tcno: !formObj.tcno && "TCNO alanı boş olamaz",
    };
  }

  return { errors };
}
