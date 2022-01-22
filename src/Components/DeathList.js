import DeathListItem from './DeathListItem'

// Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

const DeathList = ({ items }) => 
{
    return (
      <motion.section
        className="cards-death"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {items.map((item) => (
          <DeathListItem item={item} key={item.death_id} />
        ))}
      </motion.section>
    )
}
 
export default DeathList