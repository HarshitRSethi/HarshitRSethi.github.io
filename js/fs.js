const aboutMe = `Hey, I’m Harshit Sethi — a first year college student at IIIT Allahabad.
I'm passionate about C++, Git, and Competitive Programming.
This terminal site is my way of showcasing what I’m learning even before college starts.

College for me is a fresh start — I’ve mostly been on my own until now, but I’m excited to learn,
collaborate, and interact more with like-minded people.

Expect projects, experiments, and a lot more soon.
Let’s learn, build, and grow — one command at a time.`;

const socials = `linkedin: https://www.linkedin.com/in/harshit-sethi-629013368/
github:   https://github.com/HarshitRSethi/
youtube: https://www.youtube.com/@HarshitSethi-s4o/`;

const fs = {
  "/": {
    "about.txt": aboutMe,

    configs: {
      "theme.json": `{"theme":"hacker","font":"JetBrains Mono"}`,
      "cli.json": `{"shell":"zsh"}`,
      vscode_profiles: {
        "_dev.code-profile": `coming soon at:\nhttps://github.com/HarshitRSethi/`,
      },
    },

    "contact.txt": "📧 harshitrsethi@gmail.com",

    projects: {},

    "README.md": "# Harshit’s Terminal Site – Type 'help' to explore!",
    "socials.txt": socials,
  },
};

let currentDir = "/";

function mkdir(name) {
  const dir = getPath(currentDir);
  if (dir[name]) {
    return addLine(
      `mkdir: cannot create directory '${name}': File exists`,
      "error",
      80
    );
  }
  dir[name] = {};
  addLine("", "", 0);
}

function touch(name) {
  const dir = getPath(currentDir);
  if (dir[name]) {
    return;
  } // already exists
  dir[name] = null; // simulate file
  addLine("", "", 0);
}

function cd(name) {
  if (name === "..") {
    if (currentDir !== "/") {
      currentDir = currentDir.replace(/\/[^/]+\/?$/, "") || "/";
    }
    return;
  }

  const dir = getPath(currentDir);
  if (!dir[name] || typeof dir[name] !== "object") {
    return addLine(`cd: ${name}: No such directory`, "error", 80);
  }

  currentDir = currentDir.endsWith("/")
    ? currentDir + name
    : currentDir + "/" + name;
  $("prefix").textContent = "harshit@harshitos:" + currentDir + " $ ";
}

function getPath(path) {
  const parts = path.split("/").filter(Boolean);
  let dir = fs["/"];
  for (const p of parts) {
    dir = dir[p];
  }
  return dir;
}

function getPathParts(basePath, parts) {
  const baseParts = basePath.split("/").filter(Boolean);
  const fullPath = [...baseParts, ...parts];
  let dir = fs["/"];
  for (const p of fullPath) {
    if (!dir[p] || typeof dir[p] !== "object") {
      return null;
    }
    dir = dir[p];
  }
  return dir;
}
