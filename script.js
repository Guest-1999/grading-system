let students = [
    { name: "", quiz: "", writing: "", speaking: "", classScore: "", finalScore: "", pass: null },
  ];
  
  function addStudent() {
    const tableBody = document.querySelector("#studentsTable tbody");
    const newRow = document.createElement("tr");
  
    newRow.innerHTML = `
      <td><input type="text" class="name"></td>
      <td><input type="number" class="quiz"></td>
      <td><input type="number" class="writing"></td>
      <td><input type="number" class="speaking"></td>
      <td><input type="number" class="classScore"></td>
      <td><span class="finalScore">-</span></td>
    `;
  
    tableBody.appendChild(newRow);
  }
  
  function calculateScores() {
    const maxScores = {
      quiz: document.getElementById("maxQuiz").value,
      writing: document.getElementById("maxWriting").value,
      speaking: document.getElementById("maxSpeaking").value,
      classScore: document.getElementById("maxClassScore").value,
    };
  
    const rows = document.querySelectorAll("#studentsTable tbody tr");
  
    rows.forEach(row => {
      const name = row.querySelector(".name").value;
      const quiz = parseFloat(row.querySelector(".quiz").value) || 0;
      const writing = parseFloat(row.querySelector(".writing").value) || 0;
      const speaking = parseFloat(row.querySelector(".speaking").value) || 0;
      const classScore = parseFloat(row.querySelector(".classScore").value) || 0;
  
      const quizScore = (quiz / maxScores.quiz) * 25;
      const writingScore = (writing / maxScores.writing) * 25;
      const speakingScore = (speaking / maxScores.speaking) * 25;
      const classScoreScore = (classScore / maxScores.classScore) * 25;
      
      const finalScore = quizScore + writingScore + speakingScore + classScoreScore;
      const finalScoreSpan = row.querySelector(".finalScore");
  
      finalScoreSpan.textContent = finalScore.toFixed(2);
  
      // Highlight pass or fail
      row.style.backgroundColor = finalScore >= 60 ? "#d4edda" : "#f8d7da";
    });
  }
  