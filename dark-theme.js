const CSS = ":root {\
--azure_a100: #ff6666;\
--black: #ffffff;\
--black_alpha4: rgba(255, 255, 255, 0.04);\
--black_alpha8: rgba(255, 255, 255, 0.08);\
--black_alpha12: rgba(255, 255, 255, 0.12);\
--black_alpha16: rgba(255, 255, 255, 0.16);\
--black_alpha24: rgba(255, 255, 255, 0.24);\
--black_alpha36: rgba(255, 255, 255, 0.36);\
--black_alpha40: rgba(255, 255, 255, 0.40);\
--black_alpha48: rgba(255, 255, 255, 0.48);\
--black_alpha56: rgba(255, 255, 255, 0.56);\
--black_alpha72: rgba(255, 255, 255, 0.72);\
--black_alpha88: rgba(255, 255, 255, 0.88);\
--black_blue10: #fff3e5;\
--black_blue24: #ffe3c2;\
--black_blue24_alpha8: rgba(255, 227, 194, 0.08);\
--black_blue24_alpha24: rgba(255, 227, 194, 0.24);\
--black_blue30_alpha66: rgba(255, 219, 178, 0.66);\
--black_blue45_alpha10: rgba(255, 198, 140, 0.10);\
--blue_400: #ff6666;\
--blue_400_alpha20: rgba(0, 153, 153, 0.20);\
--blue_400_alpha48: rgba(0, 153, 153, 0.49);\
--blue_420: #ff6666;\
--blue_600: #ff6666;\
--blue_640: #ff6666;\
--blue_800: #ff6666;\
--blue_980_alpha12: rgba(0, 20, 51, 0.12);\
--blue_bright: #ff5f5f;\
--brown_gold: #61708d;\
--brown_light: #3d4860;\
--gold_200: #0b183c;\
--gold_250: #1c2c53;\
--gold_300: #2e3f68;\
--gold_400: #54678e;\
--gold_500: #7a8daf;\
--gray_20: #060606;\
--gray_40: #0a0a0a;\
--gray_70: #aaaaaa;\
--gray_100: #1e1c19;\
--gray_100_alpha60: rgba(30, 28, 25, 0.60);\
--gray_200: #333333;\
--gray_300: #4d4d4d;\
--gray_400: #6c6c6c;\
--gray_500: #7d7d7d;\
--gray_600: #9a9a9a;\
--gray_700: #aaaaaa;\
--gray_700_alpha60: rgba(170, 170, 170, 0.60);\
--gray_750: #bdbdbd;\
--gray_800: #cccccc;\
--gray_800_alpha72: rgba(204, 204, 204, 0.72);\
--gray_800_alpha88: rgba(204, 204, 204, 0.88);\
--gray_850: #d6d6d6;\
--gray_900: #dddddd;\
--gray_900_alpha16: rgba(221, 221, 221, 0.16);\
--gray_900_alpha72: rgba(221, 221, 221, 0.72);\
--gray_900_alpha88: rgba(221, 221, 221, 0.88);\
--gray_960: #f5f5f5;\
--green_alpha16: rgba(180, 76, 180, 0.16);\
--green_350: #b44cb4;\
--green_400: #bc57bc;\
--green_600: #e485e4;\
--green_light: #210f2c;\
--green_nice: #c233b4;\
--light_blue_40: #1a140e;\
--light_blue_40_alpha72: rgba(26, 20, 14, 0.72);\
--light_blue_80: #201912;\
--light_blue_100: #251d15;\
--light_blue_300: #614b37;\
--light_blue_400: #86694d;\
--light_blue_500: #a8835e;\
--light_blue_700: #ba9771;\
--light_blue_A300: #705237;\
--orange: #005fff;\
--orange_fire: #0fa3bb;\
--orange_prominent: #008db3;\
--raspberry_pink: #1fc054;\
--raspberry_pink_light: #0f9f3f;\
--purple: #8ca319;\
--purple_light: #6c800a;\
--pink_light: #051414;\
--red: #19b9b9;\
--red_alpha16: rgba(25, 185, 185, 0.16);\
--red_alpha12: rgba(25, 185, 185, 0.12);\
--red_dark: #24c4c4;\
--red_light: #00a3a3;\
--red_nice: #00ccb8;\
--sky_60: #331600;\
--sky_80: #4d2100;\
--sky_100: #662c00;\
--sky_200: #8f3e00;\
--sky_300: #8e5514;\
--steel_gray_10: #050403;\
--steel_gray_20: #080705;\
--steel_gray_40: #0f0d0a;\
--steel_gray_60: #12110f;\
--steel_gray_80: #181713;\
--steel_gray_100: #231e19;\
--steel_gray_120: #2c2621;\
--steel_gray_140: #3a2f24;\
--steel_gray_200: #51483d;\
--steel_gray_200_alpha12: rgba(81, 72, 61, 0.12);\
--steel_gray_200_alpha16: rgba(81, 72, 61, 0.16);\
--steel_gray_300: #665d52;\
--steel_gray_400: #7e7366;\
--steel_gray_500: #90867a;\
--steel_gray_540: #9d9285;\
--steel_gray_600: #b1a699;\
--steel_gray_A540: #aa9882;\
--steel_gray_A540_alpha64: rgba(170, 152, 130, 0.64);\
--transparent_black: rgba(255, 255, 255, 0.00);\
--transparent_white: rgba(0, 0, 0, 0.00);\
--turquoise: #9c4645;\
--violet: #86d13f;\
--violet_dark: #e0e4d3;\
--violet_light: #5c6c0a;\
--violet_muted: #b4b29e;\
--white: #000000;\
--white_alpha72: rgba(0, 0, 0, 0.72);\
--white_alpha64: rgba(0, 0, 0, 0.64);\
--white_alpha48: rgba(0, 0, 0, 0.48);\
--white_alpha40: rgba(0, 0, 0, 0.40);\
--white_alpha24: rgba(0, 0, 0, 0.24);\
--white_alpha16: rgba(0, 0, 0, 0.16);\
--white_alpha12: rgba(0, 0, 0, 0.12);\
--white_alpha8: rgba(0, 0, 0, 0.08);\
--white_alpha4: rgba(0, 0, 0, 0.04);\
--white_blue20: #331b00;\
--white_blue32: #522c00;\
--yellow: #003ef8;\
--yellow_light: #05102d;\
--yellow_alpha16: rgba(5, 16, 45, 0.16);\
--lavender_100: #191600;\
--lavender_200: #332c00;\
--lavender_300: #524700;\
--lavender_700: #a69a4c;\
--lavender_800: #bfb67f;\
--lavender_900: #d9d4b2;\
}";
//icon_outline_medium maybe leave grey icon?
const TITLE_APPLY = "Apply CSS";
const TITLE_REMOVE = "Remove CSS";
const APPLICABLE_PROTOCOLS = ["http:", "https:"];

/*
Toggle CSS: based on the current title, insert or remove the CSS.
Update the page action's title and icon to reflect its state.
*/
function toggleCSS(tab) {

  function gotTitle(title) {
    if (title === TITLE_APPLY) {
      browser.pageAction.setIcon({tabId: tab.id, path: "icons/on.svg"});
      browser.pageAction.setTitle({tabId: tab.id, title: TITLE_REMOVE});
      browser.tabs.insertCSS({code: CSS});
    } else {
      browser.pageAction.setIcon({tabId: tab.id, path: "icons/off.svg"});
      browser.pageAction.setTitle({tabId: tab.id, title: TITLE_APPLY});
      browser.tabs.removeCSS({code: CSS});
    }
  }

  var gettingTitle = browser.pageAction.getTitle({tabId: tab.id});
  gettingTitle.then(gotTitle);
}

/*
Returns true only if the URL's protocol is in APPLICABLE_PROTOCOLS.
Argument url must be a valid URL string.
*/
function protocolIsApplicable(url) {
  const protocol = (new URL(url)).protocol;
  return APPLICABLE_PROTOCOLS.includes(protocol);
}

/*
Initialize the page action: set icon and title, then show.
Only operates on tabs whose URL's protocol is applicable.
*/
function initializePageAction(tab) {
  if (protocolIsApplicable(tab.url)) {
    browser.pageAction.setIcon({tabId: tab.id, path: "icons/off.svg"});
    browser.pageAction.setTitle({tabId: tab.id, title: TITLE_APPLY});
    browser.pageAction.show(tab.id);
  }
}

/*
When first loaded, initialize the page action for all tabs.
*/
var gettingAllTabs = browser.tabs.query({});
gettingAllTabs.then((tabs) => {
  for (let tab of tabs) {
    initializePageAction(tab);
  }
});

/*
Each time a tab is updated, reset the page action for that tab.
*/
browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
  initializePageAction(tab);
});

/*
Toggle CSS when the page action is clicked.
*/
browser.pageAction.onClicked.addListener(toggleCSS);
