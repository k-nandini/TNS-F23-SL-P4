//
//Scroll Ring Animation
//Source - https://www.youtube.com/watch?v=4OcAAj8aqS8
//
const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const currentFrame = index => (
  `assets/images/${index.toString().padStart(5, '0')}.jpg` //Function to change image number dynamically
)
const frameCount = 250; //Number of Frames

canvas.width = 2560;
canvas.height = 1440;

const img = new Image()
img.src = currentFrame(1);

img.onload=function(){
    context.drawImage(img, 0, 0);
}

const updateImage = index => {
    img.src = currentFrame(index);
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
    
    requestAnimationFrame(() => updateImage(frameIndex + 1))
});

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

preloadImages()
//
//

/*
// Top Level Properties
let lostRing = {
    material: "Gold",
    gemstone: "Yellow Sapphire",
    size: 5,
    price: 3000,
    weight: 8,
    isAntique: false,
    manufacturer: "XYZ Jewelers",
    description: "A stunning gold ring with a sapphire center stone.",
    hallmark: "14K",
    isCustomMade: true,
    productionDetails: {  // Nested Property 1
        productionYear: 2017,
        gemstoneCarat: 0.75,
        hasCertificate: true,
        makingCharges: 1000,
        isResizable: false
    },
    designDetails: {  // Nested Property 2
        centerStone: {
            shape: "Oval",
            type: "Yellow Sapphire",
            touchesSkin: true
        },
        sideStones: {
            number: 6,
            type: "Diamond",
            setting: "Pave"
        },
        ringBase: {
            materials: ["Silver", "Gold"]  // Array type
        }
    },
    story: {  // Nested Property 3
        event: "Date night",
        location: "Jazz Bar",
        partner: "Current Partner",
        cabDriver: "Irina"
    }
};

// Functions
function tellStory() {
    const storyText = `This story is about my lost ring that I got from my mother as a gift. I received it as a 
        form of protection in ${lostRing.productionDetails.productionYear}. The ring was designed to have 
        a large ${lostRing.designDetails.centerStone.shape} cut ${lostRing.designDetails.centerStone.type} 
        stone as its center piece. It's my astrological birthstone, accompanied by 
        ${lostRing.designDetails.sideStones.number} smaller ${lostRing.designDetails.sideStones.type}s 
        for decoration studded in ${lostRing.designDetails.ringBase.materials[0]} and 
        ${lostRing.designDetails.ringBase.materials[1]} for the ring base.

        On a memorable ${lostRing.story.event} with my ${lostRing.story.partner} at the 
        ${lostRing.story.location}, after a delightful evening, I decided to remove the ring for safety 
        while on my way home in an Uber driven by ${lostRing.story.cabDriver}. As I tried to stash the ring away,
        an unexpected bump caused it to slip from my grasp, marking the beginning of its mysterious absence from my life.`;

    document.getElementById('storyOutput').innerText = storyText;
}

function updateTitle(newTitle) {
    document.title = newTitle;
}

// Execute Functions
tellStory();
updateTitle("JS The Lost Ring JS");
*/
