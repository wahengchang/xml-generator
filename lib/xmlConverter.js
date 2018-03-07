const fields = ['mainTitle', 'mainDes', 'title', 'link', 'date', 'guid', 'videoUrl', 'keyWord', 'thumbnail', 'category', 'subtitleUrl']

export const getFields = () => fields

export const converter = (payload) => {
    const {mainTitle, mainDes, title, link, date, guid, videoUrl, keyWord, thumbnail, category, subtitleUrl} = payload

    // date=(new Date()).toGMTString()
    return `<?xml version="1.0" encoding="utf-8"?>
        <rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/">
            <channel>
                <title>${mainTitle}</title>
                <description>${mainDes}</description>
                <item>
                    <title>${title}</title>
                    <link>//${link}</link>
                    <pubDate>${date}</pubDate>
                    <guid>${guid}</guid>
                    <media:content url="${videoUrl}" type="video/mp4" expression="full" />
                    <media:title type="plain">${title}</media:title>
                    <media:description type="plain"><![CDATA[
        13歲時第一次拍攝Vogue，15歲時和Vogue一起去巴黎看秀，17歲，歐陽娜娜第一次登上Vogue封面。 我們在紐約郊區一個古老的遊樂場進行這次的拍攝，為了避免人潮，天濛濛亮時，就已經整裝出發，私底下的娜娜大多數時候都顯得沈
        ]]><![CDATA[
        靜，滑滑手機，或者和工作人員談笑兩句，偶爾興起時，又會很小女孩的開始跳抖肩舞，或者乾脆和媽媽傅娟撒嬌，面對鏡頭時，舉手投足間是沒有生澀的大氣，曾經時尚對她來說只是衣服，慢慢在接觸越來越多之後，發現了其中的奧妙與樂趣。現在的她，越來越清楚自己想要的是什麼，17歲的娜娜，朝著自己的夢想大步邁進。欲看更多精彩內容，請上  VOGUE 官網：<a href=http://tw.rd.yahoo.com/referurl/SIG=10sjrlv5v/*http%3A//www.vogue.com.tw/ target=_blank>http://www.vogue.com.tw/</a>  VOGUE 粉絲團：<a href=http://tw.rd.yahoo.com/referurl/SIG=11446ajrd/*https%3A//www.facebook.com/VogueTW target=_blank>https://www.facebook.com/VogueTW</a>  VOGUE Beauty美人會：<a href=http://tw.rd.yahoo.com/referurl/SIG=118np8vr8/*https%3A//www.facebook.com/Vbeautyclub target=_blank>https://www.facebook.com/Vbeautyclub</a>  GQ 官網：<a href=http://tw.rd.yahoo.com/referurl/SIG=10p1tksib/*http%3A//www.gq.com.tw/ target=_blank>http://www.gq.com.tw/</a>  GQ 粉絲團：<a href=http://tw.rd.yahoo.com/referurl/SIG=115frbhh7/*https%3A//www.facebook.com/GQTaiwan target=_blank>https://www.facebook.com/GQTaiwan</a>  GQ 微醺俱樂部：<a href=http://tw.rd.yahoo.com/referurl/SIG=118qaa9b2/*https%3A//www.facebook.com/GQClub.Wine target=_blank>https://www.facebook.com/GQClub.Wine</a>
        ]]></media:description>
                    <media:keywords>${keyWord}</media:keywords>
                    <media:thumbnail url="${thumbnail}" />
                    <media:${category}></media:${category}>
                    <media:subtitle type="application/ttml+xml" lang="zh-Hant-TW" href="${subtitleUrl}" />
                </item>
            </channel>
        </rss>`
}
