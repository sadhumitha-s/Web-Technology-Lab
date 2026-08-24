const form = document.getElementById("applicationForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const position = document.getElementById("position").value;
    const level = document.getElementById("jobLevel").value;
    const experience = Number(document.getElementById("experience").value);
    const skills = document.getElementById("skills").value.trim();
    const projects = document.getElementById("projects").value.trim();
    const resume = document.getElementById("resume");

    if (position === "") {
        alert("Position must be selected.");
        return;
    }

    if (level === "") {
        alert("Job Level must be selected.");
        return;
    }

    if (
        isNaN(experience) ||
        experience < 0 ||
        experience > 30
    ) {
        alert("Experience should be between 0–30 years.");
        return;
    }

    if (skills === "") {
        alert("Skills field should not be empty.");
        return;
    }

    if (projects.length < 50) {
        alert(
            "Project description should contain at least 50 characters."
        );
        return;
    }

    if (resume.files.length === 0) {
        alert("Please upload your resume.");
        return;
    }

    const file = resume.files[0];

    const allowedTypes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];

    if (!allowedTypes.includes(file.type)) {
        alert("Resume should be uploaded in PDF or DOCX format.");
        return;
    }

    document.getElementById("successMessage").style.display = "block";

    form.reset();
});