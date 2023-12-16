export default function Home() {
  return (
    <>
      <h1 className="text-center mt-12 font-bold"> UTKU BAYRAKTAROĞLU </h1>

      <div className="flex justify-around text-white font-bold text-lg mt-12">
        <div className="rounded-md w-40 h-40 flex items-center justify-center bg-green-400">
          NextJs Özellikleri
        </div>
        <div className="rounded-md w-40 h-40 flex items-center justify-center bg-blue-400">
          Algoritma
        </div>
        <div className="rounded-md w-40 h-40 flex items-center justify-center bg-orange-500">
          Css
        </div>
        <div className="rounded-md w-40 h-40 flex items-center justify-center bg-teal-400">
          SCSS
        </div>
      </div>
    </>
  );
}
