(function() {
    function rx(ZA, Tb, wB) {
        function lo(uA, XH) {
            if (!Tb[uA]) {
                if (!ZA[uA]) {
                    var OE = "function" == typeof require && require;
                    if (!XH && OE)
                        return OE(uA, !0);
                    if (zC)
                        return zC(uA, !0);
                    var Us = new Error("Cannot find module '" + uA + "'");
                    throw Us.code = "MODULE_NOT_FOUND",
                        Us
                }
                var ZQ = Tb[uA] = {
                    exports: {}
                };
                ZA[uA][0].call(ZQ.exports, (function(rx) {
                    var Tb = ZA[uA][1][rx];
                    return lo(Tb || rx)
                }), ZQ, ZQ.exports, rx, ZA, Tb, wB)
            }
            return Tb[uA].exports
        }
        for (var zC = "function" == typeof require && require, uA = 0; uA < wB.length; uA++)
            lo(wB[uA]);
        return lo
    }
    return rx
})()({
    1: [function(rx, ZA, Tb) {
        "use strict";

        function wB() {
            return new Promise((rx => {
                chrome.runtime.sendMessage({
                    action: "isRecording"
                }, (ZA => {
                    rx(ZA.status)
                }))
            }))
        }

        function lo(rx) {
            return new Promise((ZA => {
                chrome.runtime.sendMessage({
                    action: "getConfig",
                    url: rx
                }, (rx => {
                    ZA(rx.config)
                }))
            }))
        }
        async function zC() {
            const rx = await wB(),
                ZA = await lo(document.location.href);
            window.postMessage({
                source: "LSR",
                type: "STATUS_RESULT",
                status: rx,
                config: ZA
            }, "*")
        }
        if (document.readyState === "loading")
            document.addEventListener("DOMContentLoaded", zC);
        else
            zC()
    }, {}]
}, {}, [1]);