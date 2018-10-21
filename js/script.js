// Smooth Scroll
let anchorlinks = document.querySelectorAll('a[href^="#"]')

for (let item of anchorlinks) {
  item.addEventListener('click', (e) => {
    let hashval = item.getAttribute('href')
    let target = document.querySelector(hashval)
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    history.pushState(null, null, hashval)
    e.preventDefault()
  });
}

// Validation Form
function validateForm() {
  if (document.forms["name"].value == "") {
    alert("Name must be filled out");
    return false;
  } else if (document.forms["phone"].value == "") {
    alert("Phone number must be filled out");
    return false;
  } else {
    return alert("Validation Form Test");
  }
}