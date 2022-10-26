//react test commit
//find stock price of Amazon in js?
let itemPrice;

function getPrice(url) {
  return new Promise((resolve, reject) => {
    let price;
    price = 35; // gets the item's price
    return resolve(price);
  });
}

window.onload = function () {
  getPrice("testurl")
    .then((price) => {
      itemPrice = price;
      console.log('Item Price', itemPrice);
    })
    .catch((error) => {
      // Handling error
    });
}

