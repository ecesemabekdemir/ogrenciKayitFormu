"use client";
import "./fourth.css";

export default function FourthPage({ errorsState }) {
  return (
    <div className="fourthPage">
      <p>
        Ödevi Tamamladı mı?
        <label>
          <input name="odev" id="odev" type="radio" value="evet" />
          Evet
          <input name="odev" id="odev" type="radio" value="hayır" />
          Hayır
        </label>
        <br />
        {errorsState?.errors?.odev && (
          <small className="text-red-500">{errorsState?.errors?.odev}</small>
        )}
      </p>
      <p>
        Derse Katılım sağladı mı?
        <label>
          <input name="katilim" id="katilim" type="radio" value="evet" />
          Evet
          <input name="katilim" id="katilim" type="radio" value="hayır" />
          Hayır
        </label>
        <br />
        {errorsState?.errors?.katilim && (
          <small className="text-red-500">{errorsState?.errors?.katilim}</small>
        )}
      </p>
      <p>
        Öğrenci eğitimlerine söylemediği halde proje geliştirdi mi ?
        <label>
          <input name="newProje" id="newProje" type="radio" value="evet" />
          Evet
          <input name="newProje" id="newProje" type="radio" value="hayır" />
          Hayır
        </label>
        <br />
        {errorsState?.errors?.newProje && (
          <small className="text-red-500">
            {errorsState?.errors?.newProje}
          </small>
        )}
      </p>
      <p>
        Öğrenci derse zamanında geldi mi ?
        <label>
          <input name="zaman" id="zaman" type="radio" value="evet" />
          Evet
          <input name="zaman" id="zaman" type="radio" value="hayır" />
          Hayır
        </label>
        <br />
        {errorsState?.errors?.zaman && (
          <small className="text-red-500">{errorsState?.errors?.zaman}</small>
        )}
      </p>
      <p>
        Öğrenci ders esnasında sadece derse odaklandı mı ?
        <label>
          <input name="ders" id="ders" type="radio" value="evet" />
          Evet
          <input name="ders" id="ders" type="radio" value="hayır" />
          Hayır
        </label>
        <br />
        {errorsState?.errors?.ders && (
          <small className="text-red-500">{errorsState?.errors?.ders}</small>
        )}
      </p>
      <p>
        Öğrenci sertifika almaya hak kazandı mı ?
        <label>
          <input name="sertifika" id="sertifika" type="radio" value="evet" />
          Evet
          <input name="sertifika" id="sertifika" type="radio" value="hayır" />
          Hayır
        </label>
        <br />
        {errorsState?.errors?.sertifika && (
          <small className="text-red-500">
            {errorsState?.errors?.sertifika}
          </small>
        )}
      </p>

      <button type="submit">Kaydet</button>
    </div>
  );
}
