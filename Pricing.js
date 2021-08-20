        var dates = new Array();
        
        /** 
        * Adds selected date to date array
        */
        function addDate() {
            dates.push(document.getElementById("calendar").value);
            dates.sort();
            displayDates();
        }
        /** 
        * Removes first found entry of a date in the array and removes it
        */
        function removeDate() {
            var idx = dates.indexOf(document.getElementById("calendar").value);
            if(idx != -1) {
                dates.splice(idx, 1);
                displayDates();
            }
        }
        /** 
        * Displays a list of all dates found in array with prices
        */
        function displayDates() {
            var total = 0;
            document.getElementById("out").innerHTML = "Dates:"
            for(var i = 0; i < dates.length; i++) {
                document.getElementById("out").innerHTML += "</br>" + dates[i] + " - $" + getPrice(dates[i]);
                total += getPrice(dates[i]);
            }
            document.getElementById("total").innerHTML = "$" + total;
        }
        /** 
        * Gets the price for provided date
        */
        function getPrice(date) {
            date = new Date(date);
            var winStart = new Date('2021-06-01');
            var sprStart = new Date('2021-09-01');
            var sumStart = new Date('2021-12-19');
            var autStart = new Date('2022-01-31');
            switch (true) {
                case (date >= winStart && date < sprStart):
                    return 200;
                    break;
                case (date >= sprStart && date < sumStart):
                    return 210;
                    break;
                case (date >= sumStart && date < autStart):
                    return 220;
                    break;
                case (date >= autStart):
                    return 250;
                    break;
                default:
                    break;
            }
        }
