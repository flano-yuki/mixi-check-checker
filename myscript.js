//data TODO replace background.html ...?
var urlkey=new Array();
urlkey["www.amazon.co.jp"]="6f1590b7b8df9db5e6422d96d3eca0a8376760f9";
urlkey["news.mixi.jp"]="53be64390c2bf14912cc8ded09c28d346a7a28b0";

urlkey["www.google.co.jp"]="3abc7f6717a3c984097c82d6d5b44849594a5342";
urlkey["search.yahoo.co.jp"]="3abc7f6717a3c984097c82d6d5b44849594a5342";
urlkey["yahoo.co.jp"]="3abc7f6717a3c984097c82d6d5b44849594a5342";
urlkey["twitter.com"]="3abc7f6717a3c984097c82d6d5b44849594a5342";

urlkey["favotter.net"]="3abc7f6717a3c984097c82d6d5b44849594a5342";
urlkey["www.pixiv.net"]="3abc7f6717a3c984097c82d6d5b44849594a5342";
urlkey["item.rakuten.co.jp"]="3abc7f6717a3c984097c82d6d5b44849594a5342";
urlkey["www.rakuten.co.jp"]="3abc7f6717a3c984097c82d6d5b44849594a5342";
urlkey["ameblo.jp"]="3abc7f6717a3c984097c82d6d5b44849594a5342";

urlkey["gigazine.net"]="3abc7f6717a3c984097c82d6d5b44849594a5342";
urlkey["d.hatena.ne.jp"]="3abc7f6717a3c984097c82d6d5b44849594a5342";
urlkey["www.gizmodo.jp"]="3abc7f6717a3c984097c82d6d5b44849594a5342";
urlkey["www.youtube.com"]="3abc7f6717a3c984097c82d6d5b44849594a5342";

if(/http:\/\/mixi.jp\/share.pl/.test(window.location.href))
	return ;

var checkurl="";
if(urlkey[window.location.host]!=null)
{
	checkurl="http://mixi.jp/share.pl?u="+ escape(window.location.href) +"&k="+ urlkey[window.location.host];
}
else
{
	var elements=document.getElementsByTagName("a");
	for(var i=0,l=elements.length;i<l;i++){
		var element=elements[i];
		var testurl=element.getAttribute("href")
		if(/^http:\/\/mixi.jp\/share.pl/.test(testurl))
		{
			checkurl=testurl;
			break;
		}

		var key=element.getAttribute("data-key")||element.getAttribute("check_key");
		if(key!=null)
		{
			checkurl="http://mixi.jp/share.pl?u="+ escape(window.location.href) +"&k="+ key;
			break;
		}
	}
}


chrome.extension.sendRequest({checkurl:checkurl});

delete urlkey;
delete checkurl;