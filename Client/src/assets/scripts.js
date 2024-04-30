function toggleNavPadding() {
  console.log("click");

    if (!document.getElementById("navbarToggler").classList.contains("collapsed")) {
      var elements = document.getElementsByClassName("pad-top");

      for (var i in elements) {
        if (elements.hasOwnProperty(i)) {
          elements[i].classList.add('nav-open');
        }
      }

      document.getElementById("navEnd").classList.add("navEnd-open");

    } 
    else {
      var elements = document.getElementsByClassName("nav-open");

      for (var i in elements) {
        if (elements.hasOwnProperty(i)) {
          elements[i].classList.remove('nav-open');
        }
      }

      document.getElementById("navEnd").classList.remove("navEnd-open");
    }
  }