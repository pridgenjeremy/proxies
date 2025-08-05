function FindProxyForURL(url, host) {
    var allowedHosts = [
        "*.github.com",
        "*.api.github.com",
        "*.azureedge.net",
        "*.github.dev",
        "*.msecnd.net",
        "*.visualstudio.com",
        "*.vscode-webview.net",
        "*.windows.net",
        "*.microsoft.com"
    ];

    // Helper function to check if a hostname matches a wildcard pattern
    function shExpMatchNoCase(host, pattern) {
        return shExpMatch(host.toLowerCase(), pattern.toLowerCase());
    }

    for (var i = 0; i < allowedHosts.length; i++) {
        if (shExpMatchNoCase(host, allowedHosts[i])) {
            return "DIRECT";
        }
    }

    // All other traffic blocked
    return "PROXY 0.0.0.0:0";
}
