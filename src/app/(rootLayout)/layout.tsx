import { Header } from "@/features/components/Header";

const LocaleLayout = ({
  children,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      {children}
    </div>
  );
};

export default LocaleLayout;
