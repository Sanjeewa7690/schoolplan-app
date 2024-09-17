document.getElementById("lesson-plan-form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    let lessonPlan = {
        academicYear: document.getElementById("academic-year").value,
        term: document.getElementById("term").value,
        teacher: document.getElementById("teacher").value,
        grade: document.getElementById("grade").value,
        subject: document.getElementById("subject").value,
        date: document.getElementById("date").value,
        resources: document.getElementById("resources").value,
        curriculum: document.getElementById("curriculum").value,
        lessonTopic: document.getElementById("lesson-topic").value,
        lessonAims: document.getElementById("lesson-aims").value,
        deliveryMethod: document.getElementById("delivery-method").value,
        starter: document.getElementById("starter").value,
        development: document.getElementById("development").value,
        evaluation: document.getElementById("evaluation").value,
        homework: document.getElementById("homework").value,
        submissionDate: document.getElementById("submission-date").value,
        teacherSignature: document.getElementById("teacher-signature").value,
        principal: document.getElementById("principal").value,
        principalSignature: document.getElementById("principal-signature").value
    };

    // Save to localStorage
    localStorage.setItem("lessonPlan", JSON.stringify(lessonPlan));

    alert("Lesson Plan Saved Successfully!");
});

// Later you can implement a function to retrieve and export this data as PDF
 