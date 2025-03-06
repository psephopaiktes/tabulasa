chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch(error => console.error(error));
// OR: TODO: Delte
// chrome.action.onClicked.addListener((tab) => {
//   chrome.sidePanel.open({ windowId: tab.windowId });
// });
