import Link from "next/link";

export default function Next() {
  return (
    <>
      <Link
        className="rounded-md w-40 h-40 flex justify-center items-center bg-green-400 cursor-pointer"
        href="nextjs/css"
      >
        {" "}
        css yötemleri
      </Link>

      <Link
        className="rounded-md w-40 h-40 flex justify-center items-center bg-orange-400 cursor-pointer"
        href="nextjs/routing"
      >
        {" "}
        Routes
      </Link>

      <div className="rounded-md w-40 h-40 flex justify-center items-center bg-teal-400">
        pagination
      </div>

      <div className="rounded-md w-40 h-40 flex justify-center items-center bg-teal-400">
        layout
      </div>
    </>
  );
}
