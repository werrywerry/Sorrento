        /**
         * Resets the colour of the input fields
        */
        function clearForm() {
            document.getElementById("fullName").style.backgroundColor = "#ddd";
            document.getElementById("email").style.backgroundColor = "#ddd";
            document.getElementById("phone").style.backgroundColor = "#ddd";
            document.getElementById("message").style.backgroundColor = "#ddd";
        }
        /**
         * Validates form
         * Create variables for often used HTML elements
         * Declare RegExp for email validation
         * Validate full name
         * Validate email vs RegExp
         * Validate phone number
         * Ensure either email or phone number is valid
         * Validate message
         */
        function validate() {
            clearForm();
            var valid = true;
            var eValid = false;
            var pValid = false;
            var n = document.forms["form"]["fName"];
            var e = document.forms["form"]["em"];
            var p = document.forms["form"]["ph"];
            var eReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            if (n.value.length < 2 || !n.value.match(/^[A-Za-z]+$/)) {
                valid = false;
                document.getElementById("fullName").style.backgroundColor = "#E33";
            }
            if (!e.value.match(eReg)) {
                valid = false;
                eValid = false;
                document.getElementById("email").style.backgroundColor = "#E33";
            } else {
                eValid = true;
                document.getElementById("email").style.backgroundColor = "#ddd";
            }
            if (!p.value.match(/^[0-9]+$/)) {
                valid = false;
                pValid = false;
                document.getElementById("phone").style.backgroundColor = "#E33";
            } else {
                pValid = true;
                document.getElementById("phone").style.backgroundColor = "#ddd";
            }
            if (pValid == false && eValid == false) {
                document.getElementById("phone").style.backgroundColor = "#E33";
                document.getElementById("email").style.backgroundColor = "#E33";
                valid = false;
            } else {
                if (pValid == false) {
                    document.getElementById("phone").value = "";
                }
                if (eValid == false) {
                    document.getElementById("email").value = "";
                }
                document.getElementById("phone").style.backgroundColor = "#ddd";
                document.getElementById("email").style.backgroundColor = "#ddd";
            }
            if (document.forms["form"]["mes"].value == "") {
                valid = false;
                document.getElementById("message").style.backgroundColor = "#E33";
            }
            return valid;
        }
