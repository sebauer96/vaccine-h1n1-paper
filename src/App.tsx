// Photos from https://citizenofnowhe.re/lines-of-the-city
import "./index.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

export interface Section {
  id: number;
  text?: string;
  buttons: Array<{ text: string, urlRedirect: string }>
  imgSrc?: string;
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Section({ section }: { section: Section }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100);
  const yB = useParallax(scrollYProgress, 150);

  return (
    <section>
      <motion.h2 style={{ y }}>{section.text}</motion.h2>
      <div className="container" ref={ref}>
        {section.imgSrc && (
          <img src={`/${section.imgSrc}`} alt="A London skyscraper" />
        )}
        {section.buttons && section.buttons.length > 0 && (
          <div className="container-button">
            {section.buttons.map((button, index) => (
              <motion.button
                key={index}
                style={{ y: yB }}
                onClick={() => window.location.href = button.urlRedirect}
              >
                {button.text}
              </motion.button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const sections: Array<Section> = [
    {
      id: 0,
      text: 'Vacuna ARNm contra la Influenza',
      buttons: [
        {
          text: "Ver Folleto",
          urlRedirect: ""
        },
        {
          text: "Ver Paper",
          urlRedirect: "https://www.tandfonline.com/doi/full/10.1080/22221751.2023.2202278"
        }
      ]
    },
    {
      id: 1,
      text: 'Introducción a la Influenza',
      buttons: [
        {
          text: "Ver más",
          urlRedirect: ""
        }
      ],
      imgSrc: "virus-sm.png"
    },
    {
      id: 2,
      text: 'Funcionamiento del ARNm',
      buttons: [
        {
          text: "Ver más",
          urlRedirect: ""
        }
      ],
      imgSrc: "MRNA.png"
    },
    {
      id: 3,
      text: 'Respuesta Inmune',
      buttons: [
        {
          text: "Ver más",
          urlRedirect: ""
        }
      ],
      imgSrc: "respuesta_inmune.png"
    },
    {
      id: 4,
      text: 'Pruebas de Laboratorio',
      buttons: [
        {
          text: "Ver más",
          urlRedirect: ""
        }
      ],
      imgSrc: "test_laboratory.png"
    },
    {
      id: 5,
      text: 'Estudios en ratones',
      buttons: [
        {
          text: "Ver más",
          urlRedirect: ""
        }
      ],
      imgSrc: "mouse.png"
    },
    {
      id: 6,
      text: 'Conclusiones',
      buttons: [
        {
          text: "Ver más",
          urlRedirect: ""
        }
      ],
      imgSrc: "conclusion.png"
    }
  ]

  return (
    <>
      {sections.map((section) => (
        <Section section={section} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}
