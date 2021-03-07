chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if(request.type === 'login'){
    $("#accessCode").trigger("input").val(request.access).trigger("change");
    $("#IdentityNumber").val(request.ic).trigger("change");
  
  }else {
    $("#Token").val($('input[id="VerificationToken"]').val()).trigger("change");
  }
 
  sendResponse({ fromcontent: "This message is from content.js" });
});

function jQ_append(id_of_input, text) {
  var input_id = "#" + id_of_input;
  $(input_id).val($(input_id).val() + text);
}
