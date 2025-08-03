function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str.replace(consonantRegex, "").concat(myConsonants).concat("ay")
    : str.concat("way");
}

translatePigLatin("consonant");

// Code Explanation
// start at beginning and get longest match of everything not a vowel (consonants)

// if regex pattern found, it saves the match; else, it returns null

// if regex pattern found (starts with consonants), it deletes match, adds the match to the end, and adds “ay” to the end

// if regex pattern not found (starts with vowels), it just adds “way” to the ending
