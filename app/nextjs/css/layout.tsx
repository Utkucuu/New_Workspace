export default function NextjsWithCss({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-sky-300 flex-col justify-center text-center">
      {children}
    </section>
  );
}
