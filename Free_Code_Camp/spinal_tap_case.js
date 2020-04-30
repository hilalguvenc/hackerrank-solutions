function spinalCase(str) {
  var regex = /\s+/g;
  return str.toLowerCase().replace(regex, "-");
}
spinalCase("This Is Spinal Tap");
