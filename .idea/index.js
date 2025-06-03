const faq = {
    "How do I get a visa?": "You need an invitation letter and must apply through your consulate.",
    "How to register my residence?": "Go to your local migration office within 7 days of arrival.",
    "Where are the dorms?": "Use the map section to locate student dormitories near your university."
};

function filterGuides(query) {
    const list = document.getElementById("guide-list");
    Array.from(list.children).forEach(li => {
        li.style.display = li.textContent.toLowerCase().includes(query.toLowerCase()) ? "" : "none";
    });
}

function loadFAQ() {
    const chatbox = document.getElementById("chatbox");
    const faqContainer = document.createElement("div");
    faqContainer.id = "faq-buttons";


    if (!document.getElementById("faq-buttons")) {
        Object.keys(faq).forEach(q => {
            const btn = document.createElement("button");
            btn.textContent = q;
            btn.classList.add("faq-btn");
            btn.onclick = () => showAnswer(q);
            faqContainer.appendChild(btn);
        });
        chatbox.appendChild(faqContainer);
    }
}

function showAnswer(question) {
    const chatbox = document.getElementById("chatbox");

    // user question
    const userMsg = document.createElement("div");
    userMsg.className = "chat-message user";
    userMsg.textContent = question;
    chatbox.appendChild(userMsg);

    // bot answer
    const botMsg = document.createElement("div");
    botMsg.className = "chat-message bot";
    botMsg.textContent = faq[question];
    chatbox.appendChild(botMsg);

    chatbox.scrollTop = chatbox.scrollHeight;
}


function addReminder() {
    const input = document.getElementById("reminderInput");
    const list = document.getElementById("reminderList");
    if (input.value.trim()) {
        const li = document.createElement("li");
        li.textContent = input.value;
        list.appendChild(li);
        input.value = "";
    }
}

function upvote(button) {
    button.textContent = "✅ Upvoted";
    button.disabled = true;
}

document.addEventListener("DOMContentLoaded", loadFAQ);
