
import { getListCategory } from "@/api/category";
import MainFooter from "@/components/Footer/MainFooter";
import ButtonBackToTopPage from "@/components/Functions/ButtonBackToTopPage";
import HeaderMain from "@/components/Headers/HeaderMain";
import HeaderSelect from "@/components/Headers/HeaderSelect";
import { IFilter, ILayout } from "@/interfaces";
export async function MainLayout({ children }: Readonly<ILayout>) {
  const categories = await getListCategory({limit: 24} as IFilter)
  return (
    <section className="w-screen relative dark:text-[#ebebeb]">
      <HeaderMain />
      <HeaderSelect categories={categories} />
      {children}
      <MainFooter />
      <ButtonBackToTopPage />
    </section>
  );
}
