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

const resetBtn = document.getElementById("reset");

const reset = (buttonId, accessId, icId, access, ic) => {
  const data = {
    access,
    ic,
  };

  chrome.storage.sync.set({ [buttonId]: data }, function () {
    document.getElementById(accessId).value = access;
    document.getElementById(icId).value = ic;
  });
};

if (resetBtn) {
  resetBtn.onclick = function () {

    reset("sendmessageid", "access", "ic", "1.08.05.01-004-01", "01044306");
    reset("sendmessageid_citizen", "access_citizen", "ic_citizen", "1.08.05.01-004-01", "01044307");
    reset("sendmessageiddev", "accessdev", "icdev", "1.08.05.01-001-01", "01044293");
    reset("sendmessageiddev_citizen", "accessdev_citizen", "icdev_citizen", "1.08.05.01-001-01", "01044401");
  };
}
