const QuoteListItem = ({ item }) => 
{
    return (
        <div className="card-quote">
            <h2>{item.author}</h2>
            <p>{item.quote}</p>
            <span><span className="span-series">Series:</span> {item.series}</span>
        </div>
    )
}
 
export default QuoteListItem