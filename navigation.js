const template = document.createElement("template");

template.innerHTML = `
<style>

.nav {
max-width: 200px
}

a {
display: block;
}

</style>

<div class="nav">
  <p>Directory</p>
  <nav>
  <a href="/index.html">Home</a>
    <br>
  <a href="/blog/landing.html">Random Shit On My Mind</a>
    <br>
  <a href="/rules/rules.html">Rules of the Road</a>
    <br>
  <a href="/void/void.html">Scream Into the Void</a>
    <br>
  <a href="/screensaver/directory.html">Screensavers</a>
    <br>
  </nav>
  <hr>
  <p>About Me</p>
  <p>My name is CorianderQueso, or Cori, and this is my perosnal website.
    I am a bisexual (this is an important thing to know about me as you 
    explore the site) and I enjoy many "nerdy" hobbies.</p>
</div>
  `;

class NavigationBar extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" })

    shadow.append(template.content.cloneNode(true));
  }
}

customElements.define("navigation-bar", NavigationBar);
