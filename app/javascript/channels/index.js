// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)

import { Application } from "@hotwired/stimulus"
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers"

window.Stimulus = Application.start()
const context = require.context(".././controllers", true, /\.js$/)
Stimulus.load(definitionsFromContext(context))


window.addEventListener("scroll", function() {
  // console.log(document.querySelector(".parallax-bg-header"))
  // console.log(window.scrollY)
  const distance = window.scrollY
  document.querySelector(".container-lg").style.transform = `translateY(${distance *
    1}px)`
  document.querySelector(
    ".container-lg"
  ).style.transform = `translateY(${distance * 0.6}px)`

  // if (window.scrollY > 402 || window.scrollY < 410) {
  //   document.querySelector(".parallax-bg-header").classList.add("hidden")
  // }
})
