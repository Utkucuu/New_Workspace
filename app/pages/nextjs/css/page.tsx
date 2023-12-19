import styles from "@/app/ui/nextjs/css/btn.module.css";
import PrimaryBtn from "@/app/ui/nextjs/css/PrimaryBtn";
import clsx from "clsx";
// import { useState } from "react";
function NextjsWithCss() {
  // const [count, setCount] = useState<number>(1);

  // console.log(typeof count);

  let value: string = "true";

  return (
    <div className=" ms-20">
      <h1 className="text-center mt-12 font-bold">
        Nextjs ile css uygulama yöntemleri
      </h1>
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
