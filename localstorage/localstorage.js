//.............................. Small Exercise using Local Storage...............................

// Example : Add item and Remove in the list

showList = () => {
    let ul = document.getElementById('ul');
    ul.innerHTML = ``;
    try {
        lists = JSON.parse(localStorage.getItem("list"));

        if (!lists) throw new Error('No List in the  local Storage');
    } catch (error) {
        // console.log(error);
        document.getElementById('message').innerHTML = `${error.message}`;
        document.getElementById('message').style.visibility = 'visible';

        setTimeout(() => {
            document.getElementById('message').style.visibility = 'hidden';
        }, 5000);
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
};

addItem = e => {
    e.preventDefault();
    // save input value in local storage
    let item = document.getElementById('input').value;
    /*get the list from storage, 
    if no list yet create it now, perse it, 
    push new item, stringify list .set it list back*/

    try {
        if (item == '') throw new Error('Could not Possible to add Empty item')
    } catch (error) {
        document.getElementById('message').innerHTML = `${error.message}`;
        document.getElementById('message').style.visibility = 'visible';

        setTimeout(() => {
            document.getElementById('message').style.visibility = 'hidden';
        }, 5000);
        return error;
    }

    let lists = JSON.parse(localStorage.getItem("list"));
    // (! lists) means there is no lists;
    if (!lists) {
        lists = [item];
    } else {
        try {
            if (lists.indexOf(item) >= 0) throw new Error('Item Already Exist, try another Item')
        } catch (error) {
            document.getElementById('message').innerHTML = `${error.message}`;
            document.getElementById('message').style.visibility = 'visible';

            setTimeout(() => {
                document.getElementById('message').style.visibility = 'hidden';
            }, 5000);
            return error;
        }

        lists.push(item);
    }
    localStorage.setItem("list", JSON.stringify(lists));

    // Show the list in Html

    showList();
};


deleteItem = e => {
    e.preventDefault();
    let item = document.getElementById('input2').value;
    // When the input is Empty
    try {
        if (item == '') throw new Error('Could not Possible to Delete Empty item')
    } catch (error) {
        document.getElementById('message').innerHTML = `${error.message}`;
        document.getElementById('message').style.visibility = 'visible';

        setTimeout(() => {
            document.getElementById('message').style.visibility = 'hidden';
        }, 5000);
        return error;
    }
    // When there is no item  in Local Storage
    try {
        lists = JSON.parse(localStorage.getItem("list"));
        if (!lists) throw new Error('There is No Item in List');

    } catch (error) {
        document.getElementById('message').innerHTML = `${error.message}`;
        document.getElementById('message').style.visibility = 'visible';

        setTimeout(() => {
            document.getElementById('message').style.visibility = 'hidden';
        }, 5000);
        return error;

    }
    // When there is no item exist in Local Storage

    try {
        if (lists.indexOf(item) < 0) throw new Error('Sorry!! This Item is not Exist');
    } catch (error) {
        document.getElementById('message').innerHTML = `${error.message}`;
        document.getElementById('message').style.visibility = 'visible';

        setTimeout(() => {
            document.getElementById('message').style.visibility = 'hidden';
        }, 5000);
        return error;
    }

    lists = lists.filter(element => element != item);
    localStorage.setItem("list", JSON.stringify(lists));
    showList();
};

replaceItem = e => {
    e.preventDefault();
    let replaceValue = document.getElementById('replaceValue').value;
    let newValue = document.getElementById('newValue').value;
    try {
        if (replaceValue == '' || newValue == '') throw new Error('Empty Item can not possible to Replace')
    } catch (error) {
        document.getElementById('message').innerHTML = `${error.message}`;
        document.getElementById('message').style.visibility = 'visible';

        setTimeout(() => {
            document.getElementById('message').style.visibility = 'hidden';
        }, 5000);
        return error;
    }
    // we need to handle when there is no list in local storage
    // When there is no item  in Local Storage
    try {
        lists = JSON.parse(localStorage.getItem("list"));
        if (!lists) throw new Error('There is No Item in List');

    } catch (error) {
        document.getElementById('message').innerHTML = `${error.message}`;
        document.getElementById('message').style.visibility = 'visible';

        setTimeout(() => {
            document.getElementById('message').style.visibility = 'hidden';
        }, 5000);
        return error;

    }
    // we need to handle when the oldItem not in the  list 

    let indexOfOldItem = lists.findIndex(element => element == replaceValue);
    lists.splice(indexOfOldItem, 1, newValue);

    localStorage.setItem('list', JSON.stringify(lists));
    showList();

}



showItem = () => {
    showList();

}