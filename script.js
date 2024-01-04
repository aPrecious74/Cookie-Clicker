console.log ("Hello")

let button= document.querySelector('button')
let count= document.querySelector('div')
count= 0

let div= document.querySelector('div')
button.addEventListener('click', play)

function play(e)
{
    console.log(e.target);
    count++;

    if (count>0){
        div.innerHTML= count;
    }
    
    // e.target.innerHTML = button.innerHTML; does not do anything as you are replacing innerHTML
    
    return count;
}






