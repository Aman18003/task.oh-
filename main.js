let answers = document.querySelectorAll(".accordion");
answers.forEach((event) => {
	event.addEventListener("click", () => {
		if (event.classList.contains("active")) {
			event.classList.remove("active");
		} else {
			event.classList.add("active");
		}
	});
});

const handleclick = ()=>{
	 alert("Your Form is Submitted Successfully");
}