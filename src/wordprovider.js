function getWords() {
    return browser.tabs.executeScript({
        code: `
            document.body.innerText;
        `
    }).then(([body]) => {
        const words = body.replace(/\W+/g, ' ').split(/ +/);
        const wordCount = words.reduce((counter, word) => {
            word = word.toLocaleLowerCase();
            counter[word] = (counter[word] || 0) + 1;
            return counter;
        }, {});


        return Object.keys(wordCount).reduce((acc, word) => {
            acc.push([word, wordCount[word]]);
            return acc;
        }, []).sort((a, b) => a[1] < b[1]);
    });
}

export default getWords;