import { getAccountByUserId } from "@/api/account";
import PageAccount from "@/components/Page/PageAccount";
import { PropParams } from "@/interfaces";
import { MainLayout } from "@/layouts";
import { cookies } from "next/headers";
import { FaFlag } from "react-icons/fa";
export default async function page({ params }: PropParams) {
  const dashboard = String((await params).dashboard);
  const account = await getAccountByUserId();
  return (
    <MainLayout>
      <main className="w-full  lg:w-[1200px] flex flex-col gap-5 p-3 m-auto">
        <h2 className="flex gap-1 text-xl font-semibold items-center text-[#56ccf2]">
          <FaFlag /> Thông tin cá nhân{" "}
        </h2>
        <PageAccount account={account} dashboard={dashboard} />
      </main>
    </MainLayout>
  );
}
