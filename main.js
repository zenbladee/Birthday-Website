document.addEventListener('DOMContentLoaded', function() {
    const monthYear = document.getElementById('month-year');
    const daysContainer = document.getElementById('days');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];

    let currentDate = new Date();
    let today = new Date();

    function renderCalendar(date){
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const lastDay = new Date(year, month + 1, 0).getDate();

        monthYear.textContent = `${months[month]} ${year}`;

        daysContainer.innerHTML = '';

        //Previous Month's Dates
        const prevMonthLastDay = new Date(year, month, 0).getDate();
        for (let i = firstDay; i > 0; i--){
            const dayDiv = document.createElement('div');
            dayDiv.textContent = prevMonthLastDay - i + 1;
            dayDiv.classList.add('fade');
            daysContainer.appendChild(dayDiv);
        }

        //Current Month's Dates
        for(let i = 1; i <= lastDay; i++){
            const dayDiv = document.createElement('div');
            dayDiv.textContent = i;

            //Highlight today 
            if( i=== today.getDate() && month === today.getMonth() && year === today.getFullYear()){
                dayDiv.classList.add('today');
            }

            //Click Event
            dayDiv.addEventListener('click', function () {
                //Remove previous selection
                document.querySelectorAll('.selected').forEach(el => {
                    el.classList.remove('selected');
                });

                //Add selection to clicked
                dayDiv.classList.add('selected');
                
                //Save selected date
                selectedDate = new Date(year, month, i);

                console.log(selectedDate); //debugger
            });
            daysContainer.appendChild(dayDiv);
        }

        //Next Month's Dates
        const nextMonthStartDay = 7 - new Date(year, month + 1, 0).getDay() -1;
        for(let i = 1; i <= nextMonthStartDay; i++){
            const dayDiv = document.createElement('div')
            dayDiv.textContent = i;
            dayDiv.classList.add('fade');
            daysContainer.appendChild(dayDiv);
        }
    }

    prevButton.addEventListener('click', function () {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });
    renderCalendar(currentDate);

    nextButton.addEventListener('click', function () {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });
    renderCalendar(currentDate);
});


//Allow each day to be clickable and highlighted
let selectedDate = null;

const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', function () {
    if(!selectedDate){
        alert("Select a Date");
        return;
    }

    const selectedMonth = selectedDate.getMonth();
    const selectedDay = selectedDate.getDate();

    //Dad Bday
    const dadMonth = 3; //April
    const dadDay = 15; //Day

    //Mom bday
    const momMonth = 3; //April
    const momDay = 20; //Day

    //Sophia bday
    const sophMonth = 4 //May
    const sophDay = 30 //Day

    if(selectedMonth === dadMonth && selectedDay === dadDay){
        //Go to dad.html
        //window.location.href = "dad.html";
    }
    else if(selectedMonth === momMonth && selectedDay === momDay){
        //Go to mom.html
        //window.location.href = "mom.html";
    }
    else if(selectedMonth === sophMonth && selectedDay === sophDay){
        //Go to soph.html
        window.location.href = "sophia.html";
    }
    else {
        alert("No birthdays here!");
    }
});