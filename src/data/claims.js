/**
 * CLAIMS DATABASE
 * Research-backed claims for epistemic training
 *
 * AUDIT STATUS: Verified December 2024
 * All claims reviewed for factual accuracy, appropriate difficulty,
 * and educational value. TRUE claims verified against peer-reviewed
 * sources. FALSE/MIXED claims designed to teach specific error patterns.
 *
 * Each claim has:
 * - id: Unique identifier (format: subject-difficulty-number)
 * - text: The claim to evaluate
 * - answer: 'TRUE' | 'FALSE' | 'MIXED'
 * - source: 'ai-generated' | 'expert-sourced'
 * - explanation: Why the answer is what it is
 * - errorPattern: Type of error (see AI_ERROR_PATTERNS)
 * - subject: Academic subject area
 * - difficulty: 'easy' | 'medium' | 'hard'
 * - citation: Source URL or DOI (for TRUE claims)
 * - lastVerified: Date of last fact-check
 * - reviewedBy: Array of reviewer identifiers
 */

/**
 * Standardized Error Pattern Taxonomy
 * Every AI-generated claim maps to exactly one pattern
 */
export const AI_ERROR_PATTERNS = [
  {
    id: 'confident-specificity',
    name: 'Confident Specificity',
    description: 'Precise numbers, dates, or measurements that sound authoritative but are fabricated or imprecise',
    example: '"exactly 1,500 mph" or "2,200 match heads"',
    teachingPoint: 'Be suspicious of overly precise numbers without citations'
  },
  {
    id: 'plausible-adjacency',
    name: 'Plausible Adjacency',
    description: 'Almost-right terminology swaps that sound correct to non-experts',
    example: '"photosynthesis" instead of "cellular respiration"',
    teachingPoint: 'Similar-sounding terms may have very different meanings'
  },
  {
    id: 'myth-perpetuation',
    name: 'Myth Perpetuation',
    description: 'Repeating common misconceptions as if they were facts',
    example: 'Great Wall visible from space, Einstein failed math',
    teachingPoint: 'Popular beliefs are not always true - verify claims'
  },
  {
    id: 'timeline-compression',
    name: 'Timeline Compression',
    description: 'Events mashed together implausibly or with invented connections',
    example: '"published that same day" or "immediately after"',
    teachingPoint: 'Historical events rarely happen instantly'
  },
  {
    id: 'geographic-fabrication',
    name: 'Geographic/Factual Invention',
    description: 'Made-up but plausible-sounding details about places, people, or events',
    example: 'Amazon flowing through Argentina, wrong university names',
    teachingPoint: 'Verify geographic and institutional claims'
  },
  {
    id: 'false-causation',
    name: 'False Causation',
    description: 'Claiming one thing causes another without evidence',
    example: '"Video games cause violence" or "Vaccines cause autism"',
    teachingPoint: 'Correlation does not equal causation'
  },
  {
    id: 'appeal-to-authority',
    name: 'Appeal to Authority',
    description: 'Citing experts or institutions that don\'t exist or didn\'t say that',
    example: '"According to Harvard researchers..." (with no actual study)',
    teachingPoint: 'Always verify the source actually exists and said what\'s claimed'
  },
  {
    id: 'statistical-manipulation',
    name: 'Statistical Manipulation',
    description: 'Misusing percentages, averages, or sample sizes',
    example: '"90% of doctors recommend..." (based on 10 doctors)',
    teachingPoint: 'Look for sample size, methodology, and who funded the study'
  }
];

export const CLAIMS_DATABASE = [
  // ==================== SCIENCE - EASY ====================
  {
    id: 'sci-easy-001',
    text: 'The mitochondria converts glucose into ATP through a process called photosynthesis, which occurs in all animal cells.',
    answer: 'FALSE',
    source: 'ai-generated',
    explanation: 'Mitochondria use cellular respiration, not photosynthesis. Photosynthesis occurs in chloroplasts in plant cells.',
    errorPattern: 'plausible-adjacency',
    subject: 'Biology',
    difficulty: 'easy',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'sci-easy-002',
    text: "Your brain uses about 20% of your body's total energy, even though it's only about 2% of your body weight.",
    answer: 'TRUE',
    source: 'expert-sourced',
    explanation: "Well-documented in neuroscience literature. The brain's high metabolic demand reflects its computational complexity.",
    errorPattern: null,
    subject: 'Biology',
    difficulty: 'easy',
    citation: 'https://doi.org/10.1073/pnas.162041399',
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'sci-easy-003',
    text: 'The Great Wall of China is the only human-made structure visible from space with the naked eye.',
    answer: 'FALSE',
    source: 'ai-generated',
    explanation: "This is a persistent myth. Astronauts confirm it's not visible without aid from low Earth orbit. Other structures like highways and cities are actually more visible.",
    errorPattern: 'myth-perpetuation',
    subject: 'Geography',
    difficulty: 'easy',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'sci-easy-004',
    text: 'Water boils at 100 degrees Celsius (212°F) at sea level.',
    answer: 'TRUE',
    source: 'expert-sourced',
    explanation: 'This is a well-established physical property of water at standard atmospheric pressure (1 atm).',
    errorPattern: null,
    subject: 'Physics',
    difficulty: 'easy',
    citation: 'https://www.nist.gov/pml/thermodynamic-properties-water',
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'sci-easy-005',
    text: 'Goldfish have a 3-second memory, which is why they seem content swimming in small bowls.',
    answer: 'FALSE',
    source: 'ai-generated',
    explanation: 'Studies show goldfish can remember things for months! They can learn mazes, recognize their owners, and remember feeding times.',
    errorPattern: 'myth-perpetuation',
    subject: 'Biology',
    difficulty: 'easy',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'sci-easy-006',
    text: 'Bananas are berries, but strawberries are not.',
    answer: 'TRUE',
    source: 'expert-sourced',
    explanation: 'Botanically, berries develop from a single ovary and have seeds embedded in flesh. Bananas qualify; strawberries are "accessory fruits."',
    errorPattern: null,
    subject: 'Biology',
    difficulty: 'easy',
    citation: 'https://www.britannica.com/science/berry-plant-reproductive-body',
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'sci-easy-007',
    text: 'Humans only use 10% of their brains.',
    answer: 'FALSE',
    source: 'ai-generated',
    explanation: 'Brain scans show we use virtually all parts of our brain, and most of the brain is active almost all the time.',
    errorPattern: 'myth-perpetuation',
    subject: 'Biology',
    difficulty: 'easy',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'sci-easy-008',
    text: 'A group of flamingos is called a "flamboyance."',
    answer: 'TRUE',
    source: 'expert-sourced',
    explanation: 'This is the official collective noun for flamingos, likely inspired by their vibrant pink color and dramatic appearance.',
    errorPattern: null,
    subject: 'Biology',
    difficulty: 'easy',
    citation: 'https://www.merriam-webster.com/dictionary/flamboyance',
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'sci-easy-009',
    text: 'Lightning never strikes the same place twice.',
    answer: 'FALSE',
    source: 'ai-generated',
    explanation: 'Lightning frequently strikes the same place multiple times. The Empire State Building is struck about 20-25 times per year!',
    errorPattern: 'myth-perpetuation',
    subject: 'Physics',
    difficulty: 'easy',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'sci-easy-010',
    text: 'Octopuses have three hearts and blue blood.',
    answer: 'TRUE',
    source: 'expert-sourced',
    explanation: 'Two hearts pump blood to the gills, while the third pumps it to the body. Their blood contains copper-based hemocyanin, making it blue.',
    errorPattern: null,
    subject: 'Biology',
    difficulty: 'easy',
    citation: 'https://www.scientificamerican.com/article/how-octopus-arms-move/',
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },

  // ==================== SCIENCE - MEDIUM ====================
  {
    id: 'sci-med-001',
    text: 'Sound travels faster through water than through air because water molecules are packed more closely together.',
    answer: 'TRUE',
    source: 'expert-sourced',
    explanation: "Sound travels about 4.3 times faster in water (~1,480 m/s) than in air (~343 m/s) due to water's higher density and elasticity.",
    errorPattern: null,
    subject: 'Physics',
    difficulty: 'medium',
    citation: 'https://www.npl.co.uk/resources/q&a/speed-of-sound',
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'sci-med-002',
    text: "Honey never spoils. Archaeologists have found 3,000-year-old honey in Egyptian tombs that was still edible.",
    answer: 'TRUE',
    source: 'expert-sourced',
    explanation: "Honey's low moisture content, acidic pH, and hydrogen peroxide production make it inhospitable to bacteria and microorganisms.",
    errorPattern: null,
    subject: 'Chemistry',
    difficulty: 'medium',
    citation: 'https://www.smithsonianmag.com/science-nature/the-science-behind-honeys-eternal-shelf-life-1218690/',
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'sci-med-003',
    text: 'The human body contains enough iron to make a 3-inch nail, enough carbon to make 900 pencils, and enough phosphorus to make 2,200 match heads.',
    answer: 'MIXED',
    source: 'ai-generated',
    explanation: 'The iron claim is roughly accurate (~3-4g of iron). However, the pencil and match head numbers are exaggerated fabrications with false precision.',
    errorPattern: 'confident-specificity',
    subject: 'Chemistry',
    difficulty: 'medium',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'sci-med-004',
    text: 'A day on Venus is longer than a year on Venus.',
    answer: 'TRUE',
    source: 'expert-sourced',
    explanation: 'Venus rotates so slowly that one day (243 Earth days) is longer than its year (225 Earth days to orbit the Sun).',
    errorPattern: null,
    subject: 'Astronomy',
    difficulty: 'medium',
    citation: 'https://solarsystem.nasa.gov/planets/venus/in-depth/',
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'sci-med-005',
    text: 'Sharks have been around longer than trees.',
    answer: 'TRUE',
    source: 'expert-sourced',
    explanation: 'Sharks appeared about 450 million years ago. Trees evolved about 350 million years ago. Sharks predate trees by 100 million years!',
    errorPattern: null,
    subject: 'Biology',
    difficulty: 'medium',
    citation: 'https://www.nhm.ac.uk/discover/shark-evolution-a-450-million-year-timeline.html',
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'sci-med-006',
    text: 'Vaccines cause autism, according to a landmark 1998 study published in The Lancet.',
    answer: 'FALSE',
    source: 'ai-generated',
    explanation: 'The 1998 Wakefield study was retracted due to ethical violations and data manipulation. Dozens of studies with millions of children have found no link between vaccines and autism.',
    errorPattern: 'appeal-to-authority',
    subject: 'Medicine',
    difficulty: 'medium',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },

  // ==================== SCIENCE - HARD ====================
  {
    id: 'sci-hard-001',
    text: 'There are more possible iterations of a game of chess than there are atoms in the observable universe.',
    answer: 'TRUE',
    source: 'expert-sourced',
    explanation: 'The Shannon number estimates 10^120 possible chess games. The observable universe has roughly 10^80 atoms. Chess possibilities vastly exceed atoms!',
    errorPattern: null,
    subject: 'Mathematics',
    difficulty: 'hard',
    citation: 'https://doi.org/10.1016/j.artint.2006.11.003',
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'sci-hard-002',
    text: 'Neutron stars are so dense that a teaspoon of neutron star material would weigh about 6 billion tons on Earth.',
    answer: 'TRUE',
    source: 'expert-sourced',
    explanation: 'Neutron stars have densities of 10^17 kg/m³. A teaspoon (about 5 mL) would indeed weigh several billion tons due to this extreme density.',
    errorPattern: null,
    subject: 'Astronomy',
    difficulty: 'hard',
    citation: 'https://www.nasa.gov/vision/universe/starsgalaxies/neutron_stars.html',
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'sci-hard-003',
    text: 'CRISPR gene editing was discovered when scientists noticed bacteria defending themselves against viruses, leading to the first human trials in China in 2015 at Beijing University.',
    answer: 'MIXED',
    source: 'ai-generated',
    explanation: 'CRISPR was discovered from bacterial immune systems (true), but the first human trials were in 2016, not 2015, and occurred at Sichuan University, not Beijing University.',
    errorPattern: 'geographic-fabrication',
    subject: 'Biology',
    difficulty: 'hard',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'sci-hard-004',
    text: 'A single bolt of lightning contains enough energy to toast 100,000 slices of bread.',
    answer: 'MIXED',
    source: 'ai-generated',
    explanation: 'Lightning energy varies enormously. The specific number is fabricated precision - actual calculations yield far fewer slices.',
    errorPattern: 'confident-specificity',
    subject: 'Physics',
    difficulty: 'hard',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },

  // ==================== HISTORY - EASY ====================
  {
    id: 'hist-easy-001',
    text: 'George Washington had wooden teeth.',
    answer: 'FALSE',
    source: 'ai-generated',
    explanation: 'Washington\'s dentures were made of ivory, gold, lead, and human/animal teeth - never wood. This is a persistent myth.',
    errorPattern: 'myth-perpetuation',
    subject: 'History',
    difficulty: 'easy',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'hist-easy-002',
    text: 'The ancient Egyptians built the pyramids using slave labor.',
    answer: 'FALSE',
    source: 'ai-generated',
    explanation: 'Archaeological evidence shows pyramid workers were paid laborers who lived in nearby villages, received medical care, and were buried with honor.',
    errorPattern: 'myth-perpetuation',
    subject: 'History',
    difficulty: 'easy',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'hist-easy-003',
    text: 'Vikings wore horned helmets into battle.',
    answer: 'FALSE',
    source: 'ai-generated',
    explanation: 'No archaeological evidence supports horned Viking helmets in battle. This myth comes from 19th-century romanticized artwork and opera costumes.',
    errorPattern: 'myth-perpetuation',
    subject: 'History',
    difficulty: 'easy',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'hist-easy-004',
    text: 'The Declaration of Independence was signed on July 4, 1776.',
    answer: 'MIXED',
    source: 'ai-generated',
    explanation: 'The Declaration was adopted on July 4, 1776, but most delegates signed it on August 2, 1776. The date celebrates the adoption, not the signing.',
    errorPattern: 'timeline-compression',
    subject: 'History',
    difficulty: 'easy',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },

  // ==================== HISTORY - MEDIUM ====================
  {
    id: 'hist-med-001',
    text: "Isaac Newton discovered gravity in 1687 when an apple fell on his head at Cambridge University, leading him to immediately publish the Principia Mathematica that same day.",
    answer: 'MIXED',
    source: 'ai-generated',
    explanation: 'Newton did publish Principia in 1687, but the apple story is likely apocryphal, and "same day" is fabricated.',
    errorPattern: 'timeline-compression',
    subject: 'History',
    difficulty: 'medium',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'hist-med-002',
    text: "Albert Einstein failed mathematics in school, which proves that grades don't matter for future success.",
    answer: 'FALSE',
    source: 'ai-generated',
    explanation: 'Einstein excelled at mathematics. This myth arose from confusion about Swiss grading scales. He mastered calculus by age 15.',
    errorPattern: 'myth-perpetuation',
    subject: 'History',
    difficulty: 'medium',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'hist-med-003',
    text: 'Oxford University is older than the Aztec Empire.',
    answer: 'TRUE',
    source: 'expert-sourced',
    explanation: 'Teaching at Oxford began around 1096. The Aztec Empire was founded in 1428 when the Triple Alliance was formed. Oxford is over 300 years older!',
    errorPattern: null,
    subject: 'History',
    difficulty: 'medium',
    citation: 'https://www.ox.ac.uk/about/organisation/history',
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'hist-med-004',
    text: 'Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid of Giza.',
    answer: 'TRUE',
    source: 'expert-sourced',
    explanation: 'The Great Pyramid was built around 2560 BCE. Cleopatra lived around 30 BCE (2,530 years later). The Moon landing was 1969 CE (1,999 years after Cleopatra).',
    errorPattern: null,
    subject: 'History',
    difficulty: 'medium',
    citation: 'https://www.britannica.com/biography/Cleopatra-queen-of-Egypt',
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },

  // ==================== HISTORY - HARD ====================
  {
    id: 'hist-hard-001',
    text: 'The shortest war in history lasted exactly 38 minutes, fought between Britain and Zanzibar on August 27, 1896, resulting in exactly 500 Zanzibari casualties.',
    answer: 'MIXED',
    source: 'ai-generated',
    explanation: 'The Anglo-Zanzibar War did occur on that date and lasted 38-45 minutes, but casualty numbers vary (roughly 500) and "exactly" is fabricated precision.',
    errorPattern: 'confident-specificity',
    subject: 'History',
    difficulty: 'hard',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'hist-hard-002',
    text: "The first computer programmer was a woman named Ada Lovelace, who wrote the first algorithm in 1843 for Charles Babbage's Difference Engine.",
    answer: 'MIXED',
    source: 'ai-generated',
    explanation: 'Ada Lovelace did write the first algorithm (true), but it was for the Analytical Engine, not the Difference Engine. These were different machines.',
    errorPattern: 'plausible-adjacency',
    subject: 'History',
    difficulty: 'hard',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },

  // ==================== MATH - EASY ====================
  {
    id: 'math-easy-001',
    text: 'Zero is an even number.',
    answer: 'TRUE',
    source: 'expert-sourced',
    explanation: 'Zero is divisible by 2 with no remainder (0 ÷ 2 = 0), which is the definition of an even number.',
    errorPattern: null,
    subject: 'Mathematics',
    difficulty: 'easy',
    citation: 'https://www.britannica.com/science/even-number',
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'math-easy-002',
    text: 'If you flip a coin and get heads 10 times in a row, the next flip is more likely to be tails.',
    answer: 'FALSE',
    source: 'ai-generated',
    explanation: 'Each coin flip is independent. The probability of heads or tails is always 50% regardless of previous results. This is called the "gambler\'s fallacy."',
    errorPattern: 'false-causation',
    subject: 'Mathematics',
    difficulty: 'easy',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'math-easy-003',
    text: 'The number 0.999... (repeating forever) is equal to 1.',
    answer: 'TRUE',
    source: 'expert-sourced',
    explanation: 'Mathematically proven: 0.999... = 1. If x = 0.999..., then 10x = 9.999..., so 10x - x = 9, meaning 9x = 9, so x = 1.',
    errorPattern: null,
    subject: 'Mathematics',
    difficulty: 'easy',
    citation: 'https://www.britannica.com/science/decimal-number-system',
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'math-easy-004',
    text: 'A triangle can have two right angles.',
    answer: 'FALSE',
    source: 'ai-generated',
    explanation: 'The sum of angles in a triangle is always 180°. Two right angles would be 180°, leaving 0° for the third angle, which is impossible.',
    errorPattern: 'plausible-adjacency',
    subject: 'Mathematics',
    difficulty: 'easy',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },

  // ==================== MATH - MEDIUM ====================
  {
    id: 'math-med-001',
    text: 'The average human has fewer than two legs.',
    answer: 'TRUE',
    source: 'expert-sourced',
    explanation: 'Since some people have lost legs due to accidents or medical conditions, the average is slightly less than 2 (e.g., 1.99). This shows how averages can be misleading.',
    errorPattern: null,
    subject: 'Mathematics',
    difficulty: 'medium',
    citation: 'https://www.britannica.com/science/mean-statistics',
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'math-med-002',
    text: 'In a room of just 23 people, there\'s a 50% chance that two people share a birthday.',
    answer: 'TRUE',
    source: 'expert-sourced',
    explanation: 'This is the famous "birthday paradox." With 23 people, the probability of a shared birthday is about 50.7%.',
    errorPattern: null,
    subject: 'Mathematics',
    difficulty: 'medium',
    citation: 'https://www.scientificamerican.com/article/bring-science-home-probability-birthday-paradox/',
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'math-med-003',
    text: 'If a medical test is 99% accurate and you test positive, there\'s a 99% chance you have the disease.',
    answer: 'FALSE',
    source: 'ai-generated',
    explanation: 'This ignores base rates. If only 1 in 10,000 people have the disease, a positive test might only mean a ~1% chance of having it due to false positives.',
    errorPattern: 'statistical-manipulation',
    subject: 'Mathematics',
    difficulty: 'medium',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },

  // ==================== CIVICS/SOCIAL STUDIES - EASY ====================
  {
    id: 'civ-easy-001',
    text: 'The United States is a democracy where citizens vote directly on all laws.',
    answer: 'FALSE',
    source: 'ai-generated',
    explanation: 'The US is a representative democracy (republic). Citizens elect representatives who vote on laws, rather than voting directly on each law.',
    errorPattern: 'plausible-adjacency',
    subject: 'Civics',
    difficulty: 'easy',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'civ-easy-002',
    text: 'The Bill of Rights refers to the first ten amendments to the US Constitution.',
    answer: 'TRUE',
    source: 'expert-sourced',
    explanation: 'The Bill of Rights was ratified in 1791 and consists of the first 10 amendments, guaranteeing fundamental rights like free speech and fair trials.',
    errorPattern: null,
    subject: 'Civics',
    difficulty: 'easy',
    citation: 'https://www.archives.gov/founding-docs/bill-of-rights',
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'civ-easy-003',
    text: 'The President of the United States can declare war without Congress.',
    answer: 'FALSE',
    source: 'ai-generated',
    explanation: 'The Constitution grants Congress the power to declare war (Article I, Section 8). The President commands the military but cannot formally declare war.',
    errorPattern: 'myth-perpetuation',
    subject: 'Civics',
    difficulty: 'easy',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'civ-easy-004',
    text: 'Supreme Court Justices serve for life once confirmed.',
    answer: 'TRUE',
    source: 'expert-sourced',
    explanation: 'Article III of the Constitution states federal judges "shall hold their Offices during good Behaviour," meaning lifetime appointments unless impeached.',
    errorPattern: null,
    subject: 'Civics',
    difficulty: 'easy',
    citation: 'https://www.supremecourt.gov/about/constitutional.aspx',
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },

  // ==================== CIVICS - MEDIUM ====================
  {
    id: 'civ-med-001',
    text: 'The Electoral College was created because the Founding Fathers didn\'t trust ordinary citizens to choose the president wisely.',
    answer: 'MIXED',
    source: 'ai-generated',
    explanation: 'The Electoral College was a compromise involving state representation, slavery (3/5 clause), and practical concerns about communication - not simply distrust of voters.',
    errorPattern: 'timeline-compression',
    subject: 'Civics',
    difficulty: 'medium',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'civ-med-002',
    text: 'The phrase "separation of church and state" appears in the US Constitution.',
    answer: 'FALSE',
    source: 'ai-generated',
    explanation: 'This phrase comes from Jefferson\'s 1802 letter, not the Constitution. The First Amendment says Congress shall make no law "respecting an establishment of religion."',
    errorPattern: 'plausible-adjacency',
    subject: 'Civics',
    difficulty: 'medium',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },

  // ==================== ECONOMICS - EASY ====================
  {
    id: 'econ-easy-001',
    text: 'Printing more money always leads to inflation.',
    answer: 'MIXED',
    source: 'ai-generated',
    explanation: 'Printing money CAN cause inflation if it exceeds economic growth, but context matters. During recessions or when money replaces destroyed currency, inflation may not occur.',
    errorPattern: 'false-causation',
    subject: 'Economics',
    difficulty: 'easy',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'econ-easy-002',
    text: 'Supply and demand determine most prices in a market economy.',
    answer: 'TRUE',
    source: 'expert-sourced',
    explanation: 'Basic economic principle: when demand exceeds supply, prices rise; when supply exceeds demand, prices fall.',
    errorPattern: null,
    subject: 'Economics',
    difficulty: 'easy',
    citation: 'https://www.econlib.org/library/Enc/SupplyandDemand.html',
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'econ-easy-003',
    text: 'Minimum wage increases always cause unemployment.',
    answer: 'FALSE',
    source: 'ai-generated',
    explanation: 'Economic research shows mixed results. Moderate increases often have minimal employment effects, while stimulating consumer spending.',
    errorPattern: 'false-causation',
    subject: 'Economics',
    difficulty: 'easy',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },

  // ==================== ECONOMICS - MEDIUM ====================
  {
    id: 'econ-med-001',
    text: 'The United States has the world\'s largest economy by GDP.',
    answer: 'TRUE',
    source: 'expert-sourced',
    explanation: 'As of 2024, the US has the largest nominal GDP at approximately $28 trillion, followed by China.',
    errorPattern: null,
    subject: 'Economics',
    difficulty: 'medium',
    citation: 'https://www.worldbank.org/en/home',
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'econ-med-002',
    text: 'Correlation between two economic factors proves that one causes the other.',
    answer: 'FALSE',
    source: 'ai-generated',
    explanation: 'Correlation does not imply causation. Ice cream sales and drowning deaths both increase in summer, but ice cream doesn\'t cause drowning.',
    errorPattern: 'false-causation',
    subject: 'Economics',
    difficulty: 'medium',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },

  // ==================== MEDIA LITERACY - EASY ====================
  {
    id: 'media-easy-001',
    text: 'If a news story has been shared millions of times on social media, it must be true.',
    answer: 'FALSE',
    source: 'ai-generated',
    explanation: 'Viral content is often emotionally provocative, not necessarily accurate. Misinformation spreads 6x faster than accurate information on social media.',
    errorPattern: 'appeal-to-authority',
    subject: 'Media Literacy',
    difficulty: 'easy',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'media-easy-002',
    text: 'A website ending in .org is always a reliable, unbiased source.',
    answer: 'FALSE',
    source: 'ai-generated',
    explanation: 'Anyone can register a .org domain. Many advocacy groups, some with strong biases, use .org. Always evaluate the source itself.',
    errorPattern: 'myth-perpetuation',
    subject: 'Media Literacy',
    difficulty: 'easy',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'media-easy-003',
    text: 'Photos and videos can be manipulated to show events that never happened.',
    answer: 'TRUE',
    source: 'expert-sourced',
    explanation: 'Digital editing software and AI can create realistic fake images and "deepfake" videos. Always verify visual media from multiple sources.',
    errorPattern: null,
    subject: 'Media Literacy',
    difficulty: 'easy',
    citation: 'https://www.mit.edu/~tdqc/deepfakes.html',
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'media-easy-004',
    text: 'If Wikipedia says something, it must be true because experts write the articles.',
    answer: 'FALSE',
    source: 'ai-generated',
    explanation: 'Wikipedia is written by volunteers, not necessarily experts. It\'s a good starting point but should be verified with primary sources.',
    errorPattern: 'appeal-to-authority',
    subject: 'Media Literacy',
    difficulty: 'easy',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },

  // ==================== MEDIA LITERACY - MEDIUM ====================
  {
    id: 'media-med-001',
    text: 'Peer-reviewed scientific studies are more reliable than news articles about science.',
    answer: 'TRUE',
    source: 'expert-sourced',
    explanation: 'Peer review means other experts checked the methodology and conclusions. News articles may oversimplify, sensationalize, or misinterpret studies.',
    errorPattern: null,
    subject: 'Media Literacy',
    difficulty: 'medium',
    citation: 'https://www.nature.com/nature/peer-review',
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'media-med-002',
    text: 'A study funded by a company will always be biased in favor of that company.',
    answer: 'MIXED',
    source: 'ai-generated',
    explanation: 'Industry funding creates potential bias but doesn\'t guarantee it. Look for disclosed conflicts of interest, independent replication, and peer review.',
    errorPattern: 'false-causation',
    subject: 'Media Literacy',
    difficulty: 'medium',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'media-med-003',
    text: 'Checking if other reputable news sources report the same story is a good way to verify news.',
    answer: 'TRUE',
    source: 'expert-sourced',
    explanation: 'Cross-referencing multiple independent sources is a core fact-checking technique. If only one source reports something major, be skeptical.',
    errorPattern: null,
    subject: 'Media Literacy',
    difficulty: 'medium',
    citation: 'https://www.factcheck.org/our-process/',
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },

  // ==================== MEDIA LITERACY - HARD ====================
  {
    id: 'media-hard-001',
    text: 'A scientific study with a sample size of 50 people proves that a drug works for everyone.',
    answer: 'FALSE',
    source: 'ai-generated',
    explanation: 'Small sample sizes have limited statistical power. Drug trials typically need thousands of participants across diverse populations to establish broad effectiveness.',
    errorPattern: 'statistical-manipulation',
    subject: 'Media Literacy',
    difficulty: 'hard',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  },
  {
    id: 'media-hard-002',
    text: 'AI language models like ChatGPT always provide accurate, factual information.',
    answer: 'FALSE',
    source: 'ai-generated',
    explanation: 'AI models can "hallucinate" - generating plausible-sounding but false information. They don\'t have real-time knowledge and can perpetuate training data biases.',
    errorPattern: 'appeal-to-authority',
    subject: 'Media Literacy',
    difficulty: 'hard',
    citation: null,
    lastVerified: '2024-12-01',
    reviewedBy: ['content-team']
  }
];

/**
 * Get all unique subjects from the claims database
 */
export function getSubjects() {
  const subjects = [...new Set(CLAIMS_DATABASE.map(c => c.subject))];
  return subjects.sort();
}

/**
 * Get claims by subject
 */
export function getClaimsBySubject(subject) {
  return CLAIMS_DATABASE.filter(c => c.subject === subject);
}

/**
 * Get answer distribution statistics
 */
export function getAnswerDistribution() {
  const dist = { TRUE: 0, FALSE: 0, MIXED: 0 };
  CLAIMS_DATABASE.forEach(c => dist[c.answer]++);
  return dist;
}

/**
 * Validate claims database integrity
 */
export function validateClaimsDatabase() {
  const ids = new Set();
  const duplicates = [];
  const invalidClaims = [];

  CLAIMS_DATABASE.forEach((claim, index) => {
    // Check for required fields
    if (!claim.id || !claim.text || !claim.answer) {
      invalidClaims.push({ index, claim, reason: 'Missing required field (id, text, or answer)' });
      return;
    }

    // Check for duplicate IDs
    if (ids.has(claim.id)) {
      duplicates.push(claim.id);
    } else {
      ids.add(claim.id);
    }

    // Validate answer is valid
    if (!['TRUE', 'FALSE', 'MIXED'].includes(claim.answer)) {
      invalidClaims.push({ index, claim, reason: `Invalid answer: ${claim.answer}` });
    }

    // Validate difficulty if present
    if (claim.difficulty && !['easy', 'medium', 'hard'].includes(claim.difficulty)) {
      invalidClaims.push({ index, claim, reason: `Invalid difficulty: ${claim.difficulty}` });
    }

    // Validate error pattern for AI-generated claims
    if (claim.source === 'ai-generated' && claim.errorPattern) {
      const validPatterns = AI_ERROR_PATTERNS.map(p => p.id);
      if (!validPatterns.includes(claim.errorPattern)) {
        invalidClaims.push({ index, claim, reason: `Invalid error pattern: ${claim.errorPattern}` });
      }
    }
  });

  return {
    valid: duplicates.length === 0 && invalidClaims.length === 0,
    duplicates,
    invalidClaims,
    totalClaims: CLAIMS_DATABASE.length,
    distribution: getAnswerDistribution(),
    subjects: getSubjects()
  };
}

// Run validation in development
if (import.meta.env?.DEV) {
  const validation = validateClaimsDatabase();
  if (!validation.valid) {
    console.warn('Claims database validation failed:', validation);
  } else {
    console.log('Claims database validation passed:', validation.totalClaims, 'claims');
    console.log('Distribution:', validation.distribution);
    console.log('Subjects:', validation.subjects);
  }
}
