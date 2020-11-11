/**
 * --- assignment Nov 9 ---------
3:01
* in html make a <p> and write som text
* make a search input and button
* write a search function to find a word
* if you couldn't find the word
* a red box will alert for 3 sec
* Not found
* if you could find it
* a blue box aill alert found in index #index_number
*
* tips:
* use function
* use string method
* use setTimeout
 */

let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
div1.style.display = "none";
div2.style.display = "none";


function showInput() {
    let paragraph = document.getElementById("para").innerHTML;
    let searchInput = document.getElementById("searchInput").value;

    if (paragraph.search(searchInput) >= 0) {
        div1.style.display = "block";
        div1.innerHTML = `<span> ${searchInput}</span> is found index ${paragraph.search(
      searchInput
    )}`;

        setTimeout(() => {
            div1.style.display = "none";
        }, 5000);
    } else div2.style.display = "block";
    div2.innerHTML = `<span> ${searchInput}</span> is not found !`;

    setTimeout(() => {
        div2.style.display = "none";
    }, 5000);
}

// function searchText() {
//     const defaultText = document.querySelector(".text").innerHTML;
//     const textInput = document.querySelector("#search-text").value;
//     if (defaultText.search(textInput) >= 0) {
//         foundBox.style.display = "block";
//         foundBox.innerHTML = `<span style="font-weight: bold">"${textInput}"</span> is found in index: ${defaultText.search(
// 			textInput
// 		)}!`;
//         setTimeout(() => {
//             foundBox.style.display = "none";
//         }, 3000);
//     } else {
//         alertBox.style.display = "block";
//         alertBox.innerHTML = `<span style="font-weight: bold">"${textInput}"</span> is not found!`;
//         setTimeout(() => {
//             alertBox.style.display = "none";
//         }, 3000);
//     }
// }