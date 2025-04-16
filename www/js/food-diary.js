function goBack() {
    window.location.href = "index.html"; // or your main page
  }
  
  function addFood() {
    const input = document.getElementById("foodInput");
    const value = input.value.trim();
    if (value === "") return;
  
    const list = document.getElementById("entryList");
    const li = document.createElement("li");
    li.innerHTML = `${value} <button class="edit-button" onclick="editEntry(this)">Edit</button>`;
    list.appendChild(li);
    input.value = "";
  }
  
  function editEntry(button) {
    const item = button.parentElement;
    const currentText = item.firstChild.textContent.trim();
    const newText = prompt("Edit entry:", currentText);
    if (newText && newText.trim() !== "") {
      item.innerHTML = `${newText} <button class="edit-button" onclick="editEntry(this)">Edit</button>`;
    }
  }
  