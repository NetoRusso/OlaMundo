/* eslint-disable jsx-a11y/alt-text */
import styles from './SobreMim.module.css';
import PostModelo from "componentes/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png';
import fotoSobreMim from 'assets/fotoAboutMe02.png';
import github from 'assets/icon_github.png';
import instagram from 'assets/icon_instagram.png';
import linkedin from 'assets/icon_linkedin.png';
import donuts from 'assets/icon_donuts.png';

export default function SobreMim() {
    return (

        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre Mim..."
        >
            <h3 className={styles.subtitulo} >
                Olá, eu sou o Neto!
            </h3>

            <img
                src={fotoSobreMim}
                alt='Foto do Neto com iluminação verde'
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou um intusiasta em comunicação e estou muito feliz em te ver por aqui!
            </p>
            <p className={styles.paragrafo}>
                Na faculdade, decidi me matricular no curso de Publicidade e Marketing na ESAMC. Na instituição, pude participar de vários grupos acadêmicos interdisciplinares, o que me permitiu adquirir um conhecimento amplo e aprofundado na área.  Desenvolvi habilidades em comunicação, trabalho em equipe e pensamento crítico, bem como adquiri conhecimentos em áreas como economia, administração e design por meio da interdisciplinaridade. Compreender a dinâmica do mercado e as necessidades dos consumidores de forma mais abrangente, foi o que essa experiência me permitiu.
            </p>

            <p className={styles.paragrafo}>

                Após a graduação, busquei aprimorar minhas habilidades em comunicação através da conclusão de uma graduação em PNL pela SLAP, explorando a formatação neural da comunicação. Desenvolvi competências para identificar e modificar padrões de comportamento e comunicação, adaptando minha forma de se comunicar a diferentes públicos e objetivos. As técnicas aprendidas em inteligência emocional e comunicação eficaz me permitem criar conexões mais profundas, transmitir ideias de forma clara e alcançar resultados desejados em projetos profissionais, onde a PNL se tornou fundamental. Combinando esse conhecimento com Publicidade e Marketing, sinto-me preparado para enfrentar desafios no mercado de trabalho e contribuir para o sucesso das empresas.
            </p>

            <p className={styles.paragrafo}>
                Em 2022 devido ao avanço de uma infecção no osso tive que amputar a perna direita, foi onde eu descidi mudar de carreira.
            </p>

            <p className={styles.paragrafo}>
                Busquei cursos online na Alura, Udemy e em outras plataformas devido ao meu interesse em programação. Graças a essa iniciativa, adentrei no universo da lógica de programação e construí uma base sólida de conhecimento. Pude explorar várias línguas e tomar uma decisão consciente sobre em qual delas devo me aprofundar nos estudos. Enquanto aprendia lógica de programação, também me dediquei ao estudo de ferramentas de UI & UX, como Figma e Adobe XD. Graças a essa jornada, pude desenvolver habilidades para criar interfaces intuitivas e esteticamente agradáveis, o que contribuiu significativamente para o enriquecimento da minha formação como programador.
            </p>

            <p className={styles.paragrafo}>
                Desde então, tem sido aprenas aprendizados atrás de aprendizados. Estou me apaixonando bastante pelo framwork do React que é uma modelagem bastante atrativa para aplicações web, dando seguimento startamos a empresa Donut's Tech, para trazer o dinamismo da comunicação e a magia da programação.
            </p>

            <h2 className={styles.tituloContato} > Meus Contatos:</h2>

            <div className={styles.botoesContato}>
                <a className={styles.botaoContato} href='https://github.com/NetoRusso' target='_blank' rel="noreferrer">
                    <img src={github} alt='icon do github' />
                    Github
                </a>

                <a className={styles.botaoContato} href='https://www.linkedin.com/in/neto-russo-8549b380/' target='_blank' rel="noreferrer">
                    <img src={linkedin} alt='icon do linkedin' />
                    Linkedin
                </a>

                <a className={styles.botaoContato} href='https://www.instagram.com/neto.russo/' target='_blank' rel="noreferrer">
                    <img src={instagram} alt='icon do instagram' />
                    Instagram
                </a>

                <a className={styles.botaoContato} href='https://donutstech.com.br' target='_blank' rel="noreferrer">
                    <img src={donuts} alt='icon do donuts tech' />
                    Donuts Tech
                </a>

            </div>

        </PostModelo>

    );
}
