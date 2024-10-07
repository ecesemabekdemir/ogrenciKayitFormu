"use client";
import "./fourth.css";

export default function FourthPage({ errorsState }) {
  return (
    <div className="fourthPage">
      <div className="box">
        <p>Ödevi Tamamladı mı?</p>
        <label>
          <p>
            <input name="odev" id="odev" type="radio" value="evet" />
            Evet
          </p>
          <p>
            <input name="odev" id="odev" type="radio" value="hayır" />
            Hayır
          </p>
        </label>
        {errorsState?.errors?.odev && (
          <small className="text-red-500">{errorsState?.errors?.odev}</small>
        )}
      </div>
      <div className="box">
        <p> Derse Katılım sağladı mı?</p>
        <label>
          <p>
            <input name="katilim" id="katilim" type="radio" value="evet" />
            Evet
          </p>
          <p>
            <input name="katilim" id="katilim" type="radio" value="hayır" />
            Hayır
          </p>
        </label>
        {errorsState?.errors?.katilim && (
          <small className="text-red-500">{errorsState?.errors?.katilim}</small>
        )}
      </div>
      <div className="box">
        <p> Öğrenci eğitimlerine söylemediği halde proje geliştirdi mi ?</p>
        <label>
          <p>
            <input name="newProje" id="newProje" type="radio" value="evet" />
            Evet
          </p>
          <p>
            <input name="newProje" id="newProje" type="radio" value="hayır" />
            Hayır
          </p>
        </label>
        {errorsState?.errors?.newProje && (
          <small className="text-red-500">
            {errorsState?.errors?.newProje}
          </small>
        )}
      </div>
      <div className="box">
        <p>Öğrenci derse zamanında geldi mi ?</p>
        <label>
          <p>
            <input name="zaman" id="zaman" type="radio" value="evet" />
            Evet
          </p>
          <p>
            <input name="zaman" id="zaman" type="radio" value="hayır" />
            Hayır
          </p>
        </label>
        {errorsState?.errors?.zaman && (
          <small className="text-red-500">{errorsState?.errors?.zaman}</small>
        )}
      </div>
      <div className="box">
        <p> Öğrenci ders esnasında sadece derse odaklandı mı ?</p>
        <label>
          <p>
            <input name="ders" id="ders" type="radio" value="evet" />
            Evet
          </p>
          <p>
            <input name="ders" id="ders" type="radio" value="hayır" />
            Hayır
          </p>
        </label>
        {errorsState?.errors?.ders && (
          <small className="text-red-500">{errorsState?.errors?.ders}</small>
        )}
      </div>
      <div className="box">
        <p>Öğrenci sertifika almaya hak kazandı mı ?</p>
        <label>
          <p>
            <input name="sertifika" id="sertifika" type="radio" value="evet" />
            Evet
          </p>
          <p>
            <input name="sertifika" id="sertifika" type="radio" value="hayır" />
            Hayır
          </p>
        </label>
        {errorsState?.errors?.sertifika && (
          <small className="text-red-500">
            {errorsState?.errors?.sertifika}
          </small>
        )}
      </div>

      <button className="saveBtn" type="submit">Kaydet</button>
    </div>
  );
}
