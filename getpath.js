document.addEventListener("click", getpath);

function getpath(e) {
    el = e.target;
    focused = [];
    while (el.nodeType === Node.ELEMENT_NODE) {
        var selector = el.nodeName.toLowerCase();
        if (el.id) {
            selector += '#' + el.id;
        } else {
            var sib = el,
                nth = 1;
            while (sib = sib.previousElementSibling) {
                if (sib.nodeName.toLowerCase() == selector)
                    nth++;
            }
            if (nth != 1)
                selector += ":nth-child(" + nth + ")";
        }
        focused.unshift(selector);
        el = el.parentNode;
    }
    var cssPath = focused.join(" > ");
    alert(cssPath);
}
