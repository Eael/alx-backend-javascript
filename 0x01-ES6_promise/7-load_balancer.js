export defaut function loadBalancer(chinaDownload, USDownload) {
    return Promise.race([chinaDownload, USDownload]);
}