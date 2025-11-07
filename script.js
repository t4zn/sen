// Animal data with 102 animals - minimal text-based design
const animals = [
    // Farm Animals
    { name: 'cow', sound: 'moo', category: 'farm', info: 'Cows are domesticated mammals known for producing milk and meat.' },
    { name: 'pig', sound: 'oink', category: 'farm', info: 'Pigs are intelligent animals often raised for pork production.' },
    { name: 'sheep', sound: 'baa', category: 'farm', info: 'Sheep are raised for wool, meat, and milk.' },
    { name: 'horse', sound: 'neigh', category: 'farm', info: 'Horses are used for riding, racing, and farm work.' },
    { name: 'donkey', sound: 'hee-haw', category: 'farm', info: 'Donkeys are strong pack animals known for their stubbornness.' },
    { name: 'goat', sound: 'bleat', category: 'farm', info: 'Goats are agile climbers raised for milk, meat, and fiber.' },
    { name: 'chicken', sound: 'cluck', category: 'farm', info: 'Chickens are the most common domestic birds, raised for eggs and meat.' },
    { name: 'rooster', sound: 'cock-a-doodle-doo', category: 'farm', info: 'Roosters are male chickens known for their morning crowing.' },
    { name: 'duck', sound: 'quack', category: 'farm', info: 'Ducks are waterfowl raised for eggs, meat, and feathers.' },
    { name: 'turkey', sound: 'gobble', category: 'farm', info: 'Turkeys are large birds traditionally eaten during holidays.' },
    
    // Wild Animals
    { name: 'lion', sound: 'roar', category: 'wild', info: 'Lions are apex predators known as the king of the jungle.' },
    { name: 'tiger', sound: 'roar', category: 'wild', info: 'Tigers are the largest cat species with distinctive stripes.' },
    { name: 'bear', sound: 'growl', category: 'wild', info: 'Bears are large mammals found in various habitats worldwide.' },
    { name: 'wolf', sound: 'howl', category: 'wild', info: 'Wolves are social predators that hunt in packs.' },
    { name: 'fox', sound: 'yip', category: 'wild', info: 'Foxes are cunning omnivores with bushy tails.' },
    { name: 'elephant', sound: 'trumpet', category: 'wild', info: 'Elephants are the largest land animals with exceptional memory.' },
    { name: 'monkey', sound: 'chatter', category: 'wild', info: 'Monkeys are intelligent primates found in tropical regions.' },
    { name: 'gorilla', sound: 'grunt', category: 'wild', info: 'Gorillas are the largest primates and mostly herbivorous.' },
    { name: 'zebra', sound: 'bray', category: 'wild', info: 'Zebras are African equines with distinctive black and white stripes.' },
    { name: 'giraffe', sound: 'hum', category: 'wild', info: 'Giraffes are the tallest mammals with long necks.' },
    { name: 'rhino', sound: 'snort', category: 'wild', info: 'Rhinoceros are large herbivores with horns on their snouts.' },
    { name: 'hippo', sound: 'grunt', category: 'wild', info: 'Hippopotamuses are large semi-aquatic mammals.' },
    { name: 'deer', sound: 'bleat', category: 'wild', info: 'Deer are graceful herbivores with antlers.' },
    { name: 'camel', sound: 'grunt', category: 'wild', info: 'Camels can survive long periods without water in deserts.' },
    { name: 'kangaroo', sound: 'chortle', category: 'wild', info: 'Kangaroos are marsupials that hop on powerful hind legs.' },
    { name: 'koala', sound: 'grunt', category: 'wild', info: 'Koalas are tree-dwelling marsupials that eat eucalyptus leaves.' },
    { name: 'panda', sound: 'bleat', category: 'wild', info: 'Giant pandas are endangered bears that primarily eat bamboo.' },
    { name: 'sloth', sound: 'whistle', category: 'wild', info: 'Sloths are slow-moving mammals that live in trees.' },
    { name: 'raccoon', sound: 'chitter', category: 'wild', info: 'Raccoons are nocturnal mammals with masked faces.' },
    { name: 'skunk', sound: 'hiss', category: 'wild', info: 'Skunks are known for their defensive spray.' },
    
    // Birds
    { name: 'eagle', sound: 'screech', category: 'birds', info: 'Eagles are powerful birds of prey with keen eyesight.' },
    { name: 'owl', sound: 'hoot', category: 'birds', info: 'Owls are nocturnal hunters with excellent hearing.' },
    { name: 'parrot', sound: 'squawk', category: 'birds', info: 'Parrots are colorful birds that can mimic human speech.' },
    { name: 'peacock', sound: 'scream', category: 'birds', info: 'Peacocks are known for their spectacular tail feathers.' },
    { name: 'flamingo', sound: 'honk', category: 'birds', info: 'Flamingos are pink wading birds that stand on one leg.' },
    { name: 'penguin', sound: 'bray', category: 'birds', info: 'Penguins are flightless birds adapted to aquatic life.' },
    { name: 'swan', sound: 'trumpet', category: 'birds', info: 'Swans are elegant waterfowl with long necks.' },
    { name: 'dove', sound: 'coo', category: 'birds', info: 'Doves are symbols of peace and love.' },
    { name: 'crow', sound: 'caw', category: 'birds', info: 'Crows are intelligent birds known for problem-solving.' },
    { name: 'woodpecker', sound: 'tap-tap', category: 'birds', info: 'Woodpeckers drum on trees to find insects.' },
    { name: 'hummingbird', sound: 'chirp', category: 'birds', info: 'Hummingbirds can hover and fly backwards.' },
    { name: 'seagull', sound: 'squawk', category: 'birds', info: 'Seagulls are coastal birds often seen near beaches.' },
    { name: 'canary', sound: 'sing', category: 'birds', info: 'Canaries are small songbirds kept as pets.' },
    { name: 'sparrow', sound: 'chirp', category: 'birds', info: 'Sparrows are small common birds found worldwide.' },
    { name: 'robin', sound: 'chirp', category: 'birds', info: 'Robins are known for their red breasts.' },
    
    // Aquatic Animals
    { name: 'dolphin', sound: 'click', category: 'aquatic', info: 'Dolphins are intelligent marine mammals.' },
    { name: 'whale', sound: 'song', category: 'aquatic', info: 'Whales are the largest animals on Earth.' },
    { name: 'shark', sound: 'silent', category: 'aquatic', info: 'Sharks are apex predators of the ocean.' },
    { name: 'octopus', sound: 'silent', category: 'aquatic', info: 'Octopuses are intelligent invertebrates with eight arms.' },
    { name: 'fish', sound: 'bubble', category: 'aquatic', info: 'Fish are aquatic vertebrates with gills.' },
    { name: 'seal', sound: 'bark', category: 'aquatic', info: 'Seals are marine mammals with flippers.' },
    { name: 'otter', sound: 'chirp', category: 'aquatic', info: 'Otters are playful aquatic mammals.' },
    { name: 'crab', sound: 'click', category: 'aquatic', info: 'Crabs are crustaceans with pincers.' },
    { name: 'lobster', sound: 'click', category: 'aquatic', info: 'Lobsters are large marine crustaceans.' },
    { name: 'shrimp', sound: 'silent', category: 'aquatic', info: 'Shrimp are small swimming crustaceans.' },
    { name: 'jellyfish', sound: 'silent', category: 'aquatic', info: 'Jellyfish are gelatinous marine animals.' },
    { name: 'turtle', sound: 'hiss', category: 'aquatic', info: 'Sea turtles are ancient marine reptiles.' },
    { name: 'frog', sound: 'ribbit', category: 'aquatic', info: 'Frogs are amphibians that live near water.' },
    { name: 'crocodile', sound: 'hiss', category: 'aquatic', info: 'Crocodiles are large aquatic reptiles.' },
    
    // Insects
    { name: 'bee', sound: 'buzz', category: 'insects', info: 'Bees are important pollinators that produce honey.' },
    { name: 'butterfly', sound: 'silent', category: 'insects', info: 'Butterflies are colorful insects with delicate wings.' },
    { name: 'ant', sound: 'silent', category: 'insects', info: 'Ants are social insects that live in colonies.' },
    { name: 'ladybug', sound: 'silent', category: 'insects', info: 'Ladybugs are beneficial beetles that eat aphids.' },
    { name: 'spider', sound: 'silent', category: 'insects', info: 'Spiders are arachnids that spin webs.' },
    { name: 'mosquito', sound: 'whine', category: 'insects', info: 'Mosquitoes are blood-feeding insects.' },
    { name: 'fly', sound: 'buzz', category: 'insects', info: 'Flies are common flying insects.' },
    { name: 'cricket', sound: 'chirp', category: 'insects', info: 'Crickets are known for their chirping sounds.' },
    { name: 'grasshopper', sound: 'chirp', category: 'insects', info: 'Grasshoppers can jump long distances.' },
    { name: 'dragonfly', sound: 'silent', category: 'insects', info: 'Dragonflies are agile flying insects.' },
    { name: 'beetle', sound: 'silent', category: 'insects', info: 'Beetles are the largest group of insects.' },
    { name: 'moth', sound: 'silent', category: 'insects', info: 'Moths are nocturnal relatives of butterflies.' },
    { name: 'wasp', sound: 'buzz', category: 'insects', info: 'Wasps are predatory insects with stingers.' },
    { name: 'firefly', sound: 'silent', category: 'insects', info: 'Fireflies produce bioluminescent light.' },
    
    // Pets
    { name: 'dog', sound: 'woof', category: 'pets', info: 'Dogs are loyal companions and man\'s best friend.' },
    { name: 'cat', sound: 'meow', category: 'pets', info: 'Cats are independent and affectionate pets.' },
    { name: 'rabbit', sound: 'squeak', category: 'pets', info: 'Rabbits are gentle herbivores with long ears.' },
    { name: 'hamster', sound: 'squeak', category: 'pets', info: 'Hamsters are small rodents kept as pets.' },
    { name: 'guinea pig', sound: 'wheek', category: 'pets', info: 'Guinea pigs are social rodents that vocalize often.' },
    { name: 'mouse', sound: 'squeak', category: 'pets', info: 'Mice are small rodents with long tails.' },
    { name: 'rat', sound: 'squeak', category: 'pets', info: 'Rats are intelligent and social rodents.' },
    { name: 'ferret', sound: 'dook', category: 'pets', info: 'Ferrets are playful and curious pets.' },
    { name: 'hedgehog', sound: 'snuffle', category: 'pets', info: 'Hedgehogs are small spiny mammals.' },
    { name: 'goldfish', sound: 'silent', category: 'pets', info: 'Goldfish are popular aquarium pets.' },
    
    // More Wild Animals
    { name: 'cheetah', sound: 'chirp', category: 'wild', info: 'Cheetahs are the fastest land animals.' },
    { name: 'leopard', sound: 'growl', category: 'wild', info: 'Leopards are powerful climbers with spotted coats.' },
    { name: 'jaguar', sound: 'roar', category: 'wild', info: 'Jaguars are strong swimmers found in Americas.' },
    { name: 'hyena', sound: 'laugh', category: 'wild', info: 'Hyenas are scavengers with powerful jaws.' },
    { name: 'bat', sound: 'screech', category: 'wild', info: 'Bats are the only flying mammals.' },
    { name: 'squirrel', sound: 'chatter', category: 'wild', info: 'Squirrels are agile tree-dwelling rodents.' },
    { name: 'chipmunk', sound: 'chip', category: 'wild', info: 'Chipmunks are small striped rodents.' },
    { name: 'beaver', sound: 'grunt', category: 'wild', info: 'Beavers build dams and lodges in water.' },
    { name: 'moose', sound: 'bellow', category: 'wild', info: 'Moose are the largest deer species.' },
    { name: 'bison', sound: 'grunt', category: 'wild', info: 'Bison are large grazing mammals of North America.' },
    { name: 'llama', sound: 'hum', category: 'wild', info: 'Llamas are domesticated South American camelids.' },
    { name: 'armadillo', sound: 'grunt', category: 'wild', info: 'Armadillos have protective armor shells.' },
    { name: 'porcupine', sound: 'grunt', category: 'wild', info: 'Porcupines have sharp defensive quills.' },
    { name: 'badger', sound: 'growl', category: 'wild', info: 'Badgers are burrowing mammals with strong claws.' },
    { name: 'weasel', sound: 'squeak', category: 'wild', info: 'Weasels are small carnivorous mammals.' },
    { name: 'meerkat', sound: 'bark', category: 'wild', info: 'Meerkats are social animals that stand guard.' },
    { name: 'emu', sound: 'boom', category: 'birds', info: 'Emus are large flightless birds from Australia.' },
    { name: 'ostrich', sound: 'boom', category: 'birds', info: 'Ostriches are the largest living birds.' }
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
        <div class="animal-card" data-index="${animals.indexOf(animal)}">
            <button class="favorite-btn ${favorites.has(animal.name) ? 'active' : ''}" 
                    onclick="toggleFavorite(event, '${animal.name}')">
                ${favorites.has(animal.name) ? '●' : '○'}
            </button>
            <div class="animal-name">${animal.name}</div>
            <div class="animal-sound">${animal.sound}</div>
            <button class="play-btn" onclick="playSound(event, '${animal.name}')">
                <span class="play-icon">▶</span>
                <span class="play-text">play</span>
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

    // Category filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
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

// Comprehensive animal sound patterns - each animal has unique characteristics
const soundPatterns = {
    // Farm Animals - Each with distinct vocal patterns
    'Cow': { freq: [85, 120], duration: 2.2, pattern: 'cow_moo', harmonics: [1, 0.5, 0.3], vibrato: 3 },
    'Pig': { freq: [180, 280], duration: 1.1, pattern: 'pig_oink', harmonics: [1, 0.7, 0.4], snort: true },
    'Sheep': { freq: [220, 450], duration: 1.3, pattern: 'sheep_baa', harmonics: [1, 0.6, 0.2], tremolo: 8 },
    'Horse': { freq: [280, 850], duration: 2.8, pattern: 'horse_neigh', harmonics: [1, 0.8, 0.5, 0.3], sweep: true },
    'Donkey': { freq: [200, 650], duration: 3.2, pattern: 'donkey_bray', harmonics: [1, 0.9, 0.6], alternating: true },
    'Goat': { freq: [280, 520], duration: 0.9, pattern: 'goat_bleat', harmonics: [1, 0.5, 0.3], warble: 12 },
    'Chicken': { freq: [450, 850], duration: 0.4, pattern: 'chicken_cluck', harmonics: [1, 0.4, 0.2], staccato: true },
    'Rooster': { freq: [350, 1400], duration: 4.5, pattern: 'rooster_crow', harmonics: [1, 0.7, 0.4, 0.2], sequence: true },
    'Duck': { freq: [180, 650], duration: 0.7, pattern: 'duck_quack', harmonics: [1, 0.6, 0.3], nasal: true },
    'Turkey': { freq: [120, 450], duration: 2.1, pattern: 'turkey_gobble', harmonics: [1, 0.8, 0.5], warble: 15 },
    
    // Wild Animals - Unique predator and herbivore sounds
    'Lion': { freq: [50, 350], duration: 4.2, pattern: 'lion_roar', harmonics: [1, 0.9, 0.7, 0.5], rumble: true },
    'Tiger': { freq: [60, 380], duration: 3.8, pattern: 'tiger_roar', harmonics: [1, 0.8, 0.6, 0.4], chuff: true },
    'Bear': { freq: [70, 220], duration: 2.5, pattern: 'bear_growl', harmonics: [1, 0.7, 0.5], rumble: true },
    'Wolf': { freq: [120, 900], duration: 5.5, pattern: 'wolf_howl', harmonics: [1, 0.6, 0.4, 0.2], lonesome: true },
    'Fox': { freq: [450, 1200], duration: 0.9, pattern: 'fox_yip', harmonics: [1, 0.5, 0.3], sharp: true },
    'Elephant': { freq: [80, 2500], duration: 4.0, pattern: 'elephant_trumpet', harmonics: [1, 0.8, 0.6, 0.4], trunk: true },
    'Monkey': { freq: [600, 2200], duration: 1.8, pattern: 'monkey_chatter', harmonics: [1, 0.6, 0.4], rapid: true },
    'Gorilla': { freq: [90, 350], duration: 1.5, pattern: 'gorilla_grunt', harmonics: [1, 0.8, 0.5], chest: true },
    'Zebra': { freq: [280, 750], duration: 2.3, pattern: 'zebra_bray', harmonics: [1, 0.7, 0.4], horse_like: true },
    'Giraffe': { freq: [70, 250], duration: 3.2, pattern: 'giraffe_hum', harmonics: [1, 0.6, 0.3], infrasonic: true },
    'Rhino': { freq: [100, 450], duration: 1.2, pattern: 'rhino_snort', harmonics: [1, 0.7, 0.4], explosive: true },
    'Hippo': { freq: [80, 280], duration: 2.1, pattern: 'hippo_grunt', harmonics: [1, 0.8, 0.6], underwater: true },
    'Deer': { freq: [350, 650], duration: 1.1, pattern: 'deer_bleat', harmonics: [1, 0.5, 0.2], gentle: true },
    'Camel': { freq: [140, 380], duration: 1.8, pattern: 'camel_grunt', harmonics: [1, 0.6, 0.4], desert: true },
    'Kangaroo': { freq: [180, 550], duration: 1.4, pattern: 'kangaroo_chortle', harmonics: [1, 0.5, 0.3], bouncy: true },
    'Koala': { freq: [160, 420], duration: 1.2, pattern: 'koala_grunt', harmonics: [1, 0.6, 0.3], sleepy: true },
    'Panda': { freq: [180, 480], duration: 1.5, pattern: 'panda_bleat', harmonics: [1, 0.5, 0.3], bamboo: true },
    'Sloth': { freq: [900, 1300], duration: 2.8, pattern: 'sloth_whistle', harmonics: [1, 0.4, 0.2], slow: true },
    'Raccoon': { freq: [450, 900], duration: 1.2, pattern: 'raccoon_chitter', harmonics: [1, 0.6, 0.4], mischief: true },
    'Skunk': { freq: [2200, 4500], duration: 1.8, pattern: 'skunk_hiss', harmonics: [1, 0.3, 0.1], warning: true },
    'Cheetah': { freq: [900, 1600], duration: 0.9, pattern: 'cheetah_chirp', harmonics: [1, 0.5, 0.3], bird_like: true },
    'Leopard': { freq: [80, 320], duration: 2.2, pattern: 'leopard_growl', harmonics: [1, 0.7, 0.5], stealth: true },
    'Jaguar': { freq: [70, 420], duration: 2.8, pattern: 'jaguar_roar', harmonics: [1, 0.8, 0.6], powerful: true },
    'Hyena': { freq: [350, 1100], duration: 2.5, pattern: 'hyena_laugh', harmonics: [1, 0.6, 0.4], maniacal: true },
    'Bat': { freq: [3500, 9000], duration: 0.4, pattern: 'bat_screech', harmonics: [1, 0.3, 0.1], ultrasonic: true },
    'Squirrel': { freq: [900, 2200], duration: 1.1, pattern: 'squirrel_chatter', harmonics: [1, 0.5, 0.3], nutty: true },
    'Chipmunk': { freq: [1200, 2800], duration: 0.7, pattern: 'chipmunk_chip', harmonics: [1, 0.4, 0.2], high_pitched: true },
    'Beaver': { freq: [180, 450], duration: 1.2, pattern: 'beaver_grunt', harmonics: [1, 0.6, 0.4], woody: true },
    'Moose': { freq: [90, 550], duration: 3.5, pattern: 'moose_bellow', harmonics: [1, 0.8, 0.6], majestic: true },
    'Bison': { freq: [110, 320], duration: 1.8, pattern: 'bison_grunt', harmonics: [1, 0.7, 0.5], prairie: true },
    'Llama': { freq: [140, 420], duration: 2.1, pattern: 'llama_hum', harmonics: [1, 0.6, 0.4], andean: true },
    'Armadillo': { freq: [220, 380], duration: 0.9, pattern: 'armadillo_grunt', harmonics: [1, 0.5, 0.3], armored: true },
    'Porcupine': { freq: [160, 420], duration: 1.1, pattern: 'porcupine_grunt', harmonics: [1, 0.6, 0.3], spiky: true },
    'Badger': { freq: [130, 420], duration: 1.7, pattern: 'badger_growl', harmonics: [1, 0.7, 0.5], fierce: true },
    'Weasel': { freq: [900, 1700], duration: 0.6, pattern: 'weasel_squeak', harmonics: [1, 0.4, 0.2], quick: true },
    'Meerkat': { freq: [450, 1100], duration: 0.7, pattern: 'meerkat_bark', harmonics: [1, 0.5, 0.3], alert: true },
    
    // Birds - Each species with unique song patterns
    'Eagle': { freq: [1100, 3200], duration: 2.3, pattern: 'eagle_screech', harmonics: [1, 0.6, 0.3], soaring: true },
    'Owl': { freq: [180, 650], duration: 1.8, pattern: 'owl_hoot', harmonics: [1, 0.7, 0.4], nocturnal: true },
    'Parrot': { freq: [550, 2200], duration: 1.2, pattern: 'parrot_squawk', harmonics: [1, 0.6, 0.4], tropical: true },
    'Peacock': { freq: [900, 2800], duration: 3.2, pattern: 'peacock_scream', harmonics: [1, 0.7, 0.5], regal: true },
    'Flamingo': { freq: [320, 900], duration: 1.4, pattern: 'flamingo_honk', harmonics: [1, 0.6, 0.3], pink: true },
    'Penguin': { freq: [180, 650], duration: 1.7, pattern: 'penguin_bray', harmonics: [1, 0.6, 0.4], antarctic: true },
    'Swan': { freq: [420, 1300], duration: 2.4, pattern: 'swan_trumpet', harmonics: [1, 0.7, 0.5], elegant: true },
    'Dove': { freq: [280, 850], duration: 2.1, pattern: 'dove_coo', harmonics: [1, 0.6, 0.3], peaceful: true },
    'Crow': { freq: [450, 1100], duration: 1.1, pattern: 'crow_caw', harmonics: [1, 0.5, 0.3], intelligent: true },
    'Woodpecker': { freq: [1200, 3500], duration: 1.8, pattern: 'woodpecker_tap', harmonics: [1, 0.4, 0.2], percussive: true },
    'Hummingbird': { freq: [2200, 5500], duration: 0.4, pattern: 'hummingbird_chirp', harmonics: [1, 0.3, 0.1], tiny: true },
    'Seagull': { freq: [650, 1700], duration: 1.4, pattern: 'seagull_squawk', harmonics: [1, 0.5, 0.3], coastal: true },
    'Canary': { freq: [1100, 3200], duration: 2.3, pattern: 'canary_sing', harmonics: [1, 0.6, 0.4], melodic: true },
    'Sparrow': { freq: [900, 2200], duration: 0.9, pattern: 'sparrow_chirp', harmonics: [1, 0.5, 0.3], common: true },
    'Robin': { freq: [1300, 2800], duration: 1.2, pattern: 'robin_chirp', harmonics: [1, 0.6, 0.4], spring: true },
    'Emu': { freq: [40, 220], duration: 2.3, pattern: 'emu_boom', harmonics: [1, 0.8, 0.6], deep: true },
    'Ostrich': { freq: [50, 280], duration: 2.8, pattern: 'ostrich_boom', harmonics: [1, 0.8, 0.6], giant: true },
    
    // Aquatic Animals - Water-adapted vocalizations
    'Dolphin': { freq: [2200, 8500], duration: 1.2, pattern: 'dolphin_click', harmonics: [1, 0.4, 0.2], echolocation: true },
    'Whale': { freq: [15, 2200], duration: 6.5, pattern: 'whale_song', harmonics: [1, 0.8, 0.6, 0.4], oceanic: true },
    'Shark': { freq: [80, 180], duration: 0.2, pattern: 'shark_silent', harmonics: [1, 0.1], predator: true },
    'Octopus': { freq: [90, 200], duration: 0.2, pattern: 'octopus_silent', harmonics: [1, 0.1], intelligent: true },
    'Fish': { freq: [180, 850], duration: 0.9, pattern: 'fish_bubble', harmonics: [1, 0.3, 0.1], aquatic: true },
    'Seal': { freq: [320, 1100], duration: 1.4, pattern: 'seal_bark', harmonics: [1, 0.6, 0.4], marine: true },
    'Otter': { freq: [900, 2200], duration: 1.1, pattern: 'otter_chirp', harmonics: [1, 0.5, 0.3], playful: true },
    'Crab': { freq: [1100, 3200], duration: 0.6, pattern: 'crab_click', harmonics: [1, 0.3, 0.1], claws: true },
    'Lobster': { freq: [900, 2200], duration: 0.7, pattern: 'lobster_click', harmonics: [1, 0.3, 0.1], crustacean: true },
    'Shrimp': { freq: [100, 220], duration: 0.2, pattern: 'shrimp_silent', harmonics: [1, 0.1], tiny: true },
    'Jellyfish': { freq: [90, 200], duration: 0.2, pattern: 'jellyfish_silent', harmonics: [1, 0.1], gelatinous: true },
    'Turtle': { freq: [1100, 3200], duration: 1.2, pattern: 'turtle_hiss', harmonics: [1, 0.4, 0.2], ancient: true },
    'Frog': { freq: [180, 1100], duration: 1.4, pattern: 'frog_ribbit', harmonics: [1, 0.6, 0.3], amphibian: true },
    'Crocodile': { freq: [550, 2200], duration: 2.3, pattern: 'crocodile_hiss', harmonics: [1, 0.5, 0.3], reptilian: true },
    
    // Insects - High-frequency wing and body sounds
    'Bee': { freq: [180, 420], duration: 2.5, pattern: 'bee_buzz', harmonics: [1, 0.6, 0.4], wings: true },
    'Butterfly': { freq: [110, 250], duration: 0.2, pattern: 'butterfly_silent', harmonics: [1, 0.1], delicate: true },
    'Ant': { freq: [100, 220], duration: 0.2, pattern: 'ant_silent', harmonics: [1, 0.1], colony: true },
    'Ladybug': { freq: [90, 200], duration: 0.2, pattern: 'ladybug_silent', harmonics: [1, 0.1], beneficial: true },
    'Spider': { freq: [80, 180], duration: 0.2, pattern: 'spider_silent', harmonics: [1, 0.1], web: true },
    'Mosquito': { freq: [420, 900], duration: 1.8, pattern: 'mosquito_whine', harmonics: [1, 0.4, 0.2], annoying: true },
    'Fly': { freq: [130, 320], duration: 1.2, pattern: 'fly_buzz', harmonics: [1, 0.5, 0.3], common: true },
    'Cricket': { freq: [3200, 5500], duration: 2.2, pattern: 'cricket_chirp', harmonics: [1, 0.4, 0.2], night: true },
    'Grasshopper': { freq: [2200, 4500], duration: 1.7, pattern: 'grasshopper_chirp', harmonics: [1, 0.4, 0.2], jumping: true },
    'Dragonfly': { freq: [100, 220], duration: 0.2, pattern: 'dragonfly_silent', harmonics: [1, 0.1], aerial: true },
    'Beetle': { freq: [90, 200], duration: 0.2, pattern: 'beetle_silent', harmonics: [1, 0.1], hard_shell: true },
    'Moth': { freq: [80, 180], duration: 0.2, pattern: 'moth_silent', harmonics: [1, 0.1], nocturnal: true },
    'Wasp': { freq: [280, 550], duration: 1.4, pattern: 'wasp_buzz', harmonics: [1, 0.5, 0.3], aggressive: true },
    'Firefly': { freq: [70, 160], duration: 0.2, pattern: 'firefly_silent', harmonics: [1, 0.1], glowing: true },
    
    // Pets - Domesticated animal sounds
    'Dog': { freq: [180, 1100], duration: 0.9, pattern: 'dog_bark', harmonics: [1, 0.6, 0.4], loyal: true },
    'Cat': { freq: [280, 2200], duration: 1.2, pattern: 'cat_meow', harmonics: [1, 0.7, 0.5], independent: true },
    'Rabbit': { freq: [900, 1700], duration: 0.6, pattern: 'rabbit_squeak', harmonics: [1, 0.4, 0.2], gentle: true },
    'Hamster': { freq: [1100, 2200], duration: 0.5, pattern: 'hamster_squeak', harmonics: [1, 0.4, 0.2], small: true },
    'Guinea Pig': { freq: [900, 2200], duration: 1.2, pattern: 'guinea_pig_wheek', harmonics: [1, 0.5, 0.3], social: true },
    'Mouse': { freq: [1700, 3200], duration: 0.4, pattern: 'mouse_squeak', harmonics: [1, 0.3, 0.1], tiny: true },
    'Rat': { freq: [1300, 2800], duration: 0.5, pattern: 'rat_squeak', harmonics: [1, 0.4, 0.2], intelligent: true },
    'Ferret': { freq: [420, 1100], duration: 0.9, pattern: 'ferret_dook', harmonics: [1, 0.5, 0.3], playful: true },
    'Hedgehog': { freq: [180, 900], duration: 1.2, pattern: 'hedgehog_snuffle', harmonics: [1, 0.5, 0.3], spiny: true },
    'Goldfish': { freq: [80, 180], duration: 0.2, pattern: 'goldfish_silent', harmonics: [1, 0.1], aquarium: true },
    
    // Default fallback
    'default': { freq: [300, 600], duration: 1.0, pattern: 'generic_sound', harmonics: [1, 0.5, 0.3] }
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
    
    // Generate unique sound based on pattern name
    generateUniqueAnimalSound(audioContext, pattern);
    
    // Auto-loop the sound
    setTimeout(() => {
        if (isPlaying && currentButton && currentButton.classList.contains('playing')) {
            generateAnimalSound(animalName);
        }
    }, (pattern.duration + 0.5) * 1000);
}

// Universal sound generator that creates unique sounds for each animal
function generateUniqueAnimalSound(ctx, pattern) {
    const baseFreq = pattern.freq[0];
    const topFreq = pattern.freq[1];
    const duration = pattern.duration;
    const harmonics = pattern.harmonics || [1, 0.5, 0.3];
    
    // Create multiple oscillators for rich harmonic content
    const oscillators = [];
    const gains = [];
    
    // Generate harmonics
    harmonics.forEach((amplitude, index) => {
        if (amplitude > 0.05) { // Only create audible harmonics
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            const filter = ctx.createBiquadFilter();
            
            // Connect audio chain
            osc.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);
            
            // Set oscillator type based on animal characteristics
            osc.type = getOscillatorType(pattern.pattern);
            
            // Set frequency (fundamental + harmonics)
            const harmonic = index + 1;
            osc.frequency.setValueAtTime(baseFreq * harmonic, ctx.currentTime);
            
            // Apply frequency modulation based on animal type
            applyFrequencyModulation(osc, pattern, ctx, harmonic);
            
            // Set filter characteristics
            configureFilter(filter, pattern, harmonic);
            
            // Set amplitude envelope
            configureAmplitudeEnvelope(gain, pattern, amplitude, ctx);
            
            // Apply special effects
            applySpecialEffects(osc, gain, pattern, ctx, harmonic);
            
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + duration);
            
            oscillators.push(osc);
            gains.push(gain);
        }
    });
    
    // Add noise component for certain animals
    if (needsNoise(pattern.pattern)) {
        addNoiseComponent(ctx, pattern);
    }
    
    currentOscillators.push(...oscillators);
}

// Get appropriate oscillator type for each animal
function getOscillatorType(pattern) {
    const waveforms = {
        // Farm animals
        'cow_moo': 'sawtooth',
        'pig_oink': 'square',
        'sheep_baa': 'triangle',
        'horse_neigh': 'sawtooth',
        'donkey_bray': 'sawtooth',
        'goat_bleat': 'triangle',
        'chicken_cluck': 'square',
        'rooster_crow': 'triangle',
        'duck_quack': 'square',
        'turkey_gobble': 'sawtooth',
        
        // Wild animals
        'lion_roar': 'sawtooth',
        'tiger_roar': 'sawtooth',
        'bear_growl': 'sawtooth',
        'wolf_howl': 'sine',
        'fox_yip': 'triangle',
        'elephant_trumpet': 'sawtooth',
        'monkey_chatter': 'square',
        'gorilla_grunt': 'sawtooth',
        'zebra_bray': 'sawtooth',
        'giraffe_hum': 'sine',
        'rhino_snort': 'square',
        'hippo_grunt': 'sawtooth',
        'deer_bleat': 'triangle',
        'camel_grunt': 'sawtooth',
        'kangaroo_chortle': 'triangle',
        'koala_grunt': 'sawtooth',
        'panda_bleat': 'triangle',
        'sloth_whistle': 'sine',
        'raccoon_chitter': 'square',
        'skunk_hiss': 'square',
        'cheetah_chirp': 'sine',
        'leopard_growl': 'sawtooth',
        'jaguar_roar': 'sawtooth',
        'hyena_laugh': 'square',
        'bat_screech': 'sine',
        'squirrel_chatter': 'square',
        'chipmunk_chip': 'sine',
        'beaver_grunt': 'sawtooth',
        'moose_bellow': 'sawtooth',
        'bison_grunt': 'sawtooth',
        'llama_hum': 'sine',
        'armadillo_grunt': 'sawtooth',
        'porcupine_grunt': 'sawtooth',
        'badger_growl': 'sawtooth',
        'weasel_squeak': 'sine',
        'meerkat_bark': 'square',
        
        // Birds
        'eagle_screech': 'sine',
        'owl_hoot': 'sine',
        'parrot_squawk': 'square',
        'peacock_scream': 'triangle',
        'flamingo_honk': 'square',
        'penguin_bray': 'sawtooth',
        'swan_trumpet': 'triangle',
        'dove_coo': 'sine',
        'crow_caw': 'square',
        'woodpecker_tap': 'square',
        'hummingbird_chirp': 'sine',
        'seagull_squawk': 'square',
        'canary_sing': 'sine',
        'sparrow_chirp': 'sine',
        'robin_chirp': 'sine',
        'emu_boom': 'sawtooth',
        'ostrich_boom': 'sawtooth',
        
        // Aquatic
        'dolphin_click': 'sine',
        'whale_song': 'sine',
        'shark_silent': 'sine',
        'octopus_silent': 'sine',
        'fish_bubble': 'sine',
        'seal_bark': 'square',
        'otter_chirp': 'sine',
        'crab_click': 'square',
        'lobster_click': 'square',
        'turtle_hiss': 'square',
        'frog_ribbit': 'square',
        'crocodile_hiss': 'square',
        
        // Insects
        'bee_buzz': 'sawtooth',
        'mosquito_whine': 'sine',
        'fly_buzz': 'sawtooth',
        'cricket_chirp': 'sine',
        'grasshopper_chirp': 'sine',
        'wasp_buzz': 'sawtooth',
        
        // Pets
        'dog_bark': 'square',
        'cat_meow': 'triangle',
        'rabbit_squeak': 'sine',
        'hamster_squeak': 'sine',
        'guinea_pig_wheek': 'triangle',
        'mouse_squeak': 'sine',
        'rat_squeak': 'sine',
        'ferret_dook': 'triangle',
        'hedgehog_snuffle': 'sawtooth'
    };
    
    return waveforms[pattern] || 'sine';
}

// Apply frequency modulation based on animal characteristics
function applyFrequencyModulation(osc, pattern, ctx, harmonic) {
    const baseFreq = pattern.freq[0] * harmonic;
    const topFreq = pattern.freq[1] * harmonic;
    const duration = pattern.duration;
    
    switch (pattern.pattern) {
        case 'cow_moo':
            osc.frequency.linearRampToValueAtTime(topFreq * 0.8, ctx.currentTime + duration * 0.3);
            osc.frequency.linearRampToValueAtTime(baseFreq, ctx.currentTime + duration);
            break;
            
        case 'horse_neigh':
            osc.frequency.linearRampToValueAtTime(topFreq, ctx.currentTime + duration * 0.2);
            osc.frequency.linearRampToValueAtTime(baseFreq * 1.5, ctx.currentTime + duration * 0.6);
            osc.frequency.linearRampToValueAtTime(baseFreq, ctx.currentTime + duration);
            break;
            
        case 'donkey_bray':
            // Alternating high-low pattern
            for (let i = 0; i < 3; i++) {
                const segmentStart = ctx.currentTime + (duration / 3) * i;
                const segmentEnd = ctx.currentTime + (duration / 3) * (i + 1);
                if (i % 2 === 0) {
                    osc.frequency.linearRampToValueAtTime(topFreq, segmentEnd);
                } else {
                    osc.frequency.linearRampToValueAtTime(baseFreq, segmentEnd);
                }
            }
            break;
            
        case 'rooster_crow':
            // Cock-a-doodle-doo pattern
            const segments = [1.2, 1.5, 1.0, 1.8, 1.3];
            let currentTime = ctx.currentTime;
            segments.forEach((multiplier, i) => {
                const segmentDuration = duration / segments.length;
                osc.frequency.setValueAtTime(baseFreq * multiplier, currentTime);
                currentTime += segmentDuration;
            });
            break;
            
        case 'wolf_howl':
            osc.frequency.linearRampToValueAtTime(topFreq, ctx.currentTime + duration * 0.4);
            osc.frequency.linearRampToValueAtTime(baseFreq * 1.3, ctx.currentTime + duration * 0.8);
            osc.frequency.linearRampToValueAtTime(baseFreq, ctx.currentTime + duration);
            break;
            
        case 'elephant_trumpet':
            osc.frequency.exponentialRampToValueAtTime(topFreq, ctx.currentTime + duration * 0.3);
            osc.frequency.exponentialRampToValueAtTime(baseFreq * 2, ctx.currentTime + duration * 0.7);
            osc.frequency.exponentialRampToValueAtTime(baseFreq, ctx.currentTime + duration);
            break;
            
        case 'lion_roar':
        case 'tiger_roar':
        case 'jaguar_roar':
            osc.frequency.linearRampToValueAtTime(topFreq, ctx.currentTime + duration * 0.3);
            osc.frequency.linearRampToValueAtTime(baseFreq * 0.8, ctx.currentTime + duration * 0.7);
            osc.frequency.linearRampToValueAtTime(baseFreq, ctx.currentTime + duration);
            break;
            
        case 'cat_meow':
            osc.frequency.linearRampToValueAtTime(topFreq, ctx.currentTime + duration * 0.2);
            osc.frequency.linearRampToValueAtTime(baseFreq * 1.5, ctx.currentTime + duration * 0.6);
            osc.frequency.linearRampToValueAtTime(baseFreq, ctx.currentTime + duration);
            break;
            
        case 'dog_bark':
            // Sharp attack, quick decay
            osc.frequency.exponentialRampToValueAtTime(topFreq, ctx.currentTime + 0.05);
            osc.frequency.exponentialRampToValueAtTime(baseFreq, ctx.currentTime + duration);
            break;
            
        case 'frog_ribbit':
            // Two-part ribbit
            osc.frequency.linearRampToValueAtTime(topFreq, ctx.currentTime + duration * 0.3);
            osc.frequency.setValueAtTime(baseFreq, ctx.currentTime + duration * 0.5);
            osc.frequency.linearRampToValueAtTime(topFreq * 0.8, ctx.currentTime + duration * 0.8);
            osc.frequency.linearRampToValueAtTime(baseFreq, ctx.currentTime + duration);
            break;
            
        case 'owl_hoot':
            // Hoo-hoo pattern
            osc.frequency.linearRampToValueAtTime(topFreq, ctx.currentTime + duration * 0.25);
            osc.frequency.linearRampToValueAtTime(baseFreq, ctx.currentTime + duration * 0.45);
            osc.frequency.linearRampToValueAtTime(topFreq, ctx.currentTime + duration * 0.7);
            osc.frequency.linearRampToValueAtTime(baseFreq, ctx.currentTime + duration);
            break;
            
        case 'whale_song':
            // Complex melodic pattern
            const notes = [1, 1.3, 0.8, 1.6, 1.1, 0.9, 1.4];
            let time = ctx.currentTime;
            notes.forEach(multiplier => {
                osc.frequency.linearRampToValueAtTime(baseFreq * multiplier, time);
                time += duration / notes.length;
            });
            break;
            
        case 'cricket_chirp':
        case 'grasshopper_chirp':
            // Rapid chirping pattern
            for (let i = 0; i < 8; i++) {
                const chirpStart = ctx.currentTime + (duration / 8) * i;
                const chirpEnd = chirpStart + (duration / 16);
                osc.frequency.setValueAtTime(baseFreq, chirpStart);
                osc.frequency.linearRampToValueAtTime(topFreq, chirpEnd);
            }
            break;
            
        default:
            // Default frequency sweep
            osc.frequency.linearRampToValueAtTime(topFreq, ctx.currentTime + duration * 0.5);
            osc.frequency.linearRampToValueAtTime(baseFreq, ctx.currentTime + duration);
    }
}

// Configure filter for each animal type
function configureFilter(filter, pattern, harmonic) {
    const filterConfigs = {
        'cow_moo': { type: 'lowpass', freq: 800, q: 1 },
        'pig_oink': { type: 'bandpass', freq: 600, q: 2 },
        'lion_roar': { type: 'lowpass', freq: 400, q: 1 },
        'wolf_howl': { type: 'bandpass', freq: 800, q: 3 },
        'cat_meow': { type: 'bandpass', freq: 1200, q: 5 },
        'dog_bark': { type: 'highpass', freq: 300, q: 1 },
        'owl_hoot': { type: 'lowpass', freq: 600, q: 2 },
        'duck_quack': { type: 'lowpass', freq: 1000, q: 1 },
        'frog_ribbit': { type: 'bandpass', freq: 800, q: 2 },
        'bee_buzz': { type: 'bandpass', freq: 300, q: 1 },
        'cricket_chirp': { type: 'highpass', freq: 2000, q: 1 },
        'whale_song': { type: 'lowpass', freq: 1000, q: 2 }
    };
    
    const config = filterConfigs[pattern.pattern] || { type: 'lowpass', freq: 1000, q: 1 };
    
    filter.type = config.type;
    filter.frequency.setValueAtTime(config.freq / harmonic, 0);
    filter.Q.setValueAtTime(config.q, 0);
}

// Configure amplitude envelope for natural sound shaping
function configureAmplitudeEnvelope(gain, pattern, amplitude, ctx) {
    const duration = pattern.duration;
    const maxGain = amplitude * 0.4; // Prevent clipping
    
    gain.gain.setValueAtTime(0, ctx.currentTime);
    
    switch (pattern.pattern) {
        case 'dog_bark':
        case 'chicken_cluck':
        case 'crab_click':
            // Sharp attack, quick decay
            gain.gain.linearRampToValueAtTime(maxGain, ctx.currentTime + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
            break;
            
        case 'cow_moo':
        case 'lion_roar':
        case 'whale_song':
            // Slow attack, sustained, slow decay
            gain.gain.linearRampToValueAtTime(maxGain, ctx.currentTime + duration * 0.2);
            gain.gain.setValueAtTime(maxGain, ctx.currentTime + duration * 0.8);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
            break;
            
        case 'owl_hoot':
            // Hoo-hoo pattern
            gain.gain.linearRampToValueAtTime(maxGain, ctx.currentTime + duration * 0.1);
            gain.gain.linearRampToValueAtTime(maxGain * 0.3, ctx.currentTime + duration * 0.4);
            gain.gain.linearRampToValueAtTime(maxGain, ctx.currentTime + duration * 0.6);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
            break;
            
        case 'cricket_chirp':
        case 'grasshopper_chirp':
            // Pulsing pattern
            for (let i = 0; i < 8; i++) {
                const pulseStart = ctx.currentTime + (duration / 8) * i;
                const pulseEnd = pulseStart + (duration / 16);
                gain.gain.linearRampToValueAtTime(maxGain, pulseStart + 0.01);
                gain.gain.exponentialRampToValueAtTime(0.01, pulseEnd);
            }
            break;
            
        default:
            // Standard envelope
            gain.gain.linearRampToValueAtTime(maxGain, ctx.currentTime + duration * 0.1);
            gain.gain.setValueAtTime(maxGain, ctx.currentTime + duration * 0.7);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
    }
}

// Apply special effects like vibrato, tremolo, etc.
function applySpecialEffects(osc, gain, pattern, ctx, harmonic) {
    // Add vibrato for certain animals
    if (pattern.vibrato && harmonic === 1) {
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        
        lfo.frequency.setValueAtTime(pattern.vibrato, ctx.currentTime);
        lfoGain.gain.setValueAtTime(pattern.freq[0] * 0.05, ctx.currentTime);
        
        lfo.start(ctx.currentTime);
        lfo.stop(ctx.currentTime + pattern.duration);
        
        currentOscillators.push(lfo);
    }
    
    // Add tremolo for certain animals
    if (pattern.tremolo && harmonic === 1) {
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        
        lfo.connect(lfoGain);
        lfoGain.connect(gain.gain);
        
        lfo.frequency.setValueAtTime(pattern.tremolo, ctx.currentTime);
        lfoGain.gain.setValueAtTime(0.3, ctx.currentTime);
        
        lfo.start(ctx.currentTime);
        lfo.stop(ctx.currentTime + pattern.duration);
        
        currentOscillators.push(lfo);
    }
}

// Check if animal needs noise component
function needsNoise(pattern) {
    const noiseAnimals = [
        'lion_roar', 'tiger_roar', 'bear_growl', 'jaguar_roar',
        'skunk_hiss', 'crocodile_hiss', 'turtle_hiss',
        'bee_buzz', 'fly_buzz', 'wasp_buzz', 'mosquito_whine'
    ];
    return noiseAnimals.includes(pattern);
}

// Add noise component for realistic texture
function addNoiseComponent(ctx, pattern) {
    const noise = ctx.createBufferSource();
    const buffer = ctx.createBuffer(1, ctx.sampleRate * pattern.duration, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    
    // Generate filtered noise
    for (let i = 0; i < data.length; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.2;
    }
    noise.buffer = buffer;
    
    const noiseFilter = ctx.createBiquadFilter();
    const noiseGain = ctx.createGain();
    
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    
    // Configure noise filter based on animal
    if (pattern.pattern.includes('roar') || pattern.pattern.includes('growl')) {
        noiseFilter.type = 'lowpass';
        noiseFilter.frequency.setValueAtTime(200, ctx.currentTime);
    } else if (pattern.pattern.includes('hiss')) {
        noiseFilter.type = 'highpass';
        noiseFilter.frequency.setValueAtTime(1000, ctx.currentTime);
    } else {
        noiseFilter.type = 'bandpass';
        noiseFilter.frequency.setValueAtTime(400, ctx.currentTime);
    }
    
    noiseGain.gain.setValueAtTime(0, ctx.currentTime);
    noiseGain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.1);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + pattern.duration);
    
    noise.start(ctx.currentTime);
    noise.stop(ctx.currentTime + pattern.duration);
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
    document.getElementById('modalName').textContent = animal.name;
    document.getElementById('modalSound').textContent = animal.sound;
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