// initially fetched data and shown in table
// fetch("http://localhost:3000/posts")
//   .then((res) => res.json())
//   .then((res) => {
//     // console.log(res);
//     showData(res);
//   })
//   .catch((err) => console.log(err));

// // debouncing code.....
let id1;
function inputSearch(e) {
  // clearTimeout(id1);
  id1 = setTimeout(() => {
    // console.log(e.value);
    // search and fetched data and shown in table
    if (e.value.length == 0) {
      let divTable = document.querySelector("#table");
      divTable.innerHTML = "";
      return;
    }
    fetch(`http://localhost:3000/posts?q=${e.value}`)
      .then((res) => res.json())
      .then((res) => {
        searchShowData(res, e.value);
      })
      .catch((err) => console.log(err));
  }, 1000);
}

// Thottling code.....

// let id2;
// function inputSearch(e) {
//   clearTimeout(id2);
//   id2 = setTimeout(() => {
//     console.log(e.value);
//   }, 1000);
// }

//common showData function to show fetched data;
// function showData(res) {
//   divTable = document.querySelector("#table");
//   res.forEach((data) => {
//     divTable.innerHTML += `<h4 class="heading"> ${data.title} </h4>`;
//   });
// }
//search and showData function to show fetched data;
function searchShowData(res, target) {
  console.log(target);
  let divTable = document.querySelector("#table");
  divTable.innerHTML = "";
  res.forEach((data) => {
    // if (data.title == target) {
    divTable.innerHTML += `<h4 class="heading"> ${data.first_name} </h4>`;
    // }
  });
}
