function FindProxyForURL(url, host) {
    // Normalize host
    host = host.toLowerCase();

    // Helper: Check exact domain match or subdomain
    function dnsDomainIsCaseInsensitive(h, d) {
        return (h === d) || dnsDomainIs(h, "." + d);
    }

    // Direct IP rules
    if (isInNet(host, "1.0.0.1", "255.255.255.255")) return "DIRECT";
    if (isInNet(host, "1.1.1.2", "255.255.255.255")) return "DIRECT";
    if (isInNet(host, "140.82.112.0", "255.255.240.0")) return "DIRECT";
    if (isInNet(host, "143.55.64.0", "255.255.240.0")) return "DIRECT";
    // IPv6 placeholder (PAC lacks native IPv6 match)

    // Domain + Port matches
    if (dnsDomainIsCaseInsensitive(host, "appldnld.apple.com") && (url.substring(0,5) === "http:")) return "DIRECT";
    if (dnsDomainIsCaseInsensitive(host, "configuration.apple.com") && (url.substring(0,6) === "https:")) return "DIRECT";
    if (dnsDomainIsCaseInsensitive(host, "gdmf.apple.com") && (url.substring(0,6) === "https:")) return "DIRECT";
    if (dnsDomainIsCaseInsensitive(host, "gg.apple.com") && (url.substring(0,5) === "http:" || url.substring(0,6) === "https:")) return "DIRECT";
    if (dnsDomainIsCaseInsensitive(host, "gs.apple.com") && (url.substring(0,5) === "http:" || url.substring(0,6) === "https:")) return "DIRECT";
    if (dnsDomainIsCaseInsensitive(host, "ig.apple.com") && (url.substring(0,6) === "https:")) return "DIRECT";
    if (dnsDomainIsCaseInsensitive(host, "mesu.apple.com") && (url.substring(0,5) === "http:" || url.substring(0,6) === "https:")) return "DIRECT";
    if (dnsDomainIsCaseInsensitive(host, "oscdn.apple.com") && (url.substring(0,5) === "http:" || url.substring(0,6) === "https:")) return "DIRECT";
    if (dnsDomainIsCaseInsensitive(host, "osrecovery.apple.com") && (url.substring(0,5) === "http:" || url.substring(0,6) === "https:")) return "DIRECT";
    if (dnsDomainIsCaseInsensitive(host, "skl.apple.com") && (url.substring(0,6) === "https:")) return "DIRECT";
    if (dnsDomainIsCaseInsensitive(host, "swcdn.apple.com") && (url.substring(0,5) === "http:" || url.substring(0,6) === "https:")) return "DIRECT";
    if (dnsDomainIsCaseInsensitive(host, "swdist.apple.com") && (url.substring(0,6) === "https:")) return "DIRECT";
    if (dnsDomainIsCaseInsensitive(host, "swdownload.apple.com") && (url.substring(0,5) === "http:" || url.substring(0,6) === "https:")) return "DIRECT";
    if (dnsDomainIsCaseInsensitive(host, "swscan.apple.com") && (url.substring(0,6) === "https:")) return "DIRECT";
    if (dnsDomainIsCaseInsensitive(host, "updates-http.cdn-apple.com") && (url.substring(0,5) === "http:")) return "DIRECT";
    if (dnsDomainIsCaseInsensitive(host, "updates.cdn-apple.com") && (url.substring(0,6) === "https:")) return "DIRECT";
    if (dnsDomainIsCaseInsensitive(host, "xp.apple.com") && (url.substring(0,6) === "https:")) return "DIRECT";
    if (dnsDomainIsCaseInsensitive(host, "gdmf-ados.apple.com") && (url.substring(0,6) === "https:")) return "DIRECT";
    if (dnsDomainIsCaseInsensitive(host, "gsra.apple.com") && (url.substring(0,6) === "https:")) return "DIRECT";
    if (dnsDomainIsCaseInsensitive(host, "wkms-public.apple.com") && (url.substring(0,6) === "https:")) return "DIRECT";
    if (dnsDomainIsCaseInsensitive(host, "fcs-keys-pub-prod.cdn-apple.com") && (url.substring(0,6) === "https:")) return "DIRECT";

    // Default reject (simulate block)
    return "PROXY 0.0.0.0:0";
}