const myFooter = document.querySelector('footer');
const gitHubIcon = document.querySelector('.github');
const linkedinIcon = document.querySelector('.linkedin');
const mainIntro = document.querySelector('main');
const nickName = document.querySelector(".nickname");

const frames = [
    { text : '', ms : 100},
    { text : '|', ms : 200},
    { text : '', ms : 100},
    { text : '|', ms : 200},
    { text : 'l|', ms : 100},
    { text : 'li|', ms : 100},
    { text : 'lin|', ms : 100},
    { text : 'link|', ms : 100},
    { text : 'link2|', ms : 100},
    { text : 'link27|', ms : 100},
    { text : 'link275|', ms : 100},
    { text : 'link2755|', ms : 100},
    { text : 'link2755', ms : 200}
]

function writeNickname() {

    let delay = 0;
    frames.forEach(frame => {
        delay += frame.ms;
        setTimeout( () => {
            nickName.textContent = frame.text;       
        },delay);
    });


    setTimeout( () => {
        gitHubIcon.classList.remove('hidden');
    },delay);

    delay += 50;
    setTimeout( () => {
        linkedinIcon.classList.remove('hidden');
    },delay); 

    setTimeout( () => {
        myFooter.classList.add("bottonRight")
        main.style.opacity = 100;
        
    },delay+750);
}

writeNickname();
