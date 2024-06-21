import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleChange = (event) => {
    setTerm(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  }

  return (
  <div className="search-bar ui segment">
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <label>Video Search</label>
        <input type="text" value={term} onChange={handleChange} />
      </div>
    </form>
  </div>
)
};

export default SearchBar;