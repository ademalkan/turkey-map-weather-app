import { CityModal, Map } from "@/components";
import { Poppins } from "next/font/google";
import { useRouter } from "next/router";
import { NextUIProvider } from "@nextui-org/react";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  const router = useRouter();
  const city = router.query.city as string;
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center bg-blue-300 ${poppins.className}`}
    >
      <NextUIProvider>
        <div className="w-screen">
          <h1 className="flex justify-center text-2xl lg:text-5xl">
            Turkey Weather App
          </h1>
          <Map />
          {city ? <CityModal city={city} /> : null}
        </div>
      </NextUIProvider>
    </main>
  );
}
