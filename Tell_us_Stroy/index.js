// get input
let firstStory = document.getElementById('firststory');
let secondStory = document.getElementById('secondstory');
let thirdStory = document.getElementById('thirdstory');
let lastStory = document.getElementById('laststory');

let showStory = document.getElementById('showstory');


function showDetails(event) {
    event.preventDefault();
    // let gender = 'Mrs';
    // if (male.checked) {
    //     gender = 'Mr.';
    // }

    showStory.innerHTML = `<p> Here is My Story: <br> ${firstStory.value}  ${secondStory.value} <br> ${thirdStory.value}  <br> ${lastStory.value}  <br> Thanks :)</p>`;
    //showStory.style.background = 'snow';
    showStory.style.padding = '1rem';
    showStory.style.marginTop = '1rem';
    showStory.style.fontSize = '1.5rem';
    showStory.style.fontFamily = 'monospace';
    showStory.style.color = 'yellow';

}