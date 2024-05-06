function generateUtm() {
    var baseUrl = document.getElementById('baseUrl').value;
    var source = document.getElementById('source').value;
    var medium = document.getElementById('medium').value;
    var campaign = document.getElementById('campaign').value;
    var term = document.getElementById('term').value;

    var url = new URL(baseUrl);
    if (source) url.searchParams.append('utm_source', source);
    if (medium) url.searchParams.append('utm_medium', medium);
    if (campaign) url.searchParams.append('utm_campaign', campaign);
    if (term) url.searchParams.append('utm_term', term);

    // Create a clickable link
    var displayUrl = document.getElementById('generatedUrl');
    displayUrl.innerHTML = '<a href="' + url.href + '" target="_blank">' + url.href + '</a>';
}
