//UI


const left = document.querySelector('.left'),
      right = document.querySelector('.right');

left.addEventListener('mouseenter',()=>{
    left.style.width = "70%";
    right.style.width = "30%";
});

right.addEventListener('mouseenter',()=>{
    left.style.width = "30%";
    right.style.width = "70%";
});

right.addEventListener('mouseleave',()=>{
    left.style.width = "50%";
    right.style.width = "50%";
});

left.addEventListener('mouseleave',()=>{
    left.style.width = "50%";
    right.style.width = "50%";
});

const btn1 = document.querySelector('.btn-ripple');
const btn2 = document.querySelector('.btn-star');

    btn1.addEventListener('click',(e)=>{

        const cx = e.clientX;
        const cy = e.clientY;

        const btntop = e.target.offsetTop;
        const btnleft = e.target.offsetLeft;

        const xinside = cx - btnleft;
        const yinside = cy - btntop;

        const circle = document.createElement('span');
        circle.classList.add('circle');

        circle.style.top=yinside + "px";
        circle.style.left=xinside + "px";

        btn1.appendChild(circle);

        setTimeout(()=>{
            circle.remove();
        },600);

        openmaterialform();

    });

    btn2.addEventListener('click',(e)=>{
        
        const cx = e.clientX;
        const cy = e.clientY;

        const btntop = e.target.offsetTop;
        const btnleft = e.target.offsetLeft + 465;

        const xinside = cx - btnleft;
        const yinside = cy - btntop;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top=yinside + "px";
        circle.style.left=xinside + "px";


        btn2.appendChild(circle);

        setTimeout(()=>{
            circle.remove();
        },600);

        openmaterialform();

    });


// ----------------------------------------------------------------------

const labels = document.querySelectorAll('.form-group label');
// console.log(labels);

labels.forEach(label=>{

    label.innerHTML = label.innerText
                .split('')
                .map((letter,index)=>
                `<span style="transition-delay:${index*50}ms">${letter}</span>`)
                .join('');
});

// For Matreial form box

const login = document.querySelector('.login'),
      signup = document.querySelector('.signup');

const signupbtn = document.getElementById('signup-btn');

const exit = document.querySelector('.exit'),
      exitsignup = document.querySelector('.exitsignup');

const inputel = document.getElementById('password');
const eyebtn = document.querySelector('.formeyes');

const forsignup = document.getElementById('gotosignup');
      forlogin = document.getElementById('gotologin');


function openmaterialform(){
    login.style.top = "50%";
    login.style.transform = "translate(-50%,-50%) scale(1)";
}


exit.addEventListener('click',()=>{
    login.style.top = "-100%";
    login.style.transform = "translate(-50%,-50%) scale(2)";
});

eyebtn.addEventListener('click',()=>{

    if(eyebtn.children[0].classList.contains('fa-eye')){
        eyebtn.children[0].classList = "far fa-eye-slash";
        inputel.type = "text";
    }else{
        eyebtn.children[0].classList = "far fa-eye";
        inputel.type = "password";
    }
});

exitsignup.addEventListener('click',()=>{
    signup.style.top = "-100%";
    signup.style.transform = "translate(-50%,-50%) scale(2)";
});

forsignup.addEventListener('click',()=>{
    signup.style.top = "50%";
    signup.style.transform = "translate(-50%,-50%) scale(1)";
});

forlogin.addEventListener('click',()=>{
    signup.style.top = "-100%";
    signup.style.transform = "translate(-50%,-50%) scale(2)";
});

signupbtn.addEventListener('click',(e)=>{
    vfbox.style.display = "flex";

    toastel.style.color = "white";
    toastel.innerText = textmessage[0];

    verifyboxtest();

    codes[0].focus();

    toastnoti();

    e.preventDefault();
})


//For Verify Box

const vfbox = document.querySelector('.verify-box');
const codes = document.querySelectorAll('.code');


let cfmotp = "";

codes.forEach((code,index)=>{
    // console.log("code");
   
codes[0].focus();

    code.addEventListener('keydown',(e)=>{
        if(e.key >= 0 && e.key <= 9){

            codes[index].value = '';

            if(index !==4){
                setTimeout(()=>{
                    codes[index + 1].focus();
                },10);
            }
        }else if(e.key === "Backspace"){
            if(index !== 0){
                setTimeout(()=>{
                    codes[index - 1].focus();
                },10);
            }
        }
    });
});

function verifyboxtest(){
    codes.forEach((code)=>{
        codes[4].addEventListener('input',()=>{
            cfmotp += code.value;
            if(cfmotp.length === 5){
                if(cfmotp === "77321"){
                    console.log("correct");

                    setTimeout(()=>{
                        signup.style.top = "-100%";
                        signup.style.transform = "translate(-50%,-50%) scale(2)";
                        login.style.top = "-100%";
                        login.style.transform = "translate(-50%,-50%) scale(2)";

                        thbox.style.display = "block";
                    },1000);

                    setTimeout(()=>{

                        thbox.style.display = "none";
                    },7000);

                }else{
                    console.log("incorrect");
                    cfmotp = "";
                    
                    codes[0].value = "";
                    codes[1].value = "";
                    codes[2].value = "";
                    codes[3].value = "";
                    codes[4].value = "";
    
                    codes[0].focus();
    
                    toastel.style.color = "red";
                    toastel.innerText = textmessage[1];
                    
                    toastnoti();
                }
            }
        });
    });
}




// For Thank box

const thbox = document.getElementById('thankbox');



//for toast noti
const toastel = document.getElementById('toast-box');
const resent = document.getElementById('resent');

const textmessage = ["Your OTP code is 77321","Incorrect OTP try again or resent again!"]

resent.addEventListener('click',()=>{
    toastel.style.color = "white";
    toastel.innerText = textmessage[0];
    toastnoti();
    codes[0].focus();

    codes[0].value = "";
    codes[1].value = "";
                codes[2].value = "";
                codes[3].value = "";
                codes[4].value = "";
    

});

function toastnoti(){
    setTimeout(()=>{
        toastel.style.top = "50px";
    },500);

    setTimeout(()=>{
        toastel.style.top = "-10%";
    },4000);
}

//For heart click
let timeclicked = 0;
let clicktimes = 0;

left.addEventListener('dblclick',(e)=>{
    const heart = document.createElement('i');
    heart.className = "fas fa-heart";
    // heart.classList.add('fas');
    // heart.classList.add('fa-heart');

    const cx = e.clientX;
    const cy = e.clientY;

    const topoffset = e.target.offsetTop;
    const leftoffset = e.target.offsetLeft;

    const xinside = cx - leftoffset;
    const yinside = cy - topoffset;

    heart.style.top = `${yinside}px`;
    heart.style.left = `${xinside}px`;

    left.appendChild(heart);

    setTimeout(()=>heart.remove(),1000);
});

function createheart(e){
    
};


right.addEventListener('dblclick',(e)=>{
    const heart = document.createElement('i');
    heart.className = "fas fa-heart";
    // heart.classList.add('fas');
    // heart.classList.add('fa-heart');

    const cx = e.clientX;
    const cy = e.clientY;

    const topoffset = e.target.offsetTop;
    const leftoffset = e.target.offsetLeft;

    const xinside = cx - leftoffset;
    const yinside = cy - topoffset;

    heart.style.top = `${yinside}px`;
    heart.style.left = `${xinside}px`;

    right.appendChild(heart);

    setTimeout(()=>heart.remove(),1000);
});

function createheart(e){
    
};






