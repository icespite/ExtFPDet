
  localStorage.x5referer = "https://zpcac.world.tmall.com/shop/view_shop.htm";	
  var link = document.getElementById("a-link");
  var isMobile = navigator.userAgent.match(/.*(iPhone|iPad|Android|ios|SymbianOS|Windows Phone).*/i);
  var host = isMobile ? "https://login.m.taobao.com/login.htm?from=sm&ttid=h5@iframe&redirectURL=" : "https://login.taobao.com/member/login.jhtml?redirectURL=";
  try {
	var hostValue = window.location.host;
	var parts = hostValue && hostValue.split('.');
	var exp = new Date();
	var maxAge = -100;
	exp.setTime(exp.getTime() + maxAge);
	var cookie = 'x5secdata=;maxAge=' + maxAge + ';expires=' + exp.toUTCString() + ';path=/;domain=.' + parts.slice(-2).join('.') + ';';
	document.cookie = cookie;
	document.cookie = cookie + 'Secure;SameSite=None';
  } catch(e) {}
  link.href = host + "https%3a%2f%2fzpcac.world.tmall.com:443/shop/view_shop.htm%2F_____tmd_____%2Fpage%2Flogin_jump%3Frand%3DS3WxGHAgAt756EpznwfNzJq2AFA2qBNla3j6EINUS8We9dazM_iKElp8DwVSHZUevpC41Bx7RzivXIj9RnZgdg%26_lgt_%3D4c6f19344a00742e0d185260a4fc159f___247116___aad87b36acb2bb9e6075a3ee5a1c6acd___23e418033d927e424b4f6fd5d415899a07965a0c23f0f1a68d43645795dda4e9d656fd9017e5d87491b79a3543d6a4c293b27016a2aa046b038f3cdfa54025867f1482e3017312ae744299fa0294f83de6d136ebce27b88815630cc3ebc8b0b75c6cd79363237a100f41f2fd667ca34cdfb517b26ed9411a62cb8c19ef2f4eabe1aadf81a2cb5f1fe81218a209f95137fd205f194522bf5bde040037a36fa205c30206654d14acf46b873fa221b42d063324f4eeb0c568ee25b866619f48bfbe11bddf804d938cc3c9e007ed406ef75cfd6f03d531b820580598990550174386ae0f20489b001c911c2eb10f6ecc12c3f14359e43bf4ec2c10de519472cc31e5&uuid=4c6f19344a00742e0d185260a4fc159f";
  link.click();
 window._config_ = {
   "action": "login",
   "url": "https://login.taobao.com/member/login.jhtml?style=mini&newMini2=true&from=sm&full_redirect=false&redirectURL=https%3a%2f%2fzpcac.world.tmall.com:443/shop/view_shop.htm%2F_____tmd_____%2Fpage%2Fclose_iframe_page%3Frand%3DS3WxGHAgAt756EpznwfNzJq2AFA2qBNla3j6EINUS8We9dazM_iKElp8DwVSHZUevpC41Bx7RzivXIj9RnZgdg%26uuid%3D4c6f19344a00742e0d185260a4fc159f%26_lgt_%3D4c6f19344a00742e0d185260a4fc159f___247116___aad87b36acb2bb9e6075a3ee5a1c6acd___23e418033d927e424b4f6fd5d415899a07965a0c23f0f1a68d43645795dda4e9d656fd9017e5d87491b79a3543d6a4c293b27016a2aa046b038f3cdfa54025867f1482e3017312ae744299fa0294f83de6d136ebce27b88815630cc3ebc8b0b75c6cd79363237a100f41f2fd667ca34cdfb517b26ed9411a62cb8c19ef2f4eabe1aadf81a2cb5f1fe81218a209f95137fd205f194522bf5bde040037a36fa205c30206654d14acf46b873fa221b42d063324f4eeb0c568ee25b866619f48bfbe11bddf804d938cc3c9e007ed406ef75cfd6f03d531b820580598990550174386ae0f20489b001c911c2eb10f6ecc12c3f14359e43bf4ec2c10de519472cc31e5",
   "h5url": "https://login.m.taobao.com/login.htm?from=sm&ttid=h5@iframe&redirectURL=https%3a%2f%2fzpcac.world.tmall.com:443/shop/view_shop.htm%2F_____tmd_____%2Fpage%2Fclose_iframe_page%3Frand%3DS3WxGHAgAt756EpznwfNzJq2AFA2qBNla3j6EINUS8We9dazM_iKElp8DwVSHZUevpC41Bx7RzivXIj9RnZgdg%26uuid%3D4c6f19344a00742e0d185260a4fc159f%26_lgt_%3D4c6f19344a00742e0d185260a4fc159f___247116___aad87b36acb2bb9e6075a3ee5a1c6acd___23e418033d927e424b4f6fd5d415899a07965a0c23f0f1a68d43645795dda4e9d656fd9017e5d87491b79a3543d6a4c293b27016a2aa046b038f3cdfa54025867f1482e3017312ae744299fa0294f83de6d136ebce27b88815630cc3ebc8b0b75c6cd79363237a100f41f2fd667ca34cdfb517b26ed9411a62cb8c19ef2f4eabe1aadf81a2cb5f1fe81218a209f95137fd205f194522bf5bde040037a36fa205c30206654d14acf46b873fa221b42d063324f4eeb0c568ee25b866619f48bfbe11bddf804d938cc3c9e007ed406ef75cfd6f03d531b820580598990550174386ae0f20489b001c911c2eb10f6ecc12c3f14359e43bf4ec2c10de519472cc31e5",
   "dialogSize": {"width": "", "height": ""}
};
