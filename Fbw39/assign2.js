/**
 * create input to enter a name
 * when you click add button do below :
 * push the name into an array
 * set the array to the localStorage with a key fbw39
 * present the names in an ul*/

document.querySelector(".add").addEventListener("click", () => {
  let name = document.getElementById("names").value;
  try {
    if (name == "") throw new Error("Could not Possible to add Empty item");
  } catch (error) {
    document.querySelector(".message").innerHTML = `${error.message}`;
    document.querySelector(".message").style.visibility = "visible";

    setTimeout(() => {
      document.querySelector(".message").style.visibility = "hidden";
    }, 5000);
    return error;
  }
  let students = JSON.parse(localStorage.getItem("fbw39"));

  // if (students) {
  //   students.push(name);
  // } else {
  //   students = [name];
  // }

  // (ternary) operator
  students ? students.push(name) : (students = [name]);
  localStorage.setItem("fbw39", JSON.stringify(students));
  document.getElementById("names").value = ``;

  let list = document.querySelector(".nameList");
  list.innerHTML = "";

  students.forEach((student) => {
    let li = document.createElement(`li`);
    li.innerHTML += `${student}`;
    li.classList.add("listofName");
    li.innerHTML += `<i class="fas fa-trash-alt" onclick="removeItem()" id =${student}></i>`;

    list.appendChild(li);
  });
});

document.querySelector(".show").addEventListener("click", () => {
  let students = JSON.parse(localStorage.getItem("fbw39"));

  try {
    students = JSON.parse(localStorage.getItem("fbw39"));
    if (!students) throw new Error("There is no name in Local Storage");
  } catch (error) {
    document.querySelector(".message").innerHTML = `${error.message}`;
    document.querySelector(".message").style.visibility = "visible";
    setTimeout(() => {
      document.querySelector(".message").style.visibility = "hidden";
    }, 5000);
    return error;
  }
  // if (!students) students = [];
  localStorage.setItem("fbw39", JSON.stringify(students));
  document.getElementById("names").value = ``;
  let list = document.querySelector(".nameList");
  list.innerHTML = "";

  students.forEach((student) => {
    let li = document.createElement(`li`);
    li.classList.add("listofName");

    li.innerHTML += `${student}`;
    li.innerHTML += `<i class="fas fa-trash-alt" onclick="removeItem()" id =${student}></i>`;
    list.appendChild(li);
  });
});

const removeItem = (e) => {
  // document.getElementById(`${student}`).e.target.remove();
};
