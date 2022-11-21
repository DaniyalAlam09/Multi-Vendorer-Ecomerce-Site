import React, { useEffect, useState } from "react";
import axios from "axios";
import HeroSection from "../HomePage/HeroSection";
import EmptyView from "./common/EmptyView";
import FilterPanel from "./Home/FilterPanel";
import List from "./Home/List";
import SearchBar from "./Home/SearchBar";
import { dataList } from "./Data";
import "./styles.css";
import Hero from "../Images/Hero.png";
import Navbar from "../../Genral/Navbar";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);

  const [product, setProduct] = useState([]);
  React.useEffect(function () {
    axios
      .get("http://localhost:4000/shopowners/viewProducts")
      .then((res) => {
        setProduct(Object.values(res.data));

        // setProduct(prevState => [res.data])
        console.log(res.data);
        // console.log(product.reviews["rating"]);
        console.log(product);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [brands, setbrands] = useState([
    { id: 1, checked: false, label: "Apple" },
    { id: 2, checked: false, label: "Huawei" },
    { id: 3, checked: false, label: "Acer" },
  ]);

  const [list, setList] = useState(product);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  const handleChangeChecked = (id) => {
    const cusinesStateList = brands;
    const changeCheckedbrands = cusinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setbrands(changeCheckedbrands);
  };

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  const applyFilters = () => {
    let updatedList = product;

    // Rating Filter
    if (selectedRating) {
      updatedList = Object.values(updatedList).filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    // Category Filter
    if (selectedCategory) {
      updatedList = Object.values(updatedList).filter(
        (item) => item.category === selectedCategory
      );
    }

    // brand Filter
    const brandsChecked = brands
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (brandsChecked.length) {
      updatedList = Object.values(updatedList).filter((item) =>
        brandsChecked.includes(item.brand)
      );
    }

    // Search Filter
    if (searchInput) {
      updatedList = Object.values(updatedList).filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = Object.values(updatedList).filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    setList(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    console.log(list);
    applyFilters();
  }, [selectedRating, selectedCategory, brands, searchInput, selectedPrice]);

  return (
    <div>
      {/* <Navbar /> */}
      <div className="home headinng">
        <HeroSection
          Name1={"All Products are available "}
          Name2={"Camera Product"}
          ImageSource="/images/ProductsHero.png"
        />
        <div className="container heading">
          {/* Search Bar */}
          <SearchBar
            value={searchInput}
            changeInput={(e) => setSearchInput(e.target.value)}
          />
          <div className="home_panelList-wrap heading">
            {/* Filter Panel */}
            <div className="home_panel-wrap">
              <FilterPanel
                selectedCategory={selectedCategory}
                selectCategory={handleSelectCategory}
                selectedRating={selectedRating}
                selectedPrice={selectedPrice}
                selectRating={handleSelectRating}
                brands={brands}
                changeChecked={handleChangeChecked}
                changePrice={handleChangePrice}
              />
            </div>
            {/* List & Empty View */}
            <div className="home_list-wrap">
              {/* {resultsFound ? <List list={list} /> : <EmptyView />} */}
              <List list={list} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
