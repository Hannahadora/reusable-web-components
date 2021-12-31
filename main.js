function capitalizeWords(text = "") {
    if (!text) {
        return ""
    }
    else {
        return text
            .toLowerCase()
            .split(" ")
            .map((el) => {
                return el.charAt(0).toUpperCase() + el.substring(1)
            })
            .join(" ");
    }
}


function removeDuplicateCharacters(text = "") {
    if (!text) {
        return ""
    } else {
        return text
            .split("")
            .filter(function (item, pos, self) {
                return self.indexOf(item) == pos;
            })
            .join('');
    }
}

function filterDates(dateArray = []) {
    // You have to import lodash and moment to use this function
    const occurrenceDay = (occurrence) => {
        return moment(occurrence.createdAt).startOf("day").format();
    };

    const groupToDay = (group, day) => ({ day, group });
    return _.chain(dateArray)
        .groupBy(occurrenceDay)
        .map(groupToDay)
        .orderBy("day", "desc")
        .value();
}


function sortByDate(arr = []) {
    return arr.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

function shortenSentence(str) {
    if (!str) {
        return ""
    }
    return str.split(/\s+/).slice(0, 50).join(" ");
}

function stripHtmlTag(str) {
    return str.replace(/<[^>]+>/gm, "");
}


function appendPositionSuffix(number) {
    var j = number % 10,
        k = number % 100;
    if (j == 1 && k != 11) {
        return number + "st";
    }
    if (j == 2 && k != 12) {
        return number + "nd";
    }
    if (j == 3 && k != 13) {
        return number + "rd";
    }
    return number + "th";
}

const pee = 1
const pea = 103

console.log(appendPositionSuffix(pee))


function getSumTotal(arr) {
    var sum = arr.reduce(function (a, b) {
        return a + b;
    }, 0);
    return sum
}
const sogs = [1.2, 2, 3, 4]
console.log(getSumTotal(sogs))


function ArrayToString(Arr) {
    return Arr.join(' ');
}

const myArray = ['I', 'love', 'chocolate', 'frogs'];
console.log(ArrayToString(myArray));


function replaceString(text, x, y) { 
    return text.replace(x, y);
}

const myText = 'I am a string';
const x = 'string'
const y = 'Sweet Girl'
console.log(replaceString(myText, x, y))


const rat = "<p>hello</p><br><span>world</span>"
const ann = "when I see you aGain , when i ssee i r iotkjl"
const gra = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
console.log(removeDuplicateCharacters(ann))
console.log(shortenSentence(gra))
console.log(stripHtmlTag(rat))
console.log(rat)
