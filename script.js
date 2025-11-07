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
let currentButton = null;

// Initialize the app
function init() {
    renderAnimals();
    setupEventListeners();
    updateStats();
    createAudioFiles();
}

// Create audio files with embedded base64 data
function createAudioFiles() {
    // Audio files will be embedded directly in the code
    console.log('Animal sounds loaded and ready to play!');
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

// Animal sound patterns for realistic audio generation
const soundPatterns = {
    // Farm Animals
    'Cow': { type: 'low', freq: [80, 120], duration: 1.5, pattern: 'moo' },
    'Pig': { type: 'grunt', freq: [150, 250], duration: 0.8, pattern: 'oink' },
    'Sheep': { type: 'bleat', freq: [200, 400], duration: 1.0, pattern: 'baa' },
    'Horse': { type: 'neigh', freq: [300, 800], duration: 2.0, pattern: 'neigh' },
    'Donkey': { type: 'bray', freq: [200, 600], duration: 2.5, pattern: 'heehaw' },
    'Goat': { type: 'bleat', freq: [250, 500], duration: 0.8, pattern: 'bleat' },
    'Chicken': { type: 'cluck', freq: [400, 800], duration: 0.5, pattern: 'cluck' },
    'Rooster': { type: 'crow', freq: [300, 1200], duration: 3.0, pattern: 'crow' },
    'Duck': { type: 'quack', freq: [200, 600], duration: 0.6, pattern: 'quack' },
    'Turkey': { type: 'gobble', freq: [150, 400], duration: 1.5, pattern: 'gobble' },
    
    // Wild Animals
    'Lion': { type: 'roar', freq: [60, 300], duration: 3.0, pattern: 'roar' },
    'Tiger': { type: 'roar', freq: [70, 350], duration: 2.5, pattern: 'roar' },
    'Bear': { type: 'growl', freq: [80, 200], duration: 2.0, pattern: 'growl' },
    'Wolf': { type: 'howl', freq: [150, 800], duration: 4.0, pattern: 'howl' },
    'Fox': { type: 'yip', freq: [400, 1000], duration: 0.8, pattern: 'yip' },
    'Elephant': { type: 'trumpet', freq: [100, 2000], duration: 3.0, pattern: 'trumpet' },
    'Monkey': { type: 'chatter', freq: [500, 2000], duration: 1.5, pattern: 'chatter' },
    'Gorilla': { type: 'grunt', freq: [100, 300], duration: 1.2, pattern: 'grunt' },
    'Zebra': { type: 'bray', freq: [250, 700], duration: 2.0, pattern: 'bray' },
    'Giraffe': { type: 'hum', freq: [80, 200], duration: 2.5, pattern: 'hum' },
    'Rhino': { type: 'snort', freq: [120, 400], duration: 1.0, pattern: 'snort' },
    'Hippo': { type: 'grunt', freq: [90, 250], duration: 1.8, pattern: 'grunt' },
    'Deer': { type: 'bleat', freq: [300, 600], duration: 1.0, pattern: 'bleat' },
    'Camel': { type: 'grunt', freq: [150, 350], duration: 1.5, pattern: 'grunt' },
    'Kangaroo': { type: 'chortle', freq: [200, 500], duration: 1.2, pattern: 'chortle' },
    'Koala': { type: 'grunt', freq: [180, 400], duration: 1.0, pattern: 'grunt' },
    'Panda': { type: 'bleat', freq: [200, 450], duration: 1.3, pattern: 'bleat' },
    'Sloth': { type: 'whistle', freq: [800, 1200], duration: 2.0, pattern: 'whistle' },
    'Raccoon': { type: 'chitter', freq: [400, 800], duration: 1.0, pattern: 'chitter' },
    'Skunk': { type: 'hiss', freq: [2000, 4000], duration: 1.5, pattern: 'hiss' },
    'Cheetah': { type: 'chirp', freq: [800, 1500], duration: 0.8, pattern: 'chirp' },
    'Leopard': { type: 'growl', freq: [90, 300], duration: 2.0, pattern: 'growl' },
    'Jaguar': { type: 'roar', freq: [80, 400], duration: 2.5, pattern: 'roar' },
    'Hyena': { type: 'laugh', freq: [300, 1000], duration: 2.0, pattern: 'laugh' },
    'Bat': { type: 'screech', freq: [3000, 8000], duration: 0.5, pattern: 'screech' },
    'Squirrel': { type: 'chatter', freq: [800, 2000], duration: 1.0, pattern: 'chatter' },
    'Chipmunk': { type: 'chip', freq: [1000, 2500], duration: 0.6, pattern: 'chip' },
    'Beaver': { type: 'grunt', freq: [200, 400], duration: 1.0, pattern: 'grunt' },
    'Moose': { type: 'bellow', freq: [100, 500], duration: 3.0, pattern: 'bellow' },
    'Bison': { type: 'grunt', freq: [120, 300], duration: 1.5, pattern: 'grunt' },
    'Llama': { type: 'hum', freq: [150, 400], duration: 1.8, pattern: 'hum' },
    'Armadillo': { type: 'grunt', freq: [200, 350], duration: 0.8, pattern: 'grunt' },
    'Porcupine': { type: 'grunt', freq: [180, 400], duration: 1.0, pattern: 'grunt' },
    'Badger': { type: 'growl', freq: [150, 400], duration: 1.5, pattern: 'growl' },
    'Weasel': { type: 'squeak', freq: [800, 1500], duration: 0.5, pattern: 'squeak' },
    'Meerkat': { type: 'bark', freq: [400, 1000], duration: 0.6, pattern: 'bark' },
    
    // Birds
    'Eagle': { type: 'screech', freq: [1000, 3000], duration: 2.0, pattern: 'screech' },
    'Owl': { type: 'hoot', freq: [200, 600], duration: 1.5, pattern: 'hoot' },
    'Parrot': { type: 'squawk', freq: [500, 2000], duration: 1.0, pattern: 'squawk' },
    'Peacock': { type: 'scream', freq: [800, 2500], duration: 2.5, pattern: 'scream' },
    'Flamingo': { type: 'honk', freq: [300, 800], duration: 1.2, pattern: 'honk' },
    'Penguin': { type: 'bray', freq: [200, 600], duration: 1.5, pattern: 'bray' },
    'Swan': { type: 'trumpet', freq: [400, 1200], duration: 2.0, pattern: 'trumpet' },
    'Dove': { type: 'coo', freq: [300, 800], duration: 1.8, pattern: 'coo' },
    'Crow': { type: 'caw', freq: [400, 1000], duration: 1.0, pattern: 'caw' },
    'Woodpecker': { type: 'tap', freq: [1000, 3000], duration: 1.5, pattern: 'tap' },
    'Hummingbird': { type: 'chirp', freq: [2000, 5000], duration: 0.3, pattern: 'chirp' },
    'Seagull': { type: 'squawk', freq: [600, 1500], duration: 1.2, pattern: 'squawk' },
    'Canary': { type: 'sing', freq: [1000, 3000], duration: 2.0, pattern: 'sing' },
    'Sparrow': { type: 'chirp', freq: [800, 2000], duration: 0.8, pattern: 'chirp' },
    'Robin': { type: 'chirp', freq: [1200, 2500], duration: 1.0, pattern: 'chirp' },
    'Emu': { type: 'boom', freq: [50, 200], duration: 2.0, pattern: 'boom' },
    'Ostrich': { type: 'boom', freq: [60, 250], duration: 2.5, pattern: 'boom' },
    
    // Aquatic Animals
    'Dolphin': { type: 'click', freq: [2000, 8000], duration: 1.0, pattern: 'click' },
    'Whale': { type: 'song', freq: [20, 2000], duration: 5.0, pattern: 'song' },
    'Shark': { type: 'silent', freq: [100, 200], duration: 0.1, pattern: 'silent' },
    'Octopus': { type: 'silent', freq: [100, 200], duration: 0.1, pattern: 'silent' },
    'Fish': { type: 'bubble', freq: [200, 800], duration: 0.8, pattern: 'bubble' },
    'Seal': { type: 'bark', freq: [300, 1000], duration: 1.2, pattern: 'bark' },
    'Otter': { type: 'chirp', freq: [800, 2000], duration: 1.0, pattern: 'chirp' },
    'Crab': { type: 'click', freq: [1000, 3000], duration: 0.5, pattern: 'click' },
    'Lobster': { type: 'click', freq: [800, 2000], duration: 0.6, pattern: 'click' },
    'Shrimp': { type: 'silent', freq: [100, 200], duration: 0.1, pattern: 'silent' },
    'Jellyfish': { type: 'silent', freq: [100, 200], duration: 0.1, pattern: 'silent' },
    'Turtle': { type: 'hiss', freq: [1000, 3000], duration: 1.0, pattern: 'hiss' },
    'Frog': { type: 'ribbit', freq: [200, 1000], duration: 1.2, pattern: 'ribbit' },
    'Crocodile': { type: 'hiss', freq: [500, 2000], duration: 2.0, pattern: 'hiss' },
    
    // Insects
    'Bee': { type: 'buzz', freq: [200, 400], duration: 2.0, pattern: 'buzz' },
    'Butterfly': { type: 'silent', freq: [100, 200], duration: 0.1, pattern: 'silent' },
    'Ant': { type: 'silent', freq: [100, 200], duration: 0.1, pattern: 'silent' },
    'Ladybug': { type: 'silent', freq: [100, 200], duration: 0.1, pattern: 'silent' },
    'Spider': { type: 'silent', freq: [100, 200], duration: 0.1, pattern: 'silent' },
    'Mosquito': { type: 'whine', freq: [400, 800], duration: 1.5, pattern: 'whine' },
    'Fly': { type: 'buzz', freq: [150, 300], duration: 1.0, pattern: 'buzz' },
    'Cricket': { type: 'chirp', freq: [3000, 5000], duration: 2.0, pattern: 'cricket' },
    'Grasshopper': { type: 'chirp', freq: [2000, 4000], duration: 1.5, pattern: 'cricket' },
    'Dragonfly': { type: 'silent', freq: [100, 200], duration: 0.1, pattern: 'silent' },
    'Beetle': { type: 'silent', freq: [100, 200], duration: 0.1, pattern: 'silent' },
    'Moth': { type: 'silent', freq: [100, 200], duration: 0.1, pattern: 'silent' },
    'Wasp': { type: 'buzz', freq: [250, 500], duration: 1.2, pattern: 'buzz' },
    'Firefly': { type: 'silent', freq: [100, 200], duration: 0.1, pattern: 'silent' },
    
    // Pets
    'Dog': { type: 'bark', freq: [200, 1000], duration: 0.8, pattern: 'bark' },
    'Cat': { type: 'meow', freq: [300, 2000], duration: 1.0, pattern: 'meow' },
    'Rabbit': { type: 'squeak', freq: [800, 1500], duration: 0.5, pattern: 'squeak' },
    'Hamster': { type: 'squeak', freq: [1000, 2000], duration: 0.4, pattern: 'squeak' },
    'Guinea Pig': { type: 'wheek', freq: [800, 2000], duration: 1.0, pattern: 'wheek' },
    'Mouse': { type: 'squeak', freq: [1500, 3000], duration: 0.3, pattern: 'squeak' },
    'Rat': { type: 'squeak', freq: [1200, 2500], duration: 0.4, pattern: 'squeak' },
    'Ferret': { type: 'dook', freq: [400, 1000], duration: 0.8, pattern: 'dook' },
    'Hedgehog': { type: 'snuffle', freq: [200, 800], duration: 1.0, pattern: 'snuffle' },
    'Goldfish': { type: 'silent', freq: [100, 200], duration: 0.1, pattern: 'silent' },
    
    // Default pattern for unlisted animals
    'default': { type: 'tone', freq: [300, 600], duration: 1.0, pattern: 'sound' }
};

let currentOscillators = [];
let isPlaying = false;

// Play realistic animal sound using Web Audio API
function playSound(event, animalName) {
    event.stopPropagation();
    
    const btn = event.target.closest('.play-btn');
    
    // If same sound is playing, stop it
    if (isPlaying && currentButton === btn) {
        stopCurrentSound();
        return;
    }
    
    // Stop any currently playing sound
    stopCurrentSound();
    
    // Update button state
    btn.classList.add('playing');
    btn.querySelector('.play-icon').textContent = '⏸';
    currentButton = btn;
    isPlaying = true;
    
    // Generate and play the animal sound
    generateAnimalSound(animalName);
    
    playCount++;
    updateStats();
}

// Stop currently playing sound
function stopCurrentSound() {
    currentOscillators.forEach(osc => {
        try {
            osc.stop();
        } catch (e) {
            // Oscillator already stopped
        }
    });
    currentOscillators = [];
    
    if (currentButton) {
        currentButton.classList.remove('playing');
        currentButton.querySelector('.play-icon').textContent = '▶';
    }
    
    isPlaying = false;
}

// Generate realistic animal sounds using Web Audio API
function generateAnimalSound(animalName) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const pattern = soundPatterns[animalName] || soundPatterns['default'];
    
    switch (pattern.pattern) {
        case 'moo':
            generateMooSound(audioContext, pattern);
            break;
        case 'bark':
            generateBarkSound(audioContext, pattern);
            break;
        case 'meow':
            generateMeowSound(audioContext, pattern);
            break;
        case 'roar':
            generateRoarSound(audioContext, pattern);
            break;
        case 'howl':
            generateHowlSound(audioContext, pattern);
            break;
        case 'neigh':
            generateNeighSound(audioContext, pattern);
            break;
        case 'crow':
            generateCrowSound(audioContext, pattern);
            break;
        case 'quack':
            generateQuackSound(audioContext, pattern);
            break;
        case 'buzz':
            generateBuzzSound(audioContext, pattern);
            break;
        case 'chirp':
            generateChirpSound(audioContext, pattern);
            break;
        case 'hiss':
            generateHissSound(audioContext, pattern);
            break;
        case 'cricket':
            generateCricketSound(audioContext, pattern);
            break;
        case 'ribbit':
            generateRibbitSound(audioContext, pattern);
            break;
        case 'hoot':
            generateHootSound(audioContext, pattern);
            break;
        case 'squeak':
            generateSqueakSound(audioContext, pattern);
            break;
        case 'click':
            generateClickSound(audioContext, pattern);
            break;
        case 'silent':
            generateSilentSound(audioContext, pattern);
            break;
        default:
            generateGenericSound(audioContext, pattern);
    }
    
    // Auto-loop the sound
    setTimeout(() => {
        if (isPlaying && currentButton && currentButton.classList.contains('playing')) {
            generateAnimalSound(animalName);
        }
    }, (pattern.duration + 0.5) * 1000);
}

// Specific sound generators
function generateMooSound(ctx, pattern) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(pattern.freq[0], ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(pattern.freq[1], ctx.currentTime + pattern.duration * 0.3);
    osc.frequency.linearRampToValueAtTime(pattern.freq[0], ctx.currentTime + pattern.duration);
    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, ctx.currentTime);
    
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.1);
    gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + pattern.duration * 0.8);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + pattern.duration);
    
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + pattern.duration);
    currentOscillators.push(osc);
}

function generateBarkSound(ctx, pattern) {
    // Create multiple short bursts for bark
    for (let i = 0; i < 2; i++) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const noise = ctx.createBufferSource();
        
        // Create noise buffer
        const buffer = ctx.createBuffer(1, ctx.sampleRate * 0.1, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let j = 0; j < data.length; j++) {
            data[j] = Math.random() * 2 - 1;
        }
        noise.buffer = buffer;
        
        const noiseGain = ctx.createGain();
        noise.connect(noiseGain);
        noiseGain.connect(ctx.destination);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        const startTime = ctx.currentTime + i * 0.3;
        
        osc.type = 'square';
        osc.frequency.setValueAtTime(pattern.freq[0], startTime);
        osc.frequency.exponentialRampToValueAtTime(pattern.freq[1], startTime + 0.05);
        osc.frequency.exponentialRampToValueAtTime(pattern.freq[0], startTime + 0.2);
        
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.4, startTime + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.2);
        
        noiseGain.gain.setValueAtTime(0, startTime);
        noiseGain.gain.linearRampToValueAtTime(0.1, startTime + 0.01);
        noiseGain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.1);
        
        osc.start(startTime);
        osc.stop(startTime + 0.2);
        noise.start(startTime);
        noise.stop(startTime + 0.1);
        
        currentOscillators.push(osc);
    }
}

function generateMeowSound(ctx, pattern) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(pattern.freq[0], ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(pattern.freq[1], ctx.currentTime + pattern.duration * 0.2);
    osc.frequency.linearRampToValueAtTime(pattern.freq[0] * 1.5, ctx.currentTime + pattern.duration * 0.6);
    osc.frequency.linearRampToValueAtTime(pattern.freq[0], ctx.currentTime + pattern.duration);
    
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1000, ctx.currentTime);
    filter.Q.setValueAtTime(5, ctx.currentTime);
    
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.25, ctx.currentTime + 0.1);
    gain.gain.linearRampToValueAtTime(0.25, ctx.currentTime + pattern.duration * 0.7);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + pattern.duration);
    
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + pattern.duration);
    currentOscillators.push(osc);
}

function generateRoarSound(ctx, pattern) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    
    // Add noise for realistic roar
    const noise = ctx.createBufferSource();
    const buffer = ctx.createBuffer(1, ctx.sampleRate * pattern.duration, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.3;
    }
    noise.buffer = buffer;
    
    const noiseGain = ctx.createGain();
    const noiseFilter = ctx.createBiquadFilter();
    
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(pattern.freq[0], ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(pattern.freq[1], ctx.currentTime + pattern.duration * 0.3);
    osc.frequency.linearRampToValueAtTime(pattern.freq[0], ctx.currentTime + pattern.duration);
    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(400, ctx.currentTime);
    
    noiseFilter.type = 'lowpass';
    noiseFilter.frequency.setValueAtTime(200, ctx.currentTime);
    
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.4, ctx.currentTime + 0.2);
    gain.gain.linearRampToValueAtTime(0.4, ctx.currentTime + pattern.duration * 0.8);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + pattern.duration);
    
    noiseGain.gain.setValueAtTime(0, ctx.currentTime);
    noiseGain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.1);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + pattern.duration);
    
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + pattern.duration);
    noise.start(ctx.currentTime);
    noise.stop(ctx.currentTime + pattern.duration);
    
    currentOscillators.push(osc);
}

function generateHowlSound(ctx, pattern) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(pattern.freq[0], ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(pattern.freq[1], ctx.currentTime + pattern.duration * 0.5);
    osc.frequency.linearRampToValueAtTime(pattern.freq[0] * 1.2, ctx.currentTime + pattern.duration);
    
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(600, ctx.currentTime);
    filter.Q.setValueAtTime(3, ctx.currentTime);
    
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.5);
    gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + pattern.duration * 0.8);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + pattern.duration);
    
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + pattern.duration);
    currentOscillators.push(osc);
}

function generateNeighSound(ctx, pattern) {
    // Create a complex neigh with multiple frequency sweeps
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    const gain2 = ctx.createGain();
    const masterGain = ctx.createGain();
    
    osc1.connect(gain1);
    osc2.connect(gain2);
    gain1.connect(masterGain);
    gain2.connect(masterGain);
    masterGain.connect(ctx.destination);
    
    osc1.type = 'sawtooth';
    osc2.type = 'triangle';
    
    osc1.frequency.setValueAtTime(pattern.freq[0], ctx.currentTime);
    osc1.frequency.linearRampToValueAtTime(pattern.freq[1], ctx.currentTime + pattern.duration * 0.3);
    osc1.frequency.linearRampToValueAtTime(pattern.freq[0] * 1.5, ctx.currentTime + pattern.duration * 0.7);
    osc1.frequency.linearRampToValueAtTime(pattern.freq[0], ctx.currentTime + pattern.duration);
    
    osc2.frequency.setValueAtTime(pattern.freq[0] * 1.5, ctx.currentTime);
    osc2.frequency.linearRampToValueAtTime(pattern.freq[1] * 1.2, ctx.currentTime + pattern.duration * 0.4);
    osc2.frequency.linearRampToValueAtTime(pattern.freq[0] * 2, ctx.currentTime + pattern.duration);
    
    gain1.gain.setValueAtTime(0.3, ctx.currentTime);
    gain2.gain.setValueAtTime(0.2, ctx.currentTime);
    
    masterGain.gain.setValueAtTime(0, ctx.currentTime);
    masterGain.gain.linearRampToValueAtTime(0.4, ctx.currentTime + 0.1);
    masterGain.gain.linearRampToValueAtTime(0.4, ctx.currentTime + pattern.duration * 0.8);
    masterGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + pattern.duration);
    
    osc1.start(ctx.currentTime);
    osc1.stop(ctx.currentTime + pattern.duration);
    osc2.start(ctx.currentTime);
    osc2.stop(ctx.currentTime + pattern.duration);
    
    currentOscillators.push(osc1, osc2);
}

function generateCrowSound(ctx, pattern) {
    // Create cock-a-doodle-doo pattern
    const frequencies = [400, 600, 500, 700, 600];
    const durations = [0.3, 0.3, 0.4, 0.5, 0.5];
    let currentTime = ctx.currentTime;
    
    frequencies.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, currentTime);
        osc.frequency.linearRampToValueAtTime(freq * 1.2, currentTime + durations[i] * 0.5);
        osc.frequency.linearRampToValueAtTime(freq, currentTime + durations[i]);
        
        gain.gain.setValueAtTime(0, currentTime);
        gain.gain.linearRampToValueAtTime(0.3, currentTime + 0.05);
        gain.gain.linearRampToValueAtTime(0.3, currentTime + durations[i] * 0.8);
        gain.gain.exponentialRampToValueAtTime(0.01, currentTime + durations[i]);
        
        osc.start(currentTime);
        osc.stop(currentTime + durations[i]);
        currentOscillators.push(osc);
        
        currentTime += durations[i] + 0.1;
    });
}

function generateQuackSound(ctx, pattern) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    
    osc.type = 'square';
    osc.frequency.setValueAtTime(pattern.freq[0], ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(pattern.freq[1], ctx.currentTime + 0.1);
    osc.frequency.linearRampToValueAtTime(pattern.freq[0], ctx.currentTime + pattern.duration);
    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1000, ctx.currentTime);
    
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.4, ctx.currentTime + 0.05);
    gain.gain.linearRampToValueAtTime(0.4, ctx.currentTime + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + pattern.duration);
    
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + pattern.duration);
    currentOscillators.push(osc);
}

function generateGenericSound(ctx, pattern) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(pattern.freq[0], ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(pattern.freq[1], ctx.currentTime + pattern.duration * 0.5);
    osc.frequency.linearRampToValueAtTime(pattern.freq[0], ctx.currentTime + pattern.duration);
    
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.1);
    gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + pattern.duration * 0.8);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + pattern.duration);
    
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + pattern.duration);
    currentOscillators.push(osc);
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
    stopCurrentSound();
}

// Update statistics
function updateStats() {
    document.getElementById('totalAnimals').textContent = animals.length;
    document.getElementById('playCount').textContent = playCount;
    document.getElementById('favoriteCount').textContent = favorites.size;
}

// Initialize on load
document.addEventListener('DOMContentLoaded', init);

// Additional sound generators
function generateBuzzSound(ctx, pattern) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(pattern.freq[0], ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(pattern.freq[1], ctx.currentTime + pattern.duration * 0.1);
    osc.frequency.setValueAtTime(pattern.freq[0], ctx.currentTime + pattern.duration * 0.2);
    
    // Add vibrato for realistic buzz
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);
    lfo.frequency.setValueAtTime(30, ctx.currentTime);
    lfoGain.gain.setValueAtTime(20, ctx.currentTime);
    
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.2, ctx.currentTime + pattern.duration * 0.9);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + pattern.duration);
    
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + pattern.duration);
    lfo.start(ctx.currentTime);
    lfo.stop(ctx.currentTime + pattern.duration);
    
    currentOscillators.push(osc, lfo);
}

function generateChirpSound(ctx, pattern) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(pattern.freq[1], ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(pattern.freq[0], ctx.currentTime + pattern.duration);
    
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + pattern.duration);
    
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + pattern.duration);
    currentOscillators.push(osc);
}

function generateHissSound(ctx, pattern) {
    const noise = ctx.createBufferSource();
    const buffer = ctx.createBuffer(1, ctx.sampleRate * pattern.duration, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < data.length; i++) {
        data[i] = Math.random() * 2 - 1;
    }
    noise.buffer = buffer;
    
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();
    
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(pattern.freq[0], ctx.currentTime);
    filter.frequency.linearRampToValueAtTime(pattern.freq[1], ctx.currentTime + pattern.duration);
    
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + pattern.duration);
    
    noise.start(ctx.currentTime);
    noise.stop(ctx.currentTime + pattern.duration);
}

function generateCricketSound(ctx, pattern) {
    // Create rapid chirping pattern
    const chirpCount = 8;
    const chirpDuration = 0.05;
    const pauseDuration = 0.1;
    
    for (let i = 0; i < chirpCount; i++) {
        const startTime = ctx.currentTime + i * (chirpDuration + pauseDuration);
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(pattern.freq[0], startTime);
        osc.frequency.linearRampToValueAtTime(pattern.freq[1], startTime + chirpDuration);
        
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.2, startTime + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.01, startTime + chirpDuration);
        
        osc.start(startTime);
        osc.stop(startTime + chirpDuration);
        currentOscillators.push(osc);
    }
}

function generateRibbitSound(ctx, pattern) {
    // Create two-part ribbit sound
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    const gain2 = ctx.createGain();
    
    osc1.connect(gain1);
    osc2.connect(gain2);
    gain1.connect(ctx.destination);
    gain2.connect(ctx.destination);
    
    // First part: "rib"
    osc1.type = 'square';
    osc1.frequency.setValueAtTime(pattern.freq[0], ctx.currentTime);
    osc1.frequency.linearRampToValueAtTime(pattern.freq[1], ctx.currentTime + 0.2);
    
    gain1.gain.setValueAtTime(0, ctx.currentTime);
    gain1.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.05);
    gain1.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
    
    // Second part: "bit"
    osc2.type = 'square';
    osc2.frequency.setValueAtTime(pattern.freq[1], ctx.currentTime + 0.4);
    osc2.frequency.linearRampToValueAtTime(pattern.freq[0], ctx.currentTime + pattern.duration);
    
    gain2.gain.setValueAtTime(0, ctx.currentTime + 0.4);
    gain2.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.45);
    gain2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + pattern.duration);
    
    osc1.start(ctx.currentTime);
    osc1.stop(ctx.currentTime + 0.3);
    osc2.start(ctx.currentTime + 0.4);
    osc2.stop(ctx.currentTime + pattern.duration);
    
    currentOscillators.push(osc1, osc2);
}

function generateHootSound(ctx, pattern) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(pattern.freq[0], ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(pattern.freq[1], ctx.currentTime + pattern.duration * 0.3);
    osc.frequency.linearRampToValueAtTime(pattern.freq[0], ctx.currentTime + pattern.duration);
    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, ctx.currentTime);
    
    // Create "hoo-hoo" pattern
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.4, ctx.currentTime + 0.1);
    gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + pattern.duration * 0.4);
    gain.gain.linearRampToValueAtTime(0.4, ctx.currentTime + pattern.duration * 0.6);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + pattern.duration);
    
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + pattern.duration);
    currentOscillators.push(osc);
}

function generateSqueakSound(ctx, pattern) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(pattern.freq[1], ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(pattern.freq[0], ctx.currentTime + pattern.duration);
    
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + pattern.duration);
    
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + pattern.duration);
    currentOscillators.push(osc);
}

function generateClickSound(ctx, pattern) {
    // Create rapid clicking pattern
    const clickCount = 5;
    const clickDuration = 0.02;
    const pauseDuration = 0.05;
    
    for (let i = 0; i < clickCount; i++) {
        const startTime = ctx.currentTime + i * (clickDuration + pauseDuration);
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.type = 'square';
        osc.frequency.setValueAtTime(pattern.freq[0] + Math.random() * (pattern.freq[1] - pattern.freq[0]), startTime);
        
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.2, startTime + 0.005);
        gain.gain.exponentialRampToValueAtTime(0.01, startTime + clickDuration);
        
        osc.start(startTime);
        osc.stop(startTime + clickDuration);
        currentOscillators.push(osc);
    }
}

function generateSilentSound(ctx, pattern) {
    // For silent animals, create a very quiet ambient tone
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(pattern.freq[0], ctx.currentTime);
    
    gain.gain.setValueAtTime(0.01, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + pattern.duration);
    
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + pattern.duration);
    currentOscillators.push(osc);
}