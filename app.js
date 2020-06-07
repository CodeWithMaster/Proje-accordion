const btns = document.querySelectorAll("button");
btns.forEach((btn) => btn.addEventListener("click", function () {activeTab(this)}));
function activeTab(thisElement) {
  document.querySelectorAll(".tab").forEach((tab) => (tab.style.height = 0));
  const thisTab = thisElement.nextElementSibling;
  thisTab.style.height = thisTab.scrollHeight;
}
