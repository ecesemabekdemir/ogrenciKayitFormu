import FirstPage from "@/components/first-page";
import SecondPage from "@/components/second-page";

export default function StepPage({ params }) {
  const { step } = params;
  console.log("step :>> ", step);
  return (
    <>
      {step == 1 && (
        <p>
          <FirstPage />
        </p>
      )}
      {step == 2 && (
        <>
          <p>
            <SecondPage />
          </p>
        </>
      )}
      {step == 3 && <>ögretmen ögrenci sınıfı numarasiii</>}
      {step == 4 && <>mezuniyet durumu</>}
    </>
  );
}
