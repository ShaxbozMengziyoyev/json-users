const userUrl = "https://jsonplaceholder.typicode.com/users";
fetch(userUrl)
  .then(response => response.json())
  .then(data => usersArr(data));


const elUserlist = document.querySelector(".js-user-list");
const elUserTemplete= document.querySelector("#user-templete-js").content;

const UserFragment = document.createDocumentFragment();


function usersArr(arr) {
  arr.forEach(obj => {
    function renderUsersApi(obj) {
      let user = elUserTemplete.cloneNode(true);
      
      user.querySelector(".full-name").textContent = `Full Name: ${obj.name}`;
      user.querySelector(".user-name").textContent = `${obj.username}`;
      user.querySelector(".email-address").href = `mailto:${obj.email}`;
      user.querySelector(".email-address").textContent =`${obj.email}`;
      user.querySelector(".phone-number").href = `${obj.phone}`;
      user.querySelector(".phone-number").textContent =`Phone number: ${obj.phone}`;
      user.querySelector(".user-website").href =`https://${obj.website}`;
      user.querySelector(".user-website").textContent =`${obj.website}`;
      user.querySelector(".user-company").textContent = `name: ${obj.company.name}; catchPhrase: ${obj.company.catchPhrase}`;
    user.querySelector(".user-address").textContent = `street: ${obj.address.street}; city: ${obj.address.city}`;     
      UserFragment.appendChild(user);
    }
    renderUsersApi(obj);
  });

  elUserlist.appendChild(UserFragment);
};