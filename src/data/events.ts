export interface EventData {
  id: number;
  title: string;
  category: "on-stage" | "off-stage" | "games" | "sports" | "track";
  emoji: string;
  description: string;
  duration: string;
  teamSize: string;
  rules: string[];
  judgingCriteria?: string[];
  fee?: string;
  organizers?: string[];
}

export const events: EventData[] = [
  // ON STAGE
  {
    id: 1, title: "Dance", category: "on-stage", emoji: "💃",
    description: "Express yourself through movement and rhythm. Group dance performances.",
    duration: "4 min + 1 min prep", teamSize: "Team (Max 6 members)",
    organizers: ["Kevin Mathew A", "Reshma D", "Priyanka", "Jamal Kareem"],
    rules: [
      "Open Theme - Any concept, style, or design",
      "Duration: 4 mins + 1 min preparation",
      "Max 6 members per team including supporting crew",
      "No hate speech, obscenity, or offensive content",
      "Props allowed but must be pre-approved",
      "Music in USB drive (MP3 format) - submit 1 hour before performance",
      "Report 1 hour before performance for lineup",
      "Judged on: Creativity, Costume, Coordination, Stage Presence, Time Limit, Overall Impact"
    ], 
    judgingCriteria: ["Creativity and originality", "Costume design and presentation", "Walk/Coordination and stage presence", "Adherence to time limit", "Overall impact and interpretation"],
    fee: "₹99"
  },
  {
    id: 2, title: "Fashion Walk", category: "on-stage", emoji: "👠",
    description: "Show off your style and confidence on the ramp.",
    duration: "4 min + 1 min prep", teamSize: "Team (Max 6 members)",
    organizers: ["Vimal", "Sundar", "Mithun"],
    rules: [
      "Open Theme - Any outfit or design concept",
      "Duration: 4 mins + 1 min preparation",
      "Max 6 members per team including models and crew",
      "No hate speech, obscenity, or offensive content",
      "Props allowed but must be pre-approved",
      "Report 1 hour before performance",
      "Judged on: Creativity, Costume Design, Walk/Coordination, Stage Presence, Time Limit, Overall Impact"
    ],
    judgingCriteria: ["Costume design and presentation", "Walk, coordination, and stage presence", "Creativity and theme interpretation", "Overall visual impact"],
    fee: "₹99"
  },
  {
    id: 3, title: "Singing", category: "on-stage", emoji: "🎤",
    description: "Vocal performance to win the hearts.",
    duration: "4 min + 1 min prep", teamSize: "Individual/Duet/Group",
    organizers: ["Netravathi c", "Melvin"],
    rules: [
      "Open Theme - Any genre allowed",
      "Duration: 4 mins + 1 min preparation",
      "Background music in USB drive (MP3 format) - submit 1 hour before",
      "Quality vocals judged on: Creativity, Presentation, Technique, Time Limit",
      "No inappropriate content",
      "Report 1 hour before performance"
    ],
    judgingCriteria: ["Vocal clarity and technique", "Creativity and originality", "Stage presence", "Adherence to time limit"],
    fee: "₹99"
  },
  {
    id: 4, title: "Mime", category: "on-stage", emoji: "🎭",
    description: "The art of silent storytelling.",
    duration: "4 min + 1 min prep", teamSize: "Team (4-6 members)",
    organizers: ["T.viswa gnan deep", "Pavithra .R"],
    rules: [
      "Open Theme - Any concept allowed",
      "Duration: 4 mins + 1 min preparation",
      "No talking or dialogue allowed",
      "White paint/mask allowed for artistic effect",
      "Props allowed but must be pre-approved",
      "Max 6 members per team",
      "Report 1 hour before performance",
      "Judged on: Creativity, Expression, Coordination, Stage Presence, Time Limit"
    ],
    judgingCriteria: ["Creativity and originality", "Expression without dialogue", "Team coordination", "Stage presence and timing"],
    fee: "₹99"
  },
  {
    id: 5, title: "Short Film", category: "on-stage", emoji: "🎬",
    description: "Screening of your creative short films.",
    duration: "7 min max + prep", teamSize: "Team",
    organizers: ["Kishan Babu", "Sanjeev sivam"],
    rules: [
      "Open Theme - Any concept or genre",
      "Duration: Max 7 minutes",
      "Original content required",
      "Must be submitted 24 hours before event",
      "File format: MP4 or MOV",
      "Submit with subtitle file if required",
      "Quality judged on: Cinematography, Story, Creativity, Technical Excellence"
    ],
    judgingCriteria: ["Cinematography and visual quality", "Story and narrative", "Creativity and originality", "Technical production excellence"],
    fee: "₹99"
  },

  // OFF STAGE
  {
    id: 6, title: "Paper Presentation", category: "off-stage", emoji: "📋",
    description: "Present your innovative research and ideas.",
    duration: "10 min", teamSize: "1-2 members",
    organizers: ["Antony Cross Oshani", "Devamitra"],
    rules: ["Original research required", "PPT presentation mandatory", "10 minute time limit", "Q&A session after presentation"],
    fee: "₹99"
  },
  {
    id: 7, title: "Project Presentation", category: "off-stage", emoji: "📊",
    description: "Present your innovative ideas and projects.",
    duration: "10 min", teamSize: "1-3 members",
    organizers: ["Kareena", "Rishika"],
    rules: ["PPT required", "Working model/prototype preferred", "10 minute time limit", "Q&A evaluation"],
    fee: "₹99"
  },
  {
    id: 8, title: "Escape The Matrix (Coding)", category: "off-stage", emoji: "💻",
    description: "Solve complex puzzles and escape through code.",
    duration: "2 hours", teamSize: "Team (2-3 members)",
    organizers: ["Rufina laurel", "Swathika", "Purusothaman"],
    rules: ["Algorithm based problems", "Time-limited competition", "No external resources", "Language: Any programming language"],
    fee: "₹99"
  },
  {
    id: 9, title: "Live Edit Battle", category: "off-stage", emoji: "✂️",
    description: "Real-time video/photo editing competition.",
    duration: "1 hour", teamSize: "Individual",
    organizers: ["Sugantharaj", "Angel Mary Varghese", "Monish"],
    rules: ["Raw files provided on spot", "Bring your own laptop/software", "Time limit: 1 hour", "No pre-made templates"],
    fee: "₹99"
  },
  {
    id: 10, title: "Human Calculator", category: "off-stage", emoji: "🧮",
    description: "Mental math at lightning speed.",
    duration: "30 min", teamSize: "Individual",
    organizers: ["Rahul", "Sirisha", "Sneha"],
    rules: ["No calculators allowed", "Multiple rounds of increasing difficulty", "Speed and accuracy required"],
    fee: "₹99"
  },
  {
    id: 11, title: "Speed X Typing", category: "off-stage", emoji: "⌨️",
    description: "Race to type with high accuracy and speed.",
    duration: "15 min", teamSize: "Individual",
    organizers: ["Pavithra sri", "Nithiyapriya", "Jaishanth"],
    rules: ["Test text provided", "WPM (Words Per Minute) based ranking", "Accuracy mandatory", "Standard keyboard layout"],
    fee: "₹99"
  },
  {
    id: 12, title: "Reel Creation", category: "off-stage", emoji: "📱",
    description: "Create engaging short-form content on the spot.",
    duration: "3 hours", teamSize: "Team (1-2 members)",
    organizers: ["Vivaa", "Dinesh Eswar", "Nithishwaran"],
    rules: ["Theme given on the spot", "Mobile editing only (no desktop software)", "Duration: 30-60 seconds", "Creative and engaging content required"],
    fee: "₹99"
  },
  {
    id: 13, title: "Push Up Challenge", category: "off-stage", emoji: "💪",
    description: "Strength and endurance test.",
    duration: "Until fail", teamSize: "Individual",
    organizers: ["Pangaj", "Sharan sadithya"],
    rules: ["Correct form mandatory", "Full range of motion required", "Chest must touch ground", "Max continuous count wins"],
    fee: "₹99"
  },
  {
    id: 14, title: "Tech Quiz", category: "off-stage", emoji: "🧠",
    description: "Test your knowledge in the tech world.",
    duration: "1 hour", teamSize: "Team of 2-3",
    organizers: ["L.k.lokesh", "Navadeep.R", "JaisuriyaDD", "Priyanka"],
    rules: ["Written prelims first round", "Buzzer finals for top teams", "MCQ and descriptive questions", "Tech-focused topics"],
    fee: "₹99"
  },

  // GAMES
  {
    id: 15, title: "Box Cricket", category: "games", emoji: "🏏",
    description: "Classic table-top cricket game.",
    duration: "Per match", teamSize: "Team of 3",
    organizers: ["Rohit G", "Sabari Kannan", "Shrish HS"],
    rules: ["Standard box cricket rules", "Best of series format", "Dice-based gameplay", "Max 30 runs per batsman"],
    fee: "₹75"
  },
  {
    id: 16, title: "Hand Cricket Inverse", category: "games", emoji: "🖐️",
    description: "The classic game with a twist.",
    duration: "Till out", teamSize: "Individual",
    organizers: ["Purusothaman k", "Vijay M", "Jamal Kareem"],
    rules: ["Score must NOT match opponent's number", "Standard odd/even rules apply", "Knockout format", "Best of series"],
    fee: "₹75"
  },
  {
    id: 17, title: "Chess.com", category: "games", emoji: "♟️",
    description: "Digital chess battle on the global platform.",
    duration: "Blitz (3+2)", teamSize: "Individual",
    organizers: ["Ranjith", "Nishanth", "Vetri"],
    rules: ["Online platform (Chess.com)", "Anti-cheat monitored", "Time format: 3 mins + 2 sec increment", "Standard chess rules"],
    fee: "₹75"
  },
  {
    id: 18, title: "Don't Drop It", category: "games", emoji: "🎈",
    description: "Keep the object in the air at all costs.",
    duration: "Continuous", teamSize: "Individual",
    organizers: ["Sunandhana suriya", "Aniruth shyamjith", "Aravind M"],
    rules: ["No hands allowed - feet only", "Object cannot touch ground", "Highest count wins", "Knockout rounds"],
    fee: "₹75"
  },
  {
    id: 19, title: "Mad Sports - Free Fire", category: "games", emoji: "🔥",
    description: "Free Fire survival battle.",
    duration: "Custom Room", teamSize: "Squad (4 members)",
    organizers: ["Rajesh", "Divagar", "Murali dharan", "Vinaykailash", "Rohankumar"],
    rules: ["No emulators allowed", "Mobile only", "Map: Bermuda", "Squad tournament format"],
    fee: "₹75"
  },
  {
    id: 20, title: "Mad Sports - BGMI", category: "games", emoji: "🔫",
    description: "Battlegrounds Mobile India tournament.",
    duration: "Custom Room", teamSize: "Squad (4 members)",
    organizers: ["Rajesh", "Divagar", "Murali dharan", "Vinaykailash", "Rohankumar"],
    rules: ["No hacks or cheating", "Mobile only", "Map: Erangel", "Squad tournament format"],
    fee: "₹75"
  },
  {
    id: 21, title: "Mad Sports - COD", category: "games", emoji: "🎖️",
    description: "Call of Duty Mobile showdown.",
    duration: "TDM", teamSize: "5v5",
    organizers: ["Rajesh", "Divagar", "Murali dharan", "Vinaykailash", "Rohankumar"],
    rules: ["No custom controllers or devices", "Standard controls only", "Ranked mode rules", "Team Deathmatch format"],
    fee: "₹75"
  },

  // SPORTS
  {
    id: 21, title: "Cricket", category: "sports", emoji: "🏏",
    description: "The ultimate gentleman's game.",
    duration: "6 Overs", teamSize: "Team 8+3",
    rules: ["Tape ball", "Knockout format"], fee: "₹500/Team"
  },
  {
    id: 22, title: "Football", category: "sports", emoji: "⛹️",
    description: "Fast-paced full field football.",
    duration: "15 min halves", teamSize: "Team 7+3",
    rules: ["Standard FIFA rules", "Referee's decision final"], fee: "₹500/Team"
  },
  {
    id: 23, title: "Kabaddi", category: "sports", emoji: "🤼",
    description: "Traditional test of strength and strategy.",
    duration: "20 min", teamSize: "Team 7+3",
    rules: ["Mats provided", "Bonus point rules"], fee: "₹500/Team"
  },
  {
    id: 24, title: "Volley Ball", category: "sports", emoji: "🏐",
    description: "High-flying volleyball competition.",
    duration: "Best of 3", teamSize: "Team 6+2",
    rules: ["Rotation mandatory", "Standard court"], fee: "₹500/Team"
  },
  {
    id: 25, title: "Kho Kho", category: "sports", emoji: "🏃‍♀️",
    description: "Tag and chase in this traditional sport.",
    duration: "2 Innings", teamSize: "Team 9+3",
    rules: ["Chasing & Running", "Touch rules"], fee: "₹500/Team"
  },

  // TRACK - ATHLETICS EVENTS
  {
    id: 22, title: "100m Dash", category: "track", emoji: "🏃",
    description: "The sprint for the title of fastest human.",
    duration: "Heats + Finals", teamSize: "Individual",
    rules: [
      "6-7 runners per heat",
      "Top 2 finishers from each heat qualify for Finals",
      "Stay in assigned lane",
      "False start = Disqualification",
      "Standard sprint rules apply"
    ],
    fee: "₹150"
  },
  {
    id: 23, title: "400m Dash", category: "track", emoji: "🏃‍♂️",
    description: "A full lap dash of endurance and speed.",
    duration: "Heats + Finals", teamSize: "Individual",
    rules: [
      "6-7 runners per heat",
      "Top 2 finishers from each heat qualify for Finals",
      "Stay in assigned lane for first 100m",
      "False start = Disqualification",
      "Standard sprint rules apply"
    ],
    fee: "₹150"
  },
  {
    id: 24, title: "800m Run", category: "track", emoji: "👟",
    description: "Middle distance endurance race.",
    duration: "Final", teamSize: "Individual",
    rules: [
      "No heats - straight Final format",
      "Top 3 finishers declared winners",
      "Break line rule applies",
      "Pacing strategy crucial",
      "Standard middle-distance rules"
    ],
    fee: "₹150"
  },
  {
    id: 25, title: "4 x 100m Relay", category: "track", emoji: "🤝",
    description: "Team speed and baton passing.",
    duration: "Heats + Finals", teamSize: "Team of 4",
    rules: [
      "Each team consists of 4 members",
      "Heats conducted if large participation",
      "Top 2 teams from each heat go to Finals",
      "Baton exchange zone strictly enforced",
      "Dropping baton = Disqualification",
      "Each leg is 100m"
    ],
    fee: "₹150"
  },
  {
    id: 26, title: "Long Jump", category: "track", emoji: "🦘",
    description: "Leap into the sand for maximum distance.",
    duration: "3 Attempts", teamSize: "Individual",
    rules: [
      "Each athlete gets 3 attempts",
      "Best distance of three jumps recorded",
      "Foul line board must not be crossed",
      "Measured from foul line to nearest landing point",
      "Top 3 performers declared winners"
    ],
    fee: "₹150"
  },
  {
    id: 27, title: "Shot Put", category: "track", emoji: "☄️",
    description: "Heavy ball throw for power and technique.",
    duration: "3 Attempts", teamSize: "Individual",
    rules: [
      "Each athlete gets 3 attempts",
      "Neck release technique required",
      "Shot must land within sector boundaries",
      "Best distance of three throws recorded",
      "Top 3 performers based on best distance declared winners"
    ],
    fee: "₹150"
  },
];

export const categoryLabels: Record<EventData["category"], string> = {
  "on-stage": "🎭 ON STAGE",
  "off-stage": "🎪 OFF STAGE",
  "games": "🎮 GAMES",
  "sports": "⚽ SPORTS",
  "track": "🏃 TRACK",
};

export const categoryOrder: EventData["category"][] = ["on-stage", "off-stage", "games", "sports", "track"];
// Registration form links for each category
export const registrationLinks: Record<EventData["category"], string> = {
  "on-stage": "https://docs.google.com/forms/d/e/1FAIpQLSeia0D_pMurDqxg38DLnF_0vndIejZ_Q23vSuJEQXB80tcBUQ/viewform?usp=header",
  "off-stage": "https://docs.google.com/forms/d/e/1FAIpQLSfXqJgl7r92_ePSOEobe9u2otbF082JFMNkVxoDz6Xi8CiSPw/viewform?usp=header",
  "games": "https://docs.google.com/forms/d/e/1FAIpQLSfoNwaX4p2oJX4t-AkYDTX8E4fzdG_tqVu0lkF6vQit67Yl9A/viewform?usp=header",
  "sports": "https://docs.google.com/forms/d/1DyKjkvSyLFhsCHccNJejrq3EeWunqIKt62RefVYgMI0/viewform?usp=header", 
  "track": "https://docs.google.com/forms/d/e/1FAIpQLSfSbTjg48TX8vmotgzKKtcDmHC52ptb6h2SQFS8NmHo4_Z_1w/viewform?usp=header",
};