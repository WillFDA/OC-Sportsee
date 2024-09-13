export const MainContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="fixed w-screen h-screen mt-24 ml-24 inset-0">
      <section className="max-w-6xl mx-auto mt-16 bg-gray-200">
        {children}
      </section>
    </main>
  );
};
