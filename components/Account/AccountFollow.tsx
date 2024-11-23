import * as React from "react";
import ListBookFollow from "./ListBookFollow";

export interface IAppProps { }

export default function AccountFollow(props: IAppProps) {
  return (
    <div className="flex text-sm flex-col text-[#333] gap-4">
      <h3 className="text-2xl font-bold h-max flex flex-col gap-1">
        TRUYỆN ĐANG THEO DÕI
        <span className="w-[80px] h-[2px] bg-[#ee2c74]" />
      </h3>
      <ListBookFollow />
    </div>
  );
}
