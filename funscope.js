// Scope => Function,Block
         // Lexical,Global


         let sum = 45 //Global Scope

        function calSum(a,b){
             let sum = a+b  // Function scope
            console.log(sum);
        } 
        calSum(1,2)

        // console.log(sum);  //Global Scope Print



        // Block Scope =>{}
           
            // {
            //     let a =25
            // }
            // console.log(a);

            for(let i=1;i<=5;i++){
                console.log(i);
            }
            console.log(i); //we can not access the value outside the block


            // Lexical Scope

            function outerFun(){
                let x = 5
                let y = 6
                function innerFun(){
                    console.log(x);
                    console.log(y);
                }
                innerFun()
            }
