import { entryTemplate } from "./templates.js";

const entries = [
    {
        id: "bear",
        title: "Black Bear:",
        info: "While exploring the forests in Star Valley, you may encounter a "+ 
            "black bear. They are relatively easy to identify, being almost entirely "+ 
            "black. And while the smallest bear species in America, they are the most "+ 
            "widespread. They tend to avoid people and are the least likely bear to "+
            "attack; it is always a good idea to carry bear spray as a deterrent for the "+
            "exceptions. Besides their strength, they have some other fascinating quirks. "+
            "For example, nearly every attempt to relocate them has failed because they "+
            "are able to navigate back to their home range even with no familiar landmarks. "+
            "They are also frequent tree climbers, a trait few other American bear possesses.",
        img: "black-bear.jpg",
        alt: "black-bear"
    },
    {
        id: "pika",
        title: "Pika:",
        info: "An animal that looks like a rabbit with short, round ears and no tail. "+
            "These can be found on the rocky sides of some of the canyons of Star Valley."+
            "They make their burrows in crevices of rock and spend their days preparing "+
            "for winter. Since pikas do not hibernate, they need to store spare hay, "+
            "grasses, and forbs in their burrows. It has been observed that they will "+
            "sometimes move to a different burrow and ferry their stash to the new home. "+
            "For an alarm call, they produce a high, whistling sound before rushing to "+
            "their burrow.",
        img: "pika.jpg",
        alt: "pika"
    },
    {
        id: "heron",
        title: "Great Blue Heron",
        info: "A bird rarely seen in Star Valley. They usually only "+
            "appear while migrating before or after winter. Since there are many rivers "+
            "and ponds, they are pretty easy to spot when the stop by. Most of their "+
            "diet consists of fish which their bodies are well equipped to hunt. A "+
            "heron’s primary hunting strategy is to stand in or near the water and to "+
            "quickly grasp its prey when within reach. Sometimes, they dive from a perch "+
            "or even mid- flight if the spot potential food.",
        img: "great-blue-heron.jpg",
        alt: "great-blue-heron"
    },
    {
        id: "nettle",
        title: "Stinging Nettle:",
        info: "A widespread plant with small stinging hairs on its stems "+
            "and leaves. Gives an itching, burning sensation and inflammation when "+
            "touched. Their leaves have many serrations at their edge, and the leaves "+
            "grow in pairs, one on opposite sides of the stem.",
        img: "stinging-nettle.jpg",
        alt: "stinging-nettle"
    },
    {
        id: "pine",
        title: "Lodgepole Pine:",
        info: "A conifer that is not common in most of Wyoming. It can be "+
            "found in places such as Yellowstone and of course Star Valley. Strangely, "+
            "these trees are fire-dependent species meaning they grow best after a "+
            "forest fire. While other tree populations tend to struggle after a fire, "+
            "the Lodgepole populations have a net increase because of the fire.",
        img: "lodgepole-pine.jpg",
        alt: "lodgepole-pine"
    },
    {
        id: "paint",
        title: "Giant Red Indian Paintbrush:",
        info: "A rare wildflower to find in Wyoming but "+
            "easily recognizable. They grow a little over 2 feet tall and have green "+
            "leaves, purple stems, and red flowers. These plants are parasitic to other "+
            "plants and form many connections via their roots. Due to this, they cannot "+
            "be transplanted. These plants are also the source of defensive compounds "+
            "that some insect larvae can extract and use it as a deterrent for predators.",
        img: "indian-paintbrush.jpg",
        alt: "indian-paintbrush"
    }
]

const tabcontent = document.getElementById("tabcontent");

const tablinks = document.getElementsByClassName('tablinks');

function changeEntry(input)
{
    var buttons = document.getElementsByClassName("tablinks");
    for (var i = 0; i < buttons.length; i++) 
    {
        if (buttons[i].className == "tablinks active")
        {
            buttons[i].className = "tablinks"
        }
    }
    input.currentTarget.className += " active";

    const entryId = input.currentTarget.id;
    tabcontent.innerHTML = '';
    const selectedEntry = entries.find((entry) => entry.id === entryId);

    const entryHTML = entryTemplate(selectedEntry);

    tabcontent.innerHTML = entryHTML;
    tabcontent.className = entryId;
}

Array.from(tablinks).forEach(function (button){
    button.addEventListener('click', changeEntry);
});