"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function AOSInit() {
  useEffect(() => {
    // Initialize AOS only once
    AOS.init({
      duration: 800,
      once: false, // Whether animation should happen only once - while scrolling down
      mirror: true, // Whether elements should animate out while scrolling past them
      offset: 50, // Offset (in px) from the original trigger point
      easing: "ease-out-cubic",
      delay: 0, // Values from 0 to 3000, with step 50ms
      anchorPlacement: "top-bottom", // Defines which position of the element regarding to window should trigger the animation
    })

    // Refresh AOS when window is resized
    window.addEventListener("resize", () => {
      AOS.refresh()
    })

    return () => {
      window.removeEventListener("resize", () => {
        AOS.refresh()
      })
    }
  }, [])

  return null
}

