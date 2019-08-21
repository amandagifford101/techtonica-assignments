var strStr = function(haystack, needle) {
    var i = 0;
    var j = 0;
    var value = 0;

    if (haystack == null && haystack == null) {
        return i;
    }
    while (i < haystack.length) {
        if (haystack[i] == needle[j]) {
            i++;
            for (j=1;j<needle.length;j++) {
                if (needle[j] != haystack[i]) {
                    break;
                }
                if (j == needle.length - 1) {
                    value = i - 1;
                    return value;
                }
                i++;
            }
        }
        i++;
    }
    return -1;
};

console.log(strStr("", ""));