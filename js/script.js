const buttonElement = document.querySelector("#button");
const startElement = document.querySelector("#floatingStart");
const endElement = document.querySelector("#floatingArrive");
const nameElement = document.querySelector("#floatingName");
const ageElement = document.querySelector("#floatingAge");
const distanceElement = document.querySelector("#floatingDistance");


buttonElement.addEventListener('click', 
    function() {
        const StartStation = startElement.value;
        const EndStation = endElement.value;
        const PassengerName = nameElement.value;
        const Age = Number(ageElement.value);
        const Distance = Number(distanceElement.value);


        document.getElementById("search").style.display = 'none';
        document.getElementById("correct-data").style.display = 'block';

        
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        let hour = today.getHours();
        let minute = String(today.getMinutes());

        if (minute.length < 2) {
            minute = 0 + minute;
        }

        today = dd + '/' + mm + '/' + yyyy;
        time = hour + ':' + minute;

        let price = Distance * 0.21;
        let arrival = Distance / 5;

        if (!isNaN(Age) && !isNaN(Distance) && (Age > 0 && Age < 100) && (Distance > 0) && Number.isInteger(Age) && Number.isInteger(Distance)) {
            
            if (Age <= 17) {
                price = price - ((price * 20) / 100);
            } else if (Age >= 65) {
                price = price - ((price * 40) / 100);
            }

            document.getElementById("date_of_issue").innerHTML = `Emesso il: ${today} alle ore ${time}`;
            document.getElementById("sum_info").innerHTML = `Viaggio da ${StartStation} a ${EndStation} il ${today} alle ore ${time}`;
            document.getElementById("s_station").innerHTML = StartStation;
            document.getElementById("e_station").innerHTML = EndStation;
            document.getElementById("passenger_name").innerHTML = PassengerName;
            document.getElementById("departure_date"). innerHTML = `Partenza: ${dd}/${mm}/${yyyy} alle ${time}`;
            document.getElementById("arrival_time"). innerHTML = `Minuti all'arrivo: ${arrival}`;
            document.getElementById('price').innerHTML = `${price.toFixed(2)} €`;

        } else {

            let check_Age;
            let check_Distance;

            if (Object.keys(PassengerName).length === 0 || Object.keys(Age).length === 0 || Object.keys(StartStation).length === 0 || Object.keys(EndStation).length === 0 || Object.keys(Distance).length === 0){
                document.getElementById("correct-data").style.display = 'none';
                document.getElementById("wrong_data").style.display = 'block';
                document.getElementById("message").innerHTML = 'Non hai inserito un valore in uno dei campi richiesti Premi F5 per ricaricare la pagina';
            }

            if (isNaN(Age) || (Age < 0 && Age > 100) || !Number.isInteger(Age)) {
            document.getElementById("correct-data").style.display = 'none';
            document.getElementById("wrong_data").style.display = 'block';
            document.getElementById("message").innerHTML = 'Hai inserito un età non valida Premi F5 per ricaricare la pagina';
            check_Age = true;
            }
            
            if (isNaN(Distance) || (Distance < 0) || !Number.isInteger(Distance)) {
                document.getElementById("correct-data").style.display = 'none';
                document.getElementById("wrong_data").style.display = 'block';
                document.getElementById("message").innerHTML = 'Hai inserito una distanza non valida Premi F5 per ricaricare la pagina';
                check_Distance = true;
            }
            
            if (check_Age && check_Distance) {
                document.getElementById("correct-data").style.display = 'none';
                document.getElementById("wrong_data").style.display = 'block';
                document.getElementById("message").innerHTML = 'Hai inserito un età e una distanza non valida Premi F5 per ricaricare la pagina';
            }
        }


    }
)


