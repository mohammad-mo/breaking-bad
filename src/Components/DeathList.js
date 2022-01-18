import DeathListItem from "./DeathListItem"

const DeathList = ({ items }) => 
{
    return (
        <section className="cards-death">
          {items.map(item => <DeathListItem item={item} key={item.death_id} />)}
        </section>
    )
}
 
export default DeathList