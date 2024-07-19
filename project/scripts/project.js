// Cards
 const insuranceCards = [
    {
        insuranceName: "Accident Assure",
        description: "Accidental Injury & disability income insurance",
        insuranceBullets: [
            "Accidental death and dismemberment with disability benefits",
            "Accident specified-injury benefits for fractures, dislocations and more",
            "Transportation, family lodging and ICU benefits",
            "Wavier of Premium and Physician's Office Additional Benefits riders",
            "Return of Premium or Cash Value benefit",
            "HSA-compatible"
        ],
        navImage: "images/accidentAssureImg.webp",
        imgURL: "https://drive.google.com/file/d/1XqRJIOxrMA0rbrbNdOdr5eZOE5rUIUTn/view"
    },
    {
        insuranceName: "Hospital Assure",
        description: "Hospital indemnity insurance",
        insuranceBullets: [
            "Hospital confinement lump-sum payment up to $5,000",
            "Coverage for Intensive Care Unit, rehabilitation facility, observation unit and ambulatory surgical center",
            "Return of Premium or Cash Value benefit",
            "Available for HSA and Non-HSA"
        ],
        navImage: "images/hospitalAssureImg.webp",
        imgURL: "https://drive.google.com/file/d/1rsDTHzYgibIlSLsXxBVgX6qI8H6gpcPq/view"
    },
    {
        insuranceName: "Pulse Protection Series",
        description: "Hospital indemnity insurance",
        insuranceBullets: [
            "Hospital confinements",
            "Heart transplant benefit",
            "Surgery, nursing and medication benefits",
            "Benefit Builder helps address rising inflation",
            "Return of Premium or Cash Value benefit",
            "HSA-compatible",
        ],
        navImage: "images/pulseProtectionImg.webp",
        imgURL: "https://drive.google.com/file/d/1P-HswPYRA8wSvTvB4zMD2JWGH-Ma9Enz/view"
    },
    {
        insuranceName: "Active Care",
        description: "Coverage for cancer, heart/stroke, other illnesses, plus hospital and accidents",
        insuranceBullets: [
            "Lump-sum payments up to $100,000 and recurrence benefits up to $50,000",
            "Other Critical illnesses include Alzheimer's disease, diabetic complications and blindness",
            "Fully customizable benefits",
            "Return of Premium and/or Cash Value benefit",
            "HSA-compatible",
        ],
        navImage: "images/activeCareImg.webp",
        imgURL: "https://drive.google.com/file/d/1sMsIQl1xe-8nUHtY3Plo-fIx18UBtdsf/view"
    },
    {
        insuranceName: "Solutions Cancer",
        description: "Supplemental cancer insurance",
        insuranceBullets: [
            "PLUS plans available covering cancer treatment for new therapies when approved by FDA or NCI",
            "Express payment up to $20,000",
            "Return of Premium and/or Cash Value benefit",
            "HSA-compatible",
        ],
        navImage: "images/solutionsCancerImg.webp",
        imgURL: "https://drive.google.com/file/d/18Q40leVItj5cynUKpre_q5k8kg9tchTU/view"
    },
    {
        insuranceName: "Critical Solutions",
        description: "Critical illness supplemental health insurance",
        insuranceBullets: [
            "Three simple plans with two options of coverage",
            "Lump-sum payment options up to $70,000",
            "Return of Premium and/or Cash Value benefit",
            "HSA-compatible",
        ],
        navImage: "images/criticalSolutionsImg.webp",
        imgURL: "https://drive.google.com/file/d/1FRADfkcoZqANLyriOh_vmXYrIbii7oW0/view"
    }
];

function CreateInsuranceCards(insureArray) {

    document.querySelector("#cardContainer").innerHTML = '';

    return insureArray.map(function(insurePlan) {
	const insureCard = document.createElement("div");
    insureCard.id = "card";

    // Create Images
    const imgLink = document.createElement("a");
    imgLink.href = insureArray.imgURL;

    const img = new Image();
    img.src = insurePlan.navImage;
    img.loading = "lazy";
    img.alt = `${insurePlan.description}`;
    img.width = 200;
    img.height = 200;

    imgLink.appendChild(img);

    // Creates the Header/Title of the shown Insurance Plan
	const insureHeader = document.createElement("h3");
	insureHeader.innerText = insurePlan.insuranceName;

    // Creates the description under the header
	const insureDesc = document.createElement("p");
	insureDesc.innerText = insurePlan.description;

    // Appends all created elements before appending all bullet points
    insureCard.appendChild(imgLink);
    insureCard.appendChild(insureHeader);
    insureCard.appendChild(insureDesc);

    // Iterates through the array inside the cards array returning and appending all the diffent benefits for the insurance plan
    const insureBullets = insurePlan.insuranceBullets
    insureBullets.forEach(bullet => {
        const bulletPoint = document.createElement("li");
        bulletPoint.innerText = bullet;
        insureCard.appendChild(bulletPoint);
    });
	
    // Appends completed Card to HTML
	document.querySelector("#cardContainer").appendChild(insureCard);
});}

CreateInsuranceCards(insuranceCards)
