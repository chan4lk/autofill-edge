(function () {
  function script() {
    if (window.jQuery) {
      // your main code here
      window.jQuery("#accessCode") && window.jQuery("#accessCode").inputmask && window.jQuery("#accessCode").inputmask("remove");
      window.jQuery("#Token") && window.jQuery("#Token").inputmask && window.jQuery("#Token").inputmask("remove");
    }
  }

  function inject(fn) {
    const script = document.createElement("script");
    script.text = `(${fn.toString()})();`;
    document.documentElement.appendChild(script);
  }

  inject(script);
})();
