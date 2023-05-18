window.googletag = window.googletag || {};
window.googletag.cmd = window.googletag.cmd || [];
(function (W, D, N) {
W[N]=W[N]||{};W[N].cmd=W[N].cmd||[];W[N].cmd2=W[N].cmd2||[];
function getDbg(){var dbg=0,m;try{m = W.location.href.match(/pbjs_debug=(\S*)/) || (D.cookie+';').match(/pbjs_debug=(\S*)\;/);dbg=m && m[1] && 'true'===(m[1].split('&')[0]||'')}catch(e){}dbg=dbg||0;D.cookie='pbjs_debug='+dbg+'; path=/; secure';return dbg}
W.G_options=W.G_options||{};
W.G_options.debug=getDbg();
var G_debug=G_options.debug;
function loadScript(url){var o='script',s=document,a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=url;m.parentNode.insertBefore(a,m);};

if(W[N]['affmp2_bikedekho.com']){return}W[N]['affmp2_bikedekho.com']=1;
loadScript('https://cdn4-hbs.affinitymatrix.com/hvrlib/bikedekho.com/1673336402/v2.js');
W[N].cmd.push(function(){
if(!W[N].chkDomain('bikedekho.com')){return}
var cfg = {"aff":{"def":{"maxCall":1,"minVisblePerc":50,"delaySec":30,"kw":{"domain":"bikedekho.com"},"gads":{"enabled":true},"HBOnly":{"enabled":true,"minCpm":0.01,"version":2}},"aus":[{"au":"/42115163,1089059/ip_bikedekho.com_all_multisize_ron_hvr_both","sz":["300x100","300x250","320x100","320x50","336x280","728x90","970x90","300x600"],"def":1},{"au":"/21930596546,1089059/ip_bikedekho.com_all_multisize_ron_hvr_both_mc","sz":["300x100","300x250","320x100","320x50","336x280","728x90","970x90","300x600"],"def":1}],"pbjs":{"enabled":true,"nm":"affpbjs","hbsite":"hvr_man_bikedekho.com","cdnEnabled":true}},"pub":{"def":{"maxCall":5,"delaySec":10,"minVisblePerc":60,"reprf":44,"kw":{"domain":"bikedekho.com"},"excludePatrn":{"enable":1,"patrn":"NO_REFRESH"},"section":{"enable":0,"whitelist":[],"blacklist":[]},"restoreOrgAttr":[{"name":"data-google-query-id"},{"name":"data-load-initially","value":"affhvr"}],"dfpids":{"enable":1,"excIds":{"advId":[5282025107,52290340]},"incIds":[]},"ignoreEmptyAds":false,"ignireImpForPubAu":1,"selfRefresh":{"enable":false,"arPrtn":["SELF_REFRESH"],"refConfFrmAff":true,"arAu":[],"dfpids":{"incIds":{"advId":[],"cmpId":[],"litId":[]}}}},"rule":[{"tp":"exc","au":["*"],"sz":["1x1"],"lbl":"Ignr 1x1"},{"tp":"inc","au":["*"],"sz":["300x100","300x250","320x100","320x50","336x280","728x90","970x90","300x600"],"lbl":"All Au"}],"adspots":[]},"geo":{"enable":false,"srvdrct":true,"cc":["*"]}};
if('function' === typeof W[N].hvrCustCfg ){
    cfg = W[N].hvrCustCfg( cfg );
    if( !cfg ){return}
}
if(cfg.aff.pbjs && cfg.aff.pbjs.enabled){
    var hbsite = cfg.aff.pbjs.hbsite || ('hvr_' + cfg.aff.def.kw.domain),d=new Date(),
    hbInvKey='affhb2_affpbjs_' + cfg.aff.pbjs.hbsite.replace('hvr_man_','hvr_'),
    hostUrl = cfg.aff.pbjs.cdnEnabled ? 'cdn4-hbs.affinitymatrix.com' : 'hbs.ph.affinity.com',
    hbLibUrl = 'https://' + hostUrl +'/v5/' + hbsite + '/affhb.data.js.php?t=' + d.getDate() + d.getMonth() + d.getHours(),
    hbLibLoadDly = 0;

    if(!W[N][hbInvKey]){
        if (hbLibLoadDly > 0) {
            setTimeout(function(){
                W[N].U.loadScript(hbLibUrl);
            }, 0 * 1000);
        } else {
            W[N].U.loadScript(hbLibUrl);
        }
    }
}
if( cfg.aff.def.dfpenblsrv){W[N].U.loadScript("https://securepubads.g.doubleclick.net/tag/js/gpt.js");}

    googletag.cmd.push(function() {
        W[N].AffRefresh(cfg)
    });
});
})(window, document, '__afflib');