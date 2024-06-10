function App() {
  const categories = [
    {
      title: "Hats",
      id: 1,
    },
    {
      title: "Jackets",
      id: 2,
    },
    {
      title: "Sneakers",
      id: 3,
    },
    {
      title: "Women",
      id: 4,
    },
    {
      title: "Mens",
      id: 5,
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ id, title }) => (
        <div className="category-container" key={id}>
          <div className="background-image"></div>
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
