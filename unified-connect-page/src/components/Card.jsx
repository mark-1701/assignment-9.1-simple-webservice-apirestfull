import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Card = ({ title, image_uri, url }) => {
  return (
    <motion.div whileHover={{ rotate: [-10, 10, -10, 0] }} transition={{ duration: 0.3 }} onHoverStart={e => {}} onHoverEnd={e => {}}>
      <Link to={url} className="card">
        <h2>{title}</h2>
        <img src={image_uri} alt="" />
      </Link>
    </motion.div>
  );
};

export default Card;
