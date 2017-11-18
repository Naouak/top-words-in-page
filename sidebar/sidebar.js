browser.runtime.onMessage.addListener((message) => {
    document.getElementById('console').innerText(message.content);
});

function log(object){
    if(typeof object === 'string'){
        document.getElementById('console').innerText = object;
        return;
    }
    document.getElementById('console').innerText = JSON.stringify(object);
}

function updateWordCount(){
    document.getElementById('console').innerText = 'click';
    browser.tabs.executeScript({
        code: `
            console.log('reading the file');
            document.body.innerText;
        `
    }).then(([body]) => {
        const words = body.replace(/\W+/g, ' ').split(/ +/);

        const wordCount = words.reduce((counter, word) => {
            word = word.toLocaleLowerCase();
            counter[word] = (counter[word]||0)+1;
            return counter;
        }, {});


        log(Object.keys(wordCount).reduce((acc, word) => {
            acc.push([word,wordCount[word]]);
            return acc;
        }, []).sort((a,b) => a[1] < b[1]).map((w) => w.join(' : ')).join('\n'));
    }).catch(
        ({message}) => log(message)
    )
}

browser.tabs.onActivated.addListener(updateWordCount);
document.getElementById('reload').addEventListener('click', updateWordCount);