const addLogin = (buttonId, accessId, icId) => {
  chrome.storage.sync.get([buttonId], function (result) {
    if (result[buttonId]) {
      if (result[buttonId].access)
        document.getElementById(accessId).value = result[buttonId].access;
      if (result[buttonId].ic)
        document.getElementById(icId).value = result[buttonId].ic;
    }
  });

  const sendMessageId = document.getElementById(buttonId);
  if (sendMessageId) {
    sendMessageId.onclick = function () {
      const data = {
        access: document.getElementById(accessId).value,
        ic: document.getElementById(icId).value,
      };

      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.storage.sync.set({ [buttonId]: data }, function () {
          chrome.tabs.sendMessage(
            tabs[0].id,
            {
              access: data.access,
              ic: data.ic,
              type: "login",
              tabId: tabs[0].id,
            },
            function (response) {
              console.log("message with url sent");
              window.close();
            }
          );
        });
      });
    };
  }
};

addLogin("sendmessageid", "access", "ic");
addLogin("sendmessageid_citizen", "access_citizen", "ic_citizen");
addLogin("sendmessageiddev", "accessdev", "icdev");
addLogin("sendmessageiddev_citizen", "accessdev_citizen", "icdev_citizen");

const tokentrigger = document.getElementById("tokentrigger");
if (tokentrigger) {
  tokentrigger.onclick = function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          type: "otp",
          tabId: tabs[0].id,
        },
        function (response) {
          console.log("message with url sent");
          window.close();
        }
      );
    });
  };
}
