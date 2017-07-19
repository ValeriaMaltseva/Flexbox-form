function clearInput(selector) {
    var inputs = document.getElementsByClassName(selector);
    for (var key in inputs) {
        if (inputs.hasOwnProperty(key)) {
            var input = inputs[key];
            input.setAttribute('value', '');
            input.value = '';
            input.focus();
        }
    }
}
