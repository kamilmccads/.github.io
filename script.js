function generateUtm() {
    var baseUrl = document.getElementById('baseUrl').value;
    var source = document.getElementById('source').value;
    var medium = document.getElementById('medium').value;
    var campaign = document.getElementById('campaign').value;
    var campaignId = document.getElementById('campaignId').value;
    var term = document.getElementById('term').value;
    var content = document.getElementById('content').value;

    // Replace placeholders with actual values or leave them as placeholders
    campaignId = campaignId || "{campaignId}";
    term = term || "{keyword}";
    content = content || "{creative}";

    var url = new URL(baseUrl);
    if (source) url.searchParams.append('utm_source', source);
    if (medium) url.searchParams.append('utm_medium', medium);
    if (campaign) url.searchParams.append('utm_campaign', campaign);
    if (campaignId !== "{campaignId}") url.searchParams.append('utm_id', campaignId);
    if (term !== "{keyword}") url.searchParams.append('utm_term', term);
    if (content !== "{creative}") url.searchParams.append('utm_content', content);

    // Decode the URL to replace %7B with { and %7D with }
    var decodedUrl = decodeURIComponent(url.href);

    // Replace specific encoded characters with the correct braces
    decodedUrl = decodedUrl.replace(/%7B/g, '{').replace(/%7D/g, '}');

    // Create a clickable link in the generatedUrl div
    var displayUrl = document.getElementById('generatedUrl');
    displayUrl.innerHTML = '<a href="' + decodedUrl + '" target="_blank">' + decodedUrl + '</a>';
}
