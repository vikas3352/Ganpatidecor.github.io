var shellPerformance=window.performance,HighResolutionTimingSupported=!!shellPerformance&&"function"==typeof shellPerformance.mark;HighResolutionTimingSupported&&shellPerformance.mark("shell_consappdata_start"),(self.suiteux_shell_webpackJsonp_bootstrapper=self.suiteux_shell_webpackJsonp_bootstrapper||[]).push([["consappdata"],{7557:function(e,o,t){t.r(o),t.d(o,{loadConsumerAppData:function(){return h}});var l=t(2682),a=t(1011),r="auth=1";function n(e,o,t,l,a){var n=encodeURIComponent(o),c=a?encodeURIComponent(a):"",i=a?"login_hint="+c:void 0,p="https://outlook.com",m=i?p+"?"+i:p,f="https://outlook.live.com/calendar/",h=i?f+"?"+i:f,u="https://onedrive.live.com",d=i?u+"?"+i:u,_="https://www.office.com/launch/word?"+["username="+n,r].join("&"),w=i?_+"&"+i:_,S="https://www.office.com/launch/excel?"+["username="+n,r].join("&"),g=i?S+"&"+i:S,O="https://www.office.com/launch/powerpoint?"+["username="+n,r].join("&"),C=i?O+"&"+i:O,P="https://www.onenote.com/notebooks?"+r,A="https://to-do.microsoft.com/tasks/?auth=1",T="https://web.skype.com/?source=owa";return{NODE_ENV:"production",__DEV__:!1,BUILD_BUILDNUMBER:"20221107.1"}.STANDALONE_APP_LAUNCHER&&"EdgeNewsNTP"===l&&(t?(w="https://www.office.com/launch/word?"+r,g="https://www.office.com/launch/excel?"+r,C="https://www.office.com/launch/powerpoint?"+r):(m="https://www.microsoft.com/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook?ocid=PROD_Edge_CONS_TaOS_ACQ_Edge-newtabpage_WaffleOutlookAppTile",d="https://www.microsoft.com/microsoft-365/onedrive/online-cloud-storage?ocid=PROD_Edge_CONS_TaOS_ACQ_Edge-newtabpage_WaffleOneDriveAppTile",w="https://www.microsoft.com/microsoft-365/word?ocid=PROD_Edge_CONS_TaOS_ACQ_Edge-newtabpage_WaffleWordAppTile",g="https://www.microsoft.com/microsoft-365/excel?ocid=PROD_Edge_CONS_TaOS_ACQ_Edge-newtabpage_WaffleExcelAppTile",C="https://www.microsoft.com/microsoft-365/powerpoint?ocid=PROD_Edge_CONS_TaOS_ACQ_Edge-newtabpage_WafflePowerPointAppTile",P="https://www.microsoft.com/microsoft-365/onenote/digital-note-taking-app?ocid=PROD_Edge_CONS_TaOS_ACQ_Edge-newtabpage_WaffleOneNoteAppTile",A="https://www.microsoft.com/microsoft-365/microsoft-to-do-list-app?ocid=PROD_Edge_CONS_TaOS_ACQ_Edge-newtabpage_WaffleToDoAppTile",h="https://www.microsoft.com/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook?ocid=PROD_Edge_CONS_TaOS_ACQ_Edge-newtabpage_WaffleCalendarAppTile",T="https://www.skype.com/?ocid=PROD_Edge_CONS_TaOS_ACQ_Edge-newtabpage_WaffleSkypeAppTile")),[s("ShellMail",e.Outlook,m),s("ShellDocuments",e.OneDrive,d),s("ShellTeams",e.Teams,"https://teams.live.com/_?utm_source=OfficeWeb"),s("ShellWordOnline",e.WordOnline,w),s("ShellExcelOnline",e.ExcelOnline,g),s("ShellPowerPointOnline",e.PowerPointOnline,C),s("ShellOneNoteOnline",e.OneNoteOnline,P),s("ShellToDo",e.ToDo,A),s("ShellFamilySafety",e.FamilySafety,"https://account.microsoft.com/family"),s("ShellCalendar",e.Calendar,h),s("ShellClipchamp",e.Clipchamp,"https://app.clipchamp.com/login/microsoft?utm_source=m365consumerheader"),s("ShellSkype",e.Skype,T)].filter((function(e){return null!=e}))}function c(e,o,t,l,a){var n=encodeURIComponent(o),c=(a&&encodeURIComponent(a),"https://outlook.live.com/people/"),i=o?"https://sway.office.com/?auth_pvr=WindowsLiveId&auth_upn="+n:"https://sway.com",p="https://flow.microsoft.com/manage/?auth_upn="+n+"&utm_source=consumer_office&utm_medium=%7Bmedium%7D&utm_campaign=consumer_referrals",m="https://www.office.com/launch/forms?"+["username="+n,r].join("&");return{NODE_ENV:"production",__DEV__:!1,BUILD_BUILDNUMBER:"20221107.1"}.STANDALONE_APP_LAUNCHER&&"EdgeNewsNTP"===l&&(t?(i="https://sway.office.com/?auth_pvr=WindowsLiveId",p="https://flow.microsoft.com/manage/?utm_source=consumer_office&utm_medium=%7Bmedium%7D&utm_campaign=consumer_referrals",m="https://www.office.com/launch/forms?"+r):("https://www.office.com/?auth=1&from=ShellNav&ocid=PROD_Edge_CONS_TaOS_ACQ_Edge-newtabpage_WaffleOfficeAppTile",c="https://www.microsoft.com/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook?ocid=PROD_Edge_CONS_TaOS_ACQ_Edge-newtabpage_WafflePeopleAppTile",i="https://sway.office.com/?ocid=PROD_Edge_CONS_TaOS_ACQ_Edge-newtabpage_WaffleSwayAppTile",p="https://flow.microsoft.com/?ocid=PROD_Edge_CONS_TaOS_ACQ_Edge-newtabpage_WaffleFlowAppTile",m="https://forms.office.com/?ocid=PROD_Edge_CONS_TaOS_ACQ_Edge-newtabpage_WaffleFormsAppTile")),[s("ShellPeople",e.People,c),s("ShellSway",e.Sway,i),s("ShellLogicFlows",e.Flow,p),s("ShellOfficeForms",e.Forms,m),s("ShellLists",e.Lists,"https://lists.live.com/?ocid=OfficeConsumerWebWaffle")]}function i(e){return[p("ShellBing",e.Bing,"https://www.bing.com/?FORM=MO0027",!0,e.Microsoft,"MoreFirstParty"),p("ShellMSN",e.MSN,"https://www.msn.com/?OCID=CALHeader",!0,e.Microsoft,"MoreFirstParty"),p("ShellPrivacy",e.Privacy,"https://account.microsoft.com/privacy/",!0,e.Microsoft,"MoreFirstParty"),p("ShellRewards",e.Rewards,"https://account.microsoft.com/rewards/",!0,e.Microsoft,"MoreFirstParty")]}function s(e,o,t,l){return{Id:e,Text:o,Title:o,Url:t,FontIconCss:m(e),BackgroundColor:f(e),TargetWindow:l||"_blank"}}function p(e,o,t,l,a,r){return void 0===r&&(r="FirstParty"),{CollectorId:r,Id:0===e.indexOf("Shell")?e.substr(5):e,Title:o,AriaLabel:o,Publisher:a,FontIconCss:m(e),BackgroundColor:f(e),LaunchFullUrl:t,IsAutoPinnedDisabled:l,CustomActions:[{ActionVerb:1},{ActionVerb:2}]}}function m(e){return"ms-Icon--"+function(e){switch(e){case"ShellMail":return"OutlookLogo";case"ShellCalendar":return"Calendar";case"ShellPeople":return"People";case"ShellDocuments":return"OneDrive";case"ShellToDo":return"ToDoLogoInverse";case"ShellWordOnline":return"WordLogo";case"ShellExcelOnline":return"ExcelLogo";case"ShellPowerPointOnline":return"PowerPointLogo";case"ShellOneNoteOnline":return"OneNoteLogo";case"ShellSway":return"SwayLogo32";case"ShellBing":return"BingLogo";case"ShellMSN":return"MSNLogo";case"ShellSkype":return"SkypeLogo";case"ShellLogicFlows":return"MicrosoftFlowLogo";case"ShellOfficeForms":return"OfficeFormsLogo";case"ShellPrivacy":return"PrivacyLogo";case"ShellRewards":return"RewardsLogo";case"ShellFamilySafety":return"FamilySafetyLogo";case"ShellTeams":return"TeamsLogo";case"ShellClipchamp":return"ClipchampLogo";case"ShellLists":return"ListsLogo";default:return"CircleFill"}}(e)}function f(e){switch(e){case"ShellDocuments":return"#094ab2";case"ShellWordOnline":return"#2b579a";case"ShellExcelOnline":return"#217346";case"ShellPowerPointOnline":return"#d24726";case"ShellOneNoteOnline":return"#80397b";case"ShellSway":case"ShellOfficeForms":return"#008272";case"ShellBing":return"#0C8484";case"ShellMSN":return"#1e1e1e";case"ShellSkype":return"#00AFF0";case"ShellLogicFlows":return"#0077FF";case"ShellFamilySafety":case"ShellClipchamp":return"#0C9D8C";case"ShellTeams":return"#6264A7";case"ShellLists":return"#974B8B";default:return"#0072c6"}}function h(e,o,t,r){var s,p,m=(0,l.pi)((0,l.pi)({},e),{WorkloadLinks:n(r,o.UPN,o.PUID,o.WorkloadId,null===(s=null==t?void 0:t.shellAuthProviderConfig)||void 0===s?void 0:s.login_Hint),AppsLinks:c(r,o.UPN,o.PUID,o.WorkloadId,null===(p=null==t?void 0:t.shellAuthProviderConfig)||void 0===p?void 0:p.login_Hint)}),f=(0,l.pi)((0,l.pi)({},o),{AppDataCache:i(r),AppGalleryUrl:"https://www.office.com/apps?auth=1&home=1"});(0,a.Lo)().invoke("ShellDataUpdated",m,f,t)}}}]),HighResolutionTimingSupported&&(shellPerformance.mark("shell_consappdata_end"),shellPerformance.measure("shell_consappdata","shell_consappdata_start","shell_consappdata_end"));