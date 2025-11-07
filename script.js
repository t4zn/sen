// Animal data with 102 animals
const animals = [
    // Farm Animals
    { name: 'Cow', icon: '🐄', sound: 'Moo', category: 'farm', info: 'Cows are domesticated mammals known for producing milk and meat.' },
    { name: 'Pig', icon: '🐷', sound: 'Oink', category: 'farm', info: 'Pigs are intelligent animals often raised for pork production.' },
    { name: 'Sheep', icon: '🐑', sound: 'Baa', category: 'farm', info: 'Sheep are raised for wool, meat, and milk.' },
    { name: 'Horse', icon: '🐴', sound: 'Neigh', category: 'farm', info: 'Horses are used for riding, racing, and farm work.' },
    { name: 'Donkey', icon: '🫏', sound: 'Hee-haw', category: 'farm', info: 'Donkeys are strong pack animals known for their stubbornness.' },
    { name: 'Goat', icon: '🐐', sound: 'Bleat', category: 'farm', info: 'Goats are agile climbers raised for milk, meat, and fiber.' },
    { name: 'Chicken', icon: '🐔', sound: 'Cluck', category: 'farm', info: 'Chickens are the most common domestic birds, raised for eggs and meat.' },
    { name: 'Rooster', icon: '🐓', sound: 'Cock-a-doodle-doo', category: 'farm', info: 'Roosters are male chickens known for their morning crowing.' },
    { name: 'Duck', icon: '🦆', sound: 'Quack', category: 'farm', info: 'Ducks are waterfowl raised for eggs, meat, and feathers.' },
    { name: 'Turkey', icon: '🦃', sound: 'Gobble', category: 'farm', info: 'Turkeys are large birds traditionally eaten during holidays.' },
    
    // Wild Animals
    { name: 'Lion', icon: '🦁', sound: 'Roar', category: 'wild', info: 'Lions are apex predators known as the king of the jungle.' },
    { name: 'Tiger', icon: '🐯', sound: 'Roar', category: 'wild', info: 'Tigers are the largest cat species with distinctive stripes.' },
    { name: 'Bear', icon: '🐻', sound: 'Growl', category: 'wild', info: 'Bears are large mammals found in various habitats worldwide.' },
    { name: 'Wolf', icon: '🐺', sound: 'Howl', category: 'wild', info: 'Wolves are social predators that hunt in packs.' },
    { name: 'Fox', icon: '🦊', sound: 'Yip', category: 'wild', info: 'Foxes are cunning omnivores with bushy tails.' },
    { name: 'Elephant', icon: '🐘', sound: 'Trumpet', category: 'wild', info: 'Elephants are the largest land animals with exceptional memory.' },
    { name: 'Monkey', icon: '🐵', sound: 'Chatter', category: 'wild', info: 'Monkeys are intelligent primates found in tropical regions.' },
    { name: 'Gorilla', icon: '🦍', sound: 'Grunt', category: 'wild', info: 'Gorillas are the largest primates and mostly herbivorous.' },
    { name: 'Zebra', icon: '🦓', sound: 'Bray', category: 'wild', info: 'Zebras are African equines with distinctive black and white stripes.' },
    { name: 'Giraffe', icon: '🦒', sound: 'Hum', category: 'wild', info: 'Giraffes are the tallest mammals with long necks.' },
    { name: 'Rhino', icon: '🦏', sound: 'Snort', category: 'wild', info: 'Rhinoceros are large herbivores with horns on their snouts.' },
    { name: 'Hippo', icon: '🦛', sound: 'Grunt', category: 'wild', info: 'Hippopotamuses are large semi-aquatic mammals.' },
    { name: 'Deer', icon: '🦌', sound: 'Bleat', category: 'wild', info: 'Deer are graceful herbivores with antlers.' },
    { name: 'Camel', icon: '🐪', sound: 'Grunt', category: 'wild', info: 'Camels can survive long periods without water in deserts.' },
    { name: 'Kangaroo', icon: '🦘', sound: 'Chortle', category: 'wild', info: 'Kangaroos are marsupials that hop on powerful hind legs.' },
    { name: 'Koala', icon: '🐨', sound: 'Grunt', category: 'wild', info: 'Koalas are tree-dwelling marsupials that eat eucalyptus leaves.' },
    { name: 'Panda', icon: '🐼', sound: 'Bleat', category: 'wild', info: 'Giant pandas are endangered bears that primarily eat bamboo.' },
    { name: 'Sloth', icon: '🦥', sound: 'Whistle', category: 'wild', info: 'Sloths are slow-moving mammals that live in trees.' },
    { name: 'Raccoon', icon: '🦝', sound: 'Chitter', category: 'wild', info: 'Raccoons are nocturnal mammals with masked faces.' },
    { name: 'Skunk', icon: '🦨', sound: 'Hiss', category: 'wild', info: 'Skunks are known for their defensive spray.' },
    
    // Birds
    { name: 'Eagle', icon: '🦅', sound: 'Screech', category: 'birds', info: 'Eagles are powerful birds of prey with keen eyesight.' },
    { name: 'Owl', icon: '🦉', sound: 'Hoot', category: 'birds', info: 'Owls are nocturnal hunters with excellent hearing.' },
    { name: 'Parrot', icon: '🦜', sound: 'Squawk', category: 'birds', info: 'Parrots are colorful birds that can mimic human speech.' },
    { name: 'Peacock', icon: '🦚', sound: 'Scream', category: 'birds', info: 'Peacocks are known for their spectacular tail feathers.' },
    { name: 'Flamingo', icon: '🦩', sound: 'Honk', category: 'birds', info: 'Flamingos are pink wading birds that stand on one leg.' },
    { name: 'Penguin', icon: '🐧', sound: 'Bray', category: 'birds', info: 'Penguins are flightless birds adapted to aquatic life.' },
    { name: 'Swan', icon: '🦢', sound: 'Trumpet', category: 'birds', info: 'Swans are elegant waterfowl with long necks.' },
    { name: 'Dove', icon: '🕊️', sound: 'Coo', category: 'birds', info: 'Doves are symbols of peace and love.' },
    { name: 'Crow', icon: '🐦‍⬛', sound: 'Caw', category: 'birds', info: 'Crows are intelligent birds known for problem-solving.' },
    { name: 'Woodpecker', icon: '🪶', sound: 'Tap-tap', category: 'birds', info: 'Woodpeckers drum on trees to find insects.' },
    { name: 'Hummingbird', icon: '🐦', sound: 'Chirp', category: 'birds', info: 'Hummingbirds can hover and fly backwards.' },
    { name: 'Seagull', icon: '🐦', sound: 'Squawk', category: 'birds', info: 'Seagulls are coastal birds often seen near beaches.' },
    { name: 'Canary', icon: '🐤', sound: 'Sing', category: 'birds', info: 'Canaries are small songbirds kept as pets.' },
    { name: 'Sparrow', icon: '🐦', sound: 'Chirp', category: 'birds', info: 'Sparrows are small common birds found worldwide.' },
    { name: 'Robin', icon: '🐦', sound: 'Chirp', category: 'birds', info: 'Robins are known for their red breasts.' },
    
    // Aquatic Animals
    { name: 'Dolphin', icon: '🐬', sound: 'Click', category: 'aquatic', info: 'Dolphins are intelligent marine mammals.' },
    { name: 'Whale', icon: '🐋', sound: 'Song', category: 'aquatic', info: 'Whales are the largest animals on Earth.' },
    { name: 'Shark', icon: '🦈', sound: 'Silent', category: 'aquatic', info: 'Sharks are apex predators of the ocean.' },
    { name: 'Octopus', icon: '🐙', sound: 'Silent', category: 'aquatic', info: 'Octopuses are intelligent invertebrates with eight arms.' },
    { name: 'Fish', icon: '🐟', sound: 'Bubble', category: 'aquatic', info: 'Fish are aquatic vertebrates with gills.' },
    { name: 'Seal', icon: '🦭', sound: 'Bark', category: 'aquatic', info: 'Seals are marine mammals with flippers.' },
    { name: 'Otter', icon: '🦦', sound: 'Chirp', category: 'aquatic', info: 'Otters are playful aquatic mammals.' },
    { name: 'Crab', icon: '🦀', sound: 'Click', category: 'aquatic', info: 'Crabs are crustaceans with pincers.' },
    { name: 'Lobster', icon: '🦞', sound: 'Click', category: 'aquatic', info: 'Lobsters are large marine crustaceans.' },
    { name: 'Shrimp', icon: '🦐', sound: 'Silent', category: 'aquatic', info: 'Shrimp are small swimming crustaceans.' },
    { name: 'Jellyfish', icon: '🪼', sound: 'Silent', category: 'aquatic', info: 'Jellyfish are gelatinous marine animals.' },
    { name: 'Turtle', icon: '🐢', sound: 'Hiss', category: 'aquatic', info: 'Sea turtles are ancient marine reptiles.' },
    { name: 'Frog', icon: '🐸', sound: 'Ribbit', category: 'aquatic', info: 'Frogs are amphibians that live near water.' },
    { name: 'Crocodile', icon: '🐊', sound: 'Hiss', category: 'aquatic', info: 'Crocodiles are large aquatic reptiles.' },
    
    // Insects
    { name: 'Bee', icon: '🐝', sound: 'Buzz', category: 'insects', info: 'Bees are important pollinators that produce honey.' },
    { name: 'Butterfly', icon: '🦋', sound: 'Silent', category: 'insects', info: 'Butterflies are colorful insects with delicate wings.' },
    { name: 'Ant', icon: '🐜', sound: 'Silent', category: 'insects', info: 'Ants are social insects that live in colonies.' },
    { name: 'Ladybug', icon: '🐞', sound: 'Silent', category: 'insects', info: 'Ladybugs are beneficial beetles that eat aphids.' },
    { name: 'Spider', icon: '🕷️', sound: 'Silent', category: 'insects', info: 'Spiders are arachnids that spin webs.' },
    { name: 'Mosquito', icon: '🦟', sound: 'Whine', category: 'insects', info: 'Mosquitoes are blood-feeding insects.' },
    { name: 'Fly', icon: '🪰', sound: 'Buzz', category: 'insects', info: 'Flies are common flying insects.' },
    { name: 'Cricket', icon: '🦗', sound: 'Chirp', category: 'insects', info: 'Crickets are known for their chirping sounds.' },
    { name: 'Grasshopper', icon: '🦗', sound: 'Chirp', category: 'insects', info: 'Grasshoppers can jump long distances.' },
    { name: 'Dragonfly', icon: '🪰', sound: 'Silent', category: 'insects', info: 'Dragonflies are agile flying insects.' },
    { name: 'Beetle', icon: '🪲', sound: 'Silent', category: 'insects', info: 'Beetles are the largest group of insects.' },
    { name: 'Moth', icon: '🦋', sound: 'Silent', category: 'insects', info: 'Moths are nocturnal relatives of butterflies.' },
    { name: 'Wasp', icon: '🐝', sound: 'Buzz', category: 'insects', info: 'Wasps are predatory insects with stingers.' },
    { name: 'Firefly', icon: '🪲', sound: 'Silent', category: 'insects', info: 'Fireflies produce bioluminescent light.' },
    
    // Pets
    { name: 'Dog', icon: '🐕', sound: 'Woof', category: 'pets', info: 'Dogs are loyal companions and man\'s best friend.' },
    { name: 'Cat', icon: '🐈', sound: 'Meow', category: 'pets', info: 'Cats are independent and affectionate pets.' },
    { name: 'Rabbit', icon: '🐇', sound: 'Squeak', category: 'pets', info: 'Rabbits are gentle herbivores with long ears.' },
    { name: 'Hamster', icon: '🐹', sound: 'Squeak', category: 'pets', info: 'Hamsters are small rodents kept as pets.' },
    { name: 'Guinea Pig', icon: '🐹', sound: 'Wheek', category: 'pets', info: 'Guinea pigs are social rodents that vocalize often.' },
    { name: 'Mouse', icon: '🐭', sound: 'Squeak', category: 'pets', info: 'Mice are small rodents with long tails.' },
    { name: 'Rat', icon: '🐀', sound: 'Squeak', category: 'pets', info: 'Rats are intelligent and social rodents.' },
    { name: 'Ferret', icon: '🦦', sound: 'Dook', category: 'pets', info: 'Ferrets are playful and curious pets.' },
    { name: 'Hedgehog', icon: '🦔', sound: 'Snuffle', category: 'pets', info: 'Hedgehogs are small spiny mammals.' },
    { name: 'Goldfish', icon: '🐠', sound: 'Silent', category: 'pets', info: 'Goldfish are popular aquarium pets.' },
    
    // More Wild Animals
    { name: 'Cheetah', icon: '🐆', sound: 'Chirp', category: 'wild', info: 'Cheetahs are the fastest land animals.' },
    { name: 'Leopard', icon: '🐆', sound: 'Growl', category: 'wild', info: 'Leopards are powerful climbers with spotted coats.' },
    { name: 'Jaguar', icon: '🐆', sound: 'Roar', category: 'wild', info: 'Jaguars are strong swimmers found in Americas.' },
    { name: 'Hyena', icon: '🐕', sound: 'Laugh', category: 'wild', info: 'Hyenas are scavengers with powerful jaws.' },
    { name: 'Bat', icon: '🦇', sound: 'Screech', category: 'wild', info: 'Bats are the only flying mammals.' },
    { name: 'Squirrel', icon: '🐿️', sound: 'Chatter', category: 'wild', info: 'Squirrels are agile tree-dwelling rodents.' },
    { name: 'Chipmunk', icon: '🐿️', sound: 'Chip', category: 'wild', info: 'Chipmunks are small striped rodents.' },
    { name: 'Beaver', icon: '🦫', sound: 'Grunt', category: 'wild', info: 'Beavers build dams and lodges in water.' },
    { name: 'Moose', icon: '🫎', sound: 'Bellow', category: 'wild', info: 'Moose are the largest deer species.' },
    { name: 'Bison', icon: '🦬', sound: 'Grunt', category: 'wild', info: 'Bison are large grazing mammals of North America.' },
    { name: 'Llama', icon: '🦙', sound: 'Hum', category: 'wild', info: 'Llamas are domesticated South American camelids.' },
    { name: 'Armadillo', icon: '🦔', sound: 'Grunt', category: 'wild', info: 'Armadillos have protective armor shells.' },
    { name: 'Porcupine', icon: '🦔', sound: 'Grunt', category: 'wild', info: 'Porcupines have sharp defensive quills.' },
    { name: 'Badger', icon: '🦡', sound: 'Growl', category: 'wild', info: 'Badgers are burrowing mammals with strong claws.' },
    { name: 'Weasel', icon: '🦦', sound: 'Squeak', category: 'wild', info: 'Weasels are small carnivorous mammals.' },
    { name: 'Meerkat', icon: '🦦', sound: 'Bark', category: 'wild', info: 'Meerkats are social animals that stand guard.' },
    { name: 'Emu', icon: '🦤', sound: 'Boom', category: 'birds', info: 'Emus are large flightless birds from Australia.' },
    { name: 'Ostrich', icon: '🦤', sound: 'Boom', category: 'birds', info: 'Ostriches are the largest living birds.' }
];

let playCount = 0;
let favorites = new Set();
let currentCategory = 'all';
let searchQuery = '';
let currentAudio = null;
let currentButton = null;

// Initialize the app
function init() {
    renderAnimals();
    setupEventListeners();
    updateStats();
    createAudioFiles();
}

// Create audio files directory structure
function createAudioFiles() {
    console.log('To use real animal sounds, place MP3 files in the "sounds" folder.');
    console.log('File naming: sounds/cow.mp3, sounds/dog.mp3, etc.');
    console.log('You can download free animal sounds from: freesound.org, zapsplat.com, or soundbible.com');
}

// Render animal cards
function renderAnimals() {
    const grid = document.getElementById('animalGrid');
    const filteredAnimals = animals.filter(animal => {
        const matchesCategory = currentCategory === 'all' || animal.category === currentCategory;
        const matchesSearch = animal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            animal.sound.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    grid.innerHTML = filteredAnimals.map((animal, index) => `
        <div class="animal-card" data-index="${animals.indexOf(animal)}" style="animation-delay: ${index * 0.05}s">
            <button class="favorite-btn ${favorites.has(animal.name) ? 'active' : ''}" 
                    onclick="toggleFavorite(event, '${animal.name}')">
                ${favorites.has(animal.name) ? '🖤' : '🤍'}
            </button>
            <div class="animal-icon">${animal.icon}</div>
            <div class="animal-name">${animal.name}</div>
            <div class="animal-sound">"${animal.sound}"</div>
            <button class="play-btn" onclick="playSound(event, '${animal.name}')">
                <span class="play-icon">▶</span>
                Play Sound
            </button>
        </div>
    `).join('');
}

// Setup event listeners
function setupEventListeners() {
    // Search
    document.getElementById('searchInput').addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderAnimals();
    });

    // Category tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.dataset.category;
            renderAnimals();
        });
    });

    // Animal card click
    document.getElementById('animalGrid').addEventListener('click', (e) => {
        const card = e.target.closest('.animal-card');
        if (card && !e.target.closest('.play-btn') && !e.target.closest('.favorite-btn')) {
            const index = parseInt(card.dataset.index);
            showModal(animals[index]);
        }
    });

    // Modal close
    document.querySelector('.close-btn').addEventListener('click', closeModal);
    document.getElementById('modal').addEventListener('click', (e) => {
        if (e.target.id === 'modal') closeModal();
    });
}

// Play sound with real MP3 audio
function playSound(event, animalName) {
    event.stopPropagation();
    
    const btn = event.target.closest('.play-btn');
    const audioFileName = animalName.toLowerCase().replace(/\s+/g, '-');
    
    // If same audio is playing, pause it
    if (currentAudio && !currentAudio.paused && currentButton === btn) {
        currentAudio.pause();
        btn.classList.remove('playing');
        btn.querySelector('.play-icon').textContent = '▶';
        return;
    }
    
    // Stop any currently playing audio
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        if (currentButton) {
            currentButton.classList.remove('playing');
            currentButton.querySelector('.play-icon').textContent = '▶';
        }
    }
    
    // Create new audio instance
    currentAudio = new Audio(`sounds/${audioFileName}.mp3`);
    currentAudio.loop = true;
    currentButton = btn;
    
    // Update button state
    btn.classList.add('playing');
    btn.querySelector('.play-icon').textContent = '⏸';
    
    // Play audio
    currentAudio.play().then(() => {
        playCount++;
        updateStats();
    }).catch(error => {
        console.error('Audio playback failed:', error);
        // Fallback to Web Audio API generated tone
        playTone(animalName);
        btn.classList.remove('playing');
        btn.querySelector('.play-icon').textContent = '▶';
    });
    
    // Reset button when audio ends (if not looping)
    currentAudio.addEventListener('ended', () => {
        btn.classList.remove('playing');
        btn.querySelector('.play-icon').textContent = '▶';
    });
}

// Fallback: Generate a simple tone if MP3 not found
function playTone(animalName) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Different frequencies for different animals
    const hash = animalName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    oscillator.frequency.value = 200 + (hash % 400);
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

// Toggle favorite
function toggleFavorite(event, name) {
    event.stopPropagation();
    if (favorites.has(name)) {
        favorites.delete(name);
    } else {
        favorites.add(name);
    }
    renderAnimals();
    updateStats();
}

// Show modal
function showModal(animal) {
    document.getElementById('modalIcon').textContent = animal.icon;
    document.getElementById('modalName').textContent = animal.name;
    document.getElementById('modalSound').textContent = `"${animal.sound}"`;
    document.getElementById('modalInfo').textContent = animal.info;
    
    const modal = document.getElementById('modal');
    modal.classList.add('active');
    
    // Setup modal play button
    const playBtn = document.getElementById('modalPlayBtn');
    playBtn.onclick = (e) => playSound(e, animal.name);
}

// Close modal
function closeModal() {
    document.getElementById('modal').classList.remove('active');
    // Stop audio when closing modal
    if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        if (currentButton) {
            currentButton.classList.remove('playing');
            currentButton.querySelector('.play-icon').textContent = '▶';
        }
    }
}

// Update statistics
function updateStats() {
    document.getElementById('totalAnimals').textContent = animals.length;
    document.getElementById('playCount').textContent = playCount;
    document.getElementById('favoriteCount').textContent = favorites.size;
}

// Initialize on load
document.addEventListener('DOMContentLoaded', init);
