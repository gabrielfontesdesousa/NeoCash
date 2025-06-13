import LaptopMockupHome from "../../../../public/assets/LaptopMockup.png";
import Image from "next/image";
import clsx from "clsx";
export default function ContentHome() {
  return (
    <div
      className={clsx(
        "w-full",
        "h-[100vh]",
        "flex",
        "justify-center",
        "items-center"
      )}
    >
      <div
        className={clsx("w-[100%]", "h-[60%]", "", "flex", "justify-around")}
      >
        <div
          className={clsx(
            "w-[40%]",
            "h-[100%]",
            "flex",
            "justify-center",
            "items-center"
          )}
        >
          <div
            className={clsx(
              "space-y-6"
            )}
          >
            <h1
              className={clsx("text-[50px]", "font-light", "leading-snug")}
              style={{
                color: "white",
                filter: "blur(1px)",
                WebkitMaskImage:
                  "linear-gradient(to right, black 70%, transparent 100%)",
                maskImage:
                  "linear-gradient(to right, black 70%, transparent 100%)",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "100% 100%",
                maskSize: "100% 100%",
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
                "py-3",
                "px-7",
                "rounded-xl",
                "hover:bg-gray-200",
                "transition",
                "font-medium"
              )}
            >
              Iniciar teste grátis
            </button>
          </div>{" "}
        </div>
        <div
          className={clsx(
            "w-[40%]",
            "h-[100%]",
            "flex",
            "justify-center",
            "items-center"
          )}
        >
          <Image src={LaptopMockupHome} alt="Laptop" />
        </div>
      </div>
    </div>
  );
}
