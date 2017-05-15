    function check(form) { /*function to check userid & password*/
                /*the following code checkes whether the entered userid and password are matching*/
                if(form.userid.value == "Asad" && form.pswrd.value == "asad") {
                    alert("Hi Asad, this is your lucky day")/*displays error message*/
                }
                else {
                    alert("Error Password or Username")/*displays error message*/
                }
            }