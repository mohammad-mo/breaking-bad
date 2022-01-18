import EpisodeListItem from "./EpisodeListItem"

const EpisodeList = ({ items }) => 
{
    return (
        <section className="cards-episode">
          {items.map(item => <EpisodeListItem item={item} key={item.episode_id} />)}
        </section>
    )
}
 
export default EpisodeList