const puppeteer = require('puppeteer');
const userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1';
const workPath = './contents';
const fs = require("fs");
if (!fs.existsSync(workPath)) {
    fs.mkdirSync(workPath)
}
const rootUrl = 'https://36kr.com/';
const maxWait = 100;
const makLoop = 2;
(async () => {
    let url;
    let countUrl=0;
    const browser = await puppeteer.launch({headless: false});//set headless: true will hide chromium UI
    const page = await browser.newPage();
    await page.setUserAgent(userAgent);
    await page.setViewport({width:414, height:736});
    await page.setRequestInterception(true);
    //filter to block images
    page.on('request', request => {
        if (request.resourceType() === 'image')
            request.abort();
        else
            request.continue();
    });
    await page.goto(rootUrl);

    for(let i= 0; i<makLoop;i++){
        try{
            await page.evaluate(()=>window.scrollTo(0, document.body.scrollHeight));
            await page.waitForNavigation({timeout:maxWait,waitUntil: ['networkidle0']});
        }catch(err){
            console.log('scroll to bottom and then wait '+maxWait+'ms.');
        }
    }
    await page.screenshot({path: workPath+'/screenshot.png',fullPage: true, quality :100, type :'jpeg'});
    //#feedlist_id li[data-type="blog"] a
    const sel = '#feedlist_id li[data-type="blog"] h2 a';
    const hrefs = await page.evaluate((sel) => {
        let elements = Array.from(document.querySelectorAll(sel));
        let links = elements.map(element => {
            return element.href
        })
        return links;
    }, sel);
    console.log('total links: '+hrefs.length);
    process();
    async function process(){
        if(countUrl<hrefs.length){
            url = hrefs[countUrl];
            countUrl++;
        }else{
            browser.close();
            return;
        }
        console.log('processing url: '+url);
        try{
            const tab = await browser.newPage();
            await tab.setUserAgent(userAgent);
            await tab.setViewport({width:414, height:736});
            await tab.setRequestInterception(true);
            //filter to block images
            tab.on('request', request => {
                if (request.resourceType() === 'image')
                    request.abort();
                else
                    request.continue();
            });
            await tab.goto(url);
            //execute tap request
            try{
                await tab.tap('.read_more_btn');
            }catch(err){
                console.log('there\'s none read more button. No need to TAP');
            }
            let title = await tab.evaluate(() => document.querySelector('#article .article_title').innerText);
            let contents = await tab.evaluate(() => document.querySelector('#article .article_content').innerText);
            contents = 'TITLE: '+title+'\nURL: '+url+'\nCONTENTS: \n'+contents;
            const fs = require("fs");
            fs.writeFileSync(workPath+'/'+tab.url().substring(tab.url().lastIndexOf('/'),tab.url().length)+'.txt',contents);
            console.log(title + " has been downloaded to local.");
            await tab.close();
        }catch(err){
            console.log('url: '+tab.url()+' \n'+err.toString());
        }finally{
            process();
        }

    }
})();