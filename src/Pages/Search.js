import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import listCategoryImage from "../assets/jpg/listCategoryImage.jpg";

function Search() {
  return (
    <div className="search">
      <header>
        <p className="pageHeader">Search</p>
      </header>

      <main>
        <Slider />

        <p className="searchCategoryHeading">Categories</p>
        <div className="searchCategories">
          <Link to="/category/rent">
            <img
              src={rentCategoryImage}
              alt="rent"
              className="searchCategoryImg"
            />
            <p className="searchCategoryName">Places for rent</p>
          </Link>
          <Link to="/category/sale">
            <img
              src={listCategoryImage}
              alt="list"
              className="searchCategoryImg"
            />
            <p className="searchCategoryName">Places for sale</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Search;
