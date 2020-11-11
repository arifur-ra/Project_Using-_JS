// making a safe copy oif my original
// take original array and return a safe copy
/**
 * 
 * @param {Array} original 
 */
function makeSafeCopy(original) {
    //slice is making isolated copy
    return original.slice();
}


let students = [{
        name: 'Safwan',
        grade: '75'
    }, {
        name: 'Amin',
        grade: '52'
    }, {
        name: 'Roza',
        grade: '39'
    }, {
        name: 'Ayaan',
        grade: '60'
    }, {
        name: 'Arif',
        grade: '87'
    },
    {
        name: 'saima',
        grade: '80'
    },
    {
        name: 'Rayan',
        grade: '50'
    }
];




// using the function makeSafeCopy and passing actual values
let filteredCourses = makeSafeCopy(students);

// onclick="backToOriginal() function

function backToOriginal() {
    filteredCourses = makeSafeCopy(students);
    showData(filteredCourses, document.getElementById('display'));
}


/**
 * 
 * @param {Array<{name:string, type:string, rank:number}>} array the array that includes the data to be presented.
 * @param {HTMLElement} display the html element :'<tbody>' to show the data inside.
 * 
 */
function showData(data, display) {

    display.innerHTML = ` `;

    for (let i = 0; i < data.length; i++) {

        display.innerHTML += `<tr>
        <td>${i+1}</td>
        <td>${data[i].name}</td>
        <td>${data[i].grade}</td>

    </tr>`;

    }

}
//

//showDataHandler() -- responding to the click event 
function showDataHandler() {
    // use show data tool
    showData(filteredCourses, document.getElementById('display'));

}


//creating a  function tool for Name Handler

function sortByNames(data) {

    return data.sort(function (a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
        } else {
            return 1;
        }
    });
}

function sortByNameHandler() {
    //make safe copy
    let sorted = makeSafeCopy(filteredCourses);
    //use sorting tool
    sortByNames(sorted);
    // show the sorted
    showData(sorted, document.getElementById('display'));
}

//creating a  function tool for Grade Handler


function sortByGrade(array) {
    return array.sort(function (a, b) {
        // if (a.grade < b.grade) {
        //     return -1;
        // } else {
        //     return 1;
        // }
        return a.grade - b.grade;
    });
}

function sortByGradeHandler() {
    //make safe copy
    let sorted = makeSafeCopy(filteredCourses);
    //use sorting tool
    sortByGrade(sorted);
    // show the sorted value or output
    showData(sorted, document.getElementById('display'));
}




// Creating a function tool : filterNames()

function filterNames(array, name) {

    return array.filter(function (item) {
        //make case insensitive
        if (item.name.toLowerCase() != name.toLowerCase()) {
            return true;
            // return item;
        }
    });


}


//handler : filterNames Handler
function dataFilterNames() {
    //bring the HTML Element using id 'filter'
    let word = document.getElementById('filter').value;
    // use a filter tool -change the original
    filteredCourses = filterNames(students, word);
    // display the filter data to the browser
    showData(filteredCourses, document.getElementById('display'));
}



// Creating a function tool : filterGrade()

function filterGrade(array, grade) {
    return array.filter(function (item) {
        //make it case insensitive
        return item.grade != grade;
    });
}

// dataFilterTypes() define the handler
function dataFilterGrade() {
    //bring the HTML Element using id 'filter'
    let word = document.getElementById('filter').value;
    // change the original
    filteredCourses = filterGrade(students, word);
    showData(filteredCourses, document.getElementById('display'));

}