export default function NextjsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1 className="text-center py-4 font-bold text-lg">
        nextjs ile denemeler
      </h1>
      <div className="flex justify-around text-white font-bold ">
        {children}
      </div>
    </section>
  );
}
