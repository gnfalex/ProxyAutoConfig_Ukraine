function FindProxyForURL(url, host)
{
  var TOR = "SOCKS5 127.0.0.1:9050; PROXY 127.0.0.1:9050; DIRECT"
  var I2P = "SOCKS5 127.0.0.1:4447; PROXY 127.0.0.1:4444; DIRECT"

  if (dnsDomainIs(host, ".onion")) return TOR;
  if (dnsDomainIs(host, ".i2p")) return I2P;

  if (localHostOrDomainIs(host,"vk.com")) return TOR;
  if (localHostOrDomainIs(host,"yadi.sk")) return TOR;
  if (localHostOrDomainIs(host,"yastatic.net")) return TOR;
  if (shExpMatch(host, "*.yandex.*")) return TOR;
  if (shExpMatch(host, "*.kinopoisk.*")) return TOR;  
  if (dnsDomainIs(host, ".ru")) {
    if (!isResolvable(host)) return TOR;
  }
  return "DIRECT";
}