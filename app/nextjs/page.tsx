import Link from "next/link";

export default function Next() {
  return (
    <>
      <div className="rounded-md w-40 h-40 flex items-center justify-center bg-green-400">
        <Link href="nextjs/css"> css yötemleri</Link>
      </div>
      <div className="rounded-md w-40 h-40 flex items-center justify-center bg-blue-400">
        Routing
      </div>

      <div className="rounded-md w-40 h-40 flex items-center justify-center bg-teal-400">
        Pagination
      </div>
    </>
  );
}
