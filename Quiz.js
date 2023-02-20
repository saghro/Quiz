const quizD = [
  {
    "qst" : "What does HTML stand for?",
    "choix1":"Hyperlinks and Text Harpu languge",
    "choix2":"Homd Tool Markup Language ",
    "choix3":"Hyper Text Markup Language",
    "choix4":"Hyperlinks and Text Markup languge",
    correct:"choix3"
   },
   {
    "qst":"Who is making the Web standards?",
    "choix1":"The World Wide Web Consortium",
    "choix2":"Google",
    "choix3":"Microsoft",
    "choix4":"Mozilla",
    correct:"choix4"
     },
   {
    "qst":"Choose the correct HTML element for the largest heading:",
    "choix1":"<h6>",
    "choix2":"<heading>",
    "choix3":"<h1>",
    "choix4":"<head>",
    correct:"choix2"   },
   {
    "qst":"What is the correct HTML element for inserting a line break?",
    "choix1":"<br>",
    "choix2":"<lb>",
    "choix3":"<break>",
    "choix4":"<h1>",
    correct:"choix1" 
    },
 ];
 const quiz=document.getElementById('quiz')
 const repp = document.querySelectorAll('.rep')
 const question = document.getElementById('qst')
 const cnt_a = document.getElementById('cnt_a')
 const cnt_b = document.getElementById('cnt_b')
 const cnt_c = document.getElementById('cnt_c')
 const cnt_d = document.getElementById('cnt_d')
 const nextbnt = document.getElementById('btn')


 let current = 0;
 let score = 0;
 loadQuiz()
 function loadQuiz(){
    const currentQuizdata = quizD[current]
    question.innerText = currentQuizdata.qst
    cnt_a.innerText = currentQuizdata.choix1
    cnt_b.innerText = currentQuizdata.choix2
    cnt_c.innerText = currentQuizdata.choix3
    cnt_d.innerText = currentQuizdata.choix4

 }
 function deselectAnswer (){
  repp.forEach(repp =>repp.checked= false)

 }
  function getSelected(){
    let rep
    repp.forEach(repp =>{
      if(repp.checked){
        rep=repp.id

      }
    })
    return rep
  }
  btn.addEventListener('click',()=>{
    const correct = getSelected()
    if(correct){
      if(correct===quizD[current].correct){
        score++
      }
      current++
    }
    if(current<quizD.length){
      loadQuiz()

    }else{
      quiz.innerHTML
    }
  
  })



