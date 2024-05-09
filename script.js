function generateUtm() {
    var baseUrl = document.getElementById('baseUrl').value;
    var source = document.getElementById('source').value;
    var medium = document.getElementById('medium').value;
    var campaign = document.getElementById('campaign').value;
    var campaignId = document.getElementById('campaignId').value;
    var term = document.getElementById('term').value;
    var content = document.getElementById('content').value;

    var url = new URL(baseUrl);
    if (source) url.searchParams.append('utm_source', source);
    if (medium) url.searchParams.append('utm_medium', medium);
    if (campaign) url.searchParams.append('utm_campaign', campaign);
    if (campaignId) url.searchParams.append('utm_id', campaignId);
    if (term) url.searchParams.append('utm_term', term);
    if (content) url.searchParams.append('utm_content', content);

    var displayUrl = document.getElementById('generatedUrl');
    displayUrl.textContent = url.href;
}

function copyToClipboard() {
    var urlField = document.getElementById('generatedUrl');
    navigator.clipboard.writeText(urlField.textContent).then(() => {
        alert('URL copied to clipboard!');
    });
}
