function reverse(){
    let inputBox = document.getElementById("first input").value;
    let stra ="";

    for(let i=inputBox.length-1; i>=0; i--){
        stra = stra  + inputBox[i];
        document.getElementById("second input").value = stra;
    };
}