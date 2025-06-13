import StackOfCoins from "../../../../public/assets/Stack-of-Coins.png";
import BankCard from "../../../../public/assets/Bank-Cards.png";
import ControlPanel from "../../../../public/assets/Control-Panel.png";
import Fingerprint from "../../../../public/assets/Fingerprint.png";
import Image from "next/image";
import Retangle from "../../../../public/assets/RectangleProduct.png"
import Retangle2 from "../../../../public/assets/Rectangle2.png"

export default function ContentProduct() {
  return (
    <div className="w-full h-[100%] flex justify-center">
      <div className="w-[70%] flex justify-center">
        <section className="py-16 px-4 text-center">
          <p className="text-yellow-500 font-normal uppercase text-sm mb-4">
            Nosso Produto
          </p>
          <h2 className="text-4xl font-light text-white mb-8">O Que Oferecemos</h2>
          <p className="max-w-2xl mx-auto text-[#949494] mb-12 font-light">
            Na NeoCash, oferecemos soluções que unem tecnologia, confiança e
            eficiência.
            Nosso compromisso vai além da entrega: buscamos gerar valor
            duradouro. Cada detalhe é pensado para atender com excelência e
            responsabilidade.
          </p>

          <button className="bg-white text-black font-semibold px-9 py-3 rounded-full mb-18">
            Nossos Planos
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              title="Gestão Financeira Digital"
              description="Controle de receitas, despesas e relatórios em um só lugar, com praticidade e clareza."
              icon={StackOfCoins.src}
            />
            <Card2
              title="Soluções de Pagamento"
              description="Integração com Pix, boletos e cartão de crédito para facilitar as transações dos seus clientes."
              icon={BankCard.src}
            />
            <Card
              title="Painel Inteligente de Dados"
              description="Visualize o desempenho do seu negócio com gráficos, métricas e insights automatizados."
              icon={ControlPanel.src}
            />
            <Card2
              title="Segurança e Confiabilidade"
              description="Proteção de dados com tecnologia de ponta e total conformidade com as normas legais."
              icon={Fingerprint.src}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
function Card({
    icon,
    title,
    description,
  }: {
    icon: string;
    title: string;
    description: string;
  }) {
    return (
      <div className="p-6 rounded-xl mb-[20px] mt-[20px]  text-left" style={{
        backgroundImage: `url(${Retangle.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
      }}>
        <div className="text-yellow-500 text-3xl mb-4"><Image src={icon} alt="" width={88} height={88}/></div>
        <h3 className="text-lg font-light text-white mb-2">{title}</h3>
        <p className="text-gray-400 font-thin text-sm">{description}</p>
      </div>
    );
  }
  function Card2({
    icon,
    title,
    description,
  }: {
    icon: string;
    title: string;
    description: string;
  }) {
    return (
      <div className="p-6 rounded-xl text-left" style={{
        backgroundImage: `url(${Retangle2.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
      }}>
        <div className="text-yellow-500 text-3xl mb-4"><Image src={icon} alt="" width={88} height={88}/></div>
        <h3 className="text-lg font-light text-white mb-2">{title}</h3>
        <p className="text-gray-400 font-thin text-sm">{description}</p>
      </div>
    );
  }
