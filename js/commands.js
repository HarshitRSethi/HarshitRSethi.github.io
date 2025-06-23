const youtube = "https://www.youtube.com/@HarshitSethi-s4o/";
const linkedin = "https://www.linkedin.com/in/harshit-sethi-629013368/";
const github = "https://github.com/HarshitRSethi/";
const email = "mailto:harshitrsethi@gmail.com";




const ls = [
  "about.txt     github.txt    linkedin.txt",
  "youtube.txt",
  "<br>"
];

const cat = [
  "print files on the standard output",
  "<br>"
];

const whois = [
  "Hey, I’m Harshit Sethi — a pre-college student about to join IIIT Allahabad.",
  "I'm passionate about C++, Git, and Competitive Programming (aiming for AlgoWing 🧠).",
  "I’m also enrolled in the IITM BS Data Science program.",
  "",
  "This terminal-styled portfolio will evolve with my journey in ML, cybersecurity, and full stack development.",
  "If you're reading this — I built this before college even started 😤.",
  "<br>"
];




var whoami = [
  "Harshit Sethi – IIITA IT ’29 | IITM DS learner | AlgoWing aspirant",
  "<br>"
];




const social = [
  'youtube        <a href="' + youtube + '" target="_blank">youtube/HarshitSethi-s4o</a>',
  'github         <a href="' + github + '" target="_blank">github/HarshitRSethi</a>',
  'linkedin       <a href="' + linkedin + '" target="_blank">linkedin/harshit-sethi</a>',
  "<br>"
];


const sudo = [
  '<span class="command">sudo</span>           you are not allowed to use root privileges',
  "<br>"
];

const iitmds = [
  "I'm going to be enrolled in the IITM BS Data Science program. Excited for my DS journey!",
  "<br>"
];


const projects = [
  "<br>",
  "Still curating... most projects are offline, on GitHub, or confidential.",
  "<br>"
];

const meme = [
  "You shouldn't have typed that 😈",
  "<img src='https://media.tenor.com/_4YgA77ExHEAAAAC/rickroll-rick-ashley.gif' width='320' alt='rickroll gif'>",
  "<br>"
];



const help = [
  '<span class="command">help</span>           You obviously already know what this does',
  '<span class="command">clear</span>          Clear terminal',
  '<span class="command">clearhistory</span>   Clear saved command history',
  '<span class="command">date</span>           Show current date and time',
  '<span class="command">email</span>          Show E-mail',
  '<span class="command">history</span>        View command history',
  '<span class="command">neofetch</span>       Display system information',
  '<span class="command">projects</span>       View coding projects',
  '<span class="command">iitmds</span>         Info about my IITM DS track',
  '<span class="command">social</span>         Display social networks',
  '<span class="command">theme</span>          Toggle between available themes',
  '<span class="command">themes</span>         List all themes (default, daylight, matrix)',
  '<span class="command">uptime</span>         Show how long you’ve been here',
  '<span class="command">meme</span>           View a secret meme',
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
    matrix: "Matrix"
  };
  return themeDisplayNames[theme] || "Default";
}



const banner = [
  "<span class='color2'>  ▄     ▄   </span>",
  "<span class='color2'> ▄ ▀▄   ▄▀ ▄</span>     • OS:     HarshitOS 1.0",
  "<span class='color2'> █▄█▀███▀█▄█</span>     • Host:   harshitsethi.github.io",
  "<span class='color2'> ▀█████████▀</span>     • Theme:  {{theme}}",
  "<span class='color2'>  ▄▀   ▀▄   </span>     • Uptime: " + getUptime(),
  "<br>",
  "<span class='color2'>Welcome to Harshit’s interactive terminal.</span>",
  "<span class='color2'>Type</span> <span class='command'>'help'</span> <span class='color2'>to see available commands.</span>"
];



