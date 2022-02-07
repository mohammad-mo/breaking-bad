const DeathListItem = ({ item }) => 
{
    return (
        <div className="card-death">
            <h2>{item.death}</h2>
            <span>Responsible: <p>{item.responsible}</p></span>
            <span>Cause: <p>{item.cause}</p></span>
            <span>Season: <p>{item.season}</p></span>
            <span>Episode: <p>{item.episode}</p></span>
            <span>Last Words: <p>{item.last_words}</p></span>
        </div>
    )
}
 
export default DeathListItem
