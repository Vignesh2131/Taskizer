const days = ["Sun", "Mon", "Tue", "Wed", "Thru", "Fri", "Sat"];

const checker1 = document.querySelector("#filter");
const add_btn = document.querySelector(".add-task");
const container = document.querySelector(".form-top");
let task = document.querySelector(".task-text");

// console.log(date.getDay());
//adding the task
add_btn.addEventListener("click", function () {
  let msg = task.value;
  const d = new Date();
  let date = d.toLocaleTimeString();
  const html = `
  <li>
      <div class="form">
        <input type="checkbox"/>
        <p class="tasks">${msg}</p>
        <span class="info">On ${days[d.getDay()]} at ${date}</span>
        <button class="remove">remove</button>
      </div>
  </li>
  `;
  container.insertAdjacentHTML("beforeend", html);
  task.value = "";
});
