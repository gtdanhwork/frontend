import './App.css';

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
        <div className="formSearch">
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
        </div>
      </header>
      <main>Tester</main>
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
