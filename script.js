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

    // Get the generated URL as a string
    var urlString = url.toString();

    // Replace specific encoded characters with the correct braces
    urlString = urlString.replace(/%7B/g, '{').replace(/%7D/g, '}');

    // Create a clickable link in the generatedUrl div
    var displayUrl = document.getElementById('generatedUrl');
    displayUrl.innerHTML = '<a href="' + urlString + '" target="_blank">' + urlString + '</a>';
}
