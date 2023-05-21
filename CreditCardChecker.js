// ---------------------------------------------------------------------------
// Codecademy Front-End Engineer Career Path - Credit Card Checker Project
// ---------------------------------------------------------------------------

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

// Checks if credit card number is valid or invalid
function validateCred(array) {
// Creates copy of input array
const copyOfArray = [];
  for (item of array) {
    copyOfArray.push(item);
  }
// Reverses copy of input array
  const reversedCopyOfArray = copyOfArray.reverse();
// Iterates over reversedCopyOfArray
  const newArray = [];
  let count = 0;
  while (count < reversedCopyOfArray.length) {
// Pushes value at even index numbers of reversedCopyOfArray to newArray
    if (count%2 === 0 ) {
      newArray.push(reversedCopyOfArray[count]);
    }
// Multiplies value at odd index numbers by 2, subtracts 9 if result > 9 and pushes outcome to newArray
    else {
      const value = reversedCopyOfArray[count];
      const doubleValue = value * 2;
        if (doubleValue > 9) {
          const newValue = doubleValue - 9;
          newArray.push(newValue);
        }
        else {
          newArray.push(doubleValue);
        }
    }
  count++;
  }  
// Sums up all numbers in newArray
  const sum = newArray.reduce((accumulator, item) => accumulator + item);
// Checks if sum%10 equals 0 and returns true (valid credit card number) of false (invalid credit card number)
  if (sum%10 === 0) {
    return true;
  }
  else {
    return false;
  }
}

// Calls validateCred on batch of card numbers and returns array of invalid numbers
function findInvalidCards(batch) {
  const invalidCards = [];
  for (const element of batch) {
    const result = validateCred(element);
    if (result === false) {
      invalidCards.push(element);
    }
  }
return invalidCards;  
}

// Identifies the companies that possibly have issued invalid credit card numbers
function idInvalidCardCompanies(invalidCardsArray) {
  const companies = [];
// Checks first digit of every invalid credit card number and creates array of companies that possibly have issued the invalid numbers
  let index = 0;
  while (index < invalidCardsArray.length) {
    let arr = invalidCardsArray[index];
    let firstNumber = arr[0];
    if (firstNumber === 3) {
      companies.push('Amex');
    }
    else if (firstNumber === 4) {
      companies.push('Visa');
    }
    else if (firstNumber === 5) {
      companies.push('Mastercard');
    }
    else if (firstNumber === 6) {
      companies.push('Discover');
    }
    else {
      companies.push('Company not found');
    }
    index++    
  }
// Removes duplicates from array of companies that possibly have issued invalid credit card numbers
  function removeDuplicates(companies) {
    return companies.filter((item,
    index) => companies.indexOf(item) === index);
    }
// Returns array of companies that possibly have issued invalid credit card numbers    
  return removeDuplicates(companies);
}

// Calls idInvalidCardCompanies and logs result to console
console.log(idInvalidCardCompanies(findInvalidCards(batch)));