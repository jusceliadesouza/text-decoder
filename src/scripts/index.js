
function processMessage(text, keys, regex) {
  return text.replace(regex, (match) => keys[match]);
}

function encryptMessage() {
  const message = document.getElementById("message").value.toLowerCase();

  const keys = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  const regex = /[eioua]/g;

  const encryptMessage = processMessage(message, keys, regex);
  document.getElementById("messageProcessed").innerText = encryptMessage;

  showResult();
}
function decryptMessage() {
  const message = document.getElementById("message").value.toLowerCase();

  const keys = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
  };

  const regex = /enter|imes|ai|ober|ufat/g;

  const decryptMessage = processMessage(message, keys, regex);
  document.getElementById("messageProcessed").innerText = decryptMessage;

  showResult();
}

function copyText() {
  const textProcessed = document.getElementById("messageProcessed").innerHTML;
  navigator.clipboard.writeText(textProcessed).then(
    () => {
      alert("Texto copiado para a transferência!");
    },
    () => {
      alert("Erro ao copiar texto!");
    }
  );
}

function showResult() {
  document.querySelector(".col-right-box h1").style.display = "none";
  document.querySelector(".col-right-box p").style.display = "none";
  document.querySelector(".col-right-box img").style.display = "none";
  document.querySelector(".message-processed").style.display = "flex";
  document.getElementById("messageProcessed").style.display = "block";
  document.getElementById("copyButton").style.display = "block";
}