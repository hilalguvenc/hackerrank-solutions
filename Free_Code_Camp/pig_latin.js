function translatePigLatin(str) {
  let myRegex = /^[aeiou]/g;
  if (str.charAt(0) == str.match(myRegex)) {
    return str + "way";
  } else if (!str[0].match(myRegex) && !str[1].match(myRegex)) {
    return str.substr(2) + str.charAt(0) + str.charAt(1) + "ay";
  } else {
    return str.slice(1) + str[0] + "ay";
  }
}
translatePigLatin("consonant");
