function FindProxyForURL(url, host)
{
  var TOR = "SOCKS5 127.0.0.1:9050; PROXY 127.0.0.1:9050; DIRECT"
  var I2P = "SOCKS5 127.0.0.1:4114; SOCKS 192.168.1.99:4114; PROXY 192.168.1.99:8118"

  if (dnsDomainIs(host, ".onion")) return TOR;
  if (localHostOrDomainIs(host,"vk.com")) return TOR;
  if (localHostOrDomainIs(host,"yastatic.net")) return TOR;
  if (shExpMatch(host, "*.yandex.*")) return TOR;
  if (shExpMatch(host, "*.kinopoisk.*")) return TOR;  
  if (dnsDomainIs(host, ".ru")) {
    if (!isResolvable(host)) return TOR;
  }
  return "DIRECT";
}