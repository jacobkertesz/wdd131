import { participantTemplate, successTemplate } from "./Templates.js";

const add = document.getElementById('add');
const form = document.querySelector('form');
const summary = document.getElementById('summary');
var participantCount = 1;


function addParticipant()
{
    participantCount ++;
    const template = participantTemplate(participantCount);
    add.insertAdjacentHTML("beforebegin",template);
}
function submitForm(event)
{
    event.preventDefault();
    const info = 
    {
        name: document.getElementById('adult_name'),
        count: participantCount,
        fee: totalFees()
    }
    var message = successTemplate(info);
    form.style.display = "none";
    summary.innerHTML = message;
}
function totalFees()
{
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    feeElements = [...feeElements];
    return feeElements.reduce(total);
}
function total(input1, input2)
{
    return input1.valueAsNumber + input2.valueAsNumber;
}

add.addEventListener('click', addParticipant);
form.addEventListener('submit', submitForm);