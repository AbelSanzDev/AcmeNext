import { Inter, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

//*Latin es utilizada para que solo cargue los elemetos necesarios que necesita (letras)
