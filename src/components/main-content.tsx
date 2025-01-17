export const MainContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="fixed w-screen h-screen py-24 pl-24 inset-0 overflow-y-auto">
      <section className="max-w-6xl mx-auto mt-16 ">{children}</section>
    </main>
  );
};
