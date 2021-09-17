"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[1779,9831],{21779:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var r=n(24797),a=n(21233),o=n(96930),c=n(99509),i=n(7236),s=n(71984),l=n(13176),d=n(17027),h=n(41649);class g{constructor(){this.matches=[],this.currentMatchIndex=null,this.isReadOnly=!0,this._changed=new h.Signal(this)}static canSearchOn(e){return e instanceof d.DocumentWidget&&e.content instanceof o.CSVViewer}getInitialQuery(e){return null}async startQuery(e,t){return this._target=t,this._query=e,t.content.searchService.find(e),this.matches}async endQuery(){this._target.content.searchService.clear()}async endSearch(){this._target.content.searchService.clear()}async highlightNext(){this._target.content.searchService.find(this._query)}async highlightPrevious(){this._target.content.searchService.find(this._query,!0)}async replaceCurrentMatch(e){return!1}async replaceAllMatches(e){return!1}get changed(){return this._changed}}const u="CSVTable",T="TSVTable";function C(e,t,n){const r=n.load("jupyterlab");e.editMenu.goToLiners.add({tracker:t,goToLine:e=>a.InputDialog.getNumber({title:r.__("Go to Line"),value:0}).then((t=>{t.button.accept&&null!==t.value&&e.content.goToLine(t.value)}))})}const y=[{activate:function(e,t,n,r,c,i){const s=new o.CSVViewerFactory({name:u,fileTypes:["csv"],defaultFor:["csv"],readOnly:!0,translator:t}),l=new a.WidgetTracker({namespace:"csvviewer"});let d=_.LIGHT_STYLE,h=_.LIGHT_TEXT_CONFIG;n&&n.restore(l,{command:"docmanager:open",args:e=>({path:e.context.path,factory:u}),name:e=>e.context.path}),e.docRegistry.addWidgetFactory(s);const T=e.docRegistry.getFileType("csv");s.widgetCreated.connect(((e,t)=>{l.add(t),t.context.pathChanged.connect((()=>{l.save(t)})),T&&(t.title.icon=T.icon,t.title.iconClass=T.iconClass,t.title.iconLabel=T.iconLabel),t.content.style=d,t.content.rendererConfig=h}));r&&r.themeChanged.connect((()=>{const e=!r||!r.theme||r.isLight(r.theme);d=e?_.LIGHT_STYLE:_.DARK_STYLE,h=e?_.LIGHT_TEXT_CONFIG:_.DARK_TEXT_CONFIG,l.forEach((e=>{e.content.style=d,e.content.rendererConfig=h}))})),c&&C(c,l,t),i&&i.register("csv",g)},id:"@jupyterlab/csvviewer-extension:csv",requires:[s.ITranslator],optional:[r.ILayoutRestorer,a.IThemeManager,i.IMainMenu,c.ISearchProviderRegistry],autoStart:!0},{activate:function(e,t,n,r,c,i){const s=new o.TSVViewerFactory({name:T,fileTypes:["tsv"],defaultFor:["tsv"],readOnly:!0,translator:t}),l=new a.WidgetTracker({namespace:"tsvviewer"});let d=_.LIGHT_STYLE,h=_.LIGHT_TEXT_CONFIG;n&&n.restore(l,{command:"docmanager:open",args:e=>({path:e.context.path,factory:T}),name:e=>e.context.path}),e.docRegistry.addWidgetFactory(s);const u=e.docRegistry.getFileType("tsv");s.widgetCreated.connect(((e,t)=>{l.add(t),t.context.pathChanged.connect((()=>{l.save(t)})),u&&(t.title.icon=u.icon,t.title.iconClass=u.iconClass,t.title.iconLabel=u.iconLabel),t.content.style=d,t.content.rendererConfig=h}));r&&r.themeChanged.connect((()=>{const e=!r||!r.theme||r.isLight(r.theme);d=e?_.LIGHT_STYLE:_.DARK_STYLE,h=e?_.LIGHT_TEXT_CONFIG:_.DARK_TEXT_CONFIG,l.forEach((e=>{e.content.style=d,e.content.rendererConfig=h}))})),c&&C(c,l,t),i&&i.register("tsv",g)},id:"@jupyterlab/csvviewer-extension:tsv",requires:[s.ITranslator],optional:[r.ILayoutRestorer,a.IThemeManager,i.IMainMenu,c.ISearchProviderRegistry],autoStart:!0}];var _;!function(e){e.LIGHT_STYLE=Object.assign(Object.assign({},l.DataGrid.defaultStyle),{voidColor:"#F3F3F3",backgroundColor:"white",headerBackgroundColor:"#EEEEEE",gridLineColor:"rgba(20, 20, 20, 0.15)",headerGridLineColor:"rgba(20, 20, 20, 0.25)",rowBackgroundColor:e=>e%2==0?"#F5F5F5":"white"}),e.DARK_STYLE=Object.assign(Object.assign({},l.DataGrid.defaultStyle),{voidColor:"black",backgroundColor:"#111111",headerBackgroundColor:"#424242",gridLineColor:"rgba(235, 235, 235, 0.15)",headerGridLineColor:"rgba(235, 235, 235, 0.25)",rowBackgroundColor:e=>e%2==0?"#212121":"#111111"}),e.LIGHT_TEXT_CONFIG={textColor:"#111111",matchBackgroundColor:"#FFFFE0",currentMatchBackgroundColor:"#FFFF00",horizontalAlignment:"right"},e.DARK_TEXT_CONFIG={textColor:"#F5F5F5",matchBackgroundColor:"#838423",currentMatchBackgroundColor:"#A3807A",horizontalAlignment:"right"}}(_||(_={}))}}]);
//# sourceMappingURL=1779.f89159e46964313b59a7.js.map