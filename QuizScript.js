function showData()
{
    document.getElementById("displayData").style="display:block;";
}
document.getElementById("displayData").style="display:none;";

function hideData()
{
    document.getElementById("displayData").style="display:none;";
}


// Quiz Web application code start here  ===============>

const quizQuestionDB=[
    {
        question: "Q1. ALU stands for ..",
        a: "Arithmetic Logic Unit",
        b: "Application Logic Unit",
        c: "Array Logic Unit",
        d: "None of above",
        ans: "ans1"
    },
    {
        question: "Q2. The brain of any computer system is ..",
        a: "ALU",
        b: "CPU",
        c: "None of above",
        d: "Control Unit",
        ans: "ans2"
    },
    {
        question: "Q3. Which of the following is valid storage type ?",
        a: "CPU",
        b: "Keyboard",
        c: "Pen Drive",
        d: "Track Ball",
        ans: "ans3"
    },
    {
        question: "Q4. The TCP/IP protocol suite consists of ....layers",
        a: "Two",
        b: "Three",
        c: "Five",
        d: "Six",
        ans: "ans3"
    },
    {
        question: "Q5. A router is involved in ..... layers of the TCP/IP protocol suite",
        a: "Two",
        b: "Three",
        c: "Four",
        d: "Five",
        ans: "ans2"
    },
    {
        question: "Q6. HTML is a ... language ?",
        a: "Procedural",
        b: "Markup",
        c: "Object oriented",
        d: "object based",
        ans: "ans2"
    },
    {
        question: "Q7. HTML documents stored in the file in the form ...",
        a: ".hxm",
        b: ".html",
        c: ".HTML",
        d: ".hml",
        ans: "ans2"
    },
    {
        question: "Q7. To change xxxx@yyyy.zzzz to an IP address, we should use the ....protocol",
        a: "TELNET",
        b: "DNS",
        c: "NVT",
        d: "None of the above",
        ans: "ans2"
    },
    {
        question: "Q8. Which of the following is an anti-virus program ?",
        a: "Norton",
        b: "K7",
        c: "Quick heal",
        d: "All of these",
        ans: "ans4"
    },
    {
        question: "Q9. Viruses are ... ?",
        a: "Man made",
        b: "Naturally occur",
        c: "Machine made",
        d: "All of the above",
        ans: "ans1"
    },
    {
        question: "Q10. Firewall is a type of .... ",
        a: "Virus",
        b: "Security threat",
        c: "None of the above",
        d: "Worm",
        ans: "ans3"
    }


];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");

// get data
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answers");

let questionCount = 0;

const lodQuestion = () => { 
    
   const getQuestionList = quizQuestionDB[questionCount];

  // console.log(getQuestionList.question);

   question.innerHTML = getQuestionList.question;
   option1.innerHTML = getQuestionList.a;
   option2.innerHTML = getQuestionList.b;
   option3.innerHTML = getQuestionList.c;
   option4.innerHTML = getQuestionList.d;
}

lodQuestion();

// To get the input for submit button

const getCheckedAnswer = () => {
    let answer;

    answers.forEach((GetAnswerElement) => {

        if( GetAnswerElement.checked )
        {
            answer = GetAnswerElement.id;
        }
    });

    return answer;
}

let score = 0 ; // Update the score if is right

const RemoveRadioSelection = () => {
    
    answers.forEach((GetAnswerElement) => GetAnswerElement.checked = false );

}

submit.addEventListener('click',() => {
    
    const getAnswer = getCheckedAnswer();
    console.log(getAnswer);

    if ( getAnswer === quizQuestionDB[questionCount].ans )
    {
        score++;
    }

    questionCount++;
    
    RemoveRadioSelection(); // To remove the Selected radio button

    if( questionCount < quizQuestionDB.length )
    {
        lodQuestion();
    }
    else
    {
        document.getElementById("hideFirst").style="display:block;";
        
        const showResult = document.querySelector(".result");
        
        let getWrongQuestion = 10 - parseInt(score) ;
        
        showResult.innerHTML =`Your Score is 10 Out of : ${score} and your ${getWrongQuestion} question are wrong`;
    }

});
// quiz Web application code end here <=================

// for the hide the result tab
    document.getElementById("hideFirst").style="display:none;";
 // hide result tab end here