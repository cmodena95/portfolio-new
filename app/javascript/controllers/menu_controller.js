import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["left", "about", "illustrationActive", "illustrationSection", "illustrationsGrid", "banner", "menu"]

  connect() {
    console.log("Hello from our first Stimulus controller")
  }

  illustrationOpen() {
    this.leftTarget.classList.add("left-vanish")
    setTimeout(this.leftTarget.classList.add("hide-left"), 1000);

    this.bannerTarget.classList.add("up-vanish")
    setTimeout(this.bannerTarget.classList.add("hide-up"), 1000);

    this.aboutTarget.classList.add("right-vanish")
    // setTimeout(this.aboutTarget.classList.add("hidden"), 1000);

    this.illustrationSectionTarget.classList.add("right-vanish")

    setTimeout(() => {
      this.menuTarget.classList.add("hidden");
    }, "1000")

    setTimeout(() => {
      this.bannerTarget.classList.add("hidden");
    }, "1000")

    setTimeout(() => {
      this.illustrationActiveTarget.classList.remove("hidden");
    }, "1000")

    setTimeout(() => {
      this.illustrationActiveTarget.classList.add("fixed");
    }, "1000")

    setTimeout(() => {
      this.illustrationsGridTarget.classList.add("grid");
    }, "1000")

    setTimeout(() => {
      this.illustrationsGridTarget.classList.add("fade-in");
    }, "1000")

    setTimeout(() => {
      this.illustrationActiveTarget.classList.add("active-illustration-title-display");
    }, "1500")


    // this.illustrationArrowTarget.classList.add("right-vanish-slow")
    // setTimeout(this.illustrationArrowTarget.classList.add("hide-right"), 1000);

    // this.illustrationHeaderTarget.classList.add("move")
    // this.illustrationSectionTarget.classList.add("active")
    // this.illustrationSectionTarget.classList.add("shrink-padding")
    // this.illustrationHeaderTarget.classList.add("shrink-letter-spacing")

    // setTimeout(this.illustrationSectionTarget.classList.add("bar-left"), 2000);
    // setTimeout(this.illustrationSectionTarget.classList.add("bar-long"), 4000);

  }
}