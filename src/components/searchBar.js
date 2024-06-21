import { useState } from 'react';

function SearchBar() {
  const [term, setTerm] = useState('');

  const handleChange = (event) => {
    setTerm(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(`TODO: create API fetch with: ${term}`)
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