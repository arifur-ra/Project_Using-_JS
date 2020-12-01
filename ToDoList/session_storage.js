// Session Storage

// Please Make  to do list using session storage

/**
 * LS VS SS
 * data in session storage does not survived if the session ends.( when page is close , the session will be close too)
 data in Local Storage it lasts all the time until we clear() it 
 */


//.............................. Small Exercise using Session Storage...............................
// Example : Add item and Remove in the list


showList = () => {
    let ul = document.getElementById('ul');
    ul.innerHTML = ``;
    try {
        lists = JSON.parse(sessionStorage.getItem("ToDoList"));

        if (!lists) throw new Error('No List In Session Storage');
    } catch (error) {
        // console.log(error);
        document.getElementById('message').innerHTML = `${error.message}`;
        document.getElementById('message').style.visibility = 'visible';

        setTimeout(() => {
            document.getElementById('message').style.visibility = 'hidden';
        }, 3000);
        return error;
    }

    if (!lists) {
        ul.innerHTML = ``;

    } else {

        lists.forEach(element => {
            ul.innerHTML += `
        <li>${element}</li> `
        });
    }

}
addItem = e => {
    e.preventDefault();
    let toDo = document.getElementById('input1').value;
    try {
        if (toDo == '') throw new Error('Warning !!!! <br> <br>Empty Item is not Possible to add.');
    } catch (error) {
        // console.log(error);
        document.getElementById('message').innerHTML = `${error.message}`;
        document.getElementById('message').style.visibility = 'visible';

        setTimeout(() => {
            document.getElementById('message').style.visibility = 'hidden';
        }, 3000);
        return error;
    }

    let lists = JSON.parse(sessionStorage.getItem('ToDoList'));
    if (!lists) {
        lists = [toDo];

    } else {

        try {
            if (lists.indexOf(toDo) >= 0) {
                throw new Error(' Warning !!!! <br> <br> Same Item is not Possible to add.');
            }

        } catch (error) {
            document.getElementById('message').innerHTML = `${error.message}`;
            document.getElementById('message').style.visibility = 'visible';

            setTimeout(() => {
                document.getElementById('message').style.visibility = 'hidden';
            }, 3000);
            return error;
        }
        lists.push(toDo);
    }
    sessionStorage.setItem("ToDoList", JSON.stringify(lists));

    showList();
};

deleteItem = e => {
    e.preventDefault();

    let toDo = document.getElementById('input2').value;
    //handle when there is no list in LS 

    //Error.message : there is Empty item !!

    try {

        if (toDo == '') throw new Error('warning!!! <br><br>Empty item is not possible to delete.')
    } catch (error) {
        document.getElementById('message').innerHTML = `${error.message}`;
        document.getElementById('message').style.visibility = 'visible';

        setTimeout(() => {
            document.getElementById('message').style.visibility = 'hidden';
        }, 3000);
        return error;
    }




    //Error.message : there are no items yet !!
    try {
        let lists = JSON.parse(sessionStorage.getItem('ToDoList'));

        if (!lists) throw new Error('Error.message : the Item does not exist in the list')
    } catch (error) {
        document.getElementById('message').innerHTML = `${error.message}`;
        document.getElementById('message').style.visibility = 'visible';

        setTimeout(() => {
            document.getElementById('message').style.visibility = 'hidden';
        }, 3000);
        return error;
    }

    //handle when the item is not in the list 
    //Error.message : the item doesn't exist in the list !!

    try {
        if (lists.indexOf(toDo) < 0) throw new Error('Error.message :Item does not exist in the list')
    } catch (error) {
        document.getElementById('message').innerHTML = `${error.message}`;
        document.getElementById('message').style.visibility = 'visible';

        setTimeout(() => {
            document.getElementById('message').style.visibility = 'hidden';
        }, 3000);
        return error;
    }
    lists = lists.filter(element => element != toDo);

    sessionStorage.setItem("ToDoList", JSON.stringify(lists));

    showList();

};

showItem = () => {
    showList();
}