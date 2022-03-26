function check(){
    var c=0;
    const q1=document.quiz.question1.value;
    const q2=document.quiz.question2.value;
    const q3=document.quiz.question3.value;
    const q4=document.quiz.question4.value;
    const q5=document.quiz.question5.value;
    if(q1=="123"){
        c++;
    }
    if(q2=="script"){
        c++;
    }
    if(q3=="head"){
        c++;
    }
    if(q4=="alert"){
        c++;
    }
    if(q5=="b"){
        c++;
    }
    if(c==5){
    document.write(c+" out of 5 Yes!!");
    }
    if(c==4){
        document.write(c+" out of 5 Yes!!");
    }
    if(c==3){
        document.write(c+" out of 5 Maybe!!");
    }
    if(c==2){
        document.write(c+" out of 5 Maybe");
    }
    if(c==1){
        document.write(c+" out of 5 No");
    }
    if(c==0){
        document.write(c+" out of 5 No");
    }

}