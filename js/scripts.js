function openInNewTab(url)
{
    window.open(url, '_blank').focus();
}

var recipientEmail = "niharikasaitana@email.com";
var mailtoLink = "mailto:" + recipientEmail;

// Create an anchor element and set its href attribute
var mailLink = document.getElementById("emailblock");
mailLink.href = mailtoLink;

// Trigger the click event to open the email client
mailLink.click();