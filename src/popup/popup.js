const sendMessageId = document.getElementById("sendmessageid");
if (sendMessageId) {
  sendMessageId.onclick = function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          access: document.getElementById('access').value,
          ic: document.getElementById('ic').value, 
          type: 'login',         
          tabId: tabs[0].id
        },
        function(response) {
          console.log("message with url sent");
          window.close();
        }
      );
    });
  };
}

const sendMessageId_citizen = document.getElementById("sendmessageid_citizen");
if (sendMessageId_citizen) {
  sendMessageId_citizen.onclick = function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          access: document.getElementById('access_citizen').value,
          ic: document.getElementById('ic_citizen').value, 
          type: 'login',         
          tabId: tabs[0].id
        },
        function(response) {
          console.log("message with url sent");
          window.close();
        }
      );
    });
  };
}

const sendMessageIddev = document.getElementById("sendmessageiddev");
if (sendMessageIddev) {
  sendMessageIddev.onclick = function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          access: document.getElementById('accessdev').value,
          ic: document.getElementById('icdev').value, 
          type: 'login',         
          tabId: tabs[0].id
        },
        function(response) {
          console.log("message with url sent");
          window.close();
        }
      );
    });
  };
}

const sendMessageIddev_citizen = document.getElementById("sendmessageiddev_citizen");
if (sendMessageIddev_citizen) {
  sendMessageIddev.onclick = function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          access: document.getElementById('accessdev_citizen').value,
          ic: document.getElementById('icdev_citizen').value, 
          type: 'login',         
          tabId: tabs[0].id
        },
        function(response) {
          console.log("message with url sent");
          window.close();
        }
      );
    });
  };
}

const tokentrigger = document.getElementById("tokentrigger");
if (tokentrigger) {
  tokentrigger.onclick = function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {         
          type: 'otp',    
          tabId: tabs[0].id
        },
        function(response) {
          console.log("message with url sent");
          window.close();
        }
      );
    });
  };
}
