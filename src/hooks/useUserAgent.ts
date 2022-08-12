function useUserAgent(app = "tj-app") {
  return {
    "User-agent": `${app}/2.2.0; ${navigator.userAgent}; ${Intl.Locale}; ${window.innerHeight}x${window.innerWidth}`,
  };
}

export default useUserAgent;
