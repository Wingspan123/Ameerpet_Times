function toggleDropdown() {
    var dropdown = document.getElementById("dropdownContent");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

var nareshIt = document.getElementById("nareshIt");
var sathya = document.getElementById("sathya");
var Qspiders = document.getElementById("Qspiders");
var QualityThought = document.getElementById("QualityThought");

var instituteBtn1 = document.getElementById("instituteBtn1");
var instituteBtn2 = document.getElementById("instituteBtn2");
var instituteBtn3 = document.getElementById("instituteBtn3");
var instituteBtn4 = document.getElementById("instituteBtn4");

// Store the original inner HTML content of each division
var originalNareshItHTML = nareshIt.innerHTML;
var originalSathyaHTML = sathya.innerHTML;
var originalQspidersHTML = Qspiders.innerHTML;
var originalQualityThoughtHTML = QualityThought.innerHTML;

instituteBtn1.addEventListener("click", () => {
    // Set the inner HTML of each division to its original content
    nareshIt.innerHTML = originalNareshItHTML;
    sathya.innerHTML = originalNareshItHTML;
    Qspiders.innerHTML = originalNareshItHTML;
    QualityThought.innerHTML = originalNareshItHTML;
});

instituteBtn2.addEventListener("click", () => {
    // Set the inner HTML of each division to its original content
    nareshIt.innerHTML = originalSathyaHTML;
    sathya.innerHTML = originalSathyaHTML;
    Qspiders.innerHTML = originalSathyaHTML;
    QualityThought.innerHTML = originalSathyaHTML;
});

instituteBtn3.addEventListener("click", () => {
    // Set the inner HTML of each division to its original content
    nareshIt.innerHTML = originalQspidersHTML;
    sathya.innerHTML = originalQspidersHTML;
    Qspiders.innerHTML = originalQspidersHTML;
    QualityThought.innerHTML = originalQspidersHTML;
});

instituteBtn4.addEventListener("click", () => {
    // Set the inner HTML of each division to its original content
    nareshIt.innerHTML = originalQualityThoughtHTML;
    sathya.innerHTML = originalQualityThoughtHTML;
    Qspiders.innerHTML = originalQualityThoughtHTML;
    QualityThought.innerHTML = originalQualityThoughtHTML;
});

