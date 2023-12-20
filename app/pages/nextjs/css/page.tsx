import styles from "@/app/ui/nextjs/css/btn.module.css";
import PrimaryBtn from "@/app/ui/nextjs/css/PrimaryBtn";
import clsx from "clsx";
import Image from "next/image";
// import { useState } from "react";
function NextjsWithCss() {
  // const [count, setCount] = useState<number>(1);

  // console.log(typeof count);

  let value: string = "true";

  return (
    <div className="flex-col justify-center text-center">
      <h1 className="mt-12 font-bold">Nextjs ile css uygulama yöntemleri</h1>
      <div className=" flex gap-5 justify-center ">
        <Image
          src={
            "https://i.dunya.com/storage/files/images/2023/07/24/peugeot-508-yeni-SZOp_cover.jpg"
          }
          alt="peugeot-508"
          width={500}
          height={500}
          quality={100}
        />

        <Image
          src={
            "https://i.dunya.com/storage/files/images/2023/07/24/peugeot-508-yeni-SZOp_cover.jpg"
          }
          alt="peugeot-508"
          width={500}
          height={500}
          quality={10}
        />
      </div>
      <h2>Yöntem 1 - Module css</h2>
      <button className={styles.dangerBtn}>Module css</button>

      <h2>Yöntem 2 - tailwind css</h2>
      <PrimaryBtn />

      <div
        className={clsx("text-4xl font-bold", {
          "bg-yellow-200": value === "false",
          "bg-red-600": value === "true",
        })}
      >
        clsx
      </div>

      <div className={`${value === "true" ? "bg-gray-300" : "bg-blue-300"}`}>
        şartlı css
      </div>
    </div>
  );
}

export default NextjsWithCss;
