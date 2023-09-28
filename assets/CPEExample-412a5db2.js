import{H as o,j as t}from"./javascript-c18d76f1.js";import{o as e,H as r}from"./index-e974b80c.js";const n=r(`<p><strong>[使用套件]</strong><a target="_blank" rel="noopener noreferrer nofollow" class="txt-custom-color" href="https://fomantic-ui.com/">Fomantic UI</a>、<a target="_blank" rel="noopener noreferrer nofollow" class="txt-custom-color" href="https://jquery.com/">JQuery</a><br><strong>[要加上補丁的頁面]</strong><a target="_blank" rel="noopener noreferrer nofollow" class="txt-custom-color" href="https://par.cse.nsysu.edu.tw/~advprog/star.php">Uva題目星等參考</a> (由「<a target="_blank" rel="noopener noreferrer nofollow" class="txt-custom-color" href="https://cpe.cse.nsysu.edu.tw/">CPE官網</a>」 -&gt; 「<a target="_blank" rel="noopener noreferrer nofollow" class="txt-custom-color" href="https://cpe.cse.nsysu.edu.tw/history.php">歷屆考試</a>」頁面可找到「<a target="_blank" rel="noopener noreferrer nofollow" class="txt-custom-color" href="https://par.cse.nsysu.edu.tw/~advprog/star.php">Uva題目星等參考</a>」連結)</p><p>目標是利用星等參考頁面上的表格來寫一個依星等分類隨機選題的功能( •̀ ω •́ )✧<br>那我們就開始吧!</p><p>首先找到表格的id名稱，寫一個可以取得該星等表格長度的function</p><pre><code class="language-js">function CPErandom(i) {
  var $oneStar = $(&quot;table#list&quot; + i + &quot; tr&quot;);
  //用 $oneStar.length 取長度
}</code></pre><p>為了利用剛剛取來的元素們隨機取其中題目，寫一個隨機index的function</p><pre><code class="language-js">function genRandom(total) {
  var idx = 0
  while (idx == 0) { idx = Math.round(Math.random() * total) }
  if (idx == total) idx--
  return idx
}</code></pre><p>回到<code class="badge text-bg-light">CPErandom</code>，用剛剛的<code class="badge text-bg-light">genRandom</code>隨機一個index並scroll to題號，因為scroll to看不出來是取到哪一個星等的題目，先在console印出來方便尋找</p><pre><code class="language-js">function CPErandom(i) {
  var $oneStar = $(&quot;table#list&quot; + i + &quot; tr&quot;);
  var idx = genRandom($oneStar.length)
  var elPos = $oneStar.eq(idx)[0].getBoundingClientRect().top
  var offsetPos = elPos + window.pageYOffset
  window.scrollTo({
    top: offsetPos,
    behavior: &quot;smooth&quot;,
  });
  console.log($oneStar.eq(idx)[0])
}</code></pre><p>到這裡只要引入JQuery套件就能執行上面簡易的隨機選題功能了，但...<br>如果我有些題目已經寫過了呢！！</p><p>於是再寫一個用css排除部分題號的function</p><pre><code class="language-js">//先讓所有的tr都能辨別題號
$(&quot;table[id] tr td:first-child&quot;).each(function () {
  $(this).closest(&quot;tr&quot;).attr(&quot;data-pid&quot;, $(this).html());
});

//把輸入的題號陣列做排除
function disabledFinished(arr) {
  for (var i = 0; i &lt; arr.length; i++) {  
    $(&#39;table[id] tr[data-pid=&quot;&#39; + arr[i] + &#39;&quot;]&#39;).addClass(&quot;disabled&quot;);
  }
}</code></pre><p>並到先前<code class="badge text-bg-light">CPErandom</code>裡的query selector加上排除的css</p><pre><code class="language-js">var $oneStar = $(&quot;table#list&quot; + i + &quot; tr:not(.disabled)&quot;);</code></pre><p>如果是用<a target="_blank" rel="noopener noreferrer nofollow" class="txt-custom-color" href="https://onlinejudge.org/">Uva Online Judge</a>答題的朋友，可以到「<a target="_blank" rel="noopener noreferrer nofollow" class="txt-custom-color" href="https://uhunt.onlinejudge.org/">uHunt</a>」頁面搜尋自己的帳號，在console去抓完成的題號陣列</p><pre><code class="language-js">Array.from(document.querySelectorAll(&quot;.ng-binding a.prob.sub_ac&quot;), (el) =&gt; el.innerHTML)</code></pre><p>現在我們只要先輸入完成題號的陣列，在使用<code class="badge text-bg-light">CPErandom</code>的時候就不會重複抽選到寫過的題號了</p><p>最後是查看題目的功能，利用<a target="_blank" rel="noopener noreferrer nofollow" class="txt-custom-color" href="https://vjudge.net/">Virtual Judge</a>可以直接用網址連到題目pdf的特性，寫個onclick</p><pre><code class="language-js">$(&quot;table[id] tbody tr&quot;).on(&quot;click&quot;, function () {
  window.open(
    &quot;https://vjudge.net/problem/UVA-&quot; + $(this).children(&quot;td&quot;).eq(0).html(),
    &quot;_blank&quot;
  );
});</code></pre><p>這樣我們就能依星等分類做隨機選題且不會選到已經完成的題目了(*^▽^*)<br>但... (○´･д･)ﾉ我們目前都沒用到Fomantic UI耶</p><p>沒錯接下來要做視覺畫界面♪(^∇^*)<br>但礙於篇幅今天先到這，感謝你的閱讀O(∩_∩)O</p>`,20),d={__name:"CPEExample",setup(a){return o.registerLanguage("js",t),e(()=>{o.highlightAll()}),(l,s)=>n}};export{d as default};
