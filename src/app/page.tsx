import Container1 from "@/components/Container1";
import Background from "../assets/Background.png";
import Header from "@/components/Header";
import clsx from "clsx";
export default function Home() {
  return (
    <div>
      <Header></Header>
      <section
        style={{ backgroundImage: `url(${Background.src})` }}
        className={clsx(
          "w-100vh",
          "h-[100vh]",
          "bg-cover",
          "bg-no-repeat",
          "origin-top-right",
          "bg-clip-content",
          "p-0",
          "m-0",
          "flex",
          "flex-col",
          "justify-center"
        )}
      >
        <Container1></Container1>
      </section>
    </div>
  );
}
