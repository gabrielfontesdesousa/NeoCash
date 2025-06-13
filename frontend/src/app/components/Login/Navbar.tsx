import Image from "next/image";
import Logo from "../../../../public/assets/LogoWhite.svg"
export default function Navbar() {
  return (
    <div className="w-[49.1%] h-[4vh]  absolute mt-7 flex items-center justify-between px-9">
      <div className="flex justify-center items-center h-[10vh]">
        <Image src={Logo} alt="Logo"></Image>
      </div>
      <div className="flex justify-center items-center gap-5 text-[#A4A4A4]">
        <a href="">Nosso produto</a>
        <a href="">Planos</a>
      </div>
    </div>
  );
}
