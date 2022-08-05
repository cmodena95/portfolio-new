import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["left", "about", "illustrationImage"]

  connect() {
    console.log("Hello from our first Stimulus controller")
  }

  illustrationOpen() {
    this.leftTarget.classList.add("left-vanish")
    setTimeout(this.leftTarget.classList.add("hide-left"), 1000);

    this.aboutTarget.classList.add("right-vanish")
    setTimeout(this.aboutTarget.classList.add("hide-right"), 1000);

    this.illustrationImageTarget.classList.add("right-vanish")
    setTimeout(this.illustrationImageTarget.classList.add("hide-right"), 1000);
  }
}