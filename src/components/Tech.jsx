import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hock";
import { technologies } from "../constans";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()} className="mb-10">
    <p className={styles.sectionSubText}>Introduction</p>
    <h2 className={styles.sectionHeadText}>Technologies.</h2>
  </motion.div>
    <div className="flex flex-row flex-wrap justify-center ap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon}></BallCanvas>
        </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech,"")