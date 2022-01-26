import { motion } from "framer-motion"
import { fade } from "../animation"

const EpisodeListItem = ({ item }) =>
{
    return (
        <motion.div variants={fade} className="card-episode">
            <h2>{item.series}</h2>
            <span>Title: <p>{item.title}</p></span>
            <span>Season: <p>{item.season}</p></span>
            <span>Episode: <p>{item.episode}</p></span>
            <span>Air Date: <p>{item.air_date}</p></span>
        </motion.div>
    )
}
 
export default EpisodeListItem
