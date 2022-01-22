import EpisodeListItem from './EpisodeListItem'

// Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

const EpisodeList = ({ items }) => 
{
    return (
      <motion.section
        className="cards-episode"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {items.map((item) => (
          <EpisodeListItem item={item} key={item.episode_id} />
        ))}
      </motion.section>
    )
}
 
export default EpisodeList