// Splash Screen Loader

window.addEventListener("load", () => {

  setTimeout(() => {

    document.getElementById("splash").style.display = "none";

    document.getElementById("app-content").classList.remove("hidden");

    speak("Welcome to FinOne — Finance for Everyone, Everywhere.");

  }, 4000);

});

// Voice Synthesis Function

function speak(text) {

  const synth = window.speechSynthesis;

  const utter = new SpeechSynthesisUtterance(text);

  utter.rate = 1.05;

  utter.pitch = 1;

  synth.speak(utter);

}

// Voice Command Logic

const sendBtn = document.getElementById("sendCommand");

const voiceInput = document.getElementById("voiceInput");

const responseBox = document.getElementById("response");

sendBtn.addEventListener("click", () => handleCommand(voiceInput.value));

function handleCommand(commandText) {

  const command = commandText.toLowerCase().trim();

  if (!command) return;

  if (command.includes("send") && command.includes("500")) {

    responseBox.textContent = "✅ Sending ₹500 to Rahul Kumar...";

    speak("Processing your payment of 500 rupees to Rahul Kumar.");

  } else if (command.includes("balance")) {

    responseBox.textContent = "💰 Your balance is ₹4,250.";

    speak("Your balance is four thousand two hundred fifty rupees.");

  } else if (command.includes("goal")) {

    responseBox.textContent = "🎯 Goal recorded: " + command;

    speak("Goal saved successfully.");

  } else {

    responseBox.textContent = "🤖 Sorry, I didn’t understand.";

    speak("Sorry, I didn’t understand that command.");

  }

}

// Smart Goals Feature

document.getElementById("saveGoal").addEventListener("click", () => {

  const goal = document.getElementById("goalInput").value;

  if (!goal) return;

  document.getElementById("goalDisplay").textContent = `🎯 Your goal: ${goal}`;

  speak(`Goal saved: ${goal}`);

});

// Dashboard AI Insight

document.getElementById("askAI").addEventListener("click", () => {

  const tips = [

    "Your savings increased 15% this week!",

    "Consider investing 10% of your income.",

    "Try setting a micro goal for emergency savings.",

    "Reduce spending on dining by 5% next month.",

    "You’re doing great! Keep saving smartly."

  ];

  const tip = tips[Math.floor(Math.random() * tips.length)];

  document.getElementById("aiInsight").textContent = tip;

  speak(tip);

});

// Balance Refresh

document.getElementById("refreshBalance").addEventListener("click", () => {

  const newBal = Math.floor(Math.random() * 5000 + 3000);

  document.querySelector(".amount").textContent = `₹${newBal}`;

  speak(`Your updated balance is ${newBal} rupees.`);

});

// Bottom Navigation

const navButtons = document.querySelectorAll(".bottom-nav button");

const sections = document.querySelectorAll("main section");

navButtons.forEach(btn => {

  btn.addEventListener("click", () => {

    const target = btn.getAttribute("data-target");

    sections.forEach(sec => {

      if (sec.id === target) {

        sec.classList.remove("hidden-screen");

      } else sec.classList.add("hidden-screen");

    });

  });

});

// Floating Mic Shortcut

document.getElementById("floatMic").addEventListener("click", () => {

  sections.forEach(sec => {

    if (sec.id === "voice") sec.classList.remove("hidden-screen");

    else sec.classList.add("hidden-screen");

  });

  speak("Hi, I'm FinOne Assistant. How can I help you today?");

});

// Dark Mode Toggle

document.getElementById("themeToggle").addEventListener("change", e => {

  document.body.classList.toggle("dark", e.target.checked);

});