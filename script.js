function gU(){var a=document.getElementById("baseUrl").value,b=document.getElementById("source").value,c=document.getElementById("medium").value,d=document.getElementById("campaign").value,e=document.getElementById("campaignId").value,f=document.getElementById("term").value,g=document.getElementById("content").value,h=new URL(a);b&&h.searchParams.append("utm_source",b),c&&h.searchParams.append("utm_medium",c),d&&h.searchParams.append("utm_campaign",d),e&&h.searchParams.append("utm_id",e),f&&h.searchParams.append("utm_term",f),g&&h.searchParams.append("utm_content",g);var i=h.href.replace(/%7B/g,"{").replace(/%7D/g,"}");i=i.replace(/{campaignId1}/g,"{campaignId}"),i=i.replace(/{keyword1}/g,"{keyword}"),i=i.replace(/{creative1}/g,"{creative}");var j=document.getElementById("generatedUrl");j.innerHTML='<a href="'+i+'" target="_blank">'+i+"</
