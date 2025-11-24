let before = document.getElementById("before");
let liner = document.getElementById("liner");
let command = document.getElementById("typer");
let textarea = document.getElementById("texter");
let terminal = document.getElementById("terminal");

let git = 0;
let pw = false;
let pwd = false;
let commands = [];

try {
  const saved = localStorage.getItem("cmdHistory");
  if (saved) {
    commands = JSON.parse(saved);
  }
} catch (e) {
  console.warn("Failed to load history:", e);
}

function setTheme(themeName) {
  document.documentElement.setAttribute("data-theme", themeName);
  localStorage.setItem("theme", themeName);
}

function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "default";
  setTheme(savedTheme);
}

function toggleTheme() {
  const current = localStorage.getItem("theme") || "default";
  const next =
    current === "default"
      ? "daylight"
      : current === "daylight"
      ? "matrix"
      : "default";
  setTheme(next);
}

initTheme();

window.addEventListener("keyup", enterKey);

console.log(
  "%cWelcome to Harshit’s Terminal 👨‍💻",
  "color: #74c7ec; font-weight: bold; font-size: 20px;"
);

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  const { key } = e;

  if (e.ctrlKey && key === "c") {
    addLine(`^C`, "error", 0);
    textarea.value = "";
    command.innerHTML = "";
    return;
  }
  if (key === "µ") {
    location.reload();
  } // keyCode 181 (rare usage)

  if (key === "Enter") {
    const input = command.innerHTML.trim();
    if (input) {
      localStorage.setItem("cmdHistory", JSON.stringify(commands));
      commands.push(input);
      git = commands.length;
      addLine(`harshit@harshitos:${currentDir} $ ${input}`, "no-animation", 0);
      commander(input);
      command.innerHTML = textarea.value = "";
    } else {
      addLine(`harshit@harshitos:${currentDir} $ ${input}`, "no-animation", 0);
    }
    typeIt(textarea);
  }

  if (key === "ArrowUp" && git > 0) {
    textarea.value = commands[--git];
    command.innerHTML = textarea.value;
  }
  if (key === "ArrowDown" && git < commands.length) {
    textarea.value = commands[++git] || "";
    command.innerHTML = textarea.value;
  }
}

const commandMap = {
  help: () => loopLines(help, "headerLine margin", 80),

  theme: () => {
    toggleTheme();
    addLine("Theme changed!", "headerLine", 80);
  },
  themes: () => {
    addLine("Available themes: default, daylight, matrix", "headerLine", 80);
  },

  whois: () => loopLines(whois, "headerLine margin", 80),

  whoami: () => loopLines(whoami, "headerLine margin", 80),

  rollno: () => loopLines(rollno, "headerLine margin", 80),

  tab: () => {
    const homepage =
      localStorage.getItem("myTabUrl") || "https://www.google.com";
    addLine(`Opening ${homepage}...`, "headerLine", 80);
    newTab(homepage);
  },

  chatgpt: () => {
    addLine("Opening Chat-GPT...", "headerLine", 0);
    newTab(chatgpt);
  },

  telegram: () => {
    addLine("Opening Telegram...", "headerLine", 0);
    newTab(telegram);
  },

  note: () => {
    addLine("Opening Google Keep...", "headerLine", 0);
    newTab(note);
  },

  chess: () => {
    addLine("Opening Chess...", "headerLine", 0);
    newTab(chess);
  },

  college: () => {
    addLine("Opening College's Website...", "headerLine", 0);
    newTab(college);
  },

  youtube: () => {
    addLine("Opening YouTube...", "headerLine", 80);
    newTab(youtube);
  },
  yt: () => commandMap.youtube(),
  video: () => commandMap.youtube(),

  linkedin: () => {
    addLine("Opening LinkedIn...", "headerLine", 0);
    newTab(linkedin);
  },

  cc: () => {
    addLine("Opening CodeChef...", "headerLine", 0);
    newTab(cc);
  },

  codechef: () => {
    addLine("Opening CodeChef...", "headerLine", 0);
    newTab(cc);
  },

  cf: () => {
    addLine("Opening CodeForces...", "headerLine", 0);
    newTab(cf);
  },

  codeforces: () => {
    addLine("Opening CodeForces...", "headerLine", 0);
    newTab(cf);
  },

  github: () => {
    addLine("Opening GitHub...", "headerLine", 0);
    newTab(github);
  },

  social: () => loopLines(social, "headerLine margin", 80),

  sudo: () => loopLines(sudo, "headerLine margin", 80),

  projects: () => loopLines(projects, "headerLine margin", 80),
  history: () => {
    loopLines(commands, "headerLine", 80);
    addLine("<br>", "cliCommand", 80 * commands.length + 50);
  },
  clearhistory: () => {
    localStorage.removeItem("cmdHistory");
    commands = [];
    addLine("Command history cleared!", "headerLine", 80);
  },

  email: () => {
    addLine(
      `Opening mailto:<a href="${email}">${email}</a>...`,
      "headerLine",
      80
    );
    newTab(email);
  },

  clear: () =>
    setTimeout(() => {
      terminal.innerHTML = '<a id="before"></a>';
      before = document.getElementById("before");
    }, 1),
  cls: () => commandMap.clear(),

  uptime: () => {
    addLine(`Uptime: ${getUptime()}`, "headerLine", 80);
  },

  achievements: () => loopLines(achievements, "headerLine margin", 80),

  date: () => {
    addLine(`Date: ${getDateTime()}`, "headerLine", 80);
  },

  neofetch: () => {
    const themedBanner = banner.map((line) =>
      line.replace("{{theme}}", getThemeDisplayName())
    );
    loopLines(themedBanner, "headerLine", 80);
  },
  meme: () => loopLines(meme, "headerLine margin", 80),
};

function commander(input) {
  const [cmd, ...args] = input.trim().split(" ");
  const arg = args.join(" ");

  const fn = commandMap[cmd.toLowerCase()];
  fn
    ? fn()
    : addLine(
        `Command not found. Type <span class="cliCommand">'help'</span>.`,
        "error",
        100
      );
}

function newTab(link) {
  setTimeout(function () {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function () {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function (item, index) {
    addLine(item, style, index * time);
  });
}

function getThemeDisplayName() {
  const theme = localStorage.getItem("theme") || "default";
  const names = {
    default: "Default",
    daylight: "Daylight",
    matrix: "Matrix",
  };
  return names[theme] || theme;
}
