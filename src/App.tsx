import "./index.css";
import { useRef } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import IntroInfluenza from "./components/IntroInfluenza";
import LabTests from "./components/LabTests";
import ScrollToTop from "./components/ScrollTop";
import StudyObjective from "./components/StudyObjective";
import VacuumDesign from "./components/VacuumDesign";
import ResponseCelular from "./components/ResponseCelular";
import MouseStudy from "./components/MouseStudy";

export interface Section {
  id: number;
  text?: string;
  buttons: Array<{ text: string, urlRedirect?: string, component?: JSX.Element }>
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
          <img src={`/${section.imgSrc}`} alt={section.text} />
        )}
        {section.buttons && section.buttons.length > 0 && (
          <div className="container-button">
            {section.buttons.map((button, index) => (
              button.component ? (
                <Link key={index} to={button.urlRedirect!}>
                  <motion.button style={{ y: yB }}>
                    {button.text}
                  </motion.button>
                </Link>
              ) : (
                <motion.button
                  key={index}
                  style={{ y: yB }}
                  onClick={() => window.location.href = button.urlRedirect!}
                >
                  {button.text}
                </motion.button>
              )
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
          urlRedirect: "/intro-influenza",
          component: <IntroInfluenza />
        }
      ],
      imgSrc: "virus-sm.png"
    },
    {
      id: 2,
      text: 'Objetivo del Estudio',
      buttons: [
        {
          text: "Ver más",
          urlRedirect: "/study-objective",
          component: <StudyObjective />
        }
      ],
      imgSrc: "MRNA.png"
    },
    {
      id: 3,
      text: 'Diseño y Preparación de la Vacuna',
      buttons: [
        {
          text: "Ver más",
          urlRedirect: "/vacuum-design",
          component: <VacuumDesign />
        }
      ],
      imgSrc: "respuesta_inmune.png"
    },
    {
      id: 4,
      text: 'Evaluación de la Inmunogenicidad',
      buttons: [
        {
          text: "Ver más",
          urlRedirect: "/lab-tests",
          component: <LabTests />
        }
      ],
      imgSrc: "test_laboratory.png"
    },
    {
      id: 5,
      text: 'Respuesta Inmune Celular y Humoral',
      buttons: [
        {
          text: "Ver más",
          urlRedirect: "/response-celular",
          component: <ResponseCelular />
        }
      ],
      imgSrc: "conclusion.png"
    },
    {
      id: 6,
      text: 'Desafíos y Protección In Vivo',
      buttons: [
        {
          text: "Ver más",
          urlRedirect: "/mouse-study",
          component: <MouseStudy />
        }
      ],
      imgSrc: "mouse.png"
    }
  ];

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <>
            {sections.map((section) => (
              <Section key={section.id} section={section} />
            ))}
            <motion.div className="progress" style={{ scaleX }} />
          </>
        } />
        <Route path="/intro-influenza" element={<IntroInfluenza />} />
        <Route path="/study-objective" element={<StudyObjective />} />
        <Route path="/vacuum-design" element={<VacuumDesign />} />
        <Route path="/lab-tests" element={<LabTests />} />
        <Route path="/response-celular" element={<ResponseCelular />} />
        <Route path="/mouse-study" element={<MouseStudy />} />
      </Routes>
    </Router>
  );
}
