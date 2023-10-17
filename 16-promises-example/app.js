//  Javascript Nuggets - Promises Example
// .first - after 1s first red;
// .second - after 3s second blue; 4s
// .third - after 2s third green; 6s
// IN SEQUENCE !!!!
/*
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  addColor(1000, ".first", "red", "Hello Data")
    .then((data) => addColor(3000, ".second", "blue", data))
    .then(() => addColor(2000, ".third", "green"))
    .catch((err) => console.log(err));
});

function addColor(time, selector, color, data) {
  const element = document.querySelector(selector);
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve(data);
      }, time);
    } else {
      reject(`There is no such element : "${selector}"`);
    }
  });
}
*/

const users = [
  { id: 1, name: "john" },
  { id: 2, name: "susan" },
  { id: 3, name: "anna" },
];

const articles = [
  { userId: 1, articles: ["one", "two", "three"] },
  { userId: 2, articles: ["four", "five"] },
  { userId: 3, articles: ["six", "seven", "eight", "nine"] },
];

// getUser("anna")
//   .then((user) => getArticle(user.id))
//   .then((articles) => console.log(articles))
//   .catch((err) => console.log(err));

const getData = async () => {
  try {
    const user = await getUser("john");
    const articles = await getArticle(user.id);
    console.log(articles);
  } catch (error) {
    console.log(error);
  }
};
getData();

function getUser(name) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.name === name);
    if (user) {
      return resolve(user);
    } else {
      reject(` No such user with name : ${name}`);
    }
  });
}

function getArticle(userId) {
  return new Promise((resolve, reject) => {
    const userArticle = articles.find((user) => user.userId === userId);
    if (userArticle) {
      return resolve(userArticle.articles);
    } else {
      reject(`Wrong ID`);
    }
  });
}
