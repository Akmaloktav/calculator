const screen = document.querySelector(".screen");
const clear = document.querySelector(".clear");
clear.addEventListener("click", function() {
    screen.value = 0;
})


const btnCalculator = document.querySelectorAll("input.btn");

    btnCalculator.forEach(btn => {
        // console.log(btn)
        btn.addEventListener("click", function() {
            // console.log(number)
           

                if(screen.value == 0 || screen.value == "error") {
                    screen.value = btn.value;
                } else if(btn.value == "=") {
                    try {
                        screen.value = eval(screen.value);
                    } catch (error) {
                        screen.value = "error";
                    }
                    
                } else {
                    screen.value += btn.value;
                }
        })
    });