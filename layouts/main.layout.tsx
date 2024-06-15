

import MainFooter from "@/components/Footer/MainFooter";
import ButtonBackToTopPage from "@/components/Functions/ButtonBackToTopPage";
import HeaderSelectDesktop from "@/components/Headers/Desktops/HeaderSelectDesktop";
import HeaderMain from "@/components/Headers/HeaderMain";

import HeaderSelectMobile from "@/components/Headers/Mobile/HeaderSelectMobile";

import { ILayout } from "@/interfaces";
import * as React from "react";
export function MainLayout({ children }: Readonly<ILayout>) {
  return (
    <section className="w-screen relative dark:text-[#ebebeb]">
      <HeaderMain />
      <HeaderSelectMobile />
      <HeaderSelectDesktop />
      {children}
      <MainFooter />
      <ButtonBackToTopPage />
    </section>
  );
}
