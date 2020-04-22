

    function calculate() {
        alert("calculate Price1");
    }
    function calculate2() {
        alert("calculate Price2");
        event.stopImmediatePropagation();
    }
    function clickP3() {
        alert(" p3 clicked");
        //event.stopImmediatePropagation();
    }
    var myButton = document.getElementById("price2");
    myButton.onclick= calculate2;
    var myButton2 = document.getElementById("price3");
    myButton2.addEventListener("click", calculate);
    myButton2.addEventListener("click", calculate2);
    var myP3 =document.getElementById("p3");
    myP3.addEventListener("click", clickP3,)