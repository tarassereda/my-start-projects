document.querySelector(".out").innerHTML = navigator.userAgent;
console.log(navigator);

if (
  navigator.userAgent.match("iPhone") ||
  navigator.userAgent.match("Android") ||
  navigator.userAgent.match("iPad") ||
  navigator.userAgent.match("RIM")
) {
  console.log("Mobile");
} else {
  console.log("Desktop");
}
