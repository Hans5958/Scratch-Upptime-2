function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a;function c(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function l(t,n,s,r){return t[1]&&r?e(s.ctx.slice(),t[1](r(n))):s.ctx}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function d(t){return null==t?"":t}let h,f,p=!1;function m(t,e,n,s){for(;t<e;){const r=t+(e-t>>1);n(r)<=s?t=r+1:e=r}return t}function g(t,e){if(p){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const s=e[n];void 0!==s.claim_order&&t.push(s)}e=t}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const o=e[t].claim_order,i=(r>0&&e[n[r]].claim_order<=o?r+1:m(1,r,(t=>e[n[t]].claim_order),o))-1;s[t]=n[i]+1;const a=i+1;n[a]=t,r=Math.max(a,r)}const o=[],i=[];let a=e.length-1;for(let t=n[r]+1;0!=t;t=s[t-1]){for(o.push(e[t-1]);a>=t;a--)i.push(e[a]);a--}for(;a>=0;a--)i.push(e[a]);o.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<o.length&&i[e].claim_order>=o[n].claim_order;)n++;const s=n<o.length?o[n]:null;t.insertBefore(i[e],s)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function v(t,e,n){p&&!n?g(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function _(t){t.parentNode.removeChild(t)}function w(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function $(t){return document.createElement(t)}function y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function S(){return E(" ")}function x(){return E("")}function T(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function A(t){return function(e){return e.preventDefault(),t.call(this,e)}}function N(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function R(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)null==e[s]?t.removeAttribute(s):"style"===s?t.style.cssText=e[s]:"__value"===s?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:N(t,s,e[s])}function P(t){return Array.from(t.childNodes)}function I(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,e,n,s,r=!1){I(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const e=n(o);return void 0===e?t.splice(s,1):t[s]=e,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const e=n(o);return void 0===e?t.splice(s,1):t[s]=e,r?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return s()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function k(t,e,n,s){return L(t,(t=>t.nodeName===e),(t=>{const e=[];for(let s=0;s<t.attributes.length;s++){const r=t.attributes[s];n[r.name]||e.push(r.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>s(e)))}function O(t,e,n){return k(t,e,n,$)}function C(t,e,n){return k(t,e,n,y)}function H(t,e){return L(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>E(e)),!0)}function U(t){return H(t," ")}function j(t,e,n){for(let s=n;s<t.length;s+=1){const n=t[s];if(8===n.nodeType&&n.textContent.trim()===e)return s}return t.length}function M(t,e){const n=j(t,"HTML_TAG_START",0),s=j(t,"HTML_TAG_END",n);if(n===s)return new W(void 0,e);I(t);const r=t.splice(n,s-n+1);_(r[0]),_(r[r.length-1]);const o=r.slice(1,r.length-1);for(const e of o)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new W(o,e)}function D(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function G(t,e){t.value=null==e?"":e}function z(t,e,n,s){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function q(){if(void 0===h){h=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){h=!0}}return h}function B(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=$("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=q();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=T(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{r=T(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(s||r&&n.contentWindow)&&r(),_(n)}}function J(t,e=document.body){return Array.from(e.querySelectorAll(t))}class K{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.is_svg?this.e=y(e.nodeName):this.e=$(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)b(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(_)}}class W extends K{constructor(t,e=!1){super(e),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)v(this.t,this.n[e],t)}}function V(t){f=t}function F(){if(!f)throw new Error("Function called outside component initialization");return f}function Y(t){F().$$.on_mount.push(t)}function X(t){F().$$.after_update.push(t)}function Q(t){F().$$.on_destroy.push(t)}const Z=[],tt=[],et=[],nt=[],st=Promise.resolve();let rt=!1;function ot(t){et.push(t)}const it=new Set;let at=0;function ct(){const t=f;do{for(;at<Z.length;){const t=Z[at];at++,V(t),lt(t.$$)}for(V(null),Z.length=0,at=0;tt.length;)tt.pop()();for(let t=0;t<et.length;t+=1){const e=et[t];it.has(e)||(it.add(e),e())}et.length=0}while(Z.length);for(;nt.length;)nt.pop()();rt=!1,it.clear(),V(t)}function lt(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ot)}}const ut=new Set;let dt;function ht(){dt={r:0,c:[],p:dt}}function ft(){dt.r||r(dt.c),dt=dt.p}function pt(t,e){t&&t.i&&(ut.delete(t),t.i(e))}function mt(t,e,n,s){if(t&&t.o){if(ut.has(t))return;ut.add(t),dt.c.push((()=>{ut.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}else s&&s()}function gt(t,e){const n={},s={},r={$$scope:1};let o=t.length;for(;o--;){const i=t[o],a=e[o];if(a){for(const t in i)t in a||(s[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[o]=a}else for(const t in i)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function bt(t){return"object"==typeof t&&null!==t?t:{}}function vt(t){t&&t.c()}function _t(t,e){t&&t.l(e)}function wt(t,e,s,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,s),i||ot((()=>{const e=c.map(n).filter(o);l?l.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(ot)}function $t(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function yt(t,e){-1===t.$$.dirty[0]&&(Z.push(t),rt||(rt=!0,st.then(ct)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Et(e,n,o,i,a,c,l,u=[-1]){const d=f;V(e);const h=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};l&&l(h.root);let m=!1;if(h.ctx=o?o(e,n.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return h.ctx&&a(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),m&&yt(e,t)),n})):[],h.update(),m=!0,r(h.before_update),h.fragment=!!i&&i(h.ctx),n.target){if(n.hydrate){p=!0;const t=P(n.target);h.fragment&&h.fragment.l(t),t.forEach(_)}else h.fragment&&h.fragment.c();n.intro&&pt(e.$$.fragment),wt(e,n.target,n.anchor,n.customElement),p=!1,ct()}V(d)}class St{$destroy(){$t(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const xt=[];function Tt(e,n=t){let s;const r=new Set;function o(t){if(i(e,t)&&(e=t,s)){const t=!xt.length;for(const t of r)t[1](),xt.push(t,e);if(t){for(let t=0;t<xt.length;t+=2)xt[t][0](xt[t+1]);xt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(i,a=t){const c=[i,a];return r.add(c),1===r.size&&(s=n(o)||t),i(e),()=>{r.delete(c),0===r.size&&(s(),s=null)}}}}const At={};var Nt={owner:"Hans5958",repo:"Scratch-Upptime-2",sites:[{name:"Scratch Lab website",url:"https://lab.scratch.mit.edu"},{name:"ScratchX website",url:"https://scratchx.org"},{name:"ScratchJr website",url:"https://www.scratchjr.org"},{name:"ScratchEd website",url:"http://scratched.gse.harvard.edu"},{name:"Scratch Foundation website",url:"https://scratchfoundation.org"},{name:"Scratch Day website",url:"https://day.scratch.mit.edu"},{name:"Scratch in Practice website",url:"https://sip.scratch.mit.edu"},{name:"Test website",url:"https://scratch.ly",expectedStatusCodes:[403]},{name:"Test download server",url:"https://downloads.scratch.ly"},{name:"Assets CDN server",url:"https://cdn.assets.scratch.mit.edu"},{name:"Project CDN server",url:"https://cdn.projects.scratch.mit.edu"},{name:"Redirect: scratch.org",url:"https://scratch.org"},{name:"Redirect: scratch.love",url:"https://scratch.love"},{name:"Redirect: scratch.computer",url:"https://scratch.computer"},{name:"Redirect: scratch.chat",url:"https://scratch.chat"},{name:"Redirect: scratch.land",url:"https://scratch.land"},{name:"Redirect: scratch.rest",url:"https://scratch.rest"},{name:"Redirect: scratch.team",url:"https://scratch.team"},{name:"Redirect: scratch.camp",url:"https://scratch.camp"},{name:"Redirect: scratch.pizza",url:"https://scratch.pizza"}],"status-website":{name:"Scratch Upptime 2 (unofficial)",cname:"scratch-upptime-2.netlify.app",introTitle:"Welcome to **[Scratch](https://scratch.mit.edu)**'s second (unofficial) Upptime status page.",introMessage:"This is the status page for less-known services related to [Scratch](https://scratch.mit.edu). It monitors them for free using GitHub services, thanks to [Upptime](https://github.com/upptime/upptime).",navbar:[{title:"Status",href:"/"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},"user-agent":"Auto5958",commitMessages:{commitAuthorName:"Auto5958",commitAuthorEmail:"69833949+Auto5958@users.noreply.github.com"},skipDescriptionUpdate:!0,skipTopicsUpdate:!0,skipHomepageUpdate:!0,path:"https://scratch-upptime-2.netlify.app",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentViewOnGitHub:"View and Subscribe on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceeded",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Rt(t,e,n){const s=t.slice();return s[1]=e[n],s}function Pt(e){let n,s,r,o=Nt["status-website"]&&!Nt["status-website"].hideNavLogo&&function(e){let n,s;return{c(){n=$("img"),this.h()},l(t){n=O(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){N(n,"alt",""),c(n.src,s=Nt["status-website"].logoUrl)||N(n,"src",s),N(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}(),i=Nt["status-website"]&&!Nt["status-website"].hideNavTitle&&function(e){let n,s,r=Nt["status-website"].name+"";return{c(){n=$("div"),s=E(r)},l(t){n=O(t,"DIV",{});var e=P(n);s=H(e,r),e.forEach(_)},m(t,e){v(t,n,e),g(n,s)},p:t,d(t){t&&_(n)}}}();return{c(){n=$("div"),s=$("a"),o&&o.c(),r=S(),i&&i.c(),this.h()},l(t){n=O(t,"DIV",{});var e=P(n);s=O(e,"A",{href:!0,class:!0});var a=P(s);o&&o.l(a),r=U(a),i&&i.l(a),a.forEach(_),e.forEach(_),this.h()},h(){N(s,"href",Nt["status-website"].logoHref||Nt.path),N(s,"class","logo svelte-a08hsz")},m(t,e){v(t,n,e),g(n,s),o&&o.m(s,null),g(s,r),i&&i.m(s,null)},p(t,e){Nt["status-website"]&&!Nt["status-website"].hideNavLogo&&o.p(t,e),Nt["status-website"]&&!Nt["status-website"].hideNavTitle&&i.p(t,e)},d(t){t&&_(n),o&&o.d(),i&&i.d()}}}function It(t){let e,n,s,r,o,i=t[1].title+"";return{c(){e=$("li"),n=$("a"),s=E(i),o=S(),this.h()},l(t){e=O(t,"LI",{});var r=P(e);n=O(r,"A",{"aria-current":!0,href:!0,target:!0,class:!0});var a=P(n);s=H(a,i),a.forEach(_),o=U(r),r.forEach(_),this.h()},h(){N(n,"aria-current",r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),N(n,"href",t[1].href.replace("$OWNER",Nt.owner).replace("$REPO",Nt.repo)),N(n,"target",t[1].target||"_self"),N(n,"class","svelte-a08hsz")},m(t,r){v(t,e,r),g(e,n),g(n,s),g(e,o)},p(t,e){1&e&&r!==(r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&N(n,"aria-current",r)},d(t){t&&_(e)}}}function Lt(e){let n,s,r,o,i,a=Nt["status-website"]&&Nt["status-website"].logoUrl&&Pt(),c=Nt["status-website"]&&Nt["status-website"].navbar&&function(t){let e,n=Nt["status-website"].navbar,s=[];for(let e=0;e<n.length;e+=1)s[e]=It(Rt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=x()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=x()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(1&r){let o;for(n=Nt["status-website"].navbar,o=0;o<n.length;o+=1){const i=Rt(t,n,o);s[o]?s[o].p(i,r):(s[o]=It(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){w(s,t),t&&_(e)}}}(e),l=Nt["status-website"]&&Nt["status-website"].navbarGitHub&&!Nt["status-website"].navbar&&function(e){let n,s,r,o=Nt.i18n.navGitHub+"";return{c(){n=$("li"),s=$("a"),r=E(o),this.h()},l(t){n=O(t,"LI",{});var e=P(n);s=O(e,"A",{href:!0,class:!0});var i=P(s);r=H(i,o),i.forEach(_),e.forEach(_),this.h()},h(){N(s,"href",`https://github.com/${Nt.owner}/${Nt.repo}`),N(s,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,s),g(s,r)},p:t,d(t){t&&_(n)}}}();return{c(){n=$("nav"),s=$("div"),a&&a.c(),r=S(),o=$("ul"),c&&c.c(),i=S(),l&&l.c(),this.h()},l(t){n=O(t,"NAV",{class:!0});var e=P(n);s=O(e,"DIV",{class:!0});var u=P(s);a&&a.l(u),r=U(u),o=O(u,"UL",{class:!0});var d=P(o);c&&c.l(d),i=U(d),l&&l.l(d),d.forEach(_),u.forEach(_),e.forEach(_),this.h()},h(){N(o,"class","svelte-a08hsz"),N(s,"class","container svelte-a08hsz"),N(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,s),a&&a.m(s,null),g(s,r),g(s,o),c&&c.m(o,null),g(o,i),l&&l.m(o,null)},p(t,[e]){Nt["status-website"]&&Nt["status-website"].logoUrl&&a.p(t,e),Nt["status-website"]&&Nt["status-website"].navbar&&c.p(t,e),Nt["status-website"]&&Nt["status-website"].navbarGitHub&&!Nt["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&_(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function kt(t,e,n){let{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment)},[s]}class Ot extends St{constructor(t){super(),Et(this,t,kt,Lt,i,{segment:0})}}var Ct={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ht(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ut(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function jt(t,e){var n,s,r,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},d=0;function h(t){var e=Ct[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function f(){for(var t="";c.length;)t+=h(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=a.exec(t);)s=t.substring(d,r.index),d=a.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((i=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+Ht(Ut(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=r[6])?(i.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=jt(Ht(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):r[8]?n='<img src="'+Ut(r[8])+'" alt="'+Ut(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+Ut(r[11]||u[s.toLowerCase()])+'">'),n=f()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(i="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+jt(r[12]||r[15],u)+"</"+i+">":r[16]?n="<code>"+Ut(r[16])+"</code>":(r[17]||r[1])&&(n=h(r[17]||"--"))),l+=s,l+=n;return(l+t.substring(d)+f()).replace(/^\n+|\n+$/g,"")}function Mt(t,e,n){const s=t.slice();return s[3]=e[n],s}function Dt(t,e,n){const s=t.slice();return s[3]=e[n],s}function Gt(t,e,n){const s=t.slice();return s[8]=e[n],s}function zt(e){let n;return{c(){n=$("link"),this.h()},l(t){n=O(t,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",`${Nt.path}/themes/${(Nt["status-website"]||{}).theme||"light"}.css`)},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function qt(e){let n;return{c(){n=$("link"),this.h()},l(t){n=O(t,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",(Nt["status-website"]||{}).themeUrl)},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function Bt(e){let n,s;return{c(){n=$("script"),this.h()},l(t){n=O(t,"SCRIPT",{src:!0}),P(n).forEach(_),this.h()},h(){c(n.src,s=e[8].src)||N(n,"src",s),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function Jt(e){let n;return{c(){n=$("link"),this.h()},l(t){n=O(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){N(n,"rel",e[3].rel),N(n,"href",e[3].href),N(n,"media",e[3].media)},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function Kt(e){let n;return{c(){n=$("meta"),this.h()},l(t){n=O(t,"META",{name:!0,content:!0}),this.h()},h(){N(n,"name",e[3].name),N(n,"content",e[3].content)},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function Wt(e){let n,s,r,o,i,a,c,u,d,h,f,p,m,b,y,E,T,A,R=jt(Nt.i18n.footer.replace(/\$REPO/,`https://github.com/${Nt.owner}/${Nt.repo}`))+"",I=(Nt["status-website"]||{}).customHeadHtml&&function(e){let n,s,r=(Nt["status-website"]||{}).customHeadHtml+"";return{c(){n=new W(!1),s=x(),this.h()},l(t){n=M(t,!1),s=x(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&_(s),t&&n.d()}}}();let L=((Nt["status-website"]||{}).themeUrl?qt:zt)(e),k=(Nt["status-website"]||{}).scripts&&function(t){let e,n=(Nt["status-website"]||{}).scripts,s=[];for(let e=0;e<n.length;e+=1)s[e]=Bt(Gt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=x()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=x()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(0&r){let o;for(n=(Nt["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=Gt(t,n,o);s[o]?s[o].p(i,r):(s[o]=Bt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){w(s,t),t&&_(e)}}}(e),C=(Nt["status-website"]||{}).links&&function(t){let e,n=(Nt["status-website"]||{}).links,s=[];for(let e=0;e<n.length;e+=1)s[e]=Jt(Dt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=x()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=x()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(0&r){let o;for(n=(Nt["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=Dt(t,n,o);s[o]?s[o].p(i,r):(s[o]=Jt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){w(s,t),t&&_(e)}}}(e),H=(Nt["status-website"]||{}).metaTags&&function(t){let e,n=(Nt["status-website"]||{}).metaTags,s=[];for(let e=0;e<n.length;e+=1)s[e]=Kt(Mt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=x()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=x()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(0&r){let o;for(n=(Nt["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Mt(t,n,o);s[o]?s[o].p(i,r):(s[o]=Kt(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){w(s,t),t&&_(e)}}}(e),j=Nt["status-website"].css&&function(e){let n,s,r=`<style>${Nt["status-website"].css}</style>`;return{c(){n=new W(!1),s=x(),this.h()},l(t){n=M(t,!1),s=x(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&_(s),t&&n.d()}}}(),D=Nt["status-website"].js&&function(e){let n,s,r=`<script>${Nt["status-website"].js}<\/script>`;return{c(){n=new W(!1),s=x(),this.h()},l(t){n=M(t,!1),s=x(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&_(s),t&&n.d()}}}(),G=(Nt["status-website"]||{}).customBodyHtml&&function(e){let n,s,r=(Nt["status-website"]||{}).customBodyHtml+"";return{c(){n=new W(!1),s=x(),this.h()},l(t){n=M(t,!1),s=x(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&_(s),t&&n.d()}}}();p=new Ot({props:{segment:e[0]}});const z=e[2].default,q=function(t,e,n,s){if(t){const r=l(t,e,n,s);return t[0](r)}}(z,e,e[1],null);return{c(){I&&I.c(),n=x(),L.c(),s=$("link"),r=$("link"),o=$("link"),k&&k.c(),i=x(),C&&C.c(),a=x(),H&&H.c(),c=x(),j&&j.c(),u=x(),D&&D.c(),d=x(),h=S(),G&&G.c(),f=S(),vt(p.$$.fragment),m=S(),b=$("main"),q&&q.c(),y=S(),E=$("footer"),T=$("p"),this.h()},l(t){const e=J('[data-svelte="svelte-fmspuk"]',document.head);I&&I.l(e),n=x(),L.l(e),s=O(e,"LINK",{rel:!0,href:!0}),r=O(e,"LINK",{rel:!0,type:!0,href:!0}),o=O(e,"LINK",{rel:!0,type:!0,href:!0}),k&&k.l(e),i=x(),C&&C.l(e),a=x(),H&&H.l(e),c=x(),j&&j.l(e),u=x(),D&&D.l(e),d=x(),e.forEach(_),h=U(t),G&&G.l(t),f=U(t),_t(p.$$.fragment,t),m=U(t),b=O(t,"MAIN",{class:!0});var l=P(b);q&&q.l(l),l.forEach(_),y=U(t),E=O(t,"FOOTER",{class:!0});var g=P(E);T=O(g,"P",{}),P(T).forEach(_),g.forEach(_),this.h()},h(){N(s,"rel","stylesheet"),N(s,"href",`${Nt.path}/global.css`),N(r,"rel","icon"),N(r,"type","image/svg"),N(r,"href",(Nt["status-website"]||{}).faviconSvg||(Nt["status-website"]||{}).favicon||"https://raw.githubusercontent.com/upptime/upptime/master/assets/upptime-icon.svg"),N(o,"rel","icon"),N(o,"type","image/png"),N(o,"href",(Nt["status-website"]||{}).favicon||"/logo-192.png"),N(b,"class","container"),N(E,"class","svelte-jbr799")},m(t,e){I&&I.m(document.head,null),g(document.head,n),L.m(document.head,null),g(document.head,s),g(document.head,r),g(document.head,o),k&&k.m(document.head,null),g(document.head,i),C&&C.m(document.head,null),g(document.head,a),H&&H.m(document.head,null),g(document.head,c),j&&j.m(document.head,null),g(document.head,u),D&&D.m(document.head,null),g(document.head,d),v(t,h,e),G&&G.m(t,e),v(t,f,e),wt(p,t,e),v(t,m,e),v(t,b,e),q&&q.m(b,null),v(t,y,e),v(t,E,e),g(E,T),T.innerHTML=R,A=!0},p(t,[e]){(Nt["status-website"]||{}).customHeadHtml&&I.p(t,e),L.p(t,e),(Nt["status-website"]||{}).scripts&&k.p(t,e),(Nt["status-website"]||{}).links&&C.p(t,e),(Nt["status-website"]||{}).metaTags&&H.p(t,e),Nt["status-website"].css&&j.p(t,e),Nt["status-website"].js&&D.p(t,e),(Nt["status-website"]||{}).customBodyHtml&&G.p(t,e);const n={};1&e&&(n.segment=t[0]),p.$set(n),q&&q.p&&(!A||2&e)&&function(t,e,n,s,r,o){if(r){const i=l(e,n,s,o);t.p(i,r)}}(q,z,t,t[1],A?function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(z,t[1],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),null)},i(t){A||(pt(p.$$.fragment,t),pt(q,t),A=!0)},o(t){mt(p.$$.fragment,t),mt(q,t),A=!1},d(t){I&&I.d(t),_(n),L.d(t),_(s),_(r),_(o),k&&k.d(t),_(i),C&&C.d(t),_(a),H&&H.d(t),_(c),j&&j.d(t),_(u),D&&D.d(t),_(d),t&&_(h),G&&G.d(t),t&&_(f),$t(p,t),t&&_(m),t&&_(b),q&&q.d(t),t&&_(y),t&&_(E)}}}function Vt(t,e,n){let{$$slots:s={},$$scope:r}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,r=t.$$scope)},[o,r,s]}class Ft extends St{constructor(t){super(),Et(this,t,Vt,Wt,i,{segment:0})}}function Yt(t){let e,n,s=t[1].stack+"";return{c(){e=$("pre"),n=E(s)},l(t){e=O(t,"PRE",{});var r=P(e);n=H(r,s),r.forEach(_)},m(t,s){v(t,e,s),g(e,n)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&D(n,s)},d(t){t&&_(e)}}}function Xt(e){let n,s,r,o,i,a,c,l,u,d=e[1].message+"";document.title=n=e[0];let h=e[2]&&e[1].stack&&Yt(e);return{c(){s=S(),r=$("h1"),o=E(e[0]),i=S(),a=$("p"),c=E(d),l=S(),h&&h.c(),u=x(),this.h()},l(t){J('[data-svelte="svelte-1moakz"]',document.head).forEach(_),s=U(t),r=O(t,"H1",{class:!0});var n=P(r);o=H(n,e[0]),n.forEach(_),i=U(t),a=O(t,"P",{class:!0});var f=P(a);c=H(f,d),f.forEach(_),l=U(t),h&&h.l(t),u=x(),this.h()},h(){N(r,"class","svelte-17w3omn"),N(a,"class","svelte-17w3omn")},m(t,e){v(t,s,e),v(t,r,e),g(r,o),v(t,i,e),v(t,a,e),g(a,c),v(t,l,e),h&&h.m(t,e),v(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&D(o,t[0]),2&e&&d!==(d=t[1].message+"")&&D(c,d),t[2]&&t[1].stack?h?h.p(t,e):(h=Yt(t),h.c(),h.m(u.parentNode,u)):h&&(h.d(1),h=null)},i:t,o:t,d(t){t&&_(s),t&&_(r),t&&_(i),t&&_(a),t&&_(l),h&&h.d(t),t&&_(u)}}}function Qt(t,e,n){let{status:s}=e,{error:r}=e;return t.$$set=t=>{"status"in t&&n(0,s=t.status),"error"in t&&n(1,r=t.error)},[s,r,false]}class Zt extends St{constructor(t){super(),Et(this,t,Qt,Xt,i,{status:0,error:1})}}function te(t){let n,s,r;const o=[t[4].props];var i=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return i&&(n=new i(a())),{c(){n&&vt(n.$$.fragment),s=x()},l(t){n&&_t(n.$$.fragment,t),s=x()},m(t,e){n&&wt(n,t,e),v(t,s,e),r=!0},p(t,e){const r=16&e?gt(o,[bt(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){ht();const t=n;mt(t.$$.fragment,1,0,(()=>{$t(t,1)})),ft()}i?(n=new i(a()),vt(n.$$.fragment),pt(n.$$.fragment,1),wt(n,s.parentNode,s)):n=null}else i&&n.$set(r)},i(t){r||(n&&pt(n.$$.fragment,t),r=!0)},o(t){n&&mt(n.$$.fragment,t),r=!1},d(t){t&&_(s),n&&$t(n,t)}}}function ee(t){let e,n;return e=new Zt({props:{error:t[0],status:t[1]}}),{c(){vt(e.$$.fragment)},l(t){_t(e.$$.fragment,t)},m(t,s){wt(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.error=t[0]),2&n&&(s.status=t[1]),e.$set(s)},i(t){n||(pt(e.$$.fragment,t),n=!0)},o(t){mt(e.$$.fragment,t),n=!1},d(t){$t(e,t)}}}function ne(t){let e,n,s,r;const o=[ee,te],i=[];function a(t,e){return t[0]?0:1}return e=a(t),n=i[e]=o[e](t),{c(){n.c(),s=x()},l(t){n.l(t),s=x()},m(t,n){i[e].m(t,n),v(t,s,n),r=!0},p(t,r){let c=e;e=a(t),e===c?i[e].p(t,r):(ht(),mt(i[c],1,1,(()=>{i[c]=null})),ft(),n=i[e],n?n.p(t,r):(n=i[e]=o[e](t),n.c()),pt(n,1),n.m(s.parentNode,s))},i(t){r||(pt(n),r=!0)},o(t){mt(n),r=!1},d(t){i[e].d(t),t&&_(s)}}}function se(t){let n,s;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[ne]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);return n=new Ft({props:o}),{c(){vt(n.$$.fragment)},l(t){_t(n.$$.fragment,t)},m(t,e){wt(n,t,e),s=!0},p(t,[e]){const s=12&e?gt(r,[4&e&&{segment:t[2][0]},8&e&&bt(t[3].props)]):{};147&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(pt(n.$$.fragment,t),s=!0)},o(t){mt(n.$$.fragment,t),s=!1},d(t){$t(n,t)}}}function re(t,e,n){let{stores:s}=e,{error:r}=e,{status:o}=e,{segments:i}=e,{level0:a}=e,{level1:c=null}=e,{notify:l}=e;var u,d;return X(l),u=At,d=s,F().$$.context.set(u,d),t.$$set=t=>{"stores"in t&&n(5,s=t.stores),"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[r,o,i,a,c,s,l]}class oe extends St{constructor(t){super(),Et(this,t,re,se,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const ie=[],ae=[{js:()=>Promise.all([import("./index.58f5079b.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","index-e08df70b.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.a58e894a.js"),__inject_styles(["client-0275e36e.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.96c70bb9.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-a58f5d99.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.bdcd0913.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-9a5d58bf.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.0a7783d9.js"),__inject_styles(["client-0275e36e.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],ce=(le=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:le(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:le(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var le;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ue(t,e,n,s){return new(n||(n=Promise))((function(r,o){function i(t){try{c(s.next(t))}catch(t){o(t)}}function a(t){try{c(s.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}c((s=s.apply(t,e||[])).next())}))}function de(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let he,fe=1;const pe="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},me={};let ge,be;function ve(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function _e(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(ge))return null;let e=t.pathname.slice(ge.length);if(""===e&&(e="/"),!ie.some((t=>t.test(e))))for(let n=0;n<ce.length;n+=1){const s=ce[n],r=s.pattern.exec(e);if(r){const n=ve(t.search),o=s.parts[s.parts.length-1],i=o.params?o.params(r):{},a={host:location.host,path:e,query:n,params:i};return{href:t.href,route:s,match:r,page:a}}}}function we(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=de(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(n?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=_e(r);if(o){Ee(o,null,e.hasAttribute("sapper:noscroll"),r.hash),t.preventDefault(),pe.pushState({id:he},"",r.href)}}function $e(){return{x:pageXOffset,y:pageYOffset}}function ye(t){if(me[he]=$e(),t.state){const e=_e(new URL(location.href));e?Ee(e,t.state.id):location.href=location.href}else!function(t){fe=t}(fe+1),function(t){he=t}(fe),pe.replaceState({id:he},"",location.href)}function Ee(t,e,n,s){return ue(this,void 0,void 0,(function*(){const r=!!e;if(r)he=e;else{const t=$e();me[he]=t,he=e=++fe,me[he]=n?t:{x:0,y:0}}if(yield be(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=me[e];s&&(t=document.getElementById(s.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),me[he]=n,n&&(r||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Se(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let xe,Te=null;function Ae(t){const e=de(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=_e(new URL(t,Se(document)));if(e)Te&&t===Te.href||(Te={href:t,promise:Be(e)}),Te.promise}(e.href)}function Ne(t){clearTimeout(xe),xe=setTimeout((()=>{Ae(t)}),20)}function Re(t,e={noscroll:!1,replaceState:!1}){const n=_e(new URL(t,Se(document)));if(n){const s=Ee(n,null,e.noscroll);return pe[e.replaceState?"replaceState":"pushState"]({id:he},"",t),s}return location.href=t,new Promise((()=>{}))}const Pe="undefined"!=typeof __SAPPER__&&__SAPPER__;let Ie,Le,ke,Oe=!1,Ce=[],He="{}";const Ue={page:function(t){const e=Tt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe((e=>{(void 0===s||n&&e!==s)&&t(s=e)}))}}}({}),preloading:Tt(null),session:Tt(Pe&&Pe.session)};let je,Me,De;function Ge(t,e){const{error:n}=t;return Object.assign({error:n},e)}function ze(t){return ue(this,void 0,void 0,(function*(){Ie&&Ue.preloading.set(!0);const e=function(t){return Te&&Te.href===t.href?Te.promise:Be(t)}(t),n=Le={},s=yield e,{redirect:r}=s;if(n===Le)if(r)yield Re(r.location,{replaceState:!0});else{const{props:e,branch:n}=s;yield qe(n,e,Ge(e,t.page))}}))}function qe(t,e,n){return ue(this,void 0,void 0,(function*(){Ue.page.set(n),Ue.preloading.set(!1),Ie?Ie.$set(e):(e.stores={page:{subscribe:Ue.page.subscribe},preloading:{subscribe:Ue.preloading.subscribe},session:Ue.session},e.level0={props:yield ke},e.notify=Ue.page.notify,Ie=new oe({target:De,props:e,hydrate:!0})),Ce=t,He=JSON.stringify(n.query),Oe=!0,Me=!1}))}function Be(t){return ue(this,void 0,void 0,(function*(){const{route:e,page:n}=t,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(r&&(r.statusCode!==t||r.location!==e))throw new Error("Conflicting redirects");r={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!ke){const t=()=>({});ke=Pe.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},je)}let a,c=1;try{const r=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>ue(this,void 0,void 0,(function*(){const d=s[a];if(function(t,e,n,s){if(s!==He)return!0;const r=Ce[t];return!!r&&(e!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,d,l,r)&&(u=!0),o.segments[c]=s[a+1],!e)return{segment:d};const h=c++;let f;if(Me||u||!Ce[a]||Ce[a].part!==e.i){u=!1;const{default:s,preload:r}=yield ae[e.i].js();let o;o=Oe||!Pe.preloaded[a+1]?r?yield r.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},je):{}:Pe.preloaded[a+1],f={component:s,props:o,segment:d,match:l,part:e.i}}else f=Ce[a];return o[`level${h}`]=f})))))}catch(t){o.error=t,o.status=500,a=[]}return{redirect:r,props:o,branch:a}}))}var Je,Ke,We;Ue.session.subscribe((t=>ue(void 0,void 0,void 0,(function*(){if(je=t,!Oe)return;Me=!0;const e=_e(new URL(location.href)),n=Le={},{redirect:s,props:r,branch:o}=yield Be(e);n===Le&&(s?yield Re(s.location,{replaceState:!0}):yield qe(o,r,Ge(r,e.page)))})))),Je={target:document.querySelector("#sapper")},Ke=Je.target,De=Ke,We=Pe.baseUrl,ge=We,be=ze,"scrollRestoration"in pe&&(pe.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{pe.scrollRestoration="auto"})),addEventListener("load",(()=>{pe.scrollRestoration="manual"})),addEventListener("click",we),addEventListener("popstate",ye),addEventListener("touchstart",Ae),addEventListener("mousemove",Ne),Pe.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:s,preloaded:r,status:o,error:i}=Pe;ke||(ke=r&&r[0]);const a={error:i,status:o,session:s,level0:{props:ke},level1:{props:{status:o,error:i},component:Zt},segments:r},c=ve(n);qe([],a,{host:t,path:e,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;pe.replaceState({id:fe},"",e);const n=_e(new URL(location.href));if(n)return Ee(n,fe,!0,t)}));export{D as A,T as B,r as C,tt as D,M as E,c as F,d as G,W as H,z as I,J,jt as K,y as L,C as M,Re as N,G as O,A as P,e as Q,R,St as S,gt as T,X as U,Q as V,u as W,bt as X,ot as Y,B as Z,S as a,O as b,U as c,P as d,$ as e,_ as f,N as g,v as h,Et as i,ht as j,ft as k,pt as l,E as m,H as n,Y as o,g as p,t as q,Nt as r,i as s,mt as t,x as u,w as v,vt as w,_t as x,wt as y,$t as z};

import __inject_styles from './inject_styles.803b7e80.js';