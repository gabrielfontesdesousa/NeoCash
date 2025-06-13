import clsx from "clsx";
import GoogleIcon from "../../../../public/assets/Google.svg";
import AppleIcon from "../../../../public/assets/Apple Inc.svg";
import Image from "next/image";

export default function FormContainer() {
  return (
    <div
      className={clsx(
        "min-h-screen",
        "bg-black",
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        "px-4"
      )}
    >
      <h1 className={clsx("text-white", "text-3xl", "font-medium", "mb-2")}>
        Entre em sua conta
      </h1>
      <p className={clsx("text-gray-400", "mb-8", "font-medium")}>
        Insira suas credenciais para entrar em sua conta{" "}
      </p>

      <div className={clsx("flex", "gap-4", "mb-6")}>
        <button
          className={clsx(
            "flex",
            "items-center",
            "gap-2",
            "bg-[#1b1b1b00]",
            "border",
            "border-[#1b1b1b]",
            "rounded-md",
            "text-white",
            "hover:bg-gray-800",
            "transition",
            "px-17",
            "py-3"
          )}
        >
          <Image src={GoogleIcon} alt="Google icon" className="h-5 w-5" />
          Google
        </button>

        <button
          className={clsx(
            "flex",
            "items-center",
            "gap-2",
            "bg-[#1b1b1b00]",
            "border",
            "border-[#1b1b1b]",
            "rounded-md",
            "px-17",
            "py-3",
            "text-white",
            "hover:bg-gray-800",
            "transition"
          )}
        >
          <Image src={AppleIcon} alt="Apple icon" className="h-5 w-5" />
          Apple
        </button>
      </div>

      <div
        className={clsx(
          "flex",
          "items-center",
          "gap-2",
          "mb-8",
          "text-gray-600",
          "w-full",
          "max-w-md"
        )}
      >
        <hr className={clsx("flex-grow", "border-gray-600")} />
        <span>ou</span>
        <hr className={clsx("flex-grow", "border-gray-600")} />
      </div>

      <form className={clsx("w-full", "max-w-md", "space-y-4", "font-medium")}>
        <div className={clsx("flex", "flex-col")}>
          <label className={clsx("text-gray-300", "mb-1")} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Ex: AnaMatos@gmail.com"
            className={clsx(
              "bg-[#1B1B1B]",
              "text-white",
              "rounded-[12px]",
              "px-4",
              "py-4",
              "placeholder-[#949494]",
              "focus:outline-none",
              "focus:ring-2",
              "focus:ring-blue-600"
            )}
          />
        </div>

        <div className={clsx("flex", "flex-col")}>
          <label className={clsx("text-gray-300", "mb-1")} htmlFor="password">
            Senha
          </label>
          <input
            id="password"
            type="password"
            placeholder="Insira sua senha"
            className={clsx(
              "bg-[#1B1B1B]",
              "text-white",
              "rounded-xl",
              "px-4",
              "py-4",
              "placeholder-[#949494]",
              "focus:outline-none",
              "focus:ring-2",
              "focus:ring-blue-600"
            )}
          />
          <span className={clsx("text-gray-500", "text-sm", "mt-9")}>
            Deve ter mais de 8 caracteres
          </span>
        </div>

        <button
          type="submit"
          className={clsx(
            "w-full",
            "bg-white",
            "text-black",
            "py-3",
            "rounded-xl",
            "font-semibold",
            "hover:bg-gray-200",
            "transition"
          )}
        >
          Entrar
        </button>
      </form>

      <p className={clsx("text-gray-400", "mt-6")}>
        Ainda não tem uma conta?{" "}
        <a
          href="#"
          className={clsx("text-white", "underline", "hover:text-gray-300")}
        >
          Logar
        </a>
      </p>
    </div>
  );
}
