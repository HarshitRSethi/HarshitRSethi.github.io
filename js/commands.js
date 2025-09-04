const youtube = "https://www.youtube.com/@HarshitSethi-s4o/";
const linkedin = "https://www.linkedin.com/in/harshitrsethi/";
const github = "https://github.com/HarshitRSethi/";
const email = "mailto:harshitrsethi@gmail.com";
const chatgpt = "https://chatgpt.com/?model=auto";
const whatsapp = "https://web.whatsapp.com/";
const telegram = "https://web.telegram.org/a/";
const note = "https://keep.google.com/u/2/#home";
const chess = "https://www.chess.com/home";
const college = "https://www.iiita.ac.in/";

const ls = ["about.txt     github.txt    linkedin.txt", "youtube.txt", "<br>"];

const cat = ["print files on the standard output", "<br>"];

const rollno = ["IIT2025003", "<br>"];

const whois = [
  "Hey, I’m Harshit Sethi — a first year college student at IIIT Allahabad.",
  "I'm passionate about Technology, Productivity, and Competitive Programming.",
  "",
  "This terminal-styled portfolio reflects my journey — built even before college started.",
  "College is a new chapter for me — I’m ready to grow, collaborate, and be more open to learning and connecting with people.",
  "",
  "Let’s see where this goes 🚀",
  "<br>",
];

var whoami = [
  "Harshit Sethi – IIITA IT ’29 | Curious learner & new beginnings enthusiast 🌱",
  "<br>",
];

const social = [
  'youtube        <a href="' +
    youtube +
    '" target="_blank">youtube/HarshitSethi-s4o</a>',
  'github         <a href="' +
    github +
    '" target="_blank">github/HarshitRSethi</a>',
  'linkedin       <a href="' +
    linkedin +
    '" target="_blank">linkedin/harshit-sethi</a>',
  "<br>",
];

const sudo = [
  '<span class="command">sudo</span>           you are not allowed to use root privileges',
  "<br>",
];

const projects = [
  "<br>",
  "Still learning... most projects are on GitHub, LinkedIn or are confidential",
  "<br>",
];

const meme = [
  "You shouldn't have typed that 😈",
  "<img src='https://media.tenor.com/_4YgA77ExHEAAAAC/rickroll-rick-ashley.gif' width='320' alt='rickroll gif'>",
  "<br>",
];

const achievements = [
  "<br>",
  "• Scored 92% in CBSE Class 10 Board Exams",
  "• Scored 87% in Class 12 (with only 5 days of prep for PE & English)",
  "• 99.78 percentile in JEE Mains (AIR 3398, GEN)",
  "• Joined IIIT Allahabad, IT Branch (Batch of 2029)",
  "• Created & launched this terminal-style website before college",
  "<br>",
];

const help = [
  '<span class="command">help</span>           You obviously already know what this does',
  '<span class="command">clear</span>          Clear terminal',
  '<span class="command">date</span>           Show current date and time',
  '<span class="command">email</span>          Write an E-mail to Harshit',
  '<span class="command">history</span>        View command history',
  '<span class="command">neofetch</span>       Display system information',
  '<span class="command">projects</span>       View coding projects',
  '<span class="command">social</span>         Display social networks',
  '<span class="command">theme</span>          Toggle between available themes',
  '<span class="command">themes</span>         List all themes (default, daylight, matrix)',
  '<span class="command">uptime</span>         Show how long ago this site was made',
  '<span class="command">meme</span>           View a meme',
  '<span class="command">whois</span>          Who is Harshit Sethi',
  '<span class="command">achievements</span>   View academic and personal highlights',
  '<span class="command">rollno</span>         My IIITA enrollment/roll number',

  "<br>",
];

const sessionStart = new Date("2025-06-22T15:35:00Z");

function getUptime() {
  const ms = Date.now() - sessionStart.getTime();
  const sec = Math.floor(ms / 1000) % 60;
  const min = Math.floor(ms / (1000 * 60)) % 60;
  const hr = Math.floor(ms / (1000 * 60 * 60)) % 24;
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  return `${days}d ${hr}h ${min}m ${sec}s`;
}

function getDateTime() {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "medium",
  }).format(new Date());
}

function getThemeDisplayName() {
  const theme = localStorage.getItem("theme") || "default";
  const themeDisplayNames = {
    default: "Default",
    daylight: "Daylight",
    matrix: "Matrix",
  };
  return themeDisplayNames[theme] || "Default";
}

const banner = [
  "<span class='color2'>  ▄     ▄   </span>",
  "<span class='color2'> ▄ ▀▄   ▄▀ ▄</span>     • OS:     HarshitOS 1.0",
  "<span class='color2'> █▄█▀███▀█▄█</span>     • Host:   harshitrsethi.github.io",
  "<span class='color2'> ▀█████████▀</span>     • Theme:  {{theme}}",
  "<span class='color2'>  ▄▀   ▀▄   </span>     • Uptime: " + getUptime(),
  "<br>",
  "<span class='color2'>Welcome to Harshit’s interactive terminal.</span>",
  "<span class='color2'>Type</span> <span class='command'>'help'</span> <span class='color2'>to see available commands.</span>",
];
