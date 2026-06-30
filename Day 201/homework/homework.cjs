//querry parrameters არის მოთხოვნის პარამეტრები ანუ რომელ ინფორმაციაზე წვდომას ვაძლევთ კლიენტს

//მარტო კატეგორიაზე წვდომა
//https://localhost:5000/products?category=electronics

//მარტო age წვდომა
//https://localhost:5000/users?age=18

//-----------
//https://localhost:5000/users?userId=5

//-----------
//https://localhost:5000/users?category-clothes&brand=nike



fetch("https://jsonplaceholder.typicode.com/todos?completed=true")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((tasks) => {
    console.log("Completed:", tasks);
  })
  .catch((error) => {
    console.error("you got an error LOL:", error);
  });

  fetch("https://jsonplaceholder.typicode.com/users?id=3")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((tasks) => {
    console.log("Completed:", tasks);
  })
  .catch((error) => {
    console.error("you got an error LOL:", error);
  });

//  - Path Parameter - ადგილის 
//   - Query Parameter - მონაცემების

//https://localhost:5000/settings?search=laptop&sort=price&order=asc
