const CharacterListItem = ({ item }) => 
{
  return (
    <div className="card">
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
    </div>
  )
}

export default CharacterListItem
