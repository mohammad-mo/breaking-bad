const QuoteListItem = ({ item }) => {
  return (
    <div className='card-quote'>
      <h2>{item.author}</h2>
      <p>{item.quote}</p>
      <span>
        Series: <p>{item.series}</p>
      </span>
    </div>
  )
}

export default QuoteListItem
