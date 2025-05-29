import clsx from "clsx";
export default function Header() {
  return (
    <div
      className={clsx(
        "w-[100%]",
        "flex",
        "h-[10vh]",
        "items-center",
        "absolute"
      )}
    >
      <header
        className={clsx(
          "w-[70%]",
          "bg-transparent",
          "flex",
          "justify-end",
          "items-center",
          "h-[10vh]",
          "px-4"
        )}
      >
        <div
          className={clsx(
            "flex",
            "w-[55%]",
            "h-[50%]",
            "max-[500px]:hidden",
            "bg-black",
            "rounded-[4vh]"
          )}
          style={{
            opacity: 1,
            transform: "none",
          }}
        >
          <ul
            className={clsx(
              "text-white",
              "flex",
              "flex-wrap",
              "justify-around",
              "items-center",
              "w-full",
              "text-[12px]",
              "sm:text-[14px]",
              "gap-2",
              "font-[montserrat]",
              "font-extralight"
            )}
          >
            <a href="">
              <li>Nosso Produto</li>
            </a>
            <a href="">
              <li>Download</li>
            </a>
            <a href="">
              <li>Contato</li>
            </a>
            <a href="">
              <li>Quem Somos</li>
            </a>
          </ul>
        </div>
      </header>
      <div className={clsx("w-[30%]", "h-[10vh]", "flex", "justify-end")}>
        <div
          className={clsx(
            "w-[65%]",
            "px-5",
            "h-full",
            "items-center",
            "flex",
            "flex-row",
            "gap-[5%]",
            "justify-end"
          )}
        >
          <button
            className={clsx(
              "px-5",
              "py-2",
              "font-extralight",
              "rounded-3xl",
              "bg-transparent",
              "text-white",
              "border-2",
              "hover:bg-white",
              "hover:text-black",
              "transition",
              "hover:border-white",
              "cursor-pointer",
              "duration-300"
            )}
          >
            Login
          </button>
          <button
            className={clsx(
              "cursor-pointer",
              "px-5",
              "py-2",
              "font-light",
              "rounded-3xl",
              "bg-white",
              "text-black",
              "hover:opacity-[75%]",
              "transition",
              "duration-300"
            )}
          >
            Criar conta
          </button>
        </div>
      </div>
    </div>
  );
}
