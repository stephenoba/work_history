let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];
storyWords = story.split(' ');


let betterWords = storyWords.filter(function(words) {
     return !unnecessaryWords.includes(words);
});


let overusedCount1 = 0;
let overusedCount2 = 0;
let overusedCount3 = 0;
for (let betterIndex = 0; betterIndex < betterWords.length; betterIndex++) {
    if (betterWords[betterIndex] === overusedWords[0]) {
        overusedCount1++;
    } else if (betterWords[betterIndex] === overusedWords[1]) {
        overusedCount2++;
    } else if (betterWords[betterIndex] === overusedWords[2]) {
        overusedCount3++;
    }
}



let sentences = 0;
storyWords.forEach(word => {
    if (word[word.length - 1] === '.' || word[word.length - 1] === '!') {
        sentences++;
    }
})

console.log('Word Count: ' + storyWords.length);

console.log("The number of sentences " + " = " + sentences);

console.log(overusedWords[0] + " was used " + overusedCount1);
console.log(overusedWords[1] + " was used " + overusedCount2);
console.log(overusedWords[2] + " was used " + overusedCount3);


console.log(betterWords.join(' '));
