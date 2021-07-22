var arrayOfQuotes = [

    {
        "author": "Bill Watterson",
        "quote": "You know, Hobbes, some days even my lucky rocketship underpants don't help."
    },
    {
        "author": "Stephen Chbosky",
        "quote": "Even if we don't have the power to choose where we come from, we can still choose where we go from there."
    },
    {
        "author": "John Steinbeck",
        "quote": "And now that you don't have to be perfect, you can be good."
    },
    {
        "author": "Ilona Andrews",
        "quote": "Outside the windows the day was bright: golden sunshine, blue sky, pleasant wind... I wanted to punch the happy day in the face, grab it by the hair, and beat it until it told me what the hell it was so happy about."
    },
    {
        "author": "Holly Black",
        "quote": "I haven't had a very good day. I think I might still be hungover and everyone's dead and my root beer's gone."
    },
    {
        "author": "J.K. Rowling",
        "quote": "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default."
    },
    {
        "author": "Charles Darwin",
        "quote": "But I am very poorly today & very stupid & I hate everybody & everything. One lives only to make blunders."
    },
    {
        "author": "Ray Bradbury",
        "quote": "We are cups, constantly and quietly being filled. The trick is knowing how to tip ourselves over and let the beautiful stuff out."
    },
    {
        "author": "Maya Angelou",
        "quote": "You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it"
    },
    {
        "author": "Oscar Wilde",
        "quote": "Life is never fair, and perhaps it is a good thing for most of us that it is not."
    },
    {
        "author": "Anna White",
        "quote": "Maybe it’s not about having a beautiful day, but about finding beautiful moments. Maybe a whole day is just too much to ask. I could choose to believe that in every day, in all things, no matter how dark and ugly, there are shards of beauty if I look for them."
    },
    {
        "author": "Douglas Adams",
        "quote": "I've had the sort of day that would make St. Francis of Assisi kick babies"
    },
    {
        "author": "Dr. Seuss",
        "quote": "Don't cry because it's over. Smile because it happened"
    },
    {
        "author": "Johann Wolfgang von Goethe",
        "quote": "Everything is hard before it is easy."
    },
    {
        "author": "Albert Einstein",
        "quote": "Anyone who has never made a mistake has never tried anything new"
    },
    {
        "author": "David Foster Wallace",
        "quote": "These worst mornings with cold floors and hot windows and merciless light — the soul's certainty that the day will have to be not traversed but sort of climbed, vertically, and then that going to sleep again at the end of it will be like falling, again, off something tall and sheer."
    },
    {
        "author": "C.S. Lewis",
        "quote": "Don't let your happiness depend on something you may lose."
    },
    {
        "author": "Chuck Palahniuk",
        "quote": "It's so hard to forget pain, but it's even harder to remember sweetness. We have no scar to show for happiness. We learn so little from peace."
    },
    {
        "author": "Ernest Hemingway",
        "quote": "We are all broken, that's how the light gets in."
    }, {
        "author": "Stephen King",
        "quote": "Monsters are real, ghosts are real, too. They live inside us, and sometimes they win."
    }
]

//generate random number based on length of array
function randomSelector(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}

// generate random quote   
function generateQuote() {
    var randomNumber = randomSelector(arrayOfQuotes.length);

    document.getElementById("quoteOutput").innerHTML = '"' + arrayOfQuotes[randomNumber].quote + '"';

    document.getElementById("authorOutput").innerHTML = "- " + arrayOfQuotes[randomNumber].author;

}