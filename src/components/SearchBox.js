// import { useState } from "react";
import '../styles/SearchBox.scss';

export default function SearchBox() {
  // const  [keyWord, setKeyWord] = useState('');
  // const submitHandler = (e) => {
  //     e.preventDefault();
  //     //Start Searching
  // }
  return (
    <div className="formSearchBar">
      <div className="formSearchInput">
        <div className="formInput">
          <div className="formDropdown">All Categories V</div>
          <div className="formVerticalDiv" />
          <input
            className="formInputKey"
            placeholder="Search Product, categories..."
          ></input>
          <button className="formSearchIcon">
            <img src="magnifier.png" alt="Search" />
          </button>
        </div>
        <button className="formCartIcon">
          <img src="cart.png" alt="Check Out" />
        </button>
      </div>
    </div>
  );
}
