const menu = document.querySelector(".menu-toggle");

menu?.addEventListener("click", () => {
	const isExpanded = menu.getAttribute("aria-expanded") === "true";
	menu.setAttribute("aria-expanded", `${!isExpanded}`);
});
