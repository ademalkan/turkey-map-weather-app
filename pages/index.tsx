import { CityModal, Footer, Map, SettingsModal } from "@/components";
import { Poppins } from "next/font/google";
import { useRouter } from "next/router";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  const router = useRouter();
  const city = router.query.city as string;
  const settings = router.query.settings as string;
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center bg-blue-300 ${poppins.className}`}
    >
      <div className="w-screen">
        <Map />
        {city ? <CityModal city={city} /> : null}
        {settings === "open" ? <SettingsModal /> : null}
      </div>
    </main>
  );
}
