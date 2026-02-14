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
  imageUrl?: string;
}

export const events: EventData[] = [
  // ON STAGE
  {
    id: 1, title: "Dance", category: "on-stage", emoji: "💃",
    description: "Express yourself through movement and rhythm. Group dance performances.",
    duration: "4 mins (+1 min prep)", teamSize: "Max 6 members",
    organizers: ["Kevin Mathew A (8610871590)", "Reshma D (7904912931)", "Priyanka (9345850383)", "Jamal Kareem (9790518463)"],
    rules: [
      "Categories: Solo / Dual / Group",
      "Time: 4 mins (+1 min prep)",
      "Team Limit: Max 6 members",
      "Decent costumes mandatory",
      "Own music in USB (submit 1 hour prior)",
      "Report 1 hour before performance",
      "Judging: Creativity, Coordination, Stage Presence"
    ],
    fee: "₹99",
    imageUrl: "/assets/events/dance.jpg"
  },
  {
    id: 2, title: "Fashion Walk", category: "on-stage", emoji: "👠",
    description: "Show off your style and confidence on the ramp.",
    duration: "4 mins", teamSize: "Max 6 members",
    organizers: ["Vimal (9345518356)", "Sundar (8190868395)"],
    rules: [
      "Theme: Open Theme",
      "Time Limit: 4 mins",
      "Max 6 members per team",
      "Props allowed (pre-approved)",
      "No offensive outfits",
      "Judging: Costume, Creativity, Walk, Overall Impact"
    ],
    fee: "₹99",
    imageUrl: "/assets/events/fashion-walk.jpg"
  },
  {
    id: 3, title: "Battle of Bands", category: "on-stage", emoji: "🎸",
    description: "Rock the stage with your band's musical prowess.",
    duration: "10 mins", teamSize: "3–8 members",
    organizers: ["Logeshwaran R (8778377586)", "Amrissh P (8072401913)"],
    rules: [
      "Team Size: 3–8 members",
      "Time Limit: 10 mins",
      "Bring own instruments",
      "No offensive lyrics",
      "Setup within allotted time",
      "Judging: Musical Skill, Coordination, Creativity"
    ],
    fee: "₹99",
    imageUrl: "/assets/events/battle-of-bands.jpg"
  },
  {
    id: 4, title: "Singing", category: "on-stage", emoji: "🎤",
    description: "Vocal performance to win the hearts.",
    duration: "3–4 minutes", teamSize: "Solo",
    organizers: ["Netravathi C (8098080398)", "Melvin (7397683420)"],
    rules: [
      "Solo event; open to all colleges",
      "Valid college ID mandatory",
      "Two rounds: Indoor (Preliminary) & Outdoor (Final)",
      "Top 5 qualify for finals",
      "Karaoke tracks only (MP3 format)",
      "All languages & rap allowed",
      "No vulgar/offensive content",
      "No backing vocals or auto-tune",
      "Finalists must perform two different songs",
      "Time Limit: 3–4 minutes",
      "Instruments allowed for solo performer only",
      "Judging: Voice Quality, Singing Dynamics, Audience Engagement, Stage Presence",
      "Report 15 minutes before performance"
    ],
    fee: "₹99",
    imageUrl: "/assets/events/singing.jpg"
  },
  {
    id: 5, title: "Mime", category: "on-stage", emoji: "🎭",
    description: "The art of silent storytelling.",
    duration: "5–8 mins", teamSize: "5–10 members",
    organizers: ["T. Viswa Gnan Deep (6302877873)", "Pavithra R (9342614326)"],
    rules: [
      "Team Size: 5–10 members",
      "Time: 5–8 mins",
      "No dialogue or lip-sync",
      "Only background music allowed",
      "Decent content mandatory"
    ],
    fee: "₹99",
    imageUrl: "/assets/events/mime.jpg"
  },
  {
    id: 6, title: "Short Film", category: "on-stage", emoji: "🎬",
    description: "Screening of your creative short films.",
    duration: "Max 15 mins", teamSize: "Team",
    organizers: ["Kishan Babu (8807959322)", "Sanjeev Sivam (8122053986)"],
    rules: [
      "Duration: Max 15 mins",
      "Submission: Google Drive (1 day prior)",
      "Any genre/language allowed",
      "Subtitles mandatory if required",
      "College-appropriate content only"
    ],
    fee: "₹99",
    imageUrl: "/assets/events/short-film.jpg"
  },

  // OFF STAGE
  {
    id: 7, title: "Project Presentation", category: "off-stage", emoji: "📊",
    description: "Present your innovative ideas and projects.",
    duration: "6–8 mins", teamSize: "1–3 members",
    organizers: ["Kareena (9345668033)", "Rishika (7824944507)"],
    rules: [
      "Individual or team (max 3 members)",
      "Hardware-based and/or software-based projects",
      "Must be original and relevant to technology",
      "6–8 minutes for presentation + Q&A",
      "Working prototype MUST be presented",
      "Bring PPT in pen drive + backup",
      "Late entries not permitted",
      "Judge's decision is final"
    ],
    fee: "₹99",
    imageUrl: "/assets/events/project-presentation.jpg"
  },
  {
    id: 8, title: "Paper Presentation", category: "off-stage", emoji: "📋",
    description: "Present your innovative research and ideas.",
    duration: "6–8 mins", teamSize: "1–2 members",
    organizers: ["Antony Cross Oshani (8807958429)", "Devamitra (9488826993)"],
    rules: [
      "Individual or team (max 2 members)",
      "Original research, review, or innovative ideas",
      "Format: IEEE format",
      "Submit before specifies deadline",
      "6–8 minutes for presentation + 2 mins Q&A",
      "Bring PPT in pen drive + backup",
      "Judge's decision is final"
    ],
    fee: "₹99",
    imageUrl: "/assets/events/paper-presentation.jpg"
  },
  {
    id: 9, title: "Escape The Matrix (Coding)", category: "off-stage", emoji: "💻",
    description: "Solve complex puzzles and escape through code.",
    duration: "3 Rounds", teamSize: "1–3 members",
    organizers: ["Rufina Laurel (8870415592)", "Swathika (8870700760)", "Purusothaman (7397520061)"],
    rules: [
      "Round 1: 20 technical questions (20 mins)",
      "Round 2: 15 word-guessing questions (60 sec each)",
      "Round 3: 10 debugging questions (3 mins each)",
      "One laptop per team",
      "No AI or extensions allowed",
      "Winner based on best overall performance"
    ],
    fee: "₹99",
    imageUrl: "/assets/events/escape-the-matrix.jpg"
  },
  {
    id: 10, title: "Live Edit Battle", category: "off-stage", emoji: "✂️",
    description: "Real-time video/photo editing competition.",
    duration: "2 hours", teamSize: "Individual",
    organizers: ["Sugantharaj (9342614326)", "Angel Mary Varghese (8606685304)", "Monish (8610730654)"],
    rules: [
      "Duration: 2 hours",
      "Any editing software allowed",
      "Submit before deadline",
      "Professional content only; no offensive material",
      "Judging: Creativity, Storytelling, Sound Design, Editing Flow",
      "Misconduct leads to disqualification"
    ],
    fee: "₹99",
    imageUrl: "/assets/events/live-edit-battle.jpg"
  },
  {
    id: 11, title: "Human Calculator", category: "off-stage", emoji: "🧮",
    description: "Mental math at lightning speed.",
    duration: "Rounds based", teamSize: "Individual",
    organizers: ["Rahul (7397437798)", "Sirisha (9790152687)", "Sneha (9863644589)"],
    rules: [
      "Round 1: 40 questions (10–15 sec each) - Top 6-8 qualify",
      "Final: 8 questions per participant",
      "No gadgets, paper, or hand counting",
      "Scoring: +10 correct / –2 wrong",
      "Individual event only"
    ],
    fee: "₹99",
    imageUrl: "/assets/events/human-calculator.jpg"
  },
  {
    id: 12, title: "Speed X – Typing", category: "off-stage", emoji: "⌨️",
    description: "Race to type with high accuracy and speed.",
    duration: "Qualifier + Final", teamSize: "Individual",
    organizers: ["Pavithra Sri (6380257787)", "Nithiyapriya (9150652241)", "Jaishanth (8438193027)"],
    rules: [
      "Participation: Individual",
      "Bring own laptop",
      "No tab switching or gadgets",
      "Evaluation: Accuracy (Primary), Net WPM, Error Count"
    ],
    fee: "₹99",
    imageUrl: "/assets/events/speed-x-typing.jpg"
  },
  {
    id: 13, title: "Reel Creation", category: "off-stage", emoji: "📱",
    description: "Create engaging short-form content.",
    duration: "Max 90 sec", teamSize: "1–3 members",
    organizers: ["Vivaa (9363315750)", "Dinesh Eswar (7200295986)", "Nithishwaran (8754330333)"],
    rules: [
      "Max 90 seconds duration",
      "Original content only",
      "No political/religious/offensive content",
      "Submit before deadline",
      "Judging: Creativity, Quality, Relevance, Impact"
    ],
    fee: "₹99",
    imageUrl: "/assets/events/reel-creation.jpg"
  },
  {
    id: 14, title: "Push-Up Challenge", category: "off-stage", emoji: "💪",
    description: "Strength and endurance test.",
    duration: "1 minute", teamSize: "Individual",
    organizers: ["Pangaj (9345837731)", "Sharan Sadithya (6374422057)"],
    rules: [
      "Format: 1 minute challenge",
      "Standard push-ups only",
      "One attempt only",
      "Maximum valid push-ups wins",
      "Judge decision final"
    ],
    fee: "₹99",
    imageUrl: "/assets/events/push-up-challenge.jpg"
  },
  {
    id: 15, title: "Quizy One (Tech Quiz)", category: "off-stage", emoji: "🧠",
    description: "Test your knowledge in the tech world.",
    duration: "Multiple Rounds", teamSize: "Exactly 4 members",
    organizers: ["L.K. Lokesh (9677726236)", "Navadeep R (8754854471)", "Jaisuriya DD (6381125471)", "Priyanka (9345850383)"],
    rules: [
      "Team Size: Exactly 4 members",
      "Rounds: MCQ, Rapid Fire, Audio/Visual",
      "No electronic gadgets allowed",
      "Misconduct leads to disqualification",
      "Judging: Accuracy, Speed, Coordination"
    ],
    fee: "₹99",
    imageUrl: "/assets/events/quizy-one.jpg"
  },

  // GAMES
  {
    id: 16, title: "Box Cricket", category: "games", emoji: "🏏",
    description: "Classic table-top cricket game.",
    duration: "4 overs per side", teamSize: "6 members",
    organizers: ["Rohit G (7094861575)", "Sabari Kannan (7083047006)", "Shrish HS (9345069270)"],
    rules: [
      "Team Size: 6 members",
      "Format: 4 overs per side",
      "Tennis ball; Underarm bowling",
      "Wide/No-ball = 1 run + extra ball",
      "Super over for tie"
    ],
    fee: "₹75",
    imageUrl: "/assets/events/box-cricket.jpg"
  },
  {
    id: 17, title: "Hand Cricket – Inverse", category: "games", emoji: "🖐️",
    description: "The classic game with a twist.",
    duration: "Till out", teamSize: "Individual",
    organizers: ["Purusothaman K (7397520061)", "Vijay M (7092046719)", "Jamal Kareem (9790518463)"],
    rules: [
      "Rule: Lowest score wins",
      "Same number = Out",
      "Organizer decision is final"
    ],
    fee: "₹75",
    imageUrl: "/assets/events/hand-cricket-inverse.jpg"
  },
  {
    id: 18, title: "Chess.com", category: "games", emoji: "♟️",
    description: "Digital chess battle.",
    duration: "Continuous", teamSize: "Individual",
    organizers: ["Ranjith (9080410933)", "Nishanth (8428423173)", "Vetri (9080510869)"],
    rules: [
      "Format: Continuous play",
      "Points-based ranking",
      "No engines or external assistance allowed"
    ],
    fee: "₹75",
    imageUrl: "/assets/events/chess-com.jpg"
  },
  {
    id: 19, title: "Don't Drop It", category: "games", emoji: "🎈",
    description: "Keep the object in the air at all costs.",
    duration: "One attempt", teamSize: "3 members",
    organizers: ["Sunandhana Suriya (9840214711)", "Aniruth Shyamjith (9037517892)", "Aravind M (6379767504)"],
    rules: [
      "Objective: Keep object airborne",
      "Team Size: 3 members",
      "No holding allowed",
      "Longest time wins",
      "One attempt only"
    ],
    fee: "₹75",
    imageUrl: "/assets/events/dont-drop-it.jpg"
  },
  {
    id: 20, title: "Mad Sports - Free Fire", category: "games", emoji: "🔥",
    description: "Free Fire survival battle (Clash Squad).",
    duration: "Custom Room", teamSize: "Squad",
    organizers: ["Rajesh (8608290740)", "Divagar (7810013479)", "Murali Dharan (9361039623)", "Vinaykailash (9500202034)", "Rohankumar (9363904347)", "Harihara Prasath (8248223809)"],
    rules: [
      "Mode: Clash Squad",
      "Strict anti-cheat policy",
      "Disqualification for hacks",
      "Organizer decision final"
    ],
    fee: "₹75",
    imageUrl: "/assets/events/free-fire.jpg"
  },
  {
    id: 21, title: "Mad Sports - BGMI", category: "games", emoji: "🔫",
    description: "Battlegrounds Mobile India tournament (Battle Royale).",
    duration: "Custom Room", teamSize: "Squad",
    organizers: ["Rajesh (8608290740)", "Divagar (7810013479)", "Murali Dharan (9361039623)", "Vinaykailash (9500202034)", "Rohankumar (9363904347)", "Harihara Prasath (8248223809)"],
    rules: [
      "Mode: Battle Royale",
      "Strict anti-cheat policy",
      "Disqualification for hacks",
      "Organizer decision final"
    ],
    fee: "₹75",
    imageUrl: "/assets/events/bgmi.jpg"
  },
  {
    id: 22, title: "Mad Sports - COD", category: "games", emoji: "🎖️",
    description: "Call of Duty Mobile showdown (TDM).",
    duration: "TDM", teamSize: "5v5",
    organizers: ["Rajesh (8608290740)", "Divagar (7810013479)", "Murali Dharan (9361039623)", "Vinaykailash (9500202034)", "Rohankumar (9363904347)", "Harihara Prasath (8248223809)"],
    rules: [
      "Mode: Team Deathmatch (TDM)",
      "Strict anti-cheat policy",
      "Disqualification for hacks",
      "Organizer decision final"
    ],
    fee: "₹75",
    imageUrl: "/assets/events/cod.jpg"
  },

  // SPORTS
  {
    id: 23, title: "Cricket", category: "sports", emoji: "🏏",
    description: "The ultimate gentleman's game.",
    duration: "6 Overs", teamSize: "Team 8+3",
    organizers: ["Pugalvaasan (9092447474)", "Prasithi Kumaran (8248372122)"],
    rules: ["Tape ball", "Knockout format"], fee: "₹500/Team",
    imageUrl: "/assets/events/cricket.jpg"
  },
  {
    id: 24, title: "Football", category: "sports", emoji: "⛹️",
    description: "Fast-paced full field football.",
    duration: "15 min halves", teamSize: "Team 7+3",
    organizers: ["Shrish HS (9345069270)", "Aravind M (6379767504)"],
    rules: ["Standard FIFA rules", "Referee's decision final"], fee: "₹500/Team",
    imageUrl: "/assets/events/football.jpg"
  },
  {
    id: 25, title: "Kabaddi", category: "sports", emoji: "🤼",
    description: "Traditional test of strength and strategy.",
    duration: "20 min", teamSize: "Team 7+3",
    organizers: ["Vetri (9080510869)"],
    rules: ["Mats provided", "Bonus point rules"], fee: "₹500/Team",
    imageUrl: "/assets/events/kabaddi.jpg"
  },
  {
    id: 26, title: "Volley Ball", category: "sports", emoji: "🏐",
    description: "High-flying volleyball competition.",
    duration: "Best of 3", teamSize: "Team 6+2",
    organizers: ["Jamal Kareem (9790518463)"],
    rules: ["Rotation mandatory", "Standard court"], fee: "₹500/Team",
    imageUrl: "/assets/events/volley-ball.jpg"
  },
  {
    id: 27, title: "Kho Kho", category: "sports", emoji: "🏃‍♀️",
    description: "Tag and chase in this traditional sport.",
    duration: "2 Innings", teamSize: "Team 9+3",
    organizers: ["Rahul (7397437798)"],
    rules: ["Chasing & Running", "Touch rules"], fee: "₹500/Team",
    imageUrl: "/assets/events/kho-kho.jpg"
  },

  // TRACK - ATHLETICS EVENTS
  // Assuming "All track Rohit G" means Rohit organizes all of them
  {
    id: 28, title: "100m Dash", category: "track", emoji: "🏃",
    description: "The sprint for the title of fastest human.",
    duration: "Heats + Finals", teamSize: "Individual",
    organizers: ["Rohit G (7094861575)"],
    rules: [
      "6-7 runners per heat",
      "Top 2 finishers qualify for Finals",
      "Stay in assigned lane",
      "False start = Disqualification"
    ],
    fee: "₹150",
    imageUrl: "/assets/events/100m-dash.jpg"
  },
  {
    id: 29, title: "400m Dash", category: "track", emoji: "🏃‍♂️",
    description: "A full lap dash of endurance and speed.",
    duration: "Heats + Finals", teamSize: "Individual",
    organizers: ["Rohit G (7094861575)"],
    rules: [
      "6-7 runners per heat",
      "Top 2 finishers qualify for Finals",
      "Stay in assigned lane for first 100m",
      "False start = Disqualification"
    ],
    fee: "₹150",
    imageUrl: "/assets/events/400m-dash.jpg"
  },
  {
    id: 30, title: "800m Run", category: "track", emoji: "👟",
    description: "Middle distance endurance race.",
    duration: "Final", teamSize: "Individual",
    organizers: ["Rohit G (7094861575)"],
    rules: [
      "No heats - straight Final format",
      "Top 3 finishers declared winners",
      "Break line rule applies"
    ],
    fee: "₹150",
    imageUrl: "/assets/events/800m-run.jpg"
  },
  {
    id: 31, title: "4 x 100m Relay", category: "track", emoji: "🤝",
    description: "Team speed and baton passing.",
    duration: "Heats + Finals", teamSize: "Team of 4",
    organizers: ["Rohit G (7094861575)"],
    rules: [
      "Each team consists of 4 members",
      "Baton exchange zone strictly enforced",
      "Dropping baton = Disqualification"
    ],
    fee: "₹150",
    imageUrl: "/assets/events/4x100m-relay.jpg"
  },
  {
    id: 32, title: "Long Jump", category: "track", emoji: "🦘",
    description: "Leap into the sand for maximum distance.",
    duration: "3 Attempts", teamSize: "Individual",
    organizers: ["Rohit G (7094861575)"],
    rules: [
      "Each athlete gets 3 attempts",
      "Best distance recorded",
      "Foul line board must not be crossed"
    ],
    fee: "₹150",
    imageUrl: "/assets/events/long-jump.jpg"
  },
  {
    id: 33, title: "Shot Put", category: "track", emoji: "☄️",
    description: "Heavy ball throw for power and technique.",
    duration: "3 Attempts", teamSize: "Individual",
    organizers: ["Rohit G (7094861575)"],
    rules: [
      "Each athlete gets 3 attempts",
      "Neck release technique required",
      "Shot must land within sector boundaries"
    ],
    fee: "₹150",
    imageUrl: "/assets/events/shot-put.jpg"
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