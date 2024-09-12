const l=JSON.parse(`{"key":"v-cc280d72","path":"/javascript/js.html","title":"javascript\u539F\u751F\u4EE3\u7801\u5B9E\u73B0\u53CA\u4EE3\u7801\u603B\u7ED3","lang":"zh-CN","frontmatter":{"tags":["javascript","\u9762\u8BD5"],"description":"\u672C\u6587\u603B\u7ED3\u81EA\u5DF1\u9047\u5230\u7684\u3001\u6587\u7AE0\u4E2D\u770B\u5230\u7684\u3001\u9762\u8BD5\u4E2D\u7684\u4E00\u4E9Bjavascript\u95EE\u9898\uFF0C\u53CA\u5B9E\u73B0\u65B9\u5F0F\u5176\u4E2D\u4E5F\u4F1A\u5305\u62EC\u4E00\u4E9B\u6E90\u7801\u5B9E\u73B0\uFF0C\u53CApolyfill\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8EJsonP\u3001\u67EF\u91CC\u5316\u51FD\u6570 currying\u3001\u8BA1\u7B97\u4EA4\u96C6\u3001\u4E71\u5E8F\u3001\u52A8\u6001\u521B\u5EFA\u811A\u672C\u3001new\u7684\u6A21\u62DF\u3001lazyMan\u3001EventEmitter\u7B49\uFF0C\u672C\u6587\u4E3B\u8981\u8BB2\u4EE3\u7801\uFF0C\u6240\u4EE5\u4EE3\u7801\u91CF\u6BD4\u8F83\u591A","date":1631232000000},"excerpt":"","headers":[{"level":2,"title":"JsonP\u7B49\u5B9E\u73B0","slug":"jsonp\u7B49\u5B9E\u73B0","link":"#jsonp\u7B49\u5B9E\u73B0","children":[]},{"level":2,"title":"\u622A\u6D41&\u9632\u6296","slug":"\u622A\u6D41-\u9632\u6296","link":"#\u622A\u6D41-\u9632\u6296","children":[]},{"level":2,"title":"\u6DF1\u62F7\u8D1D","slug":"\u6DF1\u62F7\u8D1D","link":"#\u6DF1\u62F7\u8D1D","children":[]},{"level":2,"title":"\u67EF\u91CC\u5316\u51FD\u6570 currying","slug":"\u67EF\u91CC\u5316\u51FD\u6570-currying","link":"#\u67EF\u91CC\u5316\u51FD\u6570-currying","children":[]},{"level":2,"title":"\u8BA1\u7B97\u4E24\u4E2A\u6570\u7EC4\u7684\u4EA4\u96C6","slug":"\u8BA1\u7B97\u4E24\u4E2A\u6570\u7EC4\u7684\u4EA4\u96C6","link":"#\u8BA1\u7B97\u4E24\u4E2A\u6570\u7EC4\u7684\u4EA4\u96C6","children":[{"level":3,"title":"\u65B9\u6CD5\u4E00","slug":"\u65B9\u6CD5\u4E00","link":"#\u65B9\u6CD5\u4E00","children":[]},{"level":3,"title":"\u65B9\u6CD5\u4E8C","slug":"\u65B9\u6CD5\u4E8C","link":"#\u65B9\u6CD5\u4E8C","children":[]}]},{"level":2,"title":"\u5B9E\u73B0DUFF\u88C5\u7F6E","slug":"\u5B9E\u73B0duff\u88C5\u7F6E","link":"#\u5B9E\u73B0duff\u88C5\u7F6E","children":[]},{"level":2,"title":"\u76D1\u542C\u52A8\u6001\u811A\u6B65\u521B\u5EFA","slug":"\u76D1\u542C\u52A8\u6001\u811A\u6B65\u521B\u5EFA","link":"#\u76D1\u542C\u52A8\u6001\u811A\u6B65\u521B\u5EFA","children":[]},{"level":2,"title":"new\u65B9\u6CD5\u7684\u5B9E\u73B0","slug":"new\u65B9\u6CD5\u7684\u5B9E\u73B0","link":"#new\u65B9\u6CD5\u7684\u5B9E\u73B0","children":[]},{"level":2,"title":"instanceof\u7684\u5B9E\u73B0\u65B9\u5F0F","slug":"instanceof\u7684\u5B9E\u73B0\u65B9\u5F0F","link":"#instanceof\u7684\u5B9E\u73B0\u65B9\u5F0F","children":[]},{"level":2,"title":"call/apply \u7684\u5B9E\u73B0\u539F\u7406\u662F\u4EC0\u4E48?","slug":"call-apply-\u7684\u5B9E\u73B0\u539F\u7406\u662F\u4EC0\u4E48","link":"#call-apply-\u7684\u5B9E\u73B0\u539F\u7406\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"\u5B9E\u73B0LazyMan \u7C7B","slug":"\u5B9E\u73B0lazyman-\u7C7B","link":"#\u5B9E\u73B0lazyman-\u7C7B","children":[]},{"level":2,"title":"\u5B9E\u73B0\u4E00\u4E2A EventEmitter \u65B9\u6CD5","slug":"\u5B9E\u73B0\u4E00\u4E2A-eventemitter-\u65B9\u6CD5","link":"#\u5B9E\u73B0\u4E00\u4E2A-eventemitter-\u65B9\u6CD5","children":[]},{"level":2,"title":"'rgb(255, 255, 255)' -> '#FFFFFF'","slug":"rgb-255-255-255-ffffff","link":"#rgb-255-255-255-ffffff","children":[]},{"level":2,"title":"\u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u7A7A\u5BF9\u8C61","slug":"\u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u7A7A\u5BF9\u8C61","link":"#\u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u7A7A\u5BF9\u8C61","children":[]},{"level":2,"title":"Object.create \u517C\u5BB9\u5B9E\u73B0","slug":"object-create-\u517C\u5BB9\u5B9E\u73B0","link":"#object-create-\u517C\u5BB9\u5B9E\u73B0","children":[]},{"level":2,"title":"\u7B80\u5355\u7248\u7684Promise","slug":"\u7B80\u5355\u7248\u7684promise","link":"#\u7B80\u5355\u7248\u7684promise","children":[]},{"level":2,"title":"\u6A21\u62DF\u5B9E\u73B0\u4E00\u4E2A Promise.finally","slug":"\u6A21\u62DF\u5B9E\u73B0\u4E00\u4E2A-promise-finally","link":"#\u6A21\u62DF\u5B9E\u73B0\u4E00\u4E2A-promise-finally","children":[]},{"level":2,"title":"\u5B9E\u73B0 Promise.race()","slug":"\u5B9E\u73B0-promise-race","link":"#\u5B9E\u73B0-promise-race","children":[]},{"level":2,"title":"\u5B9E\u73B0 Promise.all()","slug":"\u5B9E\u73B0-promise-all","link":"#\u5B9E\u73B0-promise-all","children":[]},{"level":2,"title":"\u5B9E\u73B0 Promise.allSettled()","slug":"\u5B9E\u73B0-promise-allsettled","link":"#\u5B9E\u73B0-promise-allsettled","children":[]},{"level":2,"title":"\u5B9E\u73B0\u4E00\u4E2A\u53EF\u4EE5\u63A7\u5236\u6700\u5927\u5E76\u53D1\u6570\u7684\u51FD\u6570","slug":"\u5B9E\u73B0\u4E00\u4E2A\u53EF\u4EE5\u63A7\u5236\u6700\u5927\u5E76\u53D1\u6570\u7684\u51FD\u6570","link":"#\u5B9E\u73B0\u4E00\u4E2A\u53EF\u4EE5\u63A7\u5236\u6700\u5927\u5E76\u53D1\u6570\u7684\u51FD\u6570","children":[]},{"level":2,"title":"\u5B9E\u73B0\u7B80\u6613\u7684Symbol","slug":"\u5B9E\u73B0\u7B80\u6613\u7684symbol","link":"#\u5B9E\u73B0\u7B80\u6613\u7684symbol","children":[]},{"level":2,"title":"\u83B7\u53D6\u9875\u9762 FPS","slug":"\u83B7\u53D6\u9875\u9762-fps","link":"#\u83B7\u53D6\u9875\u9762-fps","children":[]},{"level":2,"title":"\u4E00\u4E2A\u6781\u7B80\u7684\u6A21\u677F\u5F15\u64CE","slug":"\u4E00\u4E2A\u6781\u7B80\u7684\u6A21\u677F\u5F15\u64CE","link":"#\u4E00\u4E2A\u6781\u7B80\u7684\u6A21\u677F\u5F15\u64CE","children":[]},{"level":2,"title":"camelCased (\u9A7C\u5CF0\u5F0F) \u547D\u540D\u4E0E kebab-case\uFF08\u77ED\u6A2A\u7EBF\u547D\u540D\uFF09\u4E92\u8F6C","slug":"camelcased-\u9A7C\u5CF0\u5F0F-\u547D\u540D\u4E0E-kebab-case-\u77ED\u6A2A\u7EBF\u547D\u540D-\u4E92\u8F6C","link":"#camelcased-\u9A7C\u5CF0\u5F0F-\u547D\u540D\u4E0E-kebab-case-\u77ED\u6A2A\u7EBF\u547D\u540D-\u4E92\u8F6C","children":[]},{"level":2,"title":"\u5B9E\u73B0JSON.stringify\u51FD\u6570","slug":"\u5B9E\u73B0json-stringify\u51FD\u6570","link":"#\u5B9E\u73B0json-stringify\u51FD\u6570","children":[]},{"level":2,"title":"\u5B9E\u73B0repeat\u65B9\u6CD5","slug":"\u5B9E\u73B0repeat\u65B9\u6CD5","link":"#\u5B9E\u73B0repeat\u65B9\u6CD5","children":[]},{"level":2,"title":"AOP\u9762\u5411\u5207\u9762\u7F16\u7A0B","slug":"aop\u9762\u5411\u5207\u9762\u7F16\u7A0B","link":"#aop\u9762\u5411\u5207\u9762\u7F16\u7A0B","children":[]},{"level":2,"title":"compose\u7EC4\u5408\u51FD\u6570\u5B9E\u73B0","slug":"compose\u7EC4\u5408\u51FD\u6570\u5B9E\u73B0","link":"#compose\u7EC4\u5408\u51FD\u6570\u5B9E\u73B0","children":[]},{"level":2,"title":"\u5B9E\u73B0requestIdleCallback\u65B9\u6CD5\u6765\u6E90","slug":"\u5B9E\u73B0requestidlecallback\u65B9\u6CD5\u6765\u6E90","link":"#\u5B9E\u73B0requestidlecallback\u65B9\u6CD5\u6765\u6E90","children":[]},{"level":2,"title":"\u5B9E\u73B0 setTimeout \u51FD\u6570","slug":"\u5B9E\u73B0-settimeout-\u51FD\u6570","link":"#\u5B9E\u73B0-settimeout-\u51FD\u6570","children":[]}],"filePathRelative":"javascript/js.md","git":{"createdTime":1663069722000,"updatedTime":1663069722000,"contributors":[{"name":"slbyml","email":"994917123@qq.com","commits":1}]}}`);export{l as data};
