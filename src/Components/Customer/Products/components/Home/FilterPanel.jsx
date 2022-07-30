import React from 'react';
import { categoryList, ratingList } from '../Data';
import CheckboxProton from '../common/Checkox';
import FilterListToggle from '../common/FilterListToogle';
import SliderProton from '../common/SliderProton';
import './Style.css';

const FilterPanel = ({
  selectedCategory,
  selectCategory,
  selectedRating,
  selectedPrice,
  selectRating,
  brands,
  changeChecked,
  changePrice,
}) => (
  <div>
    <div className='input-group'>
      <h6 className='label'>Category</h6>
      <FilterListToggle
      className="button"
        options={categoryList}
        value={selectedCategory}
        selectToggle={selectCategory}
      />
      
    </div>
    <div className='input-group'>
      <h6 className='label'>Brand</h6>
      {brands.map((brand) => (
        <CheckboxProton
          key={brand.id}
          brand={brand}
          changeChecked={changeChecked}
        />
      ))}
    </div>
    <div className='input-group'>
      <h6 className='label-range'>Price Range</h6>
      <br/>
      <SliderProton value={selectedPrice} changePrice={changePrice} />
    </div>
    <div className='input-group'>
      <h6 className='label'>Star Rating</h6>
      <FilterListToggle
        options={ratingList}
        value={selectedRating}
        selectToggle={selectRating}
      />
    </div>
  </div>
);

export default FilterPanel;
