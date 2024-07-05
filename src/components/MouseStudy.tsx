import { motion } from 'framer-motion';
import '../section.css';  // Importa un archivo CSS común para estilos de secciones
import { useNavigate } from 'react-router-dom';
const MouseStudy = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navega a la página anterior
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="section-content"
    >
      <div className="header">
        <button onClick={handleBackClick}>Atrás</button>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Desafíos y Protección In Vivo
      </motion.h2>
      <motion.img
        src="/mouse.png"
        alt="Desafíos y Protección In Vivo"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />
      <motion.p
        className="description"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Los ratones inmunizados con la vacuna H1c-mRNA-LNPs y luego expuestos a múltiples cepas del virus H1N1 mostraron alta supervivencia y menos pérdida de peso comparado con los ratones no vacunados. Además, los ratones vacunados tuvieron menos carga viral en los pulmones y menos daño pulmonar, según análisis histopatológicos.
      </motion.p>
      <motion.p
        className="description"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Todos los ratones BALB/c utilizados en este estudio fueron criados en jaulas ventiladas por separado y tuvieron acceso a alimentos y agua estériles. Todos los animales fueron tratados de acuerdo con las disposiciones de las Regulaciones para la Administración de Asuntos Relacionados con Animales Experimentales de China. Los protocolos del estudio recibieron la aprobación del Comité de Ética en Experimentación Animal del Instituto de Productos Biológicos de Wuhan Co. Ltd. (WIBP-A II312022001).
      </motion.p>

    </motion.div>
  );
};

export default MouseStudy;
