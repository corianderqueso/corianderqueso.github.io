const button = document.getElementById("submitBtn")
const dataField = document.getElementById("text")
const banner = document.getElementById("banner")

function determineHorribleThing() {
  const horribleThings =
    [
      "I am secretly gay",
      "I have a crush on my best friend",
      "I kissed my sister",
      "I kissed my brother",
      "The moon landing was fake",
      "I'm actually a boy",
      "I snorted a line off of my teacher's chest",
      "I have more posts on my Ao3 account than conversations with my dad",
      "I did not care for The Godfather",
      "My dick dosen't work",
      "I did not wash my hands after shitting last night",
      "I clogged the shower drain with semen",
      "I think that boy kisser is actually kinda funny",
      "There are only two genders",
      "I sucked dick for a crisp 20",
    ]

  return horribleThings[Math.floor(Math.random() * horribleThings.length)]
}

dataField.value = determineHorribleThing()

button.addEventListener("click", () => {
  button.disabled = true
  dataField.disabled = true

  const value = dataField.value

  banner.textContent = value
  banner.classList.add("bannerAnim")
  banner.addEventListener("animationend", () => {
    banner.classList.remove("bannerAnim")
    banner.textContent = ""
  })

  dataField.value = ""
  dataField.disabled = false

  button.disabled = false
})
