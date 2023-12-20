import { JetBrains_Mono } from "next/font/google";

const jetfont = JetBrains_Mono({ subsets: ["cyrillic-ext"] });

export default function PrimaryBtn() {
  return (
    <>
      <button
        className={`${jetfont.className} bg-sky-700 text-sky-50 border-spacing-3 p-4 rounded-md`}
      >
        {" "}
        tailwind{" "}
      </button>
    </>
  );
}
