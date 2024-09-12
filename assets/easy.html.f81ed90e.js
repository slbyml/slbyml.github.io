import{_ as p,r as o,o as c,c as l,a as n,b as e,d as s,e as t}from"./app.fded88d1.js";const i={},u=n("h1",{id:"leetcode\u7B97\u6CD5\u5B66\u4E60\u603B\u7ED3-\u7B80\u5355",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#leetcode\u7B97\u6CD5\u5B66\u4E60\u603B\u7ED3-\u7B80\u5355","aria-hidden":"true"},"#"),s(" LeetCode\u7B97\u6CD5\u5B66\u4E60\u603B\u7ED3-\u7B80\u5355")],-1),r={id:"\u65CB\u8F6C\u56FE\u50CFleetcode48",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#\u65CB\u8F6C\u56FE\u50CFleetcode48","aria-hidden":"true"},"#",-1),d=s(" \u65CB\u8F6C\u56FE\u50CF"),m={href:"https://leetcode-cn.com/problems/rotate-image/",target:"_blank",rel:"noopener noreferrer"},v=s("leetcode48"),b=t(`<p>\u7ED9\u5B9A\u4E00\u4E2A n \xD7 n \u7684\u4E8C\u7EF4\u77E9\u9635\u8868\u793A\u4E00\u4E2A\u56FE\u50CF\u3002\u5C06\u56FE\u50CF\u987A\u65F6\u9488\u65CB\u8F6C 90 \u5EA6(\u5FC5\u987B\u5728\u539F\u5730\u65CB\u8F6C\u56FE\u50CF)\u3002</p><blockquote><p>\u89E3\u51B3\u7C7B\u4F3C\u7684\u987A\u65F6\u9488\u6216\u8005\u9006\u65F6\u9488\u65CB\u8F6C\u7684\u65B9\u6CD5:</p><ul><li>\u987A\u65F6\u9488\u65CB\u8F6C:\u9996\u5148\u4E0A\u4E0B\u4EA4\u6362,\u8FD9\u91CC\u662F\u6307\u7B2C\u4E00\u884C\u548C\u6700\u540E\u4E00\u884C\u4EA4\u6362\uFF0C\u7B2C\u4E8C\u884C\u548C\u5012\u6570\u7B2C\u4E8C\u884C\uFF0C\u4F9D\u6B21\u7C7B\u63A8, \u7136\u540E\u4EA4\u6362\u5BF9\u89D2\u7EBF\u7684\u6570\u5B57</li><li>\u9006\u65F6\u9488\u65CB\u8F6C:\u9996\u5148\u5DE6\u53F3\u4EA4\u6362,\u8FD9\u91CC\u662F\u6307\u7B2C\u4E00\u5217\u548C\u6700\u540E\u4E00\u5217\u4EA4\u6362\uFF0C\u7B2C\u4E8C\u5217\u548C\u5012\u6570\u7B2C\u4E8C\u5217\uFF0C\u4F9D\u6B21\u7C7B\u63A8, \u7136\u540E\u4EA4\u6362\u5BF9\u89D2\u7EBF\u7684\u6570\u5B57</li></ul></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">rotate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">matrix</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">let</span> low <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> high <span class="token operator">=</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>low <span class="token operator">&lt;</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> temp <span class="token operator">=</span> matrix<span class="token punctuation">[</span>low<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
      matrix<span class="token punctuation">[</span>low<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> matrix<span class="token punctuation">[</span>high<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
      matrix<span class="token punctuation">[</span>high<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    low<span class="token operator">++</span><span class="token punctuation">;</span>
    high<span class="token operator">--</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> temp <span class="token operator">=</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
      matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> matrix<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
      matrix<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> matrix <span class="token operator">=</span> <span class="token punctuation">[</span>
 <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span>
<span class="token function">rotate</span><span class="token punctuation">(</span>matrix<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),h={id:"\u6700\u5927\u5B50\u5E8F\u548Cleetcode53",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#\u6700\u5927\u5B50\u5E8F\u548Cleetcode53","aria-hidden":"true"},"#",-1),w=s(" \u6700\u5927\u5B50\u5E8F\u548C"),y={href:"https://leetcode-cn.com/problems/maximum-subarray/",target:"_blank",rel:"noopener noreferrer"},g=s("leetcode53"),f=t(`<p>\u7ED9\u5B9A\u4E00\u4E2A\u6574\u6570\u6570\u7EC4 nums \uFF0C\u627E\u5230\u4E00\u4E2A\u5177\u6709\u6700\u5927\u548C\u7684\u8FDE\u7EED\u5B50\u6570\u7EC4\uFF08\u5B50\u6570\u7EC4\u6700\u5C11\u5305\u542B\u4E00\u4E2A\u5143\u7D20\uFF09\uFF0C\u8FD4\u56DE\u5176\u6700\u5927\u548C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">maxSubArray</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> max <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> curMax <span class="token operator">=</span> max
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> totle <span class="token operator">=</span> curMax <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    curMax <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>totle<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>curMax<span class="token punctuation">,</span> max<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> max
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),x={id:"\u722C\u697C\u68AF\u95EE\u9898leetcode70",tabindex:"-1"},j=n("a",{class:"header-anchor",href:"#\u722C\u697C\u68AF\u95EE\u9898leetcode70","aria-hidden":"true"},"#",-1),B=s(" \u722C\u697C\u68AF\u95EE\u9898"),A={href:"https://leetcode-cn.com/problems/climbing-stairs/",target:"_blank",rel:"noopener noreferrer"},M=s("leetcode70"),N=t(`<p>\u5047\u8BBE\u4F60\u6B63\u5728\u722C\u697C\u68AF\u3002\u9700\u8981 n \u9636\u4F60\u624D\u80FD\u5230\u8FBE\u697C\u9876\u3002\u6BCF\u6B21\u4F60\u53EF\u4EE5\u722C 1 \u6216 2 \u4E2A\u53F0\u9636\u3002\u4F60\u6709\u591A\u5C11\u79CD\u4E0D\u540C\u7684\u65B9\u6CD5\u53EF\u4EE5\u722C\u5230\u697C\u9876\u5462\uFF1F</p><blockquote><p>\u53EF\u4EE5\u5206\u6210\u591A\u4E2A\u5B50\u95EE\u9898\uFF0C\u722C\u7B2Cn\u9636\u53F0\u9636\u7684\u65B9\u6CD5\u7531\u524D\u4E24\u79CD\u4E4B\u548C\uFF1A\u722C\u4E0A n\u22121 \u9636\u697C\u68AF\u7684\u65B9\u6CD5\u6570\u91CF\u3002\u56E0\u4E3A\u518D\u722C1\u9636\u5C31\u80FD\u5230\u7B2Cn\u9636\uFF1B\u722C\u4E0A n\u22122 \u9636\u697C\u68AF\u7684\u65B9\u6CD5\u6570\u91CF\uFF0C\u56E0\u4E3A\u518D\u722C2\u9636\u5C31\u80FD\u5230\u7B2Cn\u9636\uFF1B\u56E0\u6B64\u53EF\u5F97 dp[n] = dp[n-1] + dp[n-2]</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u52A8\u6001\u89C4\u5212</span>
<span class="token keyword">var</span> <span class="token function-variable function">climbStairs</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> pre1 <span class="token operator">=</span> <span class="token number">1</span>  <span class="token comment">//\u722C\u4E0A\u4E0A\u5C42\u9700\u8981\u7684\u65B9\u6CD5</span>
  <span class="token keyword">let</span> pre2 <span class="token operator">=</span> <span class="token number">2</span>  <span class="token comment">// \u722C\u4E0A\u5C42\u9700\u8981\u7684\u65B9\u6CD5</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">2</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>pre1<span class="token punctuation">,</span> pre2<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>pre2<span class="token punctuation">,</span> pre1 <span class="token operator">+</span> pre2<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> pre2
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),q={id:"\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u6570\u7EC4leetcode88",tabindex:"-1"},I=n("a",{class:"header-anchor",href:"#\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u6570\u7EC4leetcode88","aria-hidden":"true"},"#",-1),T=s(" \u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u6570\u7EC4"),z={href:"https://leetcode-cn.com/problems/merge-sorted-array/",target:"_blank",rel:"noopener noreferrer"},E=s("leetcode88"),O=t(`<p>\u65B9\u6CD5\u4E00\uFF1A\u5C06<code>nums1</code>\u7684\u957F\u5EA6\u6269\u5C55\u5230<code>m+n</code>;\u7136\u540E\u5C06<code>nums1</code>\u548C<code>nums2</code>\u4ECE\u540E\u5F80\u524D\u904D\u5386\uFF1B\u4E00\u8FB9\u904D\u5386\u4E00\u8FB9\u5C06\u6700\u5927\u7684\u503C\u653E\u5728<code>nums1</code>\u6700\u540E\u9762\u7684\u6307\u9488\uFF1B\u590D\u6742\u5EA6\u4E3A<code>O(m+n)</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> len <span class="token operator">=</span> m <span class="token operator">+</span> n <span class="token operator">-</span><span class="token number">1</span> <span class="token comment">// nums1\u6269\u5C55\u540E\u7684\u603B\u957F\u5EA6</span>
  <span class="token keyword">let</span> len1 <span class="token operator">=</span> m <span class="token operator">-</span> <span class="token number">1</span>
  <span class="token keyword">let</span> len2 <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span>len2 <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>len1 <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      nums1<span class="token punctuation">[</span>len<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums2<span class="token punctuation">[</span>len2<span class="token operator">--</span><span class="token punctuation">]</span>
      <span class="token keyword">continue</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    nums1<span class="token punctuation">[</span>len<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums1<span class="token punctuation">[</span>len1<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums2<span class="token punctuation">[</span>len2<span class="token punctuation">]</span> <span class="token operator">?</span> nums1<span class="token punctuation">[</span>len1<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">:</span> nums2<span class="token punctuation">[</span>len2<span class="token operator">--</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> nums1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u4E8C\uFF1A\u91C7\u7528\u53CC\u6307\u9488\uFF1B\u4ECE\u524D\u5F80\u540E\u904D\u5386</p>`,3),V={id:"\u6253\u5BB6\u52AB\u820Dleetcode198",tabindex:"-1"},C=n("a",{class:"header-anchor",href:"#\u6253\u5BB6\u52AB\u820Dleetcode198","aria-hidden":"true"},"#",-1),D=s(" \u6253\u5BB6\u52AB\u820D"),L={href:"https://leetcode-cn.com/problems/house-robber/",target:"_blank",rel:"noopener noreferrer"},R=s("leetcode198"),S=t(`<p>\u4E00\u4E2A\u4E13\u4E1A\u7684\u5C0F\u5077\uFF0C\u6CBF\u8857\u6253\u5BB6\u52AB\u820D\uFF1B\u6BCF\u4E2A\u623F\u95F4\u90FD\u65B9\u6709\u4E0D\u540C\u6570\u91CF\u7684\u73B0\u91D1\uFF1B\u552F\u4E00\u5F71\u54CD\u5077\u7A83\u7684\u56E0\u7D20\u5C31\u662F\u4E0D\u80FD\u5077\u76F8\u90BB\u623F\u95F4\u7684\u94B1\uFF1B\u8BA1\u7B97\u80FD\u591F\u5077\u76D7\u7684\u6700\u5927\u91D1\u989D</p><blockquote><p>\u6B64\u9898\u548C\u4E0A\u9762\u7684\u722C\u697C\u68AF\u7C7B\u4F3C\uFF0C\u5230\u8FBE<code>\u7B2Cn\u4E2A\u623F\u95F4</code>\u80FD\u83B7\u5F97\u7684\u6700\u5927\u91D1\u989D\u548C\u5B83<code>n-1\u4E2A\u623F\u95F4</code>\u548C<code>n-2\u4E2A\u623F\u95F4</code>\u7684\u6709\u5173;\u5728\u5F53\u524D\u623F\u95F4\u80FD\u83B7\u5F97\u5BF9\u6700\u5927\u91D1\u989D\u5C31\u662F<code>dp[n-2] + dp[n]</code>\u548C<code>dp[n-1]</code>\u4E2D\u7684\u90A3\u4E2A\u6700\u5927\u503C</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u52A8\u6001\u89C4\u5212</span>
<span class="token keyword">var</span> <span class="token function-variable function">rob</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> pre1 <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment">// \u4E0A\u4E0A\u4E2A\u503C</span>
  <span class="token keyword">let</span> pre2 <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// \u4E0A\u4E2A\u503C</span>
  <span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">//\u5F53\u524D\u6700\u5927</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>pre1<span class="token operator">+</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> pre2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>pre1<span class="token punctuation">,</span> pre2<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>pre2<span class="token punctuation">,</span> max<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> max
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),Q={id:"\u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57leetcode136",tabindex:"-1"},Y=n("a",{class:"header-anchor",href:"#\u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57leetcode136","aria-hidden":"true"},"#",-1),G=s(" \u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57"),P={href:"https://leetcode-cn.com/problems/single-number/",target:"_blank",rel:"noopener noreferrer"},U=s("leetcode136"),W=t(`<p>\u7ED9\u5B9A\u4E00\u4E2A\u975E\u7A7A\u6574\u6570\u6570\u7EC4\uFF0C\u9664\u4E86\u67D0\u4E2A\u5143\u7D20\u53EA\u51FA\u73B0\u4E00\u6B21\u4EE5\u5916\uFF0C\u5176\u4F59\u6BCF\u4E2A\u5143\u7D20\u5747\u51FA\u73B0\u4E24\u6B21\u3002\u627E\u51FA\u90A3\u4E2A\u53EA\u51FA\u73B0\u4E86\u4E00\u6B21\u7684\u5143\u7D20\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">singleNumber</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      result <span class="token operator">=</span> result<span class="token operator">^</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">singleNumber</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E09\u6570\u53EA\u548C" tabindex="-1"><a class="header-anchor" href="#\u4E09\u6570\u53EA\u548C" aria-hidden="true">#</a> \u4E09\u6570\u53EA\u548C</h2><p>\u7ED9\u4F60\u4E00\u4E2A\u5305\u542B n \u4E2A\u6574\u6570\u7684\u6570\u7EC4\xA0nums\uFF0C\u5224\u65AD\xA0nums\xA0\u4E2D\u662F\u5426\u5B58\u5728\u4E09\u4E2A\u5143\u7D20 a\uFF0Cb\uFF0Cc \uFF0C\u4F7F\u5F97\xA0a + b + c = 0 \uFF1F\u8BF7\u4F60\u627E\u51FA\u6240\u6709\u548C\u4E3A 0 \u4E14\u4E0D\u91CD\u590D\u7684\u4E09\u5143\u7EC4\u3002</p><ul><li>\u5BF9\u6570\u7EC4\u8FDB\u884C\u6392\u5E8F</li><li>\u4ECE0\u5230length-2(\u9632\u6B62\u8D8A\u754C)\u904D\u5386\u6570\u7EC4</li><li>\u91C7\u7528\u53CC\u6307\u9488\u7684\u65B9\u5F0F(i,left= i+1, right=length-1) <ul><li>\u5982\u679C\u5F53\u524D\u6570\u7B49\u4E8E\u524D\u4E00\u4E2A\u6570,\u5219\u8DF3\u8FC7(\u53BB\u91CD)</li><li>\u5F53\u4E09\u4E2A\u503C\u7684\u548C\u5927\u4E8E0.\u5219right--</li><li>\u5F53\u4E09\u4E2A\u503C\u7684\u548C\u5C0F\u4E8E0.\u5219left++</li><li>\u5982\u679C\u6B63\u597D\u76F8\u7B49\u5219\u52A0\u5165\u6570\u7EC4</li></ul></li></ul><h2 id="\u76F8\u4EA4\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u76F8\u4EA4\u94FE\u8868" aria-hidden="true">#</a> \u76F8\u4EA4\u94FE\u8868</h2><p><img src="https://slbblog.oss-cn-beijing.aliyuncs.com/algorithm/algorithm-160.png?versionId=CAEQPhiBgIDRka3iwhciIDMzMTQwOGY2MzgxOTRmMTU4NWMwNzRmODg5YTg3NzMx" alt="\u76F8\u4EA4\u94FE\u8868"></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u65B9\u6848\u4E00:\u53CC\u6307\u9488</span>
<span class="token comment">// \u6307\u9488\`a\`\u548C\`b\`\u5206\u522B\u6307\u5411\u4E24\u4E2A\u94FE\u8868,\`a\`\u4ECE\u5934\u904D\u5386\u5230\u4F4D,\u7136\u540E\u5207\u6362\u5230b\u94FE\u8868,\`b\`\u4ECE\u5934\u904D\u5386\u5230\u5C3E,\u7136\u540E\u5207\u6362\u5230a,</span>
<span class="token keyword">var</span> <span class="token function-variable function">getIntersectionNode</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">headA<span class="token punctuation">,</span> headB</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8FB9\u754C\u5224\u65AD</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>headA <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> headB <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  
  <span class="token keyword">let</span> hA <span class="token operator">=</span> headA<span class="token punctuation">,</span> hB <span class="token operator">=</span> headB<span class="token punctuation">;</span>
  
  <span class="token comment">//\u6307\u9488 hA \u548C \u6307\u9488 hB \u4E0D\u65AD\u5411\u540E\u904D\u5386\uFF0C\u76F4\u5230\u627E\u5230\u76F8\u4EA4\u70B9</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>hA <span class="token operator">!=</span> hB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u6307\u9488 hA \u4E00\u5F00\u59CB\u5728\u94FE\u8868 A \u4E0A\u904D\u5386\uFF0C\u5F53\u8D70\u5230\u94FE\u8868 A \u7684\u5C3E\u90E8\u5373 null \u65F6\uFF0C\u8DF3\u8F6C\u5230\u94FE\u8868 B \u4E0A </span>
      hA <span class="token operator">=</span> hA <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> headB <span class="token operator">:</span> hA<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token comment">// \u6307\u9488 hB \u4E00\u5F00\u59CB\u5728\u94FE\u8868 B \u4E0A\u904D\u5386\uFF0C\u5F53\u8D70\u5230\u94FE\u8868 B \u7684\u5C3E\u90E8\u5373 null \u65F6\uFF0C\u8DF3\u8F6C\u5230\u94FE\u8868 A \u4E0A </span>
      hB <span class="token operator">=</span> hB <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> headA <span class="token operator">:</span> hB<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> hA<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u65B9\u6848\u4E8C:\u54C8\u5E0C\u8868</span>
<span class="token comment">// \u5148\u904D\u5386\u4E00\u904D\u94FE\u8868 A\uFF0C\u7528\u54C8\u5E0C\u8868\u628A\u6BCF\u4E2A\u8282\u70B9\u90FD\u8BB0\u5F55\u4E0B\u6765(\u6CE8\u610F\u8981\u5B58\u8282\u70B9\u5F15\u7528\u800C\u4E0D\u662F\u8282\u70B9\u503C)\u3002 \u518D\u53BB\u904D\u5386\u94FE\u8868 B\uFF0C\u627E\u5230\u5728\u54C8\u5E0C\u8868\u4E2D\u51FA\u73B0\u8FC7\u7684\u8282\u70B9\u5373\u4E3A\u4E24\u4E2A\u94FE\u8868\u7684\u4EA4\u70B9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function F(H,J){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,n("h2",r,[k,d,n("a",m,[v,e(a)])]),b,n("h2",h,[_,w,n("a",y,[g,e(a)])]),f,n("h2",x,[j,B,n("a",A,[M,e(a)])]),N,n("h2",q,[I,T,n("a",z,[E,e(a)])]),O,n("h2",V,[C,D,n("a",L,[R,e(a)])]),S,n("h2",Q,[Y,G,n("a",P,[U,e(a)])]),W])}const X=p(i,[["render",F],["__file","easy.html.vue"]]);export{X as default};
