"use server";

export async function BasvuruYapAksiyonu(prevState, values) {
  let errors = {}
  
  if(values.step == 1){
    errors = {
        name: !values.name && "İsim boş olamaz",
        surname: !values.surname && "Soyad boş olamaz",
        phone: !values.phone && "Telefon alanı boş olamaz",
        tcno: !values.tcno && "TCNO alanı boş olamaz"
    };
}

  return { errors };
}
