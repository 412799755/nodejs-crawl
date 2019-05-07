const express = require('express');
const app = express();
const superagent= require('superagent');
const cheerio = require('cheerio');
const Nightmare = require('nightmare');          // 自动化测试包，处理动态页面
const nightmare = Nightmare({ show: true });     // show:true  显示内置模拟浏览器
let tmp
let hotNews = [];                                // 热点新闻
let localNews = [];// 本地新闻
let getHotNews = (res) => {
    let hotNews = [];
    // 访问成功，请求http://news.baidu.com/页面所返回的数据会包含在res.text中。

    /* 使用cheerio模块的cherrio.load()方法，将HTMLdocument作为参数传入函数
       以后就可以使用类似jQuery的$(selectior)的方式来获取页面元素
     */
    let $ = cheerio.load(res.text);

    // 找到目标数据所在的页面元素，获取数据
    $('div#pane-news ul li a').each((idx, ele) => {
        // cherrio中$('selector').each()用来遍历所有匹配到的DOM元素
        // 参数idx是当前遍历的元素的索引，ele就是当前便利的DOM元素
        let news = {
            title: $(ele).text(),        // 获取新闻标题
            href: $(ele).attr('href')    // 获取新闻网页链接
        };
        hotNews.push(news)              // 存入最终结果数组
    });
    return hotNews
};
let getLocalNews = (htmlStr) => {
    let localNews = [];
    let $ = cheerio.load(htmlStr);

    // 本地新闻
    $('ul#localnews-focus li a').each((idx, ele) => {
        let news = {
            title: $(ele).text(),
            href: $(ele).attr('href'),
        };
        localNews.push(news)
    });

    // 本地资讯
    $('div#localnews-zixun ul li a').each((index, item) => {
        let news = {
            title: $(item).text(),
            href: $(item).attr('href')
        };
        localNews.push(news);
    });

    return localNews
};
superagent.get('http://news.baidu.com/').end((err, res) => {
    if (err) {
        // 如果访问失败或者出错，会这行这里
        console.log(`热点新闻抓取失败 - ${err}`)
    } else {
        // 访问成功，请求http://news.baidu.com/页面所返回的数据会包含在res
        // 抓取热点新闻数据
        hotNews = getHotNews(res)
        localNews = getLocalNews(res)
        tmp =res
    }
});

// 抓取本地新闻页面
nightmare.goto('http://news.baidu.com/').wait("div#local_news").evaluate(() => document.querySelector("div#local_news").innerHTML).then(htmlStr => {
        // 获取本地新闻数据
        localNews = getLocalNews(htmlStr)
    }).catch(error => {
        console.log(`本地新闻抓取失败 - ${error}`);
    })

let server = app.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Your App is running at http://%s:%s', host, port);
});
app.get('/', function (req, res) {
    res.send({
        hotNews: hotNews,
        localNews: localNews
    });
});