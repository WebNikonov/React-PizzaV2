import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

// import pizzas from './assets/pizzas.json';

// const client = {
//   name: 'Yulia',
//   phone: '+7-918-118-11-33',
//   volume: '3D',
// };

const pizzas = [];

function App() {
  fetch('https://64c64bf80a25021fde917f89.mockapi.io/items')
    .then((res) => {
      return res.json();
    })
    .then((arr) => {
      console.log(arr);
    });

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((obj) => (
              <PizzaBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
