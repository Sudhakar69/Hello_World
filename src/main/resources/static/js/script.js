document.getElementById("resumeForm").onsubmit = function(event) {
    event.preventDefault();
  
    // Get the values from the form
    var name = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var objective = document.getElementById("objective").value;
    var experience = document.getElementById("experience").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value;
  
    // Set the values in the resume output
    document.getElementById("resName").innerText = name;
    document.getElementById("resEmail").innerText = email;
    document.getElementById("resObjective").innerText = objective;
    document.getElementById("resExperience").innerText = experience;
    document.getElementById("resEducation").innerText = education;
    document.getElementById("resSkills").innerText = skills;
  
    // Show the resume output
    document.getElementById("resumeOutput").style.display = "block";
  };
  function downloadResumeAsPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
  
    // You can add more styling and content here as needed
    doc.text("Resume", 10, 10);
    doc.text(document.getElementById("resName").innerText, 10, 20);
    doc.text(document.getElementById("resEmail").innerText, 10, 30);
    doc.text(document.getElementById("resObjective").innerText, 10, 40);
    // ... add all other content ...
  
    doc.save('resume.pdf');
  }
  