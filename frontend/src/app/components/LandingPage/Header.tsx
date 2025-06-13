import Logo from "../../../../public/assets/Logo.svg";
import Image from "next/image";
export default function Header() {
  return (
    <header className="w-full h-[15vh] flex items-center justify-around ">
      <div className="w-[20%] h-full flex pl-10 items-center">
        <Image src={Logo.src} alt="Logo" width={180} height={180} />
      </div>
      <div className="w-[60%] h-full flex justify-center items-center">
        <div className="h-[39%] w-[59%] bg-black rounded-[100px]">
          <div className="w-[100%] h-full flex gap-10 text-white justify-center items-center font-extralight text-[18px]">
            <a href="">Nosso produto</a>
            <a href="">Planos</a>
            <a href="">Documentação</a>
            <a href="">Sobre nós</a>
          </div>
        </div>
      </div>
      <div className="w-[20%] h-full  flex justify-center items-center">
        <div className="w-[80%] gap-4 flex">
            <button className="text-white bg-transparent border-1 rounded-[17px] px-10 py-3 font-light">Login</button>
            <button className="text-black bg-white rounded-[17px] px-8 py-3 font-light">Criar Conta</button>
        </div>
      </div>
    </header>
  );
}
