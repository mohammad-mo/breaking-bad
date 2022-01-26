import { motion } from "framer-motion"
import { fade } from "../animation"

const QuoteListItem = ({ item }) => 
{
    return (
        <motion.div variants={fade} className="card-quote">
            <div>
                <h2>{item.author}</h2>
                <p>{item.quote}</p>
                <span><span className="span-series">Series:</span> {item.series}</span>
            </div>
        </motion.div>
    )
}
 
export default QuoteListItem