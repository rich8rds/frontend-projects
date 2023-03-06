const getHistory = () => document.getElementById('historyValue').innerText;
const printHistory = num => document.getElementById('historyValue').innerText = num;
const getOutput = () => document.getElementById('outputValue').innerText;

const printOutput = num => {
    if(num == "")
    document.getElementById('outputValue').innerText = num;
    else
    document.getElementById('outputValue').innerText = getFormNum(num);
}
const getFormNum = num => {
    if(num == "-")  return "";
    let n =  Number (num);
    let value = n.toLocaleString("en");
    return value;
}
// 3 + 5 x 6 - 2 / 4 
const revFormNum = num => Number(num.replace(/,/g , ""));

const number = document.getElementsByClassName('number');
    for(let i = 0 ; i < number.length ; i++){
        number[i].addEventListener('click' , function() {
            let output = revFormNum(getOutput() );
            if(output != NaN){ //if output is a number
                output += this.id;
                printOutput(output);
            }
        });
    }  
const operator = document.getElementsByClassName('operator');
for(let i = 0 ; i < operator.length ; i++){
    operator[i].addEventListener('click',  function() {
        if(this.id == 'clear'){
            printOutput("");
            printHistory("");
        }
       else if(this.id == 'backspace' ){
            let output = revFormNum(getOutput()).toString(); 
            if(output){ //if Output has a value
                output = output.substring(0, output.length - 1);
                printOutput(output);
            }
        }
        else{
            let output = getOutput();
            let history = getHistory();
            if(output == "" && history != " "){
                if(isNaN(history [ history.length - 1])){
                    history = history.substring(0, history.length - 1);
                }
            }
            if(output != "" || history != " "){
                //condition?true:false
                output = output == "" ?output: revFormNum(output);
                history += output;
                if(this.id == "="){
                    let result = eval(history);
                    printOutput(result);
                    printHistory("")
                }
                if(this.id === '%'){
                    let output = revFormNum(getOutput());
                    let result = output/ 100;
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history += this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
});
}