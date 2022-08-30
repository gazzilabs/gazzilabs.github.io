function sendMsg() {

    formName = document.getElementById("name").value;
    formEmail = document.getElementById("email").value;
    formPhone = document.getElementById("phone").value;
    formMessage = document.getElementById("message").value;

    //Msg Slack Nodejs
    var dataForm = '{"text":"' + formName + ' - ' + formPhone + ' - ' + formEmail + '","attachments":[{"type": "mrkdwn","text":"' + formMessage + '"}]}';

    function jsonEscape(str) {
        return str.replace(/(?:\r\n|\r|\n)/g, '\\n');
    }
    var dataObj = JSON.parse(jsonEscape(dataForm));

    /*
    var config = {
        method: 'post',
        url: 'https://hooks.slack.com/services/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',
        headers: {
            'Content-type': 'application/json',
            'Content-Type': 'text/plain, charset=utf-8'
        },
        data: dataObj
    };


    var xhr = new XMLHttpRequest();
    xhr.open('POST', config, true);
    xhr.onload = function () {
        if (this.readyState === 4 && this.status == 200) {
            console.log('RESPOSTA OK')
        } else {
            console.log(this.status);
        }
    };
    xhr.send();
    console.log(xhr.send);
    */


    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://hooks.slack.com/services/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");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    let data = dataObj;

    xhr.send(data);



}