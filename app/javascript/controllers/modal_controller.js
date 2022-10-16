import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["modal", "modalImg"]

  connect() {
    console.log("Hello from our first Stimulus controller")
  }

  open(event) {
    this.modalTarget.classList.remove("hidden")
    this.modalImgTarget.src = event.currentTarget.src
  }

  close() {
    this.modalImgTarget.src = ""
    this.modalTarget.classList.add("hidden")
  }
}