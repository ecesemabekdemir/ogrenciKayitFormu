"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const route = useRouter();

  return (
    <>
      <button onClick={() => route.push('/steps/1')}>Form doldur</button>
    </>
  );
}
