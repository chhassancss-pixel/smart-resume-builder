function generateResume() {
    const name = document.getElementById("name").value;
    const skills = document.getElementById("skills").value;
    const experience = document.getElementById("experience").value;

    const preview = `
        <h2>${name}</h2>
        <p><strong>Skills:</strong> ${skills}</p>
        <p><strong>Experience:</strong> ${experience}</p>
    `;

    // Preview update
    document.getElementById("preview").innerHTML = preview;

    // PDF generate karna
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(name, 10, 20);
    doc.setFontSize(12);
    doc.text("Skills: " + skills, 10, 30);
    doc.text("Experience: " + experience, 10, 40);
    doc.save(name + "_Resume.pdf");
}