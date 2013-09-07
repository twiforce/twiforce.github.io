/*
 * lightIRC configuration
 * www.lightIRC.com
 *
 * You can add or change these parameters to customize lightIRC.
 * Please see the full parameters list at http://redmine.lightirc.com/projects/lightirc/wiki/Customization_parameters
 *
 */

var params = {};

/* Change these parameters */
params.host                         = "irc.chat4all.com";
params.port                         = 6667;
params.policyPort                   = 843;

/* Language for the user interface. Currently available translations: ar, bd, bg, br, cz, da, de, el, en, es, et, fi, fr, hu, hr, id, it, ja, nl, no, pl, pt, ro, ru, sl, sq, sr_cyr, sr_lat, sv, th, tr, uk */
params.language                     = "ru";

/* Relative or absolute URL to a lightIRC CSS file.
 * The use of styles only works when you upload lightIRC to your webspace.
 * Example: css/lightblue.css 
 */
params.styleURL                     = "http://synchtube.ru/lightIRC/css/black.css";

/* Nick to be used. A % character will be replaced by a random number */
params.nick                         = "Anon_%";
/* Channel to be joined after connecting. Multiple channels can be added like this: #lightIRC,#test,#help */
params.autojoin                     = "#synch";
/* Commands to be executed after connecting. E.g.: /mode %nick% +x */
params.perform                      = "";

/* Whether the server window (and button) should be shown */
params.showServerWindow             = false;

/* Show a popup to enter a nickname */
params.showNickSelection            = false;
/* Adds a password field to the nick selection box */
params.showIdentifySelection        = false;

/* Show button to register a nickname */
params.showRegisterNicknameButton   = false;
/* Show button to register a channel */
params.showRegisterChannelButton    = false;

/* Opens new queries in background when set to true */
params.showNewQueriesInBackground   = false;

/* Position of the navigation container (where channel and query buttons appear). Valid values: left, right, top, bottom */
params.navigationPosition           = "bottom";
params.showNavigation = true;
params.showChannelHeader = false;
params.userListWidth = 100;
params.showInfoMessages = false;
params.showEmoticonsButton = true;
params.showJoinPartMessages = false;
params.showRegisterNicknameButton = true;
params.timestampFormat = "HH:mm:ss";

params.emoticonList = "(RD)->rainbowdash.png,(PP)->pinkie.png,(TS)->twilight.png,(FS)->fluttershy.png,(AJ)->applejack.png,(RA)->rarity.png,(SB)->sweetiebelle.png,(SC)->scootaloo.png,(AB)->applebloom.png,(DERP)->derpy.png,(TRIX)->trix.png,(TRIX2)->trix2.png,(VS)->vinyl.png,(OCT)->octavia.png,(LUNA)->luna.png,(LUNA2)->luna2.png,(CEL)->celestia.png,(CAD)->cadence.png,(CAD2)->cadence2.png,(DC)->discord.png,(CHRYS)->Chrisee.png,(CHRYS2)->Chrisee2.png,(CHRYS3)->chrysalis3.png,(CHRYS4)->chrysalis4.png,(CHRYS5)->chrysalis5.png,(TS2)->ts2.png,(PP2)->pinkie2.png,(AJ2)->aj_confused.png,(RASHOCK)->rarity_shocked.png,(SC2)->scootaloo2.png,(SPIKE)->SPK.png,(AJ3)->aj3.png,(TS3)->ts3.png,(SNOW)->snowdrop.png,(DOC)->whooves.png,(PS)->parasprite.png,(MUFFIN)->muffin.png,(PFFTFP)->fluffy.png,(FTPPFL)->fluffy2.png,(RDSTARE)->rdstare.png,(PPSTARE)->ppstare.png,(TSSTARE)->tsstare.png,(FSSTARE)->fsstare.png,(AJSTARE)->ajstare.png,(RASTARE)->rastare.png,(SARAY)->Saray.png,PONI->poni.png,(CENA)->cena.png,(CENA2)->cena2.png,(CENA3)->cena3.png,(KING)->king.png,(COOL)->cool.png,(SHY)->shy.swf,(VASE)->2.swf,(DERPY)->derp.swf,(OD)->desire.png,(LOLD)->necron_lold.png,(BB)->bb.png,(ABU)->abu.png,(SR)->sr.png,(YOBA)->yoba.png,(SADYOBA)->sad_yoba.png,(BUTTHURT)->butthurt_yoba.png,(AWESOME)->awesome.png,(SLOW)->slowpoke.png,:3->nya.png,(OKAY)->okay.png,(NO)->no.png,(DOOM)->omsk.png,(FACEPALM)->face.png,(HAHA)->haha.png,(VAGAN)->vaganych.png,(1000)->pocik.png,(ANON)->anonymous.png,(PUSIA)->Pusia.png,(BENDER)->Bender.png,(HARLEY)->Harley.png,(LEELA)->Leela.png,(MIKU)->Miku.png,(MVD)->mvd.png,(WOODY)->Woody.png,(ZOIDBERG)->Zoid.png,(TILL)->till.png,(MUJIK)->mujik.png,(WAHA)->WAH.png,(FORMAN)->forman.png,(AG)->xynta.png,PS3->drake.png,(POV)->pov.png,(LOH)->loh.png,(RAR)->winrar.png,SAGE->sage.png,(RAGE)->rage.png,(TEA)->tea.png,(CAT)->cat.png,(CAT2)->cat2.png,(MORNIN)->mornin.png,(SPIDER)->spider.png,(BOMB)->nuclear.png,(CANCER)->cancer.png,(ROTATE)->rotate.png";


params.rememberNickname = "true";
/* See more parameters at http://redmine.lightirc.com/projects/lightirc/wiki/Customization_parameters */




/* Use this method to send a command to lightIRC with JavaScript */
function sendCommand(command) {
  swfobject.getObjectById('lightIRC').sendCommand(command);
}

/* Use this method to send a message to the active chatwindow */
function sendMessageToActiveWindow(message) {
  swfobject.getObjectById('lightIRC').sendMessageToActiveWindow(message);
}

/* Use this method to set a random text input content in the active window */
function setTextInputContent(content) {
  swfobject.getObjectById('lightIRC').setTextInputContent(content);
}

/* This method gets called if you click on a nick in the chat area */
function onChatAreaClick(nick, ident, realname) {
  //alert("onChatAreaClick: "+nick);
}

/* This method gets called if you use the parameter contextMenuExternalEvent */
function onContextMenuSelect(type, nick, ident, realname) {
  alert("onContextMenuSelect: "+nick+" for type "+type);
}

/* This method gets called if you use the parameter loopServerCommands */
function onServerCommand(command) {
  return command;
}

window.onbeforeunload = function() {
  swfobject.getObjectById('lightIRC').sendQuit();
}

/* This loop escapes % signs in parameters. You should not change it */
for(var key in params) {
  params[key] = params[key].toString().replace(/%/g, "%25");
}