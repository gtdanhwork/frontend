import './App.css';
import SearchBox from './components/SearchBox';
import CategoriesMenu from './components/CategoriesMenu';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoriesFilter from './components/CategoriesFilter';

function App() {
  return (
    <div className="siteContainer">
      <header>
        <div className="navHeader">
          <h1>TMA</h1>
          <div className="navBars">
            <div className="navHome">Home</div>
            <div className="navCategories">Categories</div>
            <div className="navContact">Contact</div>
          </div>
          <h3>Account</h3>
        </div>
        <SearchBox />
        <CategoriesMenu />
      </header>
      <main>Tester</main>
      <CategoriesScreen />
      <footer>
        <div className="leftFooter">
          <p>TMA</p>
          <p>
            Get out there & discover your <br /> laptop
          </p>
          <p>
            Copyright 2019 TMA, Inc. Terms &<br />
            Privacy
          </p>
        </div>
        <div className="rightFooter">
          <div className="companyInfo">
            <h2>More on The Company</h2>
            <p>About TMA</p>
            <p>Contributions & Writers</p>
            <p>Write For US</p>
            <p>Contact Us</p>
            <p>Privacy</p>
          </div>
          <div className="tmaInfo">
            <h2>More on TMA</h2>
            <p>The Team</p>
            <p>Jobs</p>
            <p>Press</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
