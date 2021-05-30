player1_name=localStorage.getItem("P1");
player2_name=localStorage.getItem("P2");
score1=0;
score2=0;
document.getElementById("name_1").innerHTML=player1_name+" :  ";
document.getElementById("score_1").innerHTML=score1;
document.getElementById("name_2").innerHTML=player2_name+" :  ";
document.getElementById("score_2").innerHTML=score2;
document.getElementById("question").innerHTML="Question turn-"+player1_name;
document.getElementById("answer").innerHTML="Answer turn-"+player2_name;
function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    if(number1.length>0&&number2.length>0){
        console.log(number1);
        console.log(number2);
        
        actual_answer=parseInt(number1)*parseInt(number2);
        console.log(actual_answer);
        question_number="<h4>"+number1+" X "+number2+"</h4>";
        input_box="<br>Answer: <input type='text' id='input_check_box'>";
        check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
        row=question_number+input_box+check_button;

        document.getElementById("output").innerHTML=row;
        document.getElementById("number1").value="";
        document.getElementById("number2").value="";
    }
    else{
        window.alert("Enter 2 numbers to send.");
    }
}