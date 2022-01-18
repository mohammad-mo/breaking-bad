import React, { useState } from 'react'

const SearchBar = ({ setQuery }) =>
{
  const [text, setText] = useState('')

  const handleChange = (e) =>
  {
    setText(e.target.value)
    setQuery(e.target.value)
  }

  const submitHandler = (e) =>
  {
    e.preventDefault()
  }

  return (
    <div>
      <section className="search">
        <form onSubmit={submitHandler}>
          <input
            className="form-control"
            placeholder="Search Characters"
            autoFocus
            type="text"
            name="search"
            value={text}
            onChange={handleChange}
            id="serach"
          />
        </form>
      </section>
    </div>
  )
}

export default SearchBar
