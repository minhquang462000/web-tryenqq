import Link from "next/link";

export default function TitlePage ({title}: {title: string}) {
  return (
    <ul className='flex flex-wrap text-sm font-semibold gap-3 '>
    <li><Link href={"/"}>Trang Chủ</Link></li>
    <li className='before:content-["/"] before:mr-3'>{title}</li>
</ul>
  );
}
