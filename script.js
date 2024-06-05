function generateUtm() {
            var baseUrl = document.getElementById('baseUrl').value;
            var source = document.getElementById('source').value;
            var medium = document.getElementById('medium').value;
            var campaign = document.getElementById('campaign').value;
            var campaignId = document.getElementById('campaignId').value;
            var term = document.getElementById('term').value;
            var content = document.getElementById('content').value;

            if (!baseUrl.startsWith('http://') && !baseUrl.startsWith('https://')) {
                baseUrl = 'https://' + baseUrl;
            }

            var url = new URL(baseUrl);
            if (source) url.searchParams.append('utm_source', source);
            if (medium) url.searchParams.append('utm_medium', medium);
            if (campaign) url.searchParams.append('utm_campaign', campaign);
            if (campaignId) url.searchParams.append('utm_id', campaignId);
            if (term) url.searchParams.append('utm_term', term);
            if (content) url.searchParams.append('utm_content', content);

            // Replace %7B with { and %7D with } in the URL
            var finalUrl = url.href.replace(/%7B/g, '{').replace(/%7D/g, '}');

            // Handle specific placeholder replacements
            finalUrl = finalUrl.replace(/{campaignId1}/g, '{campaignId}');
            finalUrl = finalUrl.replace(/{keyword1}/g, '{keyword}');
            finalUrl = finalUrl.replace(/{creative1}/g, '{creative}');

            // Create a clickable link in the generatedUrl div
            var displayUrl = document.getElementById('generatedUrl');
            displayUrl.innerHTML = '<a href="' + finalUrl + '" target="_blank">' + finalUrl + '</a>';
        }
