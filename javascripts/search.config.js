$(window).ready(function(){var e=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),t=$('#search input[type="search"]'),n=$("#search fieldset p"),r=/\b(platform|on\:\w+\s?)+/,i=$("#search_results div.platform"),s=$("#search_results div.allocations"),o=$("#results_container"),u=function(e,t){var n=e.total;n>0?_gaq.push(["_trackEvent","search","with results",t,n]):_gaq.push(["_trackEvent","search","not found",t,0])},a=function(){_gaq.push(["_trackEvent","platform","switch platform",i.find("input:checked").val(),1])},f=function(e,t){_gaq.push(["_trackEvent","allocation","filter categories",e,t])},l=function(e){_gaq.push(["_trackEvent","resultlink","click outbound link",e,1])},c=function(){i.find("label").removeClass("selected"),i.find("input:checked + label").addClass("selected")},h=!1,p=function(){h||($("html, body").animate({scrollTop:t.offset().top},300),o.addClass("active"),n.hide(),h=!0)},d=function(){h&&($("html, body").animate({scrollTop:0},300),o.removeClass("active"),n.show(),h=!1)},v=function(){d(),$("#search span.amount").hide(),i.hide(),s.hide(),$("#search_results div.results").hide()},m=function(){p(),$("#search span.amount").show()},g=function(){i.show(),s.show()},y=function(e){return e.replace(r,"")},b=function(e){i.show(),s.hide(),$.getJSON("http://search.cocoapods.org/no_results.json","query="+y(e),function(e,t,n){var r=e.split[0].join(" "),i=e.split[1],s=$("#results_container .no_results .splits");r&&i>0?s.html("<p>We found "+i+" results searching for <a href='javascript:pickyClient.insert(\""+r+"\");'>"+r+"</a>.</p>"):s.html("");var o=$("#results_container .no_results .tags"),u=[];$.each(e.tag,function(e,t){u.push("<a href='javascript:pickyClient.insert(\"tag:"+e+"\");'>"+e+"</a>")}),o.html("<p>Maybe it helps exploring via one of our keywords? </p>"),o.find("p").append(u.sort().join(", ")).append(".")})},w={ios:"iOS",osx:"OS X"},E=/^http/,S=function(e){var t,n,r=e.source;for(var i in r){if(i=="http")return"";n=r[i];if(n.toString().match(E)){t=n;break}}return t},x=function(e){return e.platform=w[e.platforms],e.authors=$.map(e.authors,function(e,t){return"<a href=\"javascript:pickyClient.insert('"+t.replace(/[']/,"\\\\'")+"')\">"+t+"</a>"}),e.docs_link=e.documentation_url||"http://cocoadocs.org/docsets/"+e.id+"/"+e.version,e.site_link=e.link||S(e),e.spec_link="https://github.com/CocoaPods/Specs/tree/master/"+e.id+"/"+e.version+"/"+e.id+".podspec",ich.search_result(e,!0)},T="http://search.cocoapods.org/api/v1/pods.picky.hash.json";pickyClient=new PickyClient({full:T,fullResults:20,live:T,liveResults:20,liveRendered:!0,liveSearchInterval:60,maxSuggestions:5,alwaysShowResults:!0,alwaysShowSelection:!0,wrapResults:'<ol class="results"></ol>',enclosingSelector:"#search",resultsSelector:"#search_results div.results",noResultsSelector:"#results_container .no_results",allocationsSelector:"#search_results div.allocations",hiddenAllocations:"#search_results div.allocations .onrequest",counterSelector:"#search form span.amount",moreSelector:"#search_results .allocations .more",beforeInsert:function(e){if(""!=e){m();var t=e.match(r);if(t){var n=i.find('input[value="'+t[0].replace(/\s+$/g,"")+'"]');n.attr("checked","checked"),i.find("label").removeClass("selected"),i.find("input:checked + label").addClass("selected")}return y(e)}},before:function(e,t){if(e=="")return"";e=e.replace(r,"");var n=i.find("input:checked").val();return n===undefined||n==""?e:n+" "+e},success:function(e,n){u(e,n);if(""==t.val())return v(),!1;0==e.total?b(n):g();var r=e.allocations;return r.each(function(e,t){t.entries=t.entries.map(function(e,t){return x(t)})}),e},after:function(e){$copy_to_clipboard=$("ol.results img.copy");var t=new ZeroClipboard($copy_to_clipboard,{moviePath:"./flashes/ZeroClipboard.swf",forceHandCursor:!0});t.on("noflash",function(e,t){function n(e){setTimeout(function(){!$(e).is(":hover")&&!$(".popover:hover").length?$(e).popover("hide"):n(e)},500)}$copy_to_clipboard.popover({trigger:"manual",container:"body"}).on("click",function(e){e.preventDefault()}).on("mouseenter",function(){$(this).popover("show"),$(".popover input").select()}).on("mouseleave",function(){n(this)})}),t.on("load",function(e){e.on("complete",function(e,t){$("h4.has-flash").text("Saved to clipboard"),$(".popover").addClass("saved")}),t.on("mouseover",function(e,t){$(this).popover("show")}),t.on("mouseout",function(e,t){$(this).popover("hide")})}),s.find("li").on("click",function(e){var t=$(e.currentTarget);f(t.find(".text").text(),t.find(".count").text())}),$("ol.results").find("a").on("click",function(e){l(e.currentTarget.href)})},qualifiers:{en:{dependencies:"uses",platform:"on"}},groups:[["platform"]],choices:{en:{platform:"",name:"name",author:"author",summary:"summary",dependencies:"dependency",tags:"tag",version:"version","author,name":"author+name","name,author":"name+author","tags,name":"tag+name","name,tags":"name+tag","version,name":"version+name","name,version":"name+version","name,dependencies":"name+dependency","dependencies,name":"dependency+name","author,dependencies":"author+dependency","dependencies,author":"dependency+author","dependencies,version":"dependency+version","version,dependencies":"version+dependency","author,version":"author+version","version,author":"version+author","summary,version":"version+summary","version,summary":"version+summary","tags,summary":"summary+name","summary,tags":"name+summary","summary,name":"summary+name","name,summary":"name+summary","summary,author":"summary+author","author,summary":"author+summary","summary,dependencies":"summary+dependency","dependencies,summary":"dependency+summary","name,dependencies":"name+dependency","dependencies,name":"dependency+name"}},explanations:{en:{author:"written by",versions:"on version",dependencies:"using",name:"named",summary:"with summary",tags:"tagged as"}},explanationDelimiter:{en:"and"},explanationTokenCallback:function(e,t){if(e=="platform"){var n=t.length;return n==2?"<strong>on</strong> both "+t.join(" & "):"only <strong>on</strong> "+t[0]}}}),t.on("input",function(e){""==this.value?(_gaq.push(["_trackEvent","clear"]),v()):m()}),i.find("input").bind("change",function(e){a(),pickyClient.resend(),c()}),$("#search_container").on("click",function(e){t.focus()});var N=function(e){return e.next()},C=function(e){return e.prev()},k=function(e){var t=$("ol.results li.result"),n=t.closest(".selected").first();n.length>0?(n.removeClass("selected"),n=e(n)):n=t.first(),n.addClass("selected")},L=function(){var e=$("ol.results li.result.selected").first();e.length>0&&(window.document.location.href=e.find("a").first().attr("href"))};$("body").keydown(function(n){switch(n.keyCode){case 40:k(N);break;case 38:k(C);break;case 13:e&&t.blur(),L()}}),window.initial_query!=""&&pickyClient.insertFromURL(window.initial_query)});