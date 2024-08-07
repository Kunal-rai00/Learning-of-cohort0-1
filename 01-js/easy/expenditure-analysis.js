/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  totalTransationPrice = {};

  transactions.forEach(transaction => {
    const { category, price } = transaction;
    if (totalTransationPrice[category]) {
      totalTransationPrice[category] += price;
    } else {
      totalTransationPrice[category] = price;
    }
  });

  const result = [];
  for (const category in totalTransationPrice) {
    result.push({ category, totalSpent: totalTransationPrice[category] });
  }
  return result;
}

let transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  }
];

let ans = calculateTotalSpentByCategory(transactions);
console.log(ans)

module.exports = calculateTotalSpentByCategory;
