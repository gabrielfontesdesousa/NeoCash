import Laptop from "../../assets/LaptopMockup.png";
import Image from "next/image";
import clsx from "clsx";
export default function Container1() {
  return (
    <div className="flex w-full h-full justify-center">
      <main
        className={clsx(
          "w-[80%]",
          "h-[100%]",
          "pt-[10vh]",
          "text-white",
          "flex",
          "flex-col",
          "md:flex-row",
          "items-center",
          "justify-between",
          "px-6",
          "md:px-20",
          "py-16",
          "gap-10"
        )}
      >
        <div
          className={clsx(
            "max-w-xl",
            "text-center",
            "md:text-left",
            "space-y-6"
          )}
        >
          <h1
            className="text-4xl font-light leading-snug"
            style={{
              filter: "blur(1px)",
              WebkitMaskImage:
                "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.7) 70%, black 100%)",
              maskImage:
                "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.7) 70%, black 100%)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
          >
            Cresça com controle.
            <br />
            Gerencie seu negócio de
            <br />
            forma inteligente.
          </h1>
          <p className={clsx("text-gray-400", "text-base", "md:text-lg")}>
            A inteligência que seu negócio merece para crescer com
            <br className={clsx("hidden", "md:block")} />
            estrutura e segurança.
          </p>
          <button
            className={clsx(
              "mt-4",
              "bg-white",
              "text-black",
              "font-medium",
              "py-2",
              "px-6",
              "rounded-xl",
              "hover:bg-gray-200",
              "transition",
              "font-medium"
            )}
          >
            Iniciar teste grátis
          </button>
        </div>

        <div className={clsx("w-full", "md:w-1/2", "max-w-xl")}>
          <Image
            src={Laptop}
            alt="Dashboard em laptop"
            width={800}
            height={600}
            className={clsx("w-full", "h-auto", "object-contain")}
          />
        </div>
      </main>
    </div>
  );
}
