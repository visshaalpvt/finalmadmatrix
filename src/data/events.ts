export interface EventData {
  id: number;
  title: string;
  category: "on-stage" | "off-stage" | "games" | "sports" | "track";
  iconName: string;
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
    id: 1, title: "Solo Adaptune Battle", category: "on-stage", iconName: "Music",
    description: "Participants instantly adapt their moves to randomly played music. Judging focuses on spontaneity, rhythm sense, and stage presence.",
    duration: "2-3 mins", teamSize: "Solo",
    organizers: ["Kevin Mathew A (8610871590)", "Reshma D (7904912931)"],
    rules: [
      "Individual event with only one participant per entry.",
      "Participants must perform dance steps to randomly played music.",
      "Duration: 2 to 3 minutes; performance stops when music ends.",
      "Music will be selected and controlled by the organizers only.",
      "Participants must wear decent and comfortable dance-appropriate attire.",
      "Any indecent behavior or damage to stage/property leads to disqualification.",
      "Participants must report before the round begins.",
      "The judge's decision is final and binding."
    ],
    fee: "₹99",
    imageUrl: "/assets/events/dance.jpg"
  },
  {
    id: 101, title: "Dual Dance", category: "on-stage", iconName: "Users",
    description: "Two participants perform a coordinated routine on stage. Judging is based on synchronization, creativity, and presentation.",
    duration: "3-4 mins", teamSize: "Exactly 2 members",
    organizers: ["Priyanka (9345850383)", "Jamal Kareem (9790518463)"],
    rules: [
      "Each team must consist of exactly two participants.",
      "Total performance time is 3 to 4 minutes.",
      "Music must be submitted in MP3 format before the deadline.",
      "Only one audio track submission is allowed per team.",
      "Dangerous or fire-based props are strictly prohibited.",
      "Dance style is open, but content must be decent and appropriate.",
      "Participants must report at least 30 minutes before the event begins.",
      "Any rule violation leads to disqualification, and the judge's decision is final."
    ],
    fee: "₹99",
    imageUrl: "/assets/events/dance.jpg"
  },
  {
    id: 501, title: "Group Dance", category: "on-stage", iconName: "Users2",
    description: "Teams present coordinated dance routines with formations. Judging focuses on teamwork, creativity, and audience impact.",
    duration: "3-5 mins", teamSize: "4-8 members",
    organizers: ["Kevin Mathew (8610871590)"],
    rules: [
      "Each team must consist of 4 to 8 participants.",
      "Total performance time is 3 to 5 minutes.",
      "Music must be submitted in MP3 format before the deadline.",
      "Only one audio submission per team is allowed.",
      "Dangerous, fire, or liquid props are strictly prohibited.",
      "Costumes must be decent, coordinated, and non-offensive.",
      "Teams must report at least 30 minutes before the event.",
      "Any misconduct or rule violation leads to disqualification."
    ],
    fee: "₹99",
    imageUrl: "/assets/events/dance.jpg"
  },
  {
    id: 2, title: "Fashion Walk", category: "on-stage", iconName: "Zap",
    description: "Teams showcase creativity, style, and stagecraft. Judged on originality, presentation, and overall impact.",
    duration: "4 mins (+1 prep)", teamSize: "Max 6 members",
    organizers: ["Vimal (9345518356)", "Sundar (8190868395)"],
    rules: [
      "Maximum of 6 members per team, including models and crew.",
      "Performance time: 4 minutes (+1 minute prep time).",
      "Outfits promoting hate, obscenity, or offensive content are prohibited.",
      "Props allowed but must be arranged and cleared by organizers.",
      "Teams must bring music (MP3 on USB) and submit 1 hour prior.",
      "Judging: creativity, costume design, coordination, stage presence, and theme interpretation.",
      "Teams must report 1 hour before performance for lineup.",
      "Exceeding time limits or misconduct results in disqualification."
    ],
    fee: "₹99",
    imageUrl: "/assets/events/fashion-walk.jpg"
  },
  {
    id: 3, title: "Battle of Bands", category: "on-stage", iconName: "Music2",
    description: "Bands perform live on stage using instruments and vocals. Judging based on musical quality, coordination, and stage presence.",
    duration: "12 mins", teamSize: "3–8 members",
    organizers: ["Logeshwaran R (8778377586)", "Amrissh P (8072401913)"],
    rules: [
      "Bands of 3-8 members from the same college only.",
      "Participants must carry a valid college ID.",
      "Allotted time: 12 minutes (setup, performance, and exit).",
      "Performances must be completely live; no pre-recorded tracks.",
      "May perform covers, mashups, originals, or instrumentals.",
      "Bands must bring their own instruments and ensure quick setup.",
      "Report at least 30 minutes before performance slot.",
      "Rule violation or delay may lead to disqualification."
    ],
    fee: "₹99",
    imageUrl: "/assets/events/battle-of-bands.jpg"
  },
  {
    id: 4, title: "Sing a Song", category: "on-stage", iconName: "Mic2",
    description: "Individual vocal performance competition across preliminary and final rounds.",
    duration: "3–4 minutes", teamSize: "Solo",
    organizers: ["Netravathi C (8098080398)", "Melvin (7397683420)"],
    rules: [
      "Solo singing; only registered participants with valid college ID.",
      "Indoor preliminary round and outdoor final round.",
      "Top five performers qualify for final stage.",
      "Karaoke tracks only (MP3); all languages/rap allow.",
      "Offensive or vulgar content is strictly prohibited.",
      "Performance duration must be between 3 and 4 minutes.",
      "Karaoke tracks must not contain backing vocals or auto-tune.",
      "Maintain discipline and avoid lip-syncing."
    ],
    fee: "₹99",
    imageUrl: "/assets/events/singing.jpg"
  },
  {
    id: 5, title: "Mime", category: "on-stage", iconName: "Masks",
    description: "Team-based stage performance expressing a theme using only body language and expressions.",
    duration: "3–5 mins", teamSize: "5–10 members",
    organizers: ["T. Viswa Gnan Deep (6302877873)", "Pavithra R (9342614326)"],
    rules: [
      "Each team must consist of 5 to 10 members.",
      "Performance time limit: 3–5 minutes.",
      "Theme must be decent and suitable for a college audience.",
      "Talking, singing, or lip-syncing is strictly prohibited.",
      "Only background music/sound effects without human voices.",
      "Props not permitted; costumes and face paint allowed.",
      "Offensive or obscene content is strictly prohibited.",
      "Maintain stage discipline and report on time."
    ],
    fee: "₹99",
    imageUrl: "/assets/events/mime.jpg"
  },
  {
    id: 6, title: "Short Film", category: "on-stage", iconName: "Video",
    description: "Encourages students to showcase storytelling. Judged on filmmaking quality and presentation.",
    duration: "Max 15 mins", teamSize: "Team",
    organizers: ["Kishan Babu (8807959322)", "Sanjeev Sivam (8122053986)"],
    rules: [
      "No fixed theme; any genre is allowed.",
      "Duration: Max 15 minutes (including titles and credits).",
      "Subtitles mandatory if the language is not common.",
      "Content must be decent; abusive words must be muted.",
      "Content that hurts sentiments/dignity is not permitted.",
      "Upload to Drive and submit one day before the event.",
      "Strictly follow college rules and guidelines.",
      "The judges' decision is final and binding."
    ],
    fee: "₹99",
    imageUrl: "/assets/events/short-film.jpg"
  },

  // OFF STAGE
  {
    id: 7, title: "Project Presentation", category: "off-stage", iconName: "Cpu",
    description: "Showcase working models or innovative solutions emphasizing creativity and technical implementation.",
    duration: "Fixed Time", teamSize: "1–4 members",
    organizers: ["Kareena (9345668033)", "Rishika (7824944507)"],
    rules: [
      "Participation individually or in teams of up to 4 members.",
      "Projects must be original and participant-developed.",
      "Both hardware and software projects are permitted.",
      "Participants must bring their own project materials/setup.",
      "Fixed time for demonstration and explanation.",
      "Judges may question participants during evaluation.",
      "Maintain proper discipline and safety throughout.",
      "Judges' and organizers' decisions are final."
    ],
    fee: "₹99",
    imageUrl: "/assets/events/escape-the-matrix.jpg"
  },

  {
    id: 8, title: "Paper Presentation", category: "off-stage", iconName: "FileText",
    description: "Platform for presenting innovative ideas, focusing on originality and effective communication.",
    duration: "Limited Time", teamSize: "1–4 members",
    organizers: ["Antony Cross Oshani (8807958429)", "Devamitra (9488826993)"],
    rules: [
      "Individual or team participation (up to 4 members).",
      "Papers must be original; plagiarism leads to disqualification.",
      "Abstract and PPT submission mandatory before the event.",
      "Presentation time strictly limited (including Q&A).",
      "Must bring presentation in PPT/PDF format.",
      "Evaluation based on innovation and technical depth.",
      "Report at the venue 30 minutes prior to the event.",
      "Judges' decision will be final and binding."
    ],
    fee: "₹99",
    imageUrl: "/assets/events/paper-presentation.jpg"
  },
  {
    id: 9, title: "Escape the Matrix", category: "off-stage", iconName: "Terminal",
    description: "Team-based technical challenge through quiz, word-guessing, and debugging rounds.",
    duration: "3 Rounds", teamSize: "1–3 members",
    organizers: ["Rufina Laurel (8870415592)", "Swathika (8870700760)", "Purusothaman (7397520061)"],
    rules: [
      "Team-based event (1 to 3 members per team).",
      "Round 1: Technical quiz (20 questions, 20 minutes).",
      "50% of teams from R1 qualify for Round 2.",
      "Round 2: Technical word-guessing (15 questions, 60s each).",
      "Round 3: Debugging round (10 programming questions).",
      "Final Round: 3 minutes per debugging question.",
      "Best overall performance across all rounds wins.",
      "Participants must bring their laptop.",
      "Organizers' decision is final."
    ],
    fee: "₹99",
    imageUrl: "/assets/events/escape-the-matrix.jpg"
  },
  {
    id: 10, title: "Live Edit", category: "off-stage", iconName: "Camera",
    description: "Real-time video editing competition. Judging focuses on creativity and storytelling.",
    duration: "2 hours", teamSize: "Individual",
    organizers: ["Sugantharaj (9342614326)", "Angel Mary Varghese (8606685304)", "Monish (8610730654)"],
    rules: [
      "Any video editing software (mobile/laptop/desktop).",
      "Participant should bring required device.",
      "Total event duration: 2 hours.",
      "Submit final edited video before the deadline.",
      "Focus on storytelling, hooks, transitions, B-roll, and SFX.",
      "Professional content only; offensive material prohibited.",
      "Harmful or inappropriate activities promotion forbidden.",
      "Misconduct leads to disqualification.",
      "Judges' decision is final and binding."
    ],
    fee: "₹99",
    imageUrl: "/assets/events/live-edit-battle.jpg"
  },
  {
    id: 11, title: "Human Calculator", category: "off-stage", iconName: "Calculator",
    description: "Individual mental math competition solving problems within limited time.",
    duration: "2 Rounds", teamSize: "Individual",
    organizers: ["Rahul (7397437798)", "Sirisha (9790152687)", "Sneha (9863644589)"],
    rules: [
      "Individual participation with no team involvement.",
      "Preliminary and final rounds included.",
      "Arithmetic: +, -, *, /, and squares.",
      "Each question answered within given time limit.",
      "Positive marks for correct; negative marks for wrong.",
      "Gagdets, pen, paper, and hand counting prohibited.",
      "Top performers from R1 qualify for final round.",
      "Judges' decision is final."
    ],
    fee: "₹99",
    imageUrl: "/assets/events/human-calculator.jpg"
  },
  {
    id: 12, title: "Speed X – Typing", category: "off-stage", iconName: "Keyboard",
    description: "Tests typing speed and accuracy in a competitive digital typing test.",
    duration: "Time-bound", teamSize: "Individual",
    organizers: ["Pavithra Sri (6380257787)", "Nithiyapriya (9150652241)", "Jaishanth (8438193027)"],
    rules: [
      "Individual participation event.",
      "Participants must bring their own laptop/computer.",
      "Test begins on coordinator's instruction.",
      "Time-bound test with auto-submission.",
      "Evaluation based on speed and correctness.",
      "Smart devices or external assistance prohibited.",
      "Copy-paste and auto-correction not allowed.",
      "Malpractice results in immediate disqualification."
    ],
    fee: "₹99",
    imageUrl: "/assets/events/speed-x-typing.jpg"
  },
  {
    id: 13, title: "Reel Creation", category: "off-stage", iconName: "Smartphone",
    description: "Short-form video making event focusing on creativity and relevance.",
    duration: "Max 90 sec", teamSize: "1–3 members",
    organizers: ["Vivaa (9363315750)", "Dinesh Eswar (7200295986)", "Nithishwaran (8754330333)"],
    rules: [
      "Open to all; individual or teams up to three members.",
      "Only one reel per participant or team allowed.",
      "Maximum reel duration: 90 seconds.",
      "Originality is mandatory; no copied content.",
      "Offensive or vulgar content strictly prohibited.",
      "Recording/editing on personal mobile/laptops only.",
      "Shooting allowed only in permitted campus areas.",
      "Judges' and organizers' decisions are final."
    ],
    fee: "₹99",
    imageUrl: "/assets/events/reel-creation.jpg"
  },
  {
    id: 14, title: "Push Up Challenge", category: "off-stage", iconName: "Activity",
    description: "Fitness event counting standard push-ups within a fixed time limit.",
    duration: "3 minutes", teamSize: "Individual",
    organizers: ["Pangaj (9345837731)", "Sharan Sadithya (6374422057)"],
    rules: [
      "Individual event with 3-minute time limit.",
      "Only standard push-ups with proper form allowed.",
      "Maintain a straight plank position throughout.",
      "Chest close to ground and arms fully extended.",
      "No knee support; rest only in plank position.",
      "Improper form repetitions will not be counted.",
      "Each participant gets only one attempt.",
      "The judge's decision is final and binding."
    ],
    fee: "₹99",
    imageUrl: "/assets/events/push-up-challenge.jpg"
  },
  {
    id: 15, title: "Tech Quiz", category: "off-stage", iconName: "Brain",
    description: "Team-based technical and general knowledge quiz across multiple rounds.",
    duration: "Multiple Rounds", teamSize: "Exactly 4 members",
    organizers: ["L.K. Lokesh (9677726236)", "Navadeep R (8754854471)", "Jaisuriya DD (6381125471)", "Priyanka (9345850383)"],
    rules: [
      "Participation in teams of exactly four members.",
      "Must carry a valid college ID during the event.",
      "Includes MCQs, rapid fire, and logical reasoning.",
      "Teams must answer within specified time limits.",
      "Mobile phones/external help strictly prohibited.",
      "Follow quizmaster's instructions and maintain discipline.",
      "Any misconduct leads to disqualification.",
      "Judges' decision is final and binding."
    ],
    fee: "₹99",
    imageUrl: "/assets/events/quizy-one.jpg"
  },

  // GAMES
  {
    id: 21, title: "BGMI – Battle Royale", category: "games", iconName: "Target",
    description: "Competitive BGMI match on Livik map. Placement decides winners.",
    duration: "Custom Room", teamSize: "Squad of 4",
    organizers: ["Rajesh (8608290740)", "Divagar (7810013479)", "Murali Dharan (9361039623)", "Vinaykailash (9500202034)", "Rohankumar (9363904347)", "Harihara Prasath (8248223809)"],
    rules: [
      "Custom rooms on the Livik map (Squad format).",
      "Emulators, hacks, glitches, or exploits forbidden.",
      "Only registered players; no teaming with enemies.",
      "Abusive voice or text chat not allowed.",
      "Map events and special items are prohibited.",
      "Any violation leads to disqualification.",
      "The organizer's decision is final."
    ],
    fee: "₹75",
    imageUrl: "/assets/events/bgmi.jpg"
  },
  {
    id: 16, title: "Box Cricket", category: "games", iconName: "Target",
    description: "Fast-paced indoor cricket game with modified rules.",
    duration: "4 Overs", teamSize: "Max 5 members",
    organizers: ["Rohit G (7094861575)", "Sabari Kannan (7083047006)", "Shrish HS (9345069270)"],
    rules: [
      "Each team has a maximum of five players.",
      "Matches played using a Cosco ball only.",
      "Ball must pitch within the guided line to be valid.",
      "Only underarm bowling allowed; overarm is no-ball.",
      "Teams allotted four overs; runs recorded on scorecard.",
      "A one-pitch one-hand catch is considered out.",
      "Teams must maintain fair play throughout.",
      "The umpire's decision is final and binding."
    ],
    fee: "₹75",
    imageUrl: "/assets/events/cricket.jpg"
  },
  {
    id: 17, title: "Hand Cricket – Inverse", category: "games", iconName: "Hand",
    description: "Reverse finger-cricket where the lowest score wins.",
    duration: "Till out", teamSize: "Individual/Team",
    organizers: ["Purusothaman K (7397520061)", "Vijay M (7092046719)", "Jamal Kareem (9790518463)"],
    rules: [
      "Show numbers from 1 to 6 using fingers simultaneously.",
      "Showing the same number results in an OUT.",
      "Showing different numbers counts as runs.",
      "Zero (0) or invalid numbers are not allowed.",
      "Each participant/team gets only one innings.",
      "Lowest score is declared the winner.",
      "The organizers' decision is final."
    ],
    fee: "₹75",
    imageUrl: "/assets/events/hand-cricket-inverse.jpg"
  },
  {
    id: 18, title: "Chess.com", category: "games", iconName: "Table",
    description: "Competitive chess tournament based on continuous play.",
    duration: "Continuous", teamSize: "Individual",
    organizers: ["Ranjith (9080410933)", "Nishanth (8428423173)", "Vetri (9080510869)"],
    rules: [
      "Continuous play format (no elimination after loss).",
      "Use only one registered account per participant.",
      "Scoring: Win (2), Draw (1), Loss (0).",
      "Engines or external assistance strictly prohibited.",
      "Consultation or group play is not allowed.",
      "Ensure uninterrupted participation during the event.",
      "Unfair practices lead to disqualification.",
      "The organizers' decision is final and binding."
    ],
    fee: "₹75",
    imageUrl: "/assets/events/chess-com.jpg"
  },
  {
    id: 19, title: "Don't Drop It", category: "games", iconName: "Circle",
    description: "Carry a lemon on a spoon to the finish line without dropping it.",
    duration: "One attempt", teamSize: "Individual",
    organizers: ["Sunandhana Suriya (9840214711)", "Aniruth Shyamjith (9037517892)", "Aravind M (6379767504)"],
    rules: [
      "Individual participation event.",
      "Hold spoon in mouth only (no hands allowed).",
      "Lemon must remain on the spoon throughout the race.",
      "Fallback results in restarting from the starting point.",
      "Any physical support leads to disqualification.",
      "Fair play based decision by organizers is final."
    ],
    fee: "₹75",
    imageUrl: "/assets/events/dont-drop-it.jpg"
  },
  {
    id: 20, title: "Free Fire – Clash Squad", category: "games", iconName: "Flame",
    description: "Combat in custom rooms; team winning the most rounds wins.",
    duration: "Custom Room", teamSize: "Squad",
    organizers: ["Rajesh (8608290740)", "Divagar (7810013479)", "Murali Dharan (9361039623)", "Vinaykailash (9500202034)", "Rohankumar (9363904347)", "Harihara Prasath (8248223809)"],
    rules: [
      "Custom rooms using Clash Squad mode only.",
      "Total of four rounds played per match.",
      "Team winning max rounds wins the match.",
      "Character skills and gun skins are not allowed.",
      "Gloo Wall breaking and emotes are prohibited.",
      "Only straight-to-straight fights permitted.",
      "Violation leads to immediate disqualification.",
      "Organizer decision is final."
    ],
    fee: "₹75",
    imageUrl: "/assets/events/free-fire.jpg"
  },
  {
    id: 22, title: "Call Of Duty – Tdm", category: "games", iconName: "Sword",
    description: "Team Deathmatch in custom rooms in a knockout format.",
    duration: "TDM", teamSize: "5 vs 5",
    organizers: ["Rajesh (8608290740)", "Divagar (7810013479)", "Murali Dharan (9361039623)", "Vinaykailash (9500202034)", "Rohankumar (9363904347)", "Harihara Prasath (8248223809)"],
    rules: [
      "Custom rooms using Team Deathmatch mode (5v5).",
      "Maps selected by the organizer; mobile only.",
      "No hacks, glitches, or abusive chat allowed.",
      "Quitting matches leads to disqualification.",
      "Maintain fair gameplay without teaming.",
      "The organizer's decision is final."
    ],
    fee: "₹75",
    imageUrl: "/assets/events/cod.jpg"
  },

  // SPORTS
  {
    id: 23, title: "Cricket 7s", category: "sports", iconName: "Activity",
    description: "High-energy short-format cricket tournament with 5-over matches.",
    duration: "5 Overs", teamSize: "7 + 3 Sub",
    organizers: ["Pugalvaasan (9092447474)", "Prasithi Kumaran (8248372122)"],
    rules: [
      "Teams of 7 playing members and 3 substitutes.",
      "Matches played using 5-over per side format.",
      "Tournament follows a knockout format.",
      "Standard tennis-ball ground cricket rules apply.",
      "Substitutions only between matches (except injury).",
      "Report at venue 30 minutes before match.",
      "Umpire decisions are final.",
      "Committee right to modify rules for fairness."
    ],
    fee: "₹500/Team",
    imageUrl: "/assets/events/cricket.jpg"
  },
  {
    id: 24, title: "Football 7's", category: "sports", iconName: "Shield",
    description: "7-a-side matches emphasizing skill, strategy, and teamwork.",
    duration: "30 mins", teamSize: "7 + 3 Sub",
    organizers: ["Shrish HS (9345069270)", "Aravind M (6379767504)"],
    rules: [
      "Each team registers 7 players plus 3 substitutes.",
      "Matches are 30 minutes (15-5-15 format).",
      "Side-outs resumed via throw-ins.",
      "Rolling substitutions and offside rules enforced.",
      "Tiebreakers: 3 kicks, then sudden death.",
      "Referee decisions are final and binding.",
      "Tournament follows a knockout format."
    ],
    fee: "₹500/Team",
    imageUrl: "/assets/events/football.jpg"
  },
  {
    id: 25, title: "Kabaddi", category: "sports", iconName: "Trophy",
    description: "Contact sport scoring through raids and defensive tackles.",
    duration: "AKFI Rules", teamSize: "Team 7+3",
    organizers: ["Vetri (9080510869)"],
    rules: [
      "Strictly as per AKFI rules and guidelines.",
      "Raider must chant 'kabaddi' or be declared out.",
      "Bonus awarded with 6/7 defenders on court.",
      "Stepping outside boundary results in being out.",
      "Lobbies active only after contact/struggle.",
      "5-second rule for starting a new raid.",
      "Fair play mandatory; results are final."
    ],
    fee: "₹500/Team",
    imageUrl: "/assets/events/kabaddi.jpg"
  },
  {
    id: 26, title: "Volleyball 6's", category: "sports", iconName: "Circle",
    description: "Best-of-three set format. Winners decided by points and teamwork.",
    duration: "Best of 3", teamSize: "6 + 3 Sub",
    organizers: ["Jamal Kareem (9790518463)"],
    rules: [
      "Max 6 players plus up to 3 substitutes.",
      "Sets to 15 points (min 2 point lead to win).",
      "Rotation mandatory after winning the serve.",
      "Underhand and overhand serves are both allowed.",
      "Penalties for net, double touch, or foot faults.",
      "Substitution only with referee permission.",
      "Referee's decision is final and binding."
    ],
    fee: "₹500/Team",
    imageUrl: "/assets/events/volley-ball.jpg"
  },
  {
    id: 27, title: "Kho Kho", category: "sports", iconName: "Timer",
    description: "Timed innings aiming for maximum points through chaser tags.",
    duration: "2 Innings", teamSize: "Team of 12",
    organizers: ["Rahul (7397437798)"],
    rules: [
      "Team of 12; 9 play at a time (8 seated + 1 active).",
      "2 innings per team, each lasting 9 minutes.",
      "Kho must be given from behind a seated teammate.",
      "Chasers cannot cross central lane directly.",
      "Direction change allowed only via pole turns.",
      "Defenders enter in batches of 3.",
      "Highest score wins; referee decision is final."
    ],
    fee: "₹500/Team",
    imageUrl: "/assets/events/kho-kho.jpg"
  },

  // TRACK - ATHLETICS EVENTS
  {
    id: 28, title: "100m & 400m Dash", category: "track", iconName: "FastForward",
    description: "Sprints testing explosive acceleration and sustained speed over one lap.",
    duration: "Heats + Finals", teamSize: "Individual",
    organizers: ["Rohit G (7094861575)"],
    rules: [
      "Heats of 6-7 runners; top 2 qualify for Finals.",
      "Final rankings determined in the final round.",
      "Must maintain lane discipline throughout.",
      "False starts results in potential disqualification.",
      "Standard track rules apply."
    ],
    fee: "₹150",
    imageUrl: "/assets/events/100m-dash.jpg"
  },
  {
    id: 30, title: "800m Run", category: "track", iconName: "Timer",
    description: "Middle-distance event conducted as a direct final.",
    duration: "Final", teamSize: "Individual",
    organizers: ["Rohit G (7094861575)"],
    rules: [
      "Direct Final without heats; top 3 declared winners.",
      "Participants must follow track discipline.",
      "Avoid obstruction; fair play is priority."
    ],
    fee: "₹150",
    imageUrl: "/assets/events/800m-run.jpg"
  },
  {
    id: 31, title: "4 x 100m Relay", category: "track", iconName: "Users2",
    description: "Requires speed, coordination, and precise baton exchanges.",
    duration: "Heats + Finals", teamSize: "Team of 4",
    organizers: ["Rohit G (7094861575)"],
    rules: [
      "Each team must consist of 4 members.",
      "Top 2 teams from each heat qualify for Finals.",
      "Baton exchange within designated zone only.",
      "Dropping baton may lead to disqualification."
    ],
    fee: "₹150",
    imageUrl: "/assets/events/4x100m-relay.jpg"
  },
  {
    id: 32, title: "Long Jump", category: "track", iconName: "ArrowUpRight",
    description: "Measures take-off precision and explosive strength.",
    duration: "3 Attempts", teamSize: "Individual",
    organizers: ["Rohit G (7094861575)"],
    rules: [
      "Each athlete is given 3 attempts.",
      "Only valid jumps considered for final ranking.",
      "Best distance from three attempts is recorded."
    ],
    fee: "₹150",
    imageUrl: "/assets/events/long-jump.jpg"
  },
  {
    id: 33, title: "Shot Put", category: "track", iconName: "ArrowRight",
    description: "Throwing weighted shot for maximum distance using technique and power.",
    duration: "3 Attempts", teamSize: "Individual",
    organizers: ["Rohit G (7094861575)"],
    rules: [
      "Each participant receives 3 attempts.",
      "Best throw distance counts for rankings.",
      "Fouls do not count as valid attempts."
    ],
    fee: "₹150",
    imageUrl: "/assets/events/shot-put.jpg"
  },
];

export const categoryLabels: Record<EventData["category"], string> = {
  "on-stage": "ON STAGE",
  "off-stage": "OFF STAGE",
  "games": "GAMES",
  "sports": "SPORTS",
  "track": "TRACK",
};

export const categoryOrder: EventData["category"][] = ["on-stage", "off-stage", "games", "sports", "track"];

export const registrationLinks: Record<EventData["category"], string> = {
  "on-stage": "https://forms.gle/WQy6nqbUAimfRXq39",
  "off-stage": "https://forms.gle/kg6xhxiHx2ewysGr5",
  "games": "https://forms.gle/JrMjEHNufb7vdvtT7",
  "sports": "https://forms.gle/Mjd9Tp94RduELJfFA",
  "track": "https://forms.gle/hkRscAhEAS3w65Xh7",
};