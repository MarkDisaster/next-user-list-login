import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-blue-600 text-9xl">404</h1>
      <p className="text-lg mt-4">Stránka neexistuje.</p>
      <Link className="text-lg  text-blue-600 hover:underline" href="/">
        Pokračujte zpět na hlavní stránku
      </Link>
    </div>
  );
};

export default NotFoundPage;
