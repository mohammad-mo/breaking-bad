import React from 'react'
import QuoteListItem from './QuoteListItem'

const QuoteList = ({ items }) => 
{
  return (
    <section className="cards-quote">
      {items.map(item => <QuoteListItem item={item} key={item.quote_id} />)}
    </section>
  )
}

export default QuoteList
