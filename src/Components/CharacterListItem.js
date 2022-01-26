import { motion } from "framer-motion"
import { fade } from "../animation"

const CharacterListItem = ({ item }) => 
{
  return (
    <motion.div variants={fade} className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.img} alt="character" />
        </div>
        <div className="card-back">
          {/* character Name */}
          <h2>{item.name}</h2>
          <ul>
            <li>
              <strong>Actor Name: </strong>
              {item.portrayed}
            </li>

            <li>
              <strong>Nick Name: </strong>
              {item.nickname}
            </li>

            <li>
              <strong>Birthday: </strong>
              {item.birthday}
            </li>

            <li>
              <strong>Status: </strong>
                {item.status}
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default CharacterListItem
