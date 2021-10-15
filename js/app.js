var showPasswordValue = function () {
    document.getElementById("password-hide-btn").classList.remove("hidden");
    document.getElementById("password-show-btn").classList.add("hidden");
    document.getElementById("password-field").setAttribute("type", "text");
  };
  
  var hidePasswordValue = function () {
    document.getElementById("password-show-btn").classList.remove("hidden");
    document.getElementById("password-hide-btn").classList.add("hidden");
    document.getElementById("password-field").setAttribute("type", "password");
  };
  
  document
    .getElementById("password-show-btn")
    .addEventListener("click", showPasswordValue);
  
  document
    .getElementById("password-hide-btn")
    .addEventListener("click", hidePasswordValue);
  
  document
    .getElementById("password-field")
    .addEventListener("keyup", function () {
      var passwordValue = document.getElementById("password-field").value;
  
      validateCharLength(passwordValue);
      validateOneNumber(passwordValue);
      validateLowercaseChar(passwordValue);
      validateUppercaseChar(passwordValue);
    });
  
  function validateCharLength(passwordValue) {
    var minimumCharEl = document.getElementById("minimum-char");
    var svgEl = minimumCharEl.querySelector("svg");
    var divEl = minimumCharEl.querySelector("div");
  
    if (passwordValue.length >= 8) {
      minimumCharEl.classList.add("text-gray-300");
      minimumCharEl.classList.add("line-through");
      svgEl.classList.remove("hidden");
      divEl.classList.add("border-green-500");
      divEl.classList.remove("border-gray-500");
    } else {
      minimumCharEl.classList.remove("text-gray-300");
      minimumCharEl.classList.remove("line-through");
      svgEl.classList.add("hidden");
      divEl.classList.remove("border-green-500");
    }
  
    /* if (passwordValue.length >= 8) {
      document.getElementById("minimum-char").classList.add("text-gray-300");
    } else {
      document.getElementById("minimum-char").classList.remove("text-gray-300");
    } */
  }
  
  function validateOneNumber(passwordValue) {
    var hasNumber = false;
    var oneNumberEl = document.getElementById("one-number");
    var svgEl = oneNumberEl.querySelector("svg");
    var divEl = oneNumberEl.querySelector("div");
  
    for (var i = 0; i < passwordValue.length; i++) {
      var boolResult = isNumber(passwordValue[i]);
      if (boolResult === true) {
        hasNumber = true;
        oneNumberEl.classList.add("text-gray-300");
        oneNumberEl.classList.add("line-through");
        svgEl.classList.remove("hidden");
        divEl.classList.add("border-green-500");
        divEl.classList.remove("border-gray-500");
      }
    }
  
    if (hasNumber === false) {
      oneNumberEl.classList.remove("text-gray-300");
      oneNumberEl.classList.remove("line-through");
      svgEl.classList.add("hidden");
      divEl.classList.remove("border-green-500");
    }
  }
  
  function validateLowercaseChar(passwordValue) {
    var hasLowercase = false;
    var lowerCaseEl = document.getElementById("one-lowercase");
    var svgEl = lowerCaseEl.querySelector("svg");
    var divEl = lowerCaseEl.querySelector("div");
  
    for (var i = 0; i < passwordValue.length; i++) {
      var lowercaseResult = isLower(passwordValue[i]);
      if (lowercaseResult === true) {
        hasLowercase = true;
        lowerCaseEl.classList.add("text-gray-300");
        lowerCaseEl.classList.add("line-through");
        svgEl.classList.remove("hidden");
        divEl.classList.add("border-green-500");
      }
    }
  
    if (hasLowercase === false) {
      lowerCaseEl.classList.remove("text-gray-300");
      lowerCaseEl.classList.remove("line-through");
      svgEl.classList.add("hidden");
      divEl.classList.remove("border-green-500");
    }
  }
  
  function validateUppercaseChar(passwordValue) {
    var hasUppercase = false;
    var upperCaseEl = document.getElementById("one-uppercase");
    var svgEl = upperCaseEl.querySelector("svg");
    var divEl = upperCaseEl.querySelector("div");
  
    for (var i = 0; i < passwordValue.length; i++) {
      var upppercaseChar = isUpper(passwordValue[i]);
      if (upppercaseChar === true) {
        hasUppercase = true;
        upperCaseEl.classList.add("text-gray-300");
        upperCaseEl.classList.add("line-through");
        svgEl.classList.remove("hidden");
        divEl.classList.add("border-green-500");
      }
    }
  
    if (hasUppercase === false) {
      upperCaseEl.classList.remove("text-gray-300");
      upperCaseEl.classList.remove("line-through");
      svgEl.classList.add("hidden");
      divEl.classList.remove("border-green-500");
    }
  }
  
  function isUpper(str) {
    return /[A-Z]/.test(str);
  }
  
  function isLower(str) {
    return /[a-z]/.test(str);
  }
  
  function isNumber(str) {
    return /[0-9]/.test(str);
  }
  