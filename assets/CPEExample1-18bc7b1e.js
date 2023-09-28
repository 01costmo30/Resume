import{H as t,j as o}from"./javascript-b8e3a923.js";import{o as n,H as e}from"./index-e8c1dbe3.js";const a=e(`<p><strong>[使用套件]</strong><a target="_blank" rel="noopener noreferrer nofollow" class="txt-custom-color" href="https://fomantic-ui.com/">Fomantic UI</a>、<a target="_blank" rel="noopener noreferrer nofollow" class="txt-custom-color" href="https://jquery.com/">JQuery</a><br><strong>[要加上補丁的頁面]</strong><a target="_blank" rel="noopener noreferrer nofollow" class="txt-custom-color" href="https://par.cse.nsysu.edu.tw/~advprog/star.php">Uva題目星等參考</a> (由「<a target="_blank" rel="noopener noreferrer nofollow" class="txt-custom-color" href="https://cpe.cse.nsysu.edu.tw/">CPE官網</a>」 -&gt; 「<a target="_blank" rel="noopener noreferrer nofollow" class="txt-custom-color" href="https://cpe.cse.nsysu.edu.tw/history.php">歷屆考試</a>」頁面可找到「<a target="_blank" rel="noopener noreferrer nofollow" class="txt-custom-color" href="https://par.cse.nsysu.edu.tw/~advprog/star.php">Uva題目星等參考</a>」連結) </p><p> 繼上一篇是用JQuery寫出隨機選題功能，這次的目標是畫出視覺化界面( •̀ ω •́ )✧<br>這次先來引入套件 </p><pre><code class="language-js">function packageInit() {
  //初始化套件- initialize required package
  const script = document.createElement(&quot;script&quot;);
  script.onload = () =&gt; {
    console.log(&quot;script loaded!&quot;);
    $(&quot;&lt;link /&gt;&quot;, {
      href: &quot;https://cdnjs.cloudflare.com/ajax/libs/fomantic-ui/2.9.2/semantic.min.css&quot;,
      rel: &quot;stylesheet&quot;,
      type: &quot;text/css&quot;,
    }).appendTo(&quot;head&quot;);
    //等script載完再開始使用有jquery的function
  };
  script.src =
    &quot;https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js&quot;;
  document.head.append(script);
}</code></pre><p>寫<code class="badge text-bg-light">loaded</code>來初始化表格css</p><pre><code class="language-js">function loaded() {
  //初始化table- initialize table
  $(&quot;table[id]&quot;)
    .addClass(&quot;ui selectable compact celled table&quot;)
    .attr(&quot;border&quot;, null);
  $(&quot;table[id] tr td&quot;).removeClass(&quot;list_problem&quot;);

  $(&quot;table[id] tr td:first-child&quot;).each(function () {
    $(this).closest(&quot;tr&quot;).attr(&quot;data-pid&quot;, $(this).html());
  });

  $(&quot;table[id] tbody tr&quot;).on(&quot;click&quot;, function () {
    window.open(
      &quot;https://vjudge.net/problem/UVA-&quot; + $(this).children(&quot;td&quot;).eq(0).html(),
      &quot;_blank&quot;
    );
  });
  disabledFinished(finishedArr);
}</code></pre><p> 表格初始化後，我們可以在<code class="badge text-bg-light">CPERandom</code>把選中題號的tr加上<code class="badge text-bg-light">.addClass()</code>的動作，這樣就不需要從console去找被選中的元素是哪個 </p><pre><code class="language-js">//清掉之前被選中題號tr的class
$(&quot;table[id*=list] tr&quot;).removeClass(&quot;purple&quot;);
//把新的選中題號tr加上class
$oneStar.eq(idx).addClass(&quot;purple&quot;);</code></pre><p> 也可以到Fomantic UI去找其他顏色的class來做標記，或是不引入Fomantic UI 的css檔直接用JQuery的<code class="badge text-bg-light">.css()</code>去加顏色區分，這樣我們在console執行<code class="badge text-bg-light">CPERandom</code>的時候就能直接清楚的看到哪一題被選中了ヾ(≧▽≦*)o </p><p> 到目前功能已經很完善了，但...我想要連<code class="badge text-bg-light">CPERandom</code>這個功能可以直接用點的耶🥺 </p><p> 沒問題( •̀ ω •́ )✧<br>我們可以用Fomantic UI的menu和sidebar來製作top menu，首先創一個<code class="badge text-bg-light">menuInit</code>來加個有「隨機題目」標題的top menu到頁面 </p><pre><code class="language-js">function menuInit() {
  //初始化隨機按鈕menu- initialize button menu
  //  placeholder(拿來空一個menu的位置)
  $(&quot;body&quot;).prepend($(&quot;&lt;div /&gt;&quot;, { class: &quot;ui fake text menu&quot; }));
  $(&quot;.ui.fake.text.menu&quot;).append($(&quot;&lt;div /&gt;&quot;, { class: &quot;item&quot; }));

  //  top menu
  $(&quot;body&quot;).prepend($(&quot;&lt;div /&gt;&quot;, { class: &quot;ui top sidebar visible menu&quot; }));
  $(&quot;.ui.top.menu&quot;).append(
    $(&quot;&lt;h3 /&gt;&quot;, {
      class: &quot;item&quot;,
      html: &#39;&lt;i class=&quot;dice icon&quot;&gt;&lt;/i&gt; 隨機題目&#39;,
      style: &quot;margin: 0;&quot;,
    })
  );
}</code></pre><p>再來我們用<code class="badge text-bg-light">for</code>迴圈把隨機1星~5星的按鈕加進去</p><pre><code class="language-js">$(&quot;.ui.top.menu&quot;).append($(&quot;&lt;div /&gt;&quot;, { class: &quot;right menu&quot; }));

for (let i = 1; i &lt;= 5; i++) {
  $(&quot;.ui.top.menu .right.menu&quot;).append(
    $(&quot;&lt;div /&gt;&quot;, {
      class: &quot;link item&quot;,
      html: &quot;隨機&quot; + i + &quot;星&quot;,
      click: () =&gt; {
        CPErandom(i);
      },
    })
  );
}</code></pre><p> 但我自己更喜歡Fomantic UI裡簡單清楚的<code class="badge text-bg-light">.rating()</code>功能，所以這邊我引入Fomantic UI的script </p><pre><code class="language-js">//記得這個套件要在JQuery引入後再引入才不會出問題
let script1 = document.createElement(&#39;script&#39;);
script1.onload = () =&gt; {
  menuInit()
  loaded()
}
script1.src = &#39;https://cdnjs.cloudflare.com/ajax/libs/fomantic-ui/2.9.2/semantic.min.js&#39;
document.head.append(script1)</code></pre><p> 並利用<code class="badge text-bg-light">.rating()</code>功能的<code class="badge text-bg-light">onRate</code>設定來呼叫<code class="badge text-bg-light">CPERandom</code></p><pre><code class="language-js">$(&#39;.ui.top.menu&#39;).append($(&#39;&lt;div /&gt;&#39;, { class: &#39;right menu&#39; }));
//利用rating功能產生一個5星選項
$(&#39;.ui.top.menu .right.menu&#39;).append($(&#39;&lt;div /&gt;&#39;, { class: &#39;item ui rating&#39;, &#39;data-icon&#39;: &#39;star&#39;, &#39;data-max-rating&#39;: 5 }))
//在點選星級的時候呼叫CPERandom來進行隨機選題
$(&#39;.item.ui.rating&#39;).rating({
onRate(v) {
  CPErandom(v);
}
}).children(&#39;i.icon:last-child&#39;).css(&#39;margin-right&#39;, 0)
//為了讓它視覺上不會不對稱，把最右多的margin去掉
$(&#39;.item.ui.rating i.icon:last-child&#39;).css(&#39;margin-right&#39;, 0)</code></pre><p>這樣我們就擁有含視覺化界面的CPE隨機選題功能了🥳🥳🥳</p><h5><strong>完整程式碼</strong></h5><pre><code class="language-js">//填已經完成的題號陣列
var finishedArr = [];

function disabledFinished(arr) {
  //去掉寫過的題號- disable finished problem
  for (var i = 0; i &lt; arr.length; i++) {
    $(&#39;table[id] tr[data-pid=&quot;&#39; + arr[i] + &#39;&quot;]&#39;).addClass(&quot;disabled&quot;);
  }
}

function genRandom(total) {
  //產生隨機題號- generate random problem id
  var idx = 0;
  while (idx == 0) {
    idx = Math.round(Math.random() * total);
  }
  if (idx == total) idx--;
  return idx;
}

function CPErandom(i) {
  //標註隨機題號- mark random problem id
  var $oneStar = $(&quot;table#list&quot; + i + &quot; tr:not(.disabled)&quot;);
  $(&quot;table[id*=list] tr&quot;).removeClass(&quot;purple&quot;);
  var idx = genRandom($oneStar.length);
  var elPos = $oneStar.eq(idx)[0].getBoundingClientRect().top;
  var offsetPos =
    elPos + window.pageYOffset - $(&quot;.ui.top.sidebar.menu&quot;).outerHeight();
  window.scrollTo({
    top: offsetPos,
    behavior: &quot;smooth&quot;,
  });
  $oneStar.eq(idx).addClass(&quot;purple&quot;);
}

function menuInit() {
  //初始化隨機按鈕menu- initialize button menu
  //  placeholder
  $(&quot;body&quot;).prepend($(&quot;&lt;div /&gt;&quot;, { class: &quot;ui fake text menu&quot; }));
  $(&quot;.ui.fake.text.menu&quot;).append($(&quot;&lt;div /&gt;&quot;, { class: &quot;item&quot; }));

  //  top menu
  $(&quot;body&quot;).prepend($(&quot;&lt;div /&gt;&quot;, { class: &quot;ui top sidebar visible menu&quot; }));
  $(&quot;.ui.top.menu&quot;).append(
    $(&quot;&lt;h3 /&gt;&quot;, {
      class: &quot;item&quot;,
      html: &#39;&lt;i class=&quot;dice icon&quot;&gt;&lt;/i&gt; 隨機題目&#39;,
      style: &quot;margin: 0;&quot;,
    })
  );

  //right menu
  $(&#39;.ui.top.menu&#39;).append($(&#39;&lt;div /&gt;&#39;, { class: &#39;right menu&#39; }));
  $(&#39;.ui.top.menu .right.menu&#39;).append($(&#39;&lt;div /&gt;&#39;, { class: &#39;item ui rating&#39;, &#39;data-icon&#39;: &#39;star&#39;, &#39;data-max-rating&#39;: 5 }))
  $(&#39;.item.ui.rating&#39;).rating({
    onRate(v) {
      CPErandom(v);
    }
  }).children(&#39;i.icon:last-child&#39;).css(&#39;margin-right&#39;, 0)
  $(&#39;.item.ui.rating i.icon:last-child&#39;).css(&#39;margin-right&#39;, 0)
}

function loaded() {
  //初始化table- initialize table
  console.log(&quot;loaded&quot;);
  $(&quot;table[id]&quot;)
    .addClass(&quot;ui selectable compact celled table&quot;)
    .attr(&quot;border&quot;, null);
  $(&quot;table[id] tr td&quot;).removeClass(&quot;list_problem&quot;);

  $(&quot;table[id] tr td:first-child&quot;).each(function () {
    $(this).closest(&quot;tr&quot;).attr(&quot;data-pid&quot;, $(this).html());
  });
  $(&quot;table[id] tbody tr&quot;).on(&quot;click&quot;, function () {
    window.open(
      &quot;https://vjudge.net/problem/UVA-&quot; + $(this).children(&quot;td&quot;).eq(0).html(),
      &quot;_blank&quot;
    );
  });

  disabledFinished(finishedArr);
}

function packageInit() {
  //初始化套件- initialize required package
  const script = document.createElement(&quot;script&quot;);
  script.onload = () =&gt; {
    console.log(&quot;script loaded!&quot;);
    $(&quot;&lt;link /&gt;&quot;, {
      href: &quot;https://cdnjs.cloudflare.com/ajax/libs/fomantic-ui/2.9.2/semantic.min.css&quot;,
      rel: &quot;stylesheet&quot;,
      type: &quot;text/css&quot;,
    }).appendTo(&quot;head&quot;);
    let script1 = document.createElement(&quot;script&quot;);
    script1.onload = () =&gt; {
      menuInit();
      loaded();
    };
    script1.src =
      &quot;https://cdnjs.cloudflare.com/ajax/libs/fomantic-ui/2.9.2/semantic.min.js&quot;;
    document.head.append(script1);
  };
  script.src =
    &quot;https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js&quot;;
  document.head.append(script);
}

packageInit();</code></pre>`,20),c={__name:"CPEExample1",setup(u){return t.registerLanguage("js",o),n(()=>{t.highlightAll()}),(i,s)=>a}};export{c as default};
