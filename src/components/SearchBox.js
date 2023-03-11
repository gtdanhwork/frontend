import { useState } from 'react';
import Form from 'react-bootstrap';
import '../styles/SearchBox.scss';

export default function SearchBox() {
  const [keyWord, setKeyWord] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    alert(keyWord);
    //Start Searching
  };
  return (
    <div className="formSearchBar">
      <form className="formSearchInput" onSubmit={submitHandler}>
        <select
          name="categoriesSearch"
          id="categoriesSearch"
          className="removeBorder padding-margin"
          placeholder="Categories"
        >
          <option disabled selected hidden>
            All Categories
          </option>
          <option>Item 1</option>
          <option>Item 2</option>
          <option>Item 3</option>
        </select>
        <div className="formVerticalDiv" />
        <input
          type="text"
          name="keyword"
          className="formInputKey"
          placeholder="Search product, categories..."
          onChange={(e) => setKeyWord(e.target.value)}
        ></input>
        <button className="formSearchIcon" type="submit">
          <img src="magnifier.png" alt="Search" />
        </button>
      </form>
      <button className="formCartIcon">
        <img src="cart.png" alt="Check Out" />
      </button>
    </div>
  );
}
