void 0===window.kintMicrotimeInitialized&&(window.kintMicrotimeInitialized=1,window.addEventListener("load",function(){var a={},t=Array.prototype.slice.call(document.querySelectorAll("[data-kint-microtime-group]"),0);t.forEach(function(t){var i,e;t.querySelector(".kint-microtime-lap")&&(i=t.getAttribute("data-kint-microtime-group"),e=parseFloat(t.querySelector(".kint-microtime-lap").innerHTML),t=parseFloat(t.querySelector(".kint-microtime-avg").innerHTML),void 0===a[i]&&(a[i]={}),(void 0===a[i].min||a[i].min>e)&&(a[i].min=e),(void 0===a[i].max||a[i].max<e)&&(a[i].max=e),a[i].avg=t)}),t.forEach(function(t){var i,e,o,r,n=t.querySelector(".kint-microtime-lap");null!==n&&(i=parseFloat(n.textContent),r=t.dataset.kintMicrotimeGroup,e=a[r].avg,o=a[r].max,r=a[r].min,i!==(t.querySelector(".kint-microtime-avg").textContent=e)||i!==r||i!==o)&&(n.style.background=e<i?"hsl("+(40-40*((i-e)/(o-e)))+", 100%, 65%)":"hsl("+(40+80*(e===r?0:(e-i)/(e-r)))+", 100%, 65%)")})}));
