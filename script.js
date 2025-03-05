document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        { 
            question: "What’s Isaac’s favorite subject?", 
            answer: "Mathematics",
            options: ["Mathematics", "English", "Biology", "Physics"]
        },
        { 
            question: "How old is Isaac gonna be?", 
            answer: "19",
            options: ["18", "19", "20", "21"]
        },
        { 
            question: "What’s Isaac’s favorite hobby?", 
            answer: "Playing games",
            options: ["Reading", "Playing games", "Swimming", "Cooking"]
        },
        { 
            question: "What’s the best way you can gift Isaac?", 
            answer: "Money",
            options: ["Books", "Shoes", "Money", "Food"]
        },
        { 
            question: "What was Isaac’s childhood dream?", 
            answer: "An Astronaut",
            options: ["Doctor", "Pilot", "An astronaut", "Engineer"]
        },
        { 
            question: "What’s Isaac’s favorite color?", 
            answer: "Red",
            options: ["Blue", "Green", "Red", "Yellow"]
        },
        { 
            question: "What’s Isaac’s favorite food?", 
            answer: "Rice",
            options: ["Yam", "Beans", "Rice", "Spaghetti"]
        }
    ];

    const quizContainer = document.getElementById("quiz-container");
    const submitButton = document.getElementById("submit-button"); 
    const resultContainer = document.getElementById("quiz-result");

    // Generate quiz questions with multiple-choice options
    questions.forEach((q, index) => {
        const div = document.createElement("div");
        div.classList.add("quiz-question");

        let optionsHTML = "";
        q.options.forEach(option => {
            optionsHTML += `
                <label>
                    <input type="radio" name="question-${index}" value="${option}"> ${option}
                </label><br>
            `;
        });

        div.innerHTML = `
            <p>${q.question}</p>
            ${optionsHTML}
        `;
        quizContainer.appendChild(div);
    });

    // Function to calculate quiz score
    submitButton.addEventListener("click", function () {
        let correctAnswers = 0;

        questions.forEach((q, i) => {
            const selectedOption = document.querySelector(`input[name="question-${i}"]:checked`);
            if (selectedOption && selectedOption.value === q.answer) {
                correctAnswers++;
            }
        });

        const percentage = (correctAnswers / questions.length) * 100;
        let message = "";

        if (percentage >= 80) {
            message = "You may be in love with Isaac!🥹❤️ 🎉";
        } else if (percentage >= 50) {
            message = "You and Isaac are cool. 😎";
        } else {
            message = "Nah bruh, you messed up but we cool 😆.";
        }
       
        // Redirect to result page with score
        const resultPageUrl = `result.html?score=${percentage.toFixed(2)}&message=${encodeURIComponent(message)}`;
        window.location.href = resultPageUrl;
    });
});