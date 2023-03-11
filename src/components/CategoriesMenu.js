import '../styles/CategoriesMenu.scss';

export default function CategoriesMenu() {
  return (
    <div className="categoriesMenu">
      <select
        name="macCategories"
        id="macCategories"
        className="removeBorder padding-margin"
        placeholder="MacBook"
      >
        <option disabled selected hidden>
          MacBook
        </option>
        <option>Item 1</option>
        <option>Item 2</option>
        <option>Item 3</option>
      </select>
      <select
        name="asusCategories"
        id="asusCategories"
        className="removeBorder padding-margin"
        placeholder="MacBook"
      >
        <option disabled selected hidden>
          Asus
        </option>
        <option>Item 1</option>
        <option>Item 2</option>
        <option>Item 3</option>
      </select>
      <select
        name="hpCategories"
        id="hpCategories"
        className="removeBorder padding-margin"
        placeholder="MacBook"
      >
        <option disabled selected hidden>
          HP
        </option>
        <option>Item 1</option>
        <option>Item 2</option>
        <option>Item 3</option>
      </select>

      <select
        name="lenovoCategories"
        id="lenovoCategories"
        className="removeBorder padding-margin"
        placeholder="MacBook"
      >
        <option disabled selected hidden>
          Lenovo
        </option>
        <option>Item 1</option>
        <option>Item 2</option>
        <option>Item 3</option>
      </select>

      <select
        name="acerCategories"
        id="acerCategories"
        className="removeBorder padding-margin"
        placeholder="MacBook"
      >
        <option disabled selected hidden>
          Acer
        </option>
        <option>Item 1</option>
        <option>Item 2</option>
        <option>Item 3</option>
      </select>
      <select
        name="dellCategories"
        id="dellCategories"
        className="removeBorder padding-margin"
        placeholder="MacBook"
      >
        <option disabled selected hidden>
          Dell
        </option>
        <option>Item 1</option>
        <option>Item 2</option>
        <option>Item 3</option>
      </select>
      <select
        name="lgCategories"
        id="lgCategories"
        className="removeBorder padding-margin"
        placeholder="MacBook"
      >
        <option disabled selected hidden>
          LG
        </option>
        <option>Item 1</option>
        <option>Item 2</option>
        <option>Item 3</option>
      </select>
      <select
        name="msiCategories"
        id="msiCategories"
        className="removeBorder padding-margin"
        placeholder="MacBook"
      >
        <option disabled selected hidden>
          MSI
        </option>
        <option>Item 1</option>
        <option>Item 2</option>
        <option>Item 3</option>
      </select>
    </div>
  );
}
