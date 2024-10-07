
import './DishCard.css'; // Import the specific CSS for this component

const DishCard = () => {
  const dishes = [
    { name: "Pasta", price: "$12" },
    { name: "Burger", price: "$8" },
 
  ];

  return (
    <div className="dish-card-container">
      {dishes.map((dish, index) => (
        <div className="dish-card" key={index}>
          <h3 className="dish-name">{dish.name}</h3>
          <p className="dish-price">{dish.price}</p>
        </div>
      ))}
    </div>
  );
}

export default DishCard;
