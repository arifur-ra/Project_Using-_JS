let familyMembers = [{
    name: "Habibur Rahman Munshi",
    profession: "Businessman",
    age: 55,
    nationality: "Bangladeshi",
    place: "Faridpur",
    height: "172cm",
    code: 01,
  },
  {
    name: "Tahmina Begum",
    profession: "House Wife",
    age: 45,
    nationality: "Bangladeshi",
    place: "Faridpur",
    height: "152cm",
    code: 02,
  },
  {
    name: "Musfiqur Rahman Tonu",
    profession: "Businessman",
    age: 25,
    nationality: "Bangladeshi",
    place: "Faridpur",
    height: "177cm",
    code: 03,
  },

  {
    name: "Shuborna Rahman",
    profession: "House Wife",
    age: 27,
    nationality: "Bangladeshi",
    place: "Dhaka",
    height: "157cm",
    code: 04,
  },

  {
    name: "Sakib Jaman",
    profession: "Protocol Officer",
    age: 33,
    nationality: "Bangladeshi",
    place: "Dhaka",
    height: "168cm",
    code: 05,
  },

  {
    name: "Sayara Rahman",
    profession: "Student",
    age: 5,
    nationality: "Bangladeshi",
    place: "Dhaka",
    height: "90cm",
    code: 06,
  },

  {
    name: "Arifur Rahman Arif",
    profession: "Software Developer",
    age: 30,
    nationality: "Bangladeshi",
    place: "Berlin",
    height: "178cm",
    code: 07,
  },
  {
    name: "Saima Uddin",
    profession: "Fashion Designer",
    age: 24,
    nationality: "Deutsche",
    place: "Berlin",
    height: "155cm",
    code: 08,
  },

  {
    name: "Saifan Ayaan Rahman",
    profession: "Nothing",
    age: 1,
    nationality: "Deutsche",
    place: "Berlin",
    height: "70cm",
    code: 09,
  },
  {
    name: "Saharir Shaown",
    profession: "Job Holder",
    age: 34,
    nationality: "Bangladeshi",
    place: "Berlin",
    height: "175cm",
    code: 10,
  },
];

//showData : defining the tool
function familyDetails(data, Display) {
  Display.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    Display.innerHTML += `
              <table>
               <tr>
              	
                  <td>Name: ${data[i].name}</td>
              	   <td>	Profession: ${data[i].profession} </td>
              	   <td>Age: ${data[i].age} years old</td>
              	   <td>Nationality: ${data[i].nationality}</td>
              	   <td>Place: ${data[i].place}</td>
              	   <td>Height: ${data[i].height}</td>
              	   <td>Code: ${data[i].code}</td>
              </tr>
            </table>

            <style>
            table {
                margin: 0 auto;
                padding: 2rem;
                border-collapse: collapse;
                border: 1px solid white;
                text-align:centre;
    
            }
    
            th,
            td {
                margin: 0 1rem;
                padding: .5rem 1rem;
                color: yellow;
                font-weight:bold;
                
            }
            tr{
                display:flex;
                flex-direction:column;
                border-bottom:1px;
            }
    
            
            </style>
          `;
  }
}

function showDetails() {
  familyDetails(familyMembers, document.getElementById("display"));
}

// a filter function - tool for item.name
function filterFamily(someArray, word) {
  return someArray.filter(function (item) {
    if (item.code == word) {
      return item;
    }
  });

  // newArray[] Created
}

function filterDetails() {
  let filterCode = document.getElementById("code").value; // get HTML Element
  // use a filter tool
  // change the original array and and make newArray

  familyMembers = filterFamily(familyMembers, filterCode);

  familyDetails(familyMembers, document.getElementById("display"));
}