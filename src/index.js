module.exports = function toReadable (number) {
    if (number == 0) return "zero";
    else return convertToMillions(number);

function convertToMillions(number) {
    if (number >= 1000000) {
        if(number % 1000000 == 0){
            return convertToMillions(Math.floor(number / 1000000)) + " million";
        } else {
      return convertToMillions(Math.floor(number / 1000000)) + " million " + convertToThousands(number % 1000000);
        }
    } else {
      return convertToThousands(number);
    }
  }

function convertToThousands(number) {
    if (number >= 1000) {
        if(number % 1000 == 0){
            return convertToHundreds(Math.floor(number / 1000)) + " thousand";
        } else {
            return convertToHundreds(Math.floor(number / 1000)) + " thousand " + convertToHundreds(number % 1000);
        }
    } else {
      return convertToHundreds(number);
    }
  }

  function convertToHundreds(number) {
    if (number > 99) {
        if(number % 100 == 0){
            return ones[Math.floor(number / 100)] + " hundred";
        } else {
            return ones[Math.floor(number / 100)] + " hundred " + convertToTens(number % 100);
        }
    } else {
      return convertToTens(number);
    }
  }
  
  function convertToTens(number) {
    if (number < 10) return ones[number];
    else if (number >= 10 && number < 20) return teens[number - 10];
    else if (number % 10 == 0) {
        return tens[Math.floor(number / 10)];
    } else {
        return tens[Math.floor(number / 10)] + " " + ones[number % 10];
    }
  }
}
  
var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
