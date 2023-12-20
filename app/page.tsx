import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1 className="font-bold text-lg text-center uppercase py-4">
        utku bayraktaroğlu
      </h1>
      <div className="flex items-center justify-around text-white capitalize font-bold">
        <div className="rounded-md w-40 h-40 flex items-center justify-center bg-green-400">
          <Link href="/nextjs"> nextjs </Link>
        </div>
        <div className="rounded-md w-40 h-40 flex items-center justify-center bg-blue-400">
          algoritma
        </div>

        <div className="rounded-md w-40 h-40 flex items-center justify-center bg-teal-400">
          sCSS
        </div>
      </div>
    </>
  );
}
