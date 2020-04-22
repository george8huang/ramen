/*
 * Name: George Huang
 * Date: April 22, 2020
 * Section: CSE 154 AD | TA: Dylan McKone
 *
 * This file contains JS implementation on index.html
 */

"use strict";
(function() {
  let achievementUnlocked = false; // achievement is locked

  window.addEventListener('load', init);

  /** Initializes event listeners */
  function init() {
    id("broth").addEventListener('click', function() {
      showElement("broth-info")
    })
    id("sauce").addEventListener('click', function() {
      showElement("sauce-info")
    })
    id("noodles").addEventListener('click', function() {
      showElement("noodles-info")
    })
    id("toppings").addEventListener('click', function() {
      showElement("toppings-info")
    })
    id("oil").addEventListener('click', function() {
      showElement("oil-info")
    })
  }

  /**
   * Removes hidden class
   * @param {string} idName - name of element id
   */
  function showElement(idName) {
    id(idName).classList.remove("hidden");
    unlockInfoAchievement();
  }

  /** Unlocks achievement message */
  function unlockInfoAchievement() {
    if (checkInfoLearned()) {
      if (!achievementUnlocked) {
        let newElement = gen("p");
        newElement.textContent = "Congrats, you learned all the ingredients!";
        id("about-content").appendChild(newElement);
        achievementUnlocked = true;
      }
    }
  }

  /**
   * Checks if all elements are no longer hidden
   * @return {boolean} true if all elements are revealed, false otherwise
   */
  function checkInfoLearned() {
    if (!containsHidden("broth-info")) {
      if (!containsHidden("sauce-info")) {
        if (!containsHidden("noodles-info")) {
          if (!containsHidden("toppings-info")) {
            if (!containsHidden("oil-info")) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }

  /**
   * Checks if element has hidden class
   * @param {string} idName - name of element id
   * @return {boolean} true if element contains hidden class, false otherwise
   */
  function containsHidden(idName) {
    return id(idName).classList.contains("hidden");
  }

  /**
   * Gets element from doc with given name
   * @param {string} idName - name of element id
   * @return {object} element of specified id, null if no such element exists
   */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
   * Creates element with given tag
   * @param {string} tagName - name of element tag
   * @return {object} element with given tag
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }
})();