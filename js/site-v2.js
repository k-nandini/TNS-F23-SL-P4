// Load Custom Fonts
// Create the style element
const fontStyles = document.createElement("style");
fontStyles.type = "text/css";

// Add the font-face rules
fontStyles.appendChild(document.createTextNode(`
    @font-face {
        font-family: 'HelloGoodOldStyle';
        src: url('assets/fonts/hellogoodoldstyleregular.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Ahganyira';
        src: url('assets/fonts/ahganirya.ttf') format('truetype');
    }
`));

// Append the style element to the document head
document.head.appendChild(fontStyles);

//
// Deeply Nested Objects for Story Data
//
let lostRingStory = {
    metaData: {
        title: "The Lost Ring",
        author: "Nandini Kumar",
        dateCreated: new Date().toISOString().split('T')[0],
        origin: "India",
        narrationStyle: "First-person"
    },
    ringDetails: {
        physicalAttributes: {
            material: "Gold",
            gemstone: "Yellow Sapphire",
            size: 5,
            weight: 8,
            hallmark: "14K",
            age: "4 years",
            isAntique: false,
            isCustomMade: true,
            appraisalValue: "$3500",
            purchaseLocation: "Delhi"
        },
        manufacturerInfo: {
            name: "Family Jewelers",
            description: "A leading jeweler known for exquisite craftsmanship.",
            location: "Bhavnagar",
            establishedYear: 1985,
        },
        design: {
            centerStone: {
                shape: "Oval",
                type: "Yellow Sapphire",
                touchesSkin: true,
                astrologicalSignificance: "It's my astrological birthstone.",
                color: "Bright Yellow",
                clarity: "VVS1"
            },
            sideStones: {
                number: 6,
                type: "Diamond",
                setting: "Pave",
                caratEach: 0.05,
                totalCarat: 0.3
            },
            ringBase: {
                materials: ["Silver", "Gold"],
                description: "A dual-material ring base for added allure.",
                finish: "Glossy"
            }
        },
        production: {
            year: 2017,
            gemstoneCarat: 0.75,
            hasCertificate: true,
            certificateNumber: "FG12345",
            makingCharges: 1000,
            isResizable: false,
            warrantyPeriod: "1 year"
        }
    },
    backstory: {
        relation: "Mother",
        purpose: "Protection",
        storyOrigin: "A cultural belief",
        emotion: "Sentimental",
        event: {
            name: "Date night",
            location: "Jazz Bar",
            date: "2018-03-14",
            accompanyingPerson: {
                relationship: "Current Partner",
                name: "John Doe",
                mutualActivity: "Dancing"
            },
            transport: {
                type: "Cab",
                driverName: "Irina",
                cabCompany: "Uber"
            },
            memories: "It was a night filled with laughter, love, and music."
        }
    },
    currentStatus: "Lost",
    searchEfforts: "Contacted the cab company, retraced steps, offered a reward."
};

//
// Scroll Ring Animation (Image Sequencing based on Scroll Position)
//
const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const currentFrame = index => (
  `assets/images/V2/${index.toString().padStart(4, '0')}.png` //Function to change image number dynamically
)
const frameCount = 270; //Number of Frames

canvas.width = 1920;
canvas.height = 1080;

const img = new Image()
img.src = currentFrame(1);

img.onload=function(){
    context.drawImage(img, 0, 0);
}

const updateImage = index => {
    img.src = currentFrame(index);
    context.clearRect(0, 0, canvas.width, canvas.height); // Clear the entire canvas - As using transperent PNG's from V2.
    context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {  
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(
      frameCount - 1,
      Math.ceil(scrollFraction * frameCount)
    );

    // Animation for Landing Page Title based on frame
    if (frameIndex > 15) {  
        titleText.style.display = 'none'; 
    } else {
        titleText.style.display = 'block';
    }

    // Animation for Scroll Down Indicator based on frame
    const arrowDiv = document.querySelector(".scroll-indicator");
    if (frameIndex > 15) {
        arrowDiv.style.opacity = "0";
    } else {
        arrowDiv.style.opacity = "1";
    }

    // Animation for Story Snippet
    for (let snippet of storySnippets) {
        if (frameIndex >= snippet.startFrame && frameIndex <= snippet.endFrame) {
            animatedText.textContent = snippet.text;
            break;
        }
    }

    requestAnimationFrame(() => updateImage(frameIndex + 1));
});

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

preloadImages()

//
// The Lost Ring Story Animation Data
//
const storySnippets = [
    {
        startFrame: 0,
        endFrame: 15,
        text: ``
    },
    {
        startFrame: 16,
        endFrame: 30,
        text: `This story is about my lost ring, a gift from my ${lostRingStory.backstory.relation}.`
    },
    {
        startFrame: 31,
        endFrame: 45,
        text: `Crafted by ${lostRingStory.ringDetails.manufacturerInfo.name}, a renowned jeweler from ${lostRingStory.ringDetails.manufacturerInfo.location}, it was more than just an ornament.`
    },
    {
        startFrame: 46,
        endFrame: 60,
        text: `Given to me in ${lostRingStory.ringDetails.production.year}, it served as ${lostRingStory.backstory.purpose}.`
    },
    {
        startFrame: 61,
        endFrame: 75,
        text: `Its design showcased a ${lostRingStory.ringDetails.design.centerStone.shape}-cut ${lostRingStory.ringDetails.design.centerStone.type}, symbolizing ${lostRingStory.ringDetails.design.centerStone.astrologicalSignificance}.`
    },
    {
        startFrame: 76,
        endFrame: 90,
        text: `Accompanied by ${lostRingStory.ringDetails.design.sideStones.number} sparkling ${lostRingStory.ringDetails.design.sideStones.type}s, the ring gleamed in every light.`
    },
    {
        startFrame: 91,
        endFrame: 105,
        text: `The base was meticulously crafted using ${lostRingStory.ringDetails.design.ringBase.materials[0]} and ${lostRingStory.ringDetails.design.ringBase.materials[1]}, giving it a unique allure.`
    },
    {
        startFrame: 106,
        endFrame: 120,
        text: `However, on a memorable ${lostRingStory.backstory.event.name} at the ${lostRingStory.backstory.event.location} with ${lostRingStory.backstory.event.accompanyingPerson.name}, my heart sank.`
    },
    {
        startFrame: 121,
        endFrame: 135,
        text: `After a night of ${lostRingStory.backstory.event.accompanyingPerson.mutualActivity}, laughter, and unforgettable moments, I lost it.`
    },
    {
        startFrame: 136,
        endFrame: 150,
        text: `It was in a cab driven by ${lostRingStory.backstory.event.transport.driverName} from ${lostRingStory.backstory.event.transport.cabCompany} that I left the piece of my heart.`
    },
    {
        startFrame: 151,
        endFrame: 165,
        text: `The search was frantic. I retraced steps, contacted the cab company, even offered a reward, but it was like searching for a needle in a haystack.`
    },
    {
        startFrame: 166,
        endFrame: 180,
        text: `My ring wasn't just metal and stone; it was memories, love, protection, and my mother's blessings.`
    },
    {
        startFrame: 181,
        endFrame: 195,
        text: `Purchased from ${lostRingStory.ringDetails.physicalAttributes.purchaseLocation} and valued at ${lostRingStory.ringDetails.physicalAttributes.appraisalValue}, its emotional value was immeasurable.`
    },
    {
        startFrame: 196,
        endFrame: 210,
        text: `Every sparkle reminded me of moments, every shimmer of emotions, every glint of the protection it promised.`
    },
    {
        startFrame: 211,
        endFrame: 225,
        text: `It was not just an ornament; it was a piece of art, a piece of history, a piece of my soul.`
    },
    {
        startFrame: 226,
        endFrame: 240,
        text: `Even today, I hope, somewhere, somehow, it finds its way back to me.`
    },
    {
        startFrame: 241,
        endFrame: 255,
        text: `But till then, the story of my lost ring remains, reminding me of the impermanence of materialistic joys and the permanence of memories.`
    },
    {
        startFrame: 256,
        endFrame: 270,
        text: `To those who find it, may it bring you the same joy, protection, and luck it promised me.`
    }
];

//
// Styling for Text Animation
//
const animatedText = document.createElement('div');
animatedText.style.fontFamily = 'HelloGoodOldStyle';
animatedText.style.position = 'fixed';
animatedText.style.top = '50%'; // Center vertically
animatedText.style.left = '50%'; // Center horizontally
animatedText.style.transform = 'translate(-50%, -50%)'; // To account for the text's own dimensions
animatedText.style.color = 'white';
animatedText.style.fontSize = '2em';
animatedText.style.textAlign = 'center'; // To center-align the text content
document.body.appendChild(animatedText);

const titleText = document.createElement('div');
titleText.style.fontFamily = 'Ahganyira';
titleText.innerHTML = "The Lost Ring";  // The title of your story
titleText.style.position = 'fixed';
titleText.style.top = '50%';
titleText.style.left = '50%';
titleText.style.transform = 'translate(-50%, -50%)';
titleText.style.color = 'white';
titleText.style.fontSize = '3em';  // You can adjust this value as needed
titleText.style.textAlign = 'center';
document.body.appendChild(titleText);