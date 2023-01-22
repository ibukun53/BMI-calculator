const userWeight= document.getElementById('weight');
const userHeight =  document.getElementById('height');
const calculateBtn = document.getElementById('btn');
const getResult = document.getElementById('result');
let getValue;

function getWeightHeightValue(){
    const getWeightValue =   +userWeight.value;
    const getHeightValue =  +userHeight.value;
    getValue = getWeightValue / getHeightValue;

    if(getValue <= 18.6){
        console.log(getResult.innerHTML=`RESULT : Under Weight ${getValue}`);
       }else if(getValue === 24.9){
           getResult.innerHTML=`RESULT : Normal ${getValue}`; 
       }else if( getValue >= 24.9){
           getResult.innerHTML=`RESULT : Over Weight ${getValue}`;
       }else if(getValue ===  18.6){
            getResult.innerHTML=`RESULT : Normal ${getValue}`; 
       }
}

calculateBtn.addEventListener('click', getWeightHeightValue);
