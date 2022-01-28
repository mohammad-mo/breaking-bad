const QuoteListItem = ({ item }) => 
{
    return (
        <div className="card-quote">
            <div>
                <h2>{item.author}</h2>
                <p>{item.quote}</p>
                <span><span className="span-series">Series:</span> {item.series}</span>
            </div>
        </div>
    )
}
 
export default QuoteListItem