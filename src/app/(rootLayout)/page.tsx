export const HomePage = () => {
  console.log(
    "client or server stranka: ",
    typeof window === "undefined" ? "server" : "client"
  );
  return (
    <h1 className="w-full flex flex-col items-center justify-center mt-32 text-2xl text-blue-600 font-bold">
      Toto je SSG stránka, která je dostupná i bez přihlášení.
    </h1>
  );
};

export default HomePage;
