// Family Structure
const family = [
    {
        name: "Papa",
        img: "papa.jpg",
        next: "Mummy"
    },
    {
        name: "Mummy",
        img: "mummy.jpg",
        next: "Elder Son"
    },
    {
        name: "Elder Son",
        img: "elder-son.jpg",
        next: "Son's Wife"
    },
    {
        name: "Son's Wife",
        img: "sons-wife.jpg",
        next: "Elder Daughter"
    },
    {
        name: "Elder Daughter",
        img: "elder-daughter.jpg",
        next: "Daughter's Husband"
    },
    {
        name: "Daughter's Husband",
        img: "daughters-husband.jpg",
        next: "Younger Daughter 1"
    },
    {
        name: "Younger Daughter 1",
        img: "younger-daughter1.jpg",
        next: "Younger Daughter 2"
    },
    {
        name: "Younger Daughter 2",
        img: "younger-daughter2.jpg",
        next: null
    }
];

const memberCard = document.getElementById('member-card');
const memberImg = document.getElementById('member-img');
const memberName = document.getElementById('member-name');
const fullTreeSection = document.getElementById('full-tree');
const familyTreeSection = document.getElementById('family-tree');

let currentMember = "Papa";
let viewedMembers = ["Papa"];

memberCard.addEventListener('click', () => {
    const current = family.find(member => member.name === currentMember);
    if (!current.next) {
        // Show full family tree
        familyTreeSection.classList.add('hidden');
        fullTreeSection.classList.remove('hidden');
        return;
    }

    // Track viewed members
    viewedMembers.push(current.next);
    
    // Slide out current card
    memberCard.classList.add('slide-out');
    setTimeout(() => {
        // Update to next member
        currentMember = current.next;
        const nextMember = family.find(member => member.name === currentMember);
        memberImg.src = nextMember.img;
        memberImg.alt = nextMember.name;
        memberName.textContent = nextMember.name;

        // Reset and slide in
        memberCard.classList.remove('slide-out');
        memberCard.classList.add('slide-in');
        setTimeout(() => {
            memberCard.classList.remove('slide-in');
        }, 500);
    }, 500);
});