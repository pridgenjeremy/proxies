function FindProxyForURL(url, host) {
    // Reglas para Apple News
    if (dnsDomainIsHost(host, "newsletter-edge.apple.com") ||
        dnsDomainIsHost(host, "news-assets.apple.com") ||
        dnsDomainIsHost(host, "news-events.apple.com") ||
        dnsDomainIsHost(host, "news-edge.apple.com") ||
        dnsDomainIsHost(host, "apple.news")) {
        return "DIRECT";
    }

    // Reglas para firebaseinstallations.googleapis.com
    if (dnsDomainIsHost(host, "firebaseinstallations.googleapis.com")) {
        return "REJECT";
    }

    // Reglas para AT&T
    if (isInNet(host, "201.175.169.175", "255.255.255.255") ||
        dnsDomainIsHost(host, "att.com.mx") ||
        dnsDomainSuffixIs(host, "attmex.mx")) {
        return "CELLULAR-ONLY";
    }

    // Reglas para Weather
    if (dnsDomainIsHost(host, "weather-map2.apple.com") ||
        dnsDomainIsHost(host, "weather-analytics-events.apple.com") ||
        dnsDomainIsHost(host, "weatherkit.apple.com")) {
        return "DIRECT";
    }

    // Reglas para TV
    if (shExpMatch(host, "*.tv.apple.com")) {
        return "DIRECT";
    }

    // Reglas para lcdn-locator
    if (dnsDomainIsHost(host, "lcdn-locator.apple.com")) {
        return "DIRECT";
    }

    // Reglas para serverstatus
    if (dnsDomainIsHost(host, "serverstatus.apple.com")) {
        return "DIRECT";
    }

    // Reglas para albert
    if (dnsDomainIsHost(host, "albert.apple.com")) {
        return "DIRECT";
    }

    // Reglas para captive
    if (dnsDomainIsHost(host, "captive.apple.com")) {
        return "DIRECT";
    }

    // Reglas para gs
    if (dnsDomainIsHost(host, "gs.apple.com")) {
        return "DIRECT";
    }

    // Reglas para humb
    if (dnsDomainIsHost(host, "humb.apple.com")) {
        return "DIRECT";
    }

    // Reglas para static.ips
    if (dnsDomainIsHost(host, "static.ips.apple.com")) {
        return "DIRECT";
    }

    // Reglas para sq-device
    if (dnsDomainIsHost(host, "sq-device.apple.com")) {
        return "DIRECT";
    }

    // Reglas para tbsc
    if (dnsDomainIsHost(host, "tbsc.apple.com")) {
        return "DIRECT";
    }

    // Reglas para time-ios
    if (dnsDomainIsHost(host, "time-ios.apple.com")) {
        return "DIRECT";
    }

    // Reglas para time
    if (dnsDomainIsHost(host, "time.apple.com")) {
        return "DIRECT";
    }

    // Reglas para time-macos
    if (dnsDomainIsHost(host, "time-macos.apple.com")) {
        return "DIRECT";
    }

    // Reglas para account
    if (dnsDomainIsHost(host, "account.apple.com")) {
        return "DIRECT";
    }

    // Reglas para appleid.cdn-apple.com
    if (dnsDomainIsHost(host, "appleid.cdn-apple.com")) {
        return "DIRECT";
    }

    // Reglas para idmsa
    if (dnsDomainIsHost(host, "idmsa.apple.com")) {
        return "DIRECT";
    }

    // Reglas para gsa
    if (dnsDomainIsHost(host, "gsa.apple.com")) {
        return "DIRECT";
    }

    // Reglas para apple-cloudkit
    if (shExpMatch(host, "*.apple-cloudkit.com")) {
        return "DIRECT";
    }

    // Reglas para apple-livephotoskit
    if (shExpMatch(host, "*.apple-livephotoskit.com")) {
        return "DIRECT";
    }

    // Reglas para apzones
    if (shExpMatch(host, "*.apzones.com")) {
        return "DIRECT";
    }

    // Reglas para cdn-apple
    if (shExpMatch(host, "*.cdn-apple.com")) {
        return "DIRECT";
    }

    // Reglas para gc
    if (shExpMatch(host, "*.gc.apple.com")) {
        return "DIRECT";
    }

    // Reglas para icloud
    if (shExpMatch(host, "*.icloud.com")) {
        return "DIRECT";
    }

    // Reglas para icloud.com.cn
    if (shExpMatch(host, "*.icloud.com.cn")) {
        return "DIRECT";
    }

    // Reglas para icloud.apple.com
    if (shExpMatch(host, "*.icloud.apple.com")) {
        return "DIRECT";
    }

    // Reglas para icloud-content
    if (shExpMatch(host, "*.icloud-content.com")) {
        return "DIRECT";
    }

    // Reglas para iwork
    if (shExpMatch(host, "*.iwork.apple.com")) {
        return "DIRECT";
    }

    // Reglas para mask.icloud.com
    if (dnsDomainIsHost(host, "mask.icloud.com")) {
        return "DIRECT";
    }

    // Reglas para mask-h2.icloud.com
    if (dnsDomainIsHost(host, "mask-h2.icloud.com")) {
        return "DIRECT";
    }

    // Reglas para mask-api.icloud.com
    if (dnsDomainIsHost(host, "mask-api.icloud.com")) {
        return "DIRECT";
    }

    // Reglas para bpapi
    if (dnsDomainIsHost(host, "bpapi.apple.com")) {
        return "DIRECT";
    }

    // Reglas para cssubmissions
    if (dnsDomainIsHost(host, "cssubmissions.apple.com")) {
        return "DIRECT";
    }

    // Reglas para fba
    if (dnsDomainIsHost(host, "fba.apple.com")) {
        return "DIRECT";
    }

    // Reglas para itunes
    if (shExpMatch(host, "*.itunes.apple.com")) {
        return "DIRECT";
    }

    // Reglas para apps
    if (shExpMatch(host, "*.apps.apple.com")) {
        return "DIRECT";
    }

    // Reglas para mzstatic
    if (shExpMatch(host, "*.mzstatic.com")) {
        return "DIRECT";
    }

    // Reglas para itunes
    if (dnsDomainIsHost(host, "itunes.apple.com")) {
        return "DIRECT";
    }

    // Reglas para ppq
    if (dnsDomainIsHost(host, "ppq.apple.com")) {
        return "DIRECT";
    }

    // Reglas para api.apple-cloudkit.com
    if (dnsDomainIsHost(host, "api.apple-cloudkit.com")) {
        return "DIRECT";
    }

    // Reglas para appattest
    if (shExpMatch(host, "*.appattest.apple.com")) {
        return "DIRECT";
    }

    // Reglas para apps-marketplace
    if (shExpMatch(host, "*.apps-marketplace.apple.com")) {
        return "DIRECT";
    }

    // Reglas para token.safebrowsing.apple
    if (dnsDomainIsHost(host, "token.safebrowsing.apple")) {
        return "DIRECT";
    }

    // Reglas para audiocontentdownload
    if (dnsDomainIsHost(host, "audiocontentdownload.apple.com")) {
        return "DIRECT";
    }

    // Reglas para devimages-cdn
    if (dnsDomainIsHost(host, "devimages-cdn.apple.com")) {
        return "DIRECT";
    }

    // Reglas para download.developer
    if (dnsDomainIsHost(host, "download.developer.apple.com")) {
        return "DIRECT";
    }

    // Reglas para playgrounds-assets-cdn
    if (dnsDomainIsHost(host, "playgrounds-assets-cdn.apple.com")) {
        return "DIRECT";
    }

    // Reglas para playgrounds-cdn
    if (dnsDomainIsHost(host, "playgrounds-cdn.apple.com")) {
        return "DIRECT";
    }

    // Reglas para sylvan
    if (dnsDomainIsHost(host, "sylvan.apple.com")) {
        return "DIRECT";
    }

    // Reglas para gateway.icloud
    if (dnsDomainIsHost(host, "gateway.icloud.com")) {
        return "DIRECT";
    }

    // Reglas para appldnld
    if (dnsDomainIsHost(host, "appldnld.apple.com")) {
        return "DIRECT";
    }

    // Reglas para configuration
    if (dnsDomainIsHost(host, "configuration.apple.com")) {
        return "DIRECT";
    }

    // Reglas para gdmf
    if (dnsDomainIsHost(host, "gdmf.apple.com")) {
        return "DIRECT";
    }

    // Reglas para gg
    if (dnsDomainIsHost(host, "gg.apple.com")) {
        return "DIRECT";
    }

    // Reglas para ig
    if (dnsDomainIsHost(host, "ig.apple.com")) {
        return "DIRECT";
    }

    // Reglas para mesu
    if (dnsDomainIsHost(host, "mesu.apple.com")) {
        return "DIRECT";
    }

    // Reglas para oscdn
    if (dnsDomainIsHost(host, "oscdn.apple.com")) {
        return "DIRECT";
    }

    // Reglas para osrecovery
    if (dnsDomainIsHost(host, "osrecovery.apple.com")) {
        return "DIRECT";
    }

    // Reglas para skl
    if (dnsDomainIsHost(host, "skl.apple.com")) {
        return "DIRECT";
    }

    // Reglas para swcdn
    if (dnsDomainIsHost(host, "swcdn.apple.com")) {
        return "DIRECT";
    }

    // Reglas para swdist
    if (dnsDomainIsHost(host, "swdist.apple.com")) {
        return "DIRECT";
    }

    // Reglas para swdownload
    if (dnsDomainIsHost(host, "swdownload.apple.com")) {
        return "DIRECT";
    }

    // Reglas para swscan
    if (dnsDomainIsHost(host, "swscan.apple.com")) {
        return "DIRECT";
    }

    // Reglas para updates-http.cdn-apple.com
    if (dnsDomainIsHost(host, "updates-http.cdn-apple.com")) {
        return "DIRECT";
    }

    // Reglas para updates.cdn-apple.com
    if (dnsDomainIsHost(host, "updates.cdn-apple.com")) {
        return "DIRECT";
    }

    // Reglas para xp
    if (dnsDomainIsHost(host, "xp.apple.com")) {
        return "DIRECT";
    }

    // Reglas para gdmf-ados
    if (dnsDomainIsHost(host, "gdmf-ados.apple.com")) {
        return "DIRECT";
    }

    // Reglas para gsra
    if (dnsDomainIsHost(host, "gsra.apple.com")) {
        return "DIRECT";
    }

    // Reglas para wkms-public
    if (dnsDomainIsHost(host, "wkms-public.apple.com")) {
        return "DIRECT";
    }

    // Reglas para fcs-keys-pub-prod.cdn-apple.com
    if (dnsDomainIsHost(host, "fcs-keys-pub-prod.cdn-apple.com")) {
        return "DIRECT";
    }

    // Reglas para Certificate Validation
    if (dnsDomainIsHost(host, "valid.apple.com") ||
        dnsDomainIsHost(host, "ocsp2.apple.com")) {
        return "DIRECT";
    }

    // Reglas para Digicert
    if (dnsDomainIsHost(host, "ocsp.digicert.com") ||
        dnsDomainIsHost(host, "ocsp.apple.com") ||
        dnsDomainIsHost(host, "crl4.digicert.com") ||
        dnsDomainIsHost(host, "crl3.digicert.com")) {
        return "DIRECT";
    }

    // Reglas para Certificate Revocation
    if (dnsDomainIsHost(host, "crl.apple.com")) {
        return "DIRECT";
    }

    // Reglas para Certificate Validation
    if (dnsDomainIsHost(host, "certs.apple.com")) {
        return "DIRECT";
    }

    // Reglas para Apple Encrypted DNS
    if (dnsDomainIsHost(host, "doh.dns.apple.com")) {
        return "DIRECT";
    }

    // Reglas para Apple Intelligence Extensions
    if (dnsDomainIsHost(host, "apple-relay.apple.com")) {
        return "DIRECT";
    }

    // Reglas para Private Cloud Intelligence Compute
    if (dnsDomainIsHost(host, "cp4.cloudflare.com") ||
        dnsDomainIsHost(host, "apple-relay.fastly-edge.com") ||
        dnsDomainIsHost(host, "apple-relay.cloudflare.com")) {
        return "REJECT";
    }

    // Reglas para Apple Intelligence (smoot *)
    if (shExpMatch(host, "*.smoot.apple.com")) {
        return "DIRECT";
    }

    // Reglas para Apple Intelligence (guzzoni)
    if (dnsDomainIsHost(host, "guzzoni.apple.com")) {
        return "DIRECT";
    }

    // Reglas para UDP Control
    if (isInNet(host, "1.0.0.1", "255.255.255.255") ||
        isInNet(host, "1.1.1.1", "255.255.255.255") ||
        (shExpMatch(host, "*.tether.edge.apple") && isInNet(host, "28469", "255.255.255.255")) ||
        dnsDomainIsHost(host, "canary.mask.apple-dns.net") ||
        dnsDomainIsHost(host, "mask-h2.icloud.com") ||
        dnsDomainIsHost(host, "mask.icloud.com")) {
        return "REJECT";
    }

    // Reglas para Associated Domains
    if (dnsDomainIsHost(host, "app-site-association.networking.apple") ||
        dnsDomainIsHost(host, "app-site-association.cdn-apple.com")) {
        return "DIRECT";
    }

    // Reglas para Push Notifications
    if (isInNet(host, "17.188.20.0", "255.255.254.0") ||
        isInNet(host, "17.188.128.0", "255.255.128.0") ||
        isInNet(host, "17.57.144.0", "255.255.252.0") ||
        isInNet(host, "17.252.0.0", "255.255.0.0") ||
        isInNet(host, "17.249.0.0", "255.255.0.0")) {
        return "DIRECT";
    }

    // Reglas para AT&T DNS
    if (isInNet(host, "201.175.169.175", "255.255.255.255") ||
        isInNet(host, "28469", "255.255.255.255")) {
        return "CELLULAR-ONLY";
    }

    // Reglas para AT&T APN
    if (isInNet(host, "1.0.0.1", "255.255.255.255") ||
        isInNet(host, "1.1.1.1", "255.255.255.255") ||
        isInNet(host, "28469", "255.255.255.255")) {
        return "CELLULAR-ONLY";
    }

    // Reglas para time
    if (dnsDomainIsHost(host, "time.apple.com")) {
        return "DIRECT";
    }

    // Reglas para time-ios
    if (dnsDomainIsHost(host, "time-ios.apple.com")) {
        return "DIRECT";
    }

    // Reglas para tbsc
    if (dnsDomainIsHost(host, "tbsc.apple.com")) {
        return "DIRECT";
    }

    // Reglas para sq-device
    if (dnsDomainIsHost(host, "sq-device.apple.com")) {
        return "DIRECT";
    }

    // Reglas para static.ips
    if (dnsDomainIsHost(host, "static.ips.apple.com")) {
        return "DIRECT";
    }

    // Reglas para humb
    if (dnsDomainIsHost(host, "humb.apple.com")) {
        return "DIRECT";
    }

    // Reglas para gs
    if (dnsDomainIsHost(host, "gs.apple.com")) {
        return "DIRECT";
    }

    // Reglas para captive
    if (dnsDomainIsHost(host, "captive.apple.com")) {
        return "DIRECT";
    }

    // Reglas para albert
    if (dnsDomainIsHost(host, "albert.apple.com")) {
        return "DIRECT";
    }

    // Reglas por defecto
    return "DIRECT";
}
