import Footer from "@/components/Footer";
import InternalNavbar from "@/components/InternalNavbar";
import PageTitle from "@/components/PageTitle";
import FAQAccordion from "@/components/FAQAccordion";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function FAQPage() {
  const faqItems = [
    {
      question: "Idades recomendadas?",
      answer: <p>A idade recomendada para as nossas festas é de 3 a 10 anos. Adaptamos todas as atividades da festa de acordo com a faixa etária do grupo para garantir a máxima diversão.</p>
    },
    {
      question: "Posso levar bolo/comida?",
      answer: <p>Sim! Pode trazer o bolo e outros alimentos, mas pedimos que confirme sempre connosco previamente as alergias e evite trazer itens proibidos por questões de segurança (ex: nozes, amendoins, etc.).</p>
    },
    {
      question: "Quantas crianças estão incluídas?",
      answer: <p>O número de crianças depende do pacote escolhido. Podemos sempre ajustar o número de convidados mediante disponibilidade e um pequeno acréscimo por criança extra.</p>
    },
    {
      question: "Como funcionam as reservas e o sinal?",
      answer: <p>Para confirmar a sua reserva, solicitamos um sinal de €100 no caso dos aniversários, €50 no chá de Princesas e nos outros serviços depende do número de participantes.</p>
    },
    {
      question: "Qual é a política de cancelamentos?",
      answer: <p>Se precisar de cancelar, pedimos que nos avise com até 7 dias de antecedência. Oferecemos a possibilidade de remarcação sem qualquer custo adicional (válido para uma vez).</p>
    },
    {
      question: "Há estacionamento no local?",
      answer: <p>Sim, existem lugares de estacionamento nas redondezas do nosso espaço para facilitar a chegada e partida das famílias.</p>
    },
    {
      question: "Posso trazer animação externa?",
      answer: <p>De forma a garantirmos a qualidade e a segurança do evento, pedimos que verifique connosco antes. A animação externa está sujeita à nossa política e à possibilidade de integração com a nossa equipa.</p>
    },
    {
      question: "Com que antecedência devo reservar?",
      answer: <p>Recomendamos que efetue a sua reserva com uma antecedência ideal de 3 a 4 semanas para garantir a disponibilidade na data desejada.</p>
    }
  ];

  return (
    <>
    <InternalNavbar />
    <main style={{ background: 'var(--pink-pale)', paddingBottom: '100px' }}>
      <PageTitle 
        title="Perguntas Frequentes" 
        subtitle="Encontre aqui as respostas para as dúvidas mais comuns sobre os nossos espaços e serviços." 
      />
      
      <div className="container">
        <FAQAccordion items={faqItems} />
      </div>
    </main>
    <Footer />
    <WhatsAppButton />
    </>
  );
}
