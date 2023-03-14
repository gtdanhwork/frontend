// import { useState } from 'react';
import { Brands, BrandStocks, Ratings } from '../utils/brandCheckboxes';
import styled from 'styled-components';
import Rating from './Rating';
import "../styles/CategoriesFilter.scss"

export default function CategoriesFilter() {
  // const [check, isCheck] = useState(false);

  const CustomCheckbox = styled.div`
    .customCheckbox {
      display: flex;
      position: relative;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 22px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    .customCheckbox input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      appearance: 0;
      height: 0;
      width: 0;
    }

    .customCheck {
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      border: 2px solid #d1d1d1;
      border-radius: 5px;
    }

    .customCheckbox:hover input ~ .customCheck {
      background-color: #ccc;
    }

    .customCheckbox input:checked ~ .customCheck {
      background-color: #6a983c;
      border: 2px solid #46760a;
      border-radius: 5px;
    }

    .customCheck:after {
      content: '';
      position: absolute;
      display: none;
    }

    .customCheckbox input:checked ~ .customCheck:after {
      display: block;
    }

    .customCheckbox .customCheck:after {
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  `;

  const listBrandStock = BrandStocks.map(({ name, countInStocks }, index) => {
    return (
      <li key={index} style={{ 'list-style-type': 'none' }}>
        <div className="listBrandStocks" style={{display: 'flex', justifyContent: 'space-between'}}>
          <span className="brandNames" style={{float: 'left'}}>{name}</span>
          <span className="brandStocks"style={{float: 'right'}}>{countInStocks}</span>
        </div>
      </li>
    );
  });

  const listBrand = Brands.map(({ name }, index) => {
    return (
      <li key={index} style={{ 'list-style-type': 'none' }}>
        <div className="listBrands">
          <CustomCheckbox>
            <div className="customCheckbox">
              <input
                type="checkbox"
                id={`check-${index}`}
                name={name}
                value={name}
              />
              <span className="customCheck" />
              <label
                style={{ 'margin-left': '8px' }}
                htmlFor={`check-${index}`}
              >
                {name}
              </label>
            </div>
          </CustomCheckbox>
        </div>
      </li>
    );
  });

  const listRating = Ratings.map(({ rating, name }, index) => {
    return (
      <li key={index} style={{ 'list-style-type': 'none' }}>
        <div className="listRatings">
          <CustomCheckbox>
            <div className="customCheckbox">
              <input
                type="checkbox"
                id={`rating-${index}`}
                name={name}
                value={name}
              />
              <span className="customCheck" />
              <label
                style={{ 'margin-left': '8px', display: 'block'}}
                htmlFor={`rating-${index}`}
              >
                <Rating rating={rating} />
              </label>
            </div>
          </CustomCheckbox>
        </div>
      </li>
    );
  });

  return (
    <div className="categoriesFilter">
      <div className="brandCategories">
        <h1 style={{margin: 0, marginBottom: '48px'}}>Categories</h1>
        {listBrandStock}
      </div>
      <div className="brandCheckbox">
        <h1>Brands</h1>
        {listBrand}
      </div>
      <div className="ratingFilter">
        <h1>Rating</h1>
        {listRating}
      </div>
    </div>
  );
}
