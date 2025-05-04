import AboutSelf  from "../assets/img/sobremim.png";

const About = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="">
                <p id="aboutparagraf">
                  Nasci em Monsenhor Tabosa, no Ceará, e desde criança sempre
                  fui muito curiosa. Como diziam em casa, eu era "perguntadeira"
                  – sempre querendo entender o porquê das coisas. A tecnologia,
                  por sua vez, despertou ainda mais essa minha essência. O que
                  realmente ampliou meu interesse por essa área foi uma oficina
                  de robótica que participei na escola. Foi uma experiência
                  transformadora, que agradeço profundamente por ter feito parte
                  do meu caminho. Aquele momento foi crucial para o meu
                  desenvolvimento e despertou em mim a paixão por inovação e
                  solução de problemas. Atualmente, estou cursando Análise e
                  Desenvolvimento de Sistemas e faço parte de um projeto voltado
                  para formação de desenvolvedores, onde tenho a oportunidade de
                  aprimorar minhas habilidades como Desenvolvedora Full Stack,
                  além de estudar inglês e desenvolver soft skills. Tive a sorte
                  de ser selecionada em processos seletivos que me concederam
                  bolsas de estudo, algo que valorizo imensamente. Sou
                  profundamente grata a todos que, de alguma forma, contribuíram
                  para a minha trajetória. Apesar dos desafios, nunca deixei de
                  acreditar no meu potencial. Cada apoio, orientação e
                  oportunidade que recebi reforçou minha convicção de que, com
                  determinação e ajuda, é possível superar qualquer obstáculo.
                  Olhando para o futuro, sinto-me mais confiante no impacto
                  positivo que posso gerar no mundo da tecnologia. Que essa
                  mesma força continue a me guiar enquanto sigo construindo uma
                  carreira repleta de realizações e contribuições
                  significativas. Obrigada!
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <img className="" src={AboutSelf} alt="Imagem de Sobre Mim" />
            </div>
          </div>
        </div>
      </>
    );
}
 
export default About;