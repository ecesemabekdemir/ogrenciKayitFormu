"use client";
import { useRouter } from "next/navigation";
import "./globals.css";

export default function Home() {
  const route = useRouter();

  return (
    <div class="mainPage">
      <div class="main">
        <h3>
          Sevgili öğrencimiz, X Kurumu olarak, geleceğinize yapacağınız
          yatırımlarda yanınızdayız. Eğitim hayatınıza yeni bir yön vermek,
          kariyer hedeflerinize ulaşmak ve kişisel gelişiminizi desteklemek
          amacıyla tasarladığımız eğitim programlarımıza katılmak için bu formu
          doldurmanız yeterlidir. Aşağıda yer alan başvuru formunu dikkatlice
          doldurarak, başvurunuzu kolaylıkla gerçekleştirebilirsiniz. Sormak
          istediğiniz sorular için bizimle her zaman iletişime geçebilirsiniz.
          Başvurunuzun değerlendirilmesinin ardından sizinle en kısa sürede
          iletişime geçeceğiz. Başarı dolu bir yolculuk için ilk adımı attığınız
          için teşekkür ederiz!
        </h3>
        <button onClick={() => route.push("/steps/1")}>Başvuru Formu </button>
      </div>
    </div>
  );
}
