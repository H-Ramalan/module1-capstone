const openMenu = document.querySelector('.ham-icon');
const closeMenu = document.querySelector('.close-button');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.mobile-menu-item');

const openModal = (e) => {
  menu.style.display = 'block';
  e.preventDefault();
};
const closeModal = () => {
  menu.style.display = 'none';
};

openMenu.addEventListener('click', openModal);
closeMenu.addEventListener('click', closeModal);

for (let i = 0; i < menuItems.length; i += 1) {
  menuItems[i].addEventListener('click', closeModal);
}

// Speakers

const speakers = [
  {
    id: 0,
    image: 'assets/cosgrove.png',
    speakerName: 'Umar Abdullahi',
    speakerPosition:
      'Chairman/Chief Executive Officer, Cosgrove Real Estate Company LTD.',
    note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Obcaecati accusamus ullam, dignissimos fuga dicta',
  },
  {
    id: 1,
    image: 'assets/Chinua.jpg',
    speakerName: 'Chinua Azubike',
    speakerPosition:
      'Managing Director/Chief Executive Officer, InfraCredit Company LTD.',
    note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Obcaecati accusamus ullam, dignissimos fuga dicta',
  },
  {
    id: 2,
    image: 'assets/istrom.jfif',
    speakerName: 'Rayyan Husseini',
    speakerPosition:
      'Managing Director/Chief Executive Officer, Istrom Dynamis Real Estate Company LTD.',
    note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Obcaecati accusamus ullam, dignissimos fuga dicta',
  },
  {
    id: 3,
    image: 'assets/minister.jfif',
    speakerName: 'Babatunde Fashola',
    speakerPosition:
      'Honorable Minister, Ministry of Works and Housing, Federal Republic of Nigeria',
    note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Obcaecati accusamus ullam, dignissimos fuga dicta',
  },
  {
    id: 4,
    image: 'assets/lotus-bank-md.jpg',
    speakerName: 'Kafilat Araoye',
    speakerPosition:
      'Managing Director/Chief Executive Officer, Lotus Bank Nigeria LTD.',
    note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Obcaecati accusamus ullam, dignissimos fuga dicta',
  },
  {
    id: 5,
    image: 'assets/mortgage.jfif',
    speakerName: 'Arc. Ahmad Musa',
    speakerPosition:
      'Managing Director/Chief Executive Officer, Federal Mortgage Bank of Nigeria LTD.',
    note: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Obcaecati accusamus ullam, dignissimos fuga dicta',
  },
];

const mainSpeakers = document.querySelector('.speakers');

speakers.forEach((speakers) => {
  const speaker = document.createElement('div'); // div for each project = projectElement
  speaker.classList.add('speaker');

  speaker.innerHTML = `
          <img src="${speakers.image}" alt="pic" class="speaker-img" />
          <div class="profile">
            <h4 class="speaker-name">${speakers.speakerName}</h4>
            <p class="speaker-position">
              ${speakers.speakerPosition}
            </p>
            <hr class="hr-profile" />
            <p class="speaker-note">
              ${speakers.note}
            </p>
          </div>
  `;
  mainSpeakers.appendChild(speaker);
});
