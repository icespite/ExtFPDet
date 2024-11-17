/* eslint-disable spaced-comment */
(function () {
  const originalXMLHttpRequest = window.XMLHttpRequest;
  var confiantGlobal = window.confiant || (window.confiant = {});
  var clientSettings = window.confiant && window.confiant['Fseez_-nDyWQXIJsbnoKkKTHXC4'] && window.confiant['Fseez_-nDyWQXIJsbnoKkKTHXC4'].clientSettings || window.confiant;
  const originalFetch = window.fetch;
  var integrationSetting = {
    config_ver: '202309070534',
    integration_type: 'gpt_and_prebid',
    integration_version: '202307190925',
    exec_test_ver: null
  };
  const originalWebSocket = window.WebSocket;
  const originalEventSource = window.EventSource;
  const originalSetInterval = window.setInterval;
  function defaultCallback() {
    console.log('Confiant: ad blocked', arguments);
  }
  if (clientSettings.enable_integrations && clientSettings.devMode != 2) {
    clientSettings.enable_integrations = null;
  }
  const originalLocalStorage = window.localStorage.setItem;
  var settings = {
    propertyId: 'Fseez_-nDyWQXIJsbnoKkKTHXC4',
    adServer: 'https://protected-by.clarium.io',
    confiantCdn: 'cdn.confiant-integrations.net',
    mapping: 'W3siaSI6MiwidCI6Int7b319Ont7d319eHt7aH19IiwicCI6MCwiRCI6MSwiciI6W119LHsiaSI6NiwidCI6Int7Y299fTp7e3d9fXh7e2h9fSIsInAiOjUwLCJEIjowLCJyIjpbeyJ0IjoiZXgiLCJzIjpudWxsLCJ2IjoiY28ifV19XQ==',
    rules: {
      "du": 0,
      "rs": 1,
      "v": 6,
      "vp": [],
      "vlp": [],
      "m": [{
        "r": [{
          "d": "trp-display-creative",
          "l": [{
            "oi": "5g7km3",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2149:9294345"]
          }, {
            "oi": "lchmm3",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2149:9528646"]
          }, {
            "oi": "ah4574",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2149:10866005"]
          }, {
            "oi": "pyq974",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2249:328919173"]
          }, {
            "oi": "w45vz4",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2149:11121703"]
          }, {
            "oi": "mxwo45",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2249:420828346"]
          }, {
            "oi": "t60755",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2966:262603"]
          }, {
            "oi": "9mo9a5",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2149:11169169"]
          }, {
            "oi": "v3pxl5",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"4858:216209986"]
          }, {
            "oi": "k5tuo5",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2149:11230319"]
          }, {
            "oi": "y8svz5",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"4858:201872054"]
          }, {
            "oi": "u9g006",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2149:11280600"]
          }, {
            "oi": "eest26",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"4858:243929896"]
          }, {
            "oi": "xybr36",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2249:474813049"]
          }, {
            "oi": "685046",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"3858:3457025"]
          }, {
            "oi": "wwss56",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"4858:250302616"]
          }, {
            "oi": "6lnt76",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2249:483370587"]
          }, {
            "oi": "hmlfb6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2861:22685761"]
          }, {
            "oi": "6qxrb6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2149:10868755"]
          }, {
            "oi": "6qxrb6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2149:10868755"]
          }, {
            "oi": "g4qnc6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2149:11350323"]
          }, {
            "oi": "0jqnc6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"4858:262162736"]
          }, {
            "oi": "h3s4f6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2249:663570818142"]
          }, {
            "oi": "3ww2h6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"4858:274337556"]
          }, {
            "oi": "oy79h6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"3858:4153622"]
          }, {
            "oi": "1axhh6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2861:23048852"]
          }, {
            "oi": "d8zth6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2249:667657637039"]
          }, {
            "oi": "sec2i6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"3858:4358003"]
          }, {
            "oi": "inc4i6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2249:633938361522"]
          }, {
            "oi": "96h7i6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2149:11385605"]
          }, {
            "oi": "qxj6j6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"4858:289421696"]
          }, {
            "oi": "rfknj6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"3992:143836638"]
          }, {
            "oi": "xwmpj6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2149:11392670"]
          }, {
            "oi": "l90rj6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"4036:23165222"]
          }, {
            "oi": "y8w5k6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"3858:4550735"]
          }, {
            "oi": "nbw5k6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"4858:272925194"]
          }, {
            "oi": "glw5k6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2974:6553325"]
          }, {
            "oi": "cmw5k6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"3858:4528522"]
          }, {
            "oi": "7pw5k6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2974:6557212"]
          }, {
            "oi": "7uw5k6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"3858:4532211"]
          }, {
            "oi": "70x5k6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2974:6553273"]
          }, {
            "oi": "n0x5k6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"3858:4393244"]
          }, {
            "oi": "58x5k6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"3858:4532311"]
          }, {
            "oi": "fex5k6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"3778:4118311295"]
          }, {
            "oi": "7fx5k6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2540:2349555"]
          }, {
            "oi": "0tx5k6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"3858:4476238"]
          }, {
            "oi": "4vx5k6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2249:514542892"]
          }, {
            "oi": "hzx5k6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"4858:306467086"]
          }, {
            "oi": "30y5k6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"3858:3279463"]
          }, {
            "oi": "82y5k6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"3822:18406824"]
          }, {
            "oi": "3cy5k6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2249:474219275"]
          }, {
            "oi": "any5k6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"3858:4532287"]
          }, {
            "oi": "8xy5k6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2249:515223917"]
          }, {
            "oi": "11z5k6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"3646:562532"]
          }, {
            "oi": "a8z5k6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"4858:271699264"]
          }, {
            "oi": "r8z5k6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"4858:271717294"]
          }, {
            "oi": "m10ln1",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"1986:73479947"]
          }, {
            "oi": "svigp4",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"1986:314800244"]
          }, {
            "oi": "9kq6r4",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2974:3922052"]
          }, {
            "oi": "0x4pw4",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"5504:187134"]
          }, {
            "oi": "43juw4",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"5504:187174"]
          }, {
            "oi": "flnoz4",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2974:3922014"]
          }, {
            "oi": "pzeb15",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2149:11117421"]
          }, {
            "oi": "2s7065",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2974:3921987"]
          }, {
            "oi": "0ekmw5",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2179:592267358455253934"]
          }, {
            "oi": "r8qmw5",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2861:22653967"]
          }, {
            "oi": "g8o066",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2179:588510538873219085"]
          }, {
            "oi": "23b886",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2861:22910216"]
          }, {
            "oi": "q7qr86",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"5504:188143"]
          }, {
            "oi": "69qr86",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"5504:188153"]
          }, {
            "oi": "jyk0c6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"1986:441926713"]
          }, {
            "oi": "xr55c6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"5504:188219"]
          }, {
            "oi": "ofxyg6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"1986:453656021"]
          }, {
            "oi": "m8wmp3",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2149:8598080"]
          }, {
            "oi": "rugfr3",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2149:10617519"]
          }, {
            "oi": "95ln25",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"3828:291"]
          }, {
            "oi": "yd0w36",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2149:11300965"]
          }, {
            "oi": "yl2w36",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2149:11300937"]
          }, {
            "oi": "w7rb96",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2149:11331958"]
          }, {
            "oi": "igy0i6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2249:509276415"]
          }, {
            "oi": "obdei6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2249:666857040234"]
          }, {
            "oi": "jnopj6",
            "ot": 2,
            "rs": 1,
            "s": ["aqid=\"2249:671969948055"]
          }]
        }, {
          "d": "simpli.fi",
          "l": [{
            "oi": "v85wn3",
            "ot": 2,
            "rs": 1,
            "s": ["/ads/1850035/16158336"]
          }, {
            "oi": "l92u16",
            "ot": 2,
            "rs": 1,
            "s": ["/ads/3344791/30112116"]
          }, {
            "oi": "i2a266",
            "ot": 2,
            "rs": 1,
            "s": ["/ads/3388285/30566018"]
          }, {
            "oi": "jrgy96",
            "ot": 2,
            "rs": 1,
            "s": ["/ads/3322334/31523122"]
          }, {
            "oi": "0jhy96",
            "ot": 2,
            "rs": 1,
            "s": ["/ads/3317834/31522603"]
          }, {
            "oi": "o5xyb6",
            "ot": 2,
            "rs": 1,
            "s": ["/ads/3507695/31813251"]
          }, {
            "oi": "irzpc6",
            "ot": 2,
            "rs": 1,
            "s": ["/ads/3236312/31828659"]
          }, {
            "oi": "o3pdf6",
            "ot": 2,
            "rs": 1,
            "s": ["/ads/3240778/32318611"]
          }, {
            "oi": "nlmsg6",
            "ot": 2,
            "rs": 1,
            "s": ["/ads/3583879/32513310"]
          }, {
            "oi": "gsk7i6",
            "ot": 2,
            "rs": 1,
            "s": ["/ads/3169585/32836826"]
          }, {
            "oi": "dxkmi6",
            "ot": 2,
            "rs": 1,
            "s": ["/ads/3620034/32902402"]
          }, {
            "oi": "wvb5k6",
            "ot": 2,
            "rs": 1,
            "s": ["/ads/3640326/33130186"]
          }, {
            "oi": "poawf6",
            "ot": 2,
            "rs": 1,
            "s": ["/ads/3572728/32395007"]
          }, {
            "oi": "iscxf6",
            "ot": 2,
            "rs": 1,
            "s": ["/ads/3572722/32394961"]
          }]
        }, {
          "d": "tpc.googlesyndication.com",
          "l": [{
            "oi": "rvd494",
            "ot": 2,
            "rs": 1,
            "s": ["/8874387741188189402"]
          }, {
            "oi": "cn3ty4",
            "ot": 2,
            "rs": 1,
            "s": ["/1883863945714338993"]
          }, {
            "oi": "42iu05",
            "ot": 2,
            "rs": 1,
            "s": ["/14942550904056899687"]
          }, {
            "oi": "hmpd65",
            "ot": 2,
            "rs": 1,
            "s": ["/7646737433109695120"]
          }, {
            "oi": "xkzr46",
            "ot": 2,
            "rs": 1,
            "s": ["/8161975708340147200"]
          }, {
            "oi": "mqnz46",
            "ot": 2,
            "rs": 1,
            "s": ["/12177311205310042715"]
          }, {
            "oi": "205s66",
            "ot": 2,
            "rs": 1,
            "s": ["/9019254873151483196"]
          }, {
            "oi": "beq3b6",
            "ot": 2,
            "rs": 1,
            "s": ["/1539046591019430623"]
          }, {
            "oi": "jljeb6",
            "ot": 2,
            "rs": 1,
            "s": ["/10654445994124090815"]
          }, {
            "oi": "7re0c6",
            "ot": 2,
            "rs": 1,
            "s": ["/4739441271882419683"]
          }, {
            "oi": "s3bbc6",
            "ot": 2,
            "rs": 1,
            "s": ["/14971171743014953153"]
          }, {
            "oi": "rvfbc6",
            "ot": 2,
            "rs": 1,
            "s": ["/3370597365782914255"]
          }, {
            "oi": "ferzc6",
            "ot": 2,
            "rs": 1,
            "s": ["/5359738591803647466"]
          }, {
            "oi": "h56xd6",
            "ot": 2,
            "rs": 1,
            "s": ["/1708789305780218186"]
          }, {
            "oi": "s0f1f6",
            "ot": 2,
            "rs": 1,
            "s": ["/7135708957490311239"]
          }, {
            "oi": "3wigf6",
            "ot": 2,
            "rs": 1,
            "s": ["/11594349981777620433"]
          }, {
            "oi": "ir9kf6",
            "ot": 2,
            "rs": 1,
            "s": ["/12161018468940459015"]
          }, {
            "oi": "takgg6",
            "ot": 2,
            "rs": 1,
            "s": ["/13531562641805045225"]
          }, {
            "oi": "ffc2h6",
            "ot": 2,
            "rs": 1,
            "s": ["/12524761347943345483"]
          }, {
            "oi": "1p19h6",
            "ot": 2,
            "rs": 1,
            "s": ["/14870778306574391535"]
          }, {
            "oi": "m0ezh6",
            "ot": 2,
            "rs": 1,
            "s": ["/7636537610762388257"]
          }, {
            "oi": "o8s9i6",
            "ot": 2,
            "rs": 1,
            "s": ["/7468629988973014690"]
          }, {
            "oi": "kxz9i6",
            "ot": 2,
            "rs": 1,
            "s": ["/433795811396484720"]
          }, {
            "oi": "ye1ai6",
            "ot": 2,
            "rs": 1,
            "s": ["/5696351734300950300"]
          }, {
            "oi": "jjybi6",
            "ot": 2,
            "rs": 1,
            "s": ["/12756686761123685253"]
          }, {
            "oi": "j31ci6",
            "ot": 2,
            "rs": 1,
            "s": ["/650902491064237364"]
          }, {
            "oi": "q22ci6",
            "ot": 2,
            "rs": 1,
            "s": ["/342071088298426854"]
          }, {
            "oi": "d05ci6",
            "ot": 2,
            "rs": 1,
            "s": ["/12699141090559805135"]
          }, {
            "oi": "okddi6",
            "ot": 2,
            "rs": 1,
            "s": ["/9480241664594525716"]
          }, {
            "oi": "7pqni6",
            "ot": 2,
            "rs": 1,
            "s": ["/13328652818087757151"]
          }, {
            "oi": "q8dui6",
            "ot": 2,
            "rs": 1,
            "s": ["/7756507182597551922"]
          }, {
            "oi": "8kmui6",
            "ot": 2,
            "rs": 1,
            "s": ["/4674153650542408703"]
          }, {
            "oi": "4rvwi6",
            "ot": 2,
            "rs": 1,
            "s": ["/253723976514092778"]
          }, {
            "oi": "d09xi6",
            "ot": 2,
            "rs": 1,
            "s": ["/12615142905818510396"]
          }, {
            "oi": "6toyi6",
            "ot": 2,
            "rs": 1,
            "s": ["/14727648600265545697"]
          }, {
            "oi": "vjuzi6",
            "ot": 2,
            "rs": 1,
            "s": ["/5253559934139113083"]
          }, {
            "oi": "pzn1j6",
            "ot": 2,
            "rs": 1,
            "s": ["/6556656287935029757"]
          }, {
            "oi": "9mg2j6",
            "ot": 2,
            "rs": 1,
            "s": ["/18063798656704960430"]
          }, {
            "oi": "pfu2j6",
            "ot": 2,
            "rs": 1,
            "s": ["/10286851256274712680"]
          }, {
            "oi": "cky2j6",
            "ot": 2,
            "rs": 1,
            "s": ["/3104822908823875565"]
          }, {
            "oi": "zw94j6",
            "ot": 2,
            "rs": 1,
            "s": ["/9438139155411928609"]
          }, {
            "oi": "vhp4j6",
            "ot": 2,
            "rs": 1,
            "s": ["/7219377471658595772"]
          }, {
            "oi": "9st4j6",
            "ot": 2,
            "rs": 1,
            "s": ["/18320578314297726000"]
          }, {
            "oi": "69z6j6",
            "ot": 2,
            "rs": 1,
            "s": ["/16886688871361902512"]
          }, {
            "oi": "hkz6j6",
            "ot": 2,
            "rs": 1,
            "s": ["/17876609099501799343"]
          }, {
            "oi": "zrz6j6",
            "ot": 2,
            "rs": 1,
            "s": ["/16845209390673875458"]
          }, {
            "oi": "q427j6",
            "ot": 2,
            "rs": 1,
            "s": ["/12644221653453934699"]
          }, {
            "oi": "9nn7j6",
            "ot": 2,
            "rs": 1,
            "s": ["/10280149845832131436"]
          }, {
            "oi": "8hp7j6",
            "ot": 2,
            "rs": 1,
            "s": ["/5828027043674223721"]
          }, {
            "oi": "v5i9j6",
            "ot": 2,
            "rs": 1,
            "s": ["/4636619842249621984"]
          }, {
            "oi": "tclbj6",
            "ot": 2,
            "rs": 1,
            "s": ["/13177651293550927460"]
          }, {
            "oi": "tarcj6",
            "ot": 2,
            "rs": 1,
            "s": ["/4812387546880647835"]
          }, {
            "oi": "icrcj6",
            "ot": 2,
            "rs": 1,
            "s": ["/878899855849689281"]
          }, {
            "oi": "78ucj6",
            "ot": 2,
            "rs": 1,
            "s": ["/16714184754893269994"]
          }, {
            "oi": "b8ucj6",
            "ot": 2,
            "rs": 1,
            "s": ["/11894740046384993435"]
          }, {
            "oi": "q1wcj6",
            "ot": 2,
            "rs": 1,
            "s": ["/16805324807606033314"]
          }, {
            "oi": "z25dj6",
            "ot": 2,
            "rs": 1,
            "s": ["/16635061607669077958"]
          }, {
            "oi": "qi8dj6",
            "ot": 2,
            "rs": 1,
            "s": ["/7292636061431337661"]
          }, {
            "oi": "refdj6",
            "ot": 2,
            "rs": 1,
            "s": ["/9250365873001329755"]
          }, {
            "oi": "alhfj6",
            "ot": 2,
            "rs": 1,
            "s": ["/17758240991028899419"]
          }, {
            "oi": "2nifj6",
            "ot": 2,
            "rs": 1,
            "s": ["/8727622380579662492"]
          }, {
            "oi": "lilfj6",
            "ot": 2,
            "rs": 1,
            "s": ["/9481392095969537006"]
          }, {
            "oi": "ab0hj6",
            "ot": 2,
            "rs": 1,
            "s": ["/4151895413260421620"]
          }, {
            "oi": "083sj6",
            "ot": 2,
            "rs": 1,
            "s": ["/3465735794859837846"]
          }, {
            "oi": "6fzyj6",
            "ot": 2,
            "rs": 1,
            "s": ["/13014242172622122073"]
          }, {
            "oi": "oaw5k6",
            "ot": 2,
            "rs": 1,
            "s": ["/11494569060365262725"]
          }, {
            "oi": "raw5k6",
            "ot": 2,
            "rs": 1,
            "s": ["/10539226323946890009"]
          }, {
            "oi": "3jw5k6",
            "ot": 2,
            "rs": 1,
            "s": ["/3912389681045745237"]
          }, {
            "oi": "9vw5k6",
            "ot": 2,
            "rs": 1,
            "s": ["/17762816399530525877"]
          }, {
            "oi": "24x5k6",
            "ot": 2,
            "rs": 1,
            "s": ["/11300662521578102917"]
          }, {
            "oi": "ghx5k6",
            "ot": 2,
            "rs": 1,
            "s": ["/6858721295148195040"]
          }, {
            "oi": "vqx5k6",
            "ot": 2,
            "rs": 1,
            "s": ["/3020716198153063225"]
          }, {
            "oi": "d0y5k6",
            "ot": 2,
            "rs": 1,
            "s": ["/6147315685093404025"]
          }, {
            "oi": "z6y5k6",
            "ot": 2,
            "rs": 1,
            "s": ["/7980072561718993344"]
          }, {
            "oi": "7fy5k6",
            "ot": 2,
            "rs": 1,
            "s": ["/12601486693502570714"]
          }]
        }, {
          "d": "rtb.adentifi.com",
          "l": [{
            "oi": "i8h145",
            "ot": 2,
            "rs": 1,
            "s": ["crId=262611"]
          }, {
            "oi": "gh7445",
            "ot": 2,
            "rs": 1,
            "s": ["crId=262610"]
          }, {
            "oi": "fl1x85",
            "ot": 2,
            "rs": 1,
            "s": ["crId=262593"]
          }, {
            "oi": "i2jnn5",
            "ot": 2,
            "rs": 1,
            "s": ["crId=262598"]
          }, {
            "oi": "4xkvd6",
            "ot": 2,
            "rs": 1,
            "s": ["crId=332929"]
          }, {
            "oi": "088wd6",
            "ot": 2,
            "rs": 1,
            "s": ["crId=332945"]
          }, {
            "oi": "73arf6",
            "ot": 2,
            "rs": 1,
            "s": ["crId=336354"]
          }, {
            "oi": "svv4e6",
            "ot": 2,
            "rs": 1,
            "s": ["crId=333539"]
          }, {
            "oi": "i2w4e6",
            "ot": 2,
            "rs": 1,
            "s": ["crId=333456"]
          }, {
            "oi": "ah97e6",
            "ot": 2,
            "rs": 1,
            "s": ["crId=333358"]
          }, {
            "oi": "3ra7e6",
            "ot": 2,
            "rs": 1,
            "s": ["crId=333577"]
          }]
        }, {
          "d": "SSP BannerAd DspId",
          "l": [{
            "oi": "t60755",
            "ot": 2,
            "rs": 1,
            "s": ["CrsCrId:0d6d60c05c9bc6d6d571a54a5a26fb7095f65478"]
          }, {
            "oi": "m10ln1",
            "ot": 2,
            "rs": 1,
            "s": ["CrsCrId:3c90489f1f50e24a9090fd459c8a13593e20d213"]
          }, {
            "oi": "8zxb04",
            "ot": 2,
            "rs": 1,
            "s": ["CrsCrId:cb11497bb1402b4df85913dd93d48ab0797f30f2"]
          }, {
            "oi": "svigp4",
            "ot": 2,
            "rs": 1,
            "s": ["CrsCrId:7d75030a0260b6e5880f2ee6837512b64a409a8a"]
          }, {
            "oi": "0x4pw4",
            "ot": 2,
            "rs": 1,
            "s": ["CrsCrId:89ba2c4363fc10f7500304af55ca839feb3f677b"]
          }, {
            "oi": "43juw4",
            "ot": 2,
            "rs": 1,
            "s": ["CrsCrId:c0bb68d68f7f4668c0ab7d17b3428ec6d58fbce4"]
          }, {
            "oi": "r8qmw5",
            "ot": 2,
            "rs": 1,
            "s": ["CrsCrId:4ac767b61cc04d943174389dc116af3a49f85b7b"]
          }, {
            "oi": "23b886",
            "ot": 2,
            "rs": 1,
            "s": ["CrsCrId:45166a54d0a75000017226b9bcf3113cbac7ff10"]
          }, {
            "oi": "8x4rh6",
            "ot": 2,
            "rs": 1,
            "s": ["CrsCrId:1d8f016a148c945c4fa479e34e8bef37cccd3172"]
          }]
        }, {
          "d": "a.ctnsnet.com",
          "l": [{
            "oi": "f0ez85",
            "ot": 2,
            "rs": 1,
            "s": ["sid=72107275"]
          }, {
            "oi": "vigz85",
            "ot": 2,
            "rs": 1,
            "s": ["sid=72107276"]
          }, {
            "oi": "z10tz5",
            "ot": 2,
            "rs": 1,
            "s": ["sid=75831104"]
          }, {
            "oi": "bcvy56",
            "ot": 2,
            "rs": 1,
            "s": ["sid=76816894"]
          }, {
            "oi": "3xflc6",
            "ot": 2,
            "rs": 1,
            "s": ["sid=77962593"]
          }]
        }, {
          "d": "a.rfihub.com",
          "l": [{
            "oi": "ehpfb5",
            "ot": 2,
            "rs": 1,
            "s": ["&ai=5040897"]
          }, {
            "oi": "9pc7n5",
            "ot": 2,
            "rs": 1,
            "s": ["&ai=5074743"]
          }, {
            "oi": "kf0io5",
            "ot": 2,
            "rs": 1,
            "s": ["&ai=5107943"]
          }, {
            "oi": "ecgy26",
            "ot": 2,
            "rs": 1,
            "s": ["&ai=5179749"]
          }, {
            "oi": "2pgy26",
            "ot": 2,
            "rs": 1,
            "s": ["&ai=5179763"]
          }, {
            "oi": "s2hy26",
            "ot": 2,
            "rs": 1,
            "s": ["&ai=5179773"]
          }, {
            "oi": "5hhy26",
            "ot": 2,
            "rs": 1,
            "s": ["&ai=5179751"]
          }, {
            "oi": "238z26",
            "ot": 2,
            "rs": 1,
            "s": ["&ai=5179765"]
          }, {
            "oi": "jufz26",
            "ot": 2,
            "rs": 1,
            "s": ["&ai=5178121"]
          }, {
            "oi": "ym1946",
            "ot": 2,
            "rs": 1,
            "s": ["&ai=5187495"]
          }, {
            "oi": "xh5d56",
            "ot": 2,
            "rs": 1,
            "s": ["&ai=5195063"]
          }, {
            "oi": "kgix86",
            "ot": 2,
            "rs": 1,
            "s": ["&ai=5205857"]
          }, {
            "oi": "ckkx86",
            "ot": 2,
            "rs": 1,
            "s": ["&ai=5205865"]
          }, {
            "oi": "iamx86",
            "ot": 2,
            "rs": 1,
            "s": ["&ai=5205867"]
          }, {
            "oi": "dsh396",
            "ot": 2,
            "rs": 1,
            "s": ["&ai=5226737"]
          }, {
            "oi": "g71xh6",
            "ot": 2,
            "rs": 1,
            "s": ["&ai=5286751"]
          }, {
            "oi": "ebhgi6",
            "ot": 2,
            "rs": 1,
            "s": ["&ai=5289139"]
          }, {
            "oi": "xhhgi6",
            "ot": 2,
            "rs": 1,
            "s": ["&ai=5285601"]
          }, {
            "oi": "yihgi6",
            "ot": 2,
            "rs": 1,
            "s": ["&ai=5289459"]
          }, {
            "oi": "3rawi6",
            "ot": 2,
            "rs": 1,
            "s": ["&ai=5290711"]
          }, {
            "oi": "msg4k6",
            "ot": 2,
            "rs": 1,
            "s": ["&ai=5304589"]
          }]
        }, {
          "d": "ads.w55c.net",
          "l": [{
            "oi": "cmijw5",
            "ot": 2,
            "rs": 1,
            "s": ["ci=Xm81MVCyUm"]
          }, {
            "oi": "lsasw5",
            "ot": 2,
            "rs": 1,
            "s": ["ci=XmSaSku4tv"]
          }]
        }, {
          "d": "adsrvr.org",
          "l": [{
            "oi": "e42ky5",
            "ot": 2,
            "rs": 1,
            "s": ["crid=dylsmveg"]
          }, {
            "oi": "cam3k6",
            "ot": 2,
            "rs": 1,
            "s": ["crid=0c9wwjpa"]
          }, {
            "oi": "zsm4k6",
            "ot": 2,
            "rs": 1,
            "s": ["crid=qq23rh9g"]
          }, {
            "oi": "ctq4k6",
            "ot": 2,
            "rs": 1,
            "s": ["crid=jiw2er0z"]
          }]
        }, {
          "d": "bs.serving-sys.com",
          "l": [{
            "oi": "ie8l46",
            "ot": 2,
            "rs": 1,
            "s": ["pli=1078767513"]
          }, {
            "oi": "f9x5k6",
            "ot": 2,
            "rs": 1,
            "s": ["pli=1079290523"]
          }]
        }, {
          "d": "adform.net",
          "l": [{
            "oi": "syho76",
            "ot": 2,
            "rs": 1,
            "s": ["?bn=63509680"]
          }, {
            "oi": "mpceg6",
            "ot": 2,
            "rs": 1,
            "s": ["?bn=66377090"]
          }, {
            "oi": "cxghh6",
            "ot": 2,
            "rs": 1,
            "s": ["?bn=66738788"]
          }, {
            "oi": "uih2k6",
            "ot": 2,
            "rs": 1,
            "s": ["?bn=67593755"]
          }, {
            "oi": "pi9ni6",
            "ot": 2,
            "rs": 1,
            "s": ["?bn=67108575"]
          }, {
            "oi": "fd9yi6",
            "ot": 2,
            "rs": 1,
            "s": ["?bn=67228992"]
          }]
        }, {
          "d": "creatives.smadex.com",
          "l": [{
            "oi": "8p2rd6",
            "ot": 2,
            "rs": 1,
            "s": ["/cr/2983987/s/101802"]
          }, {
            "oi": "bwtrd6",
            "ot": 2,
            "rs": 1,
            "s": ["/cr/2983985/s/101802"]
          }, {
            "oi": "mm3fe6",
            "ot": 2,
            "rs": 1,
            "s": ["/cr/2998992/s/101802"]
          }, {
            "oi": "abhzi6",
            "ot": 2,
            "rs": 1,
            "s": ["/cr/3101106/s/101802"]
          }, {
            "oi": "ixhzi6",
            "ot": 2,
            "rs": 1,
            "s": ["/cr/3101108/s/101802"]
          }, {
            "oi": "0mi1j6",
            "ot": 2,
            "rs": 1,
            "s": ["/cr/3103061/s/101802"]
          }, {
            "oi": "6dxwj6",
            "ot": 2,
            "rs": 1,
            "s": ["/cr/3134207/s/158456"]
          }, {
            "oi": "ndxwj6",
            "ot": 2,
            "rs": 1,
            "s": ["/cr/3134209/s/158456"]
          }]
        }, {
          "d": "kayzen.io",
          "l": [{
            "oi": "mpy3i6",
            "ot": 2,
            "rs": 1,
            "s": ["-51269845"]
          }]
        }, {
          "d": "Prebid.js",
          "l": [{
            "oi": "mkvk76",
            "ot": 2,
            "rs": 1,
            "s": ["Creative 36864814 served by ix"]
          }, {
            "oi": "hi8l76",
            "ot": 2,
            "rs": 1,
            "s": ["Creative 34471264 served by ix"]
          }]
        }, {
          "d": "yahoo.com",
          "l": [{
            "oi": "25boo3",
            "ot": 2,
            "rs": 1,
            "s": ["crid/b8Z7rzLaup22WsMIVX8lZ_sI_PrF9IEN"]
          }, {
            "oi": "0lhxq4",
            "ot": 2,
            "rs": 1,
            "s": ["crid/yknbWXT1DiXo5lkwjmmRECuqB-bgMU2n"]
          }, {
            "oi": "5lhxq4",
            "ot": 2,
            "rs": 1,
            "s": ["crid/m1JNl8miERspSI6xi24z3dhthfqBa_VR"]
          }, {
            "oi": "vlhxq4",
            "ot": 2,
            "rs": 1,
            "s": ["crid/v9N6mQyLd9kbSWsEwiYpCzqp0hMCdTMF"]
          }, {
            "oi": "xlhxq4",
            "ot": 2,
            "rs": 1,
            "s": ["crid/mWz0xSXm7BN1ABT-XFHNdLMNj1kXU3PF"]
          }, {
            "oi": "amhxq4",
            "ot": 2,
            "rs": 1,
            "s": ["crid/2usJH3tVZ1fAfOVrcd0Cv62jN6IXHBOX"]
          }, {
            "oi": "nohxq4",
            "ot": 2,
            "rs": 1,
            "s": ["crid/ruldx72aawuXQ7VXPwkc4a5U52MTnT6O"]
          }, {
            "oi": "myhxq4",
            "ot": 2,
            "rs": 1,
            "s": ["crid/fboHJKMqBpFv1apRfdnRgkdgo9Pyr3cz"]
          }]
        }, {
          "d": "affiliateempire.net",
          "l": [{
            "oi": "j1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "rejoiner.com",
          "l": [{
            "oi": "t99",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "videowalldirect.com",
          "l": [{
            "oi": "o4a",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "houseofpubs.com",
          "l": [{
            "oi": "dcb",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tknpm.com",
          "l": [{
            "oi": "vlb",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "adcannyads.com",
          "l": [{
            "oi": "0rb",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "aceex.io",
          "l": [{
            "oi": "ssb",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "doloncor.com",
          "l": [{
            "oi": "hvb",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "boffoadsapi.com",
          "l": [{
            "oi": "pxb",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "printrecipes.net",
          "l": [{
            "oi": "azb",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "searchandprint.recipes",
          "l": [{
            "oi": "bzb",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "appadsnetwork.com",
          "l": [{
            "oi": "b5c",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "rtbflairads.com",
          "l": [{
            "oi": "bcc",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ledbox.es",
          "l": [{
            "oi": "rcc",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "propeller-tracking.com",
          "l": [{
            "oi": "mfc",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ipseduhub.com",
          "l": [{
            "oi": "bnc",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "adetracker.com",
          "l": [{
            "oi": "jvc",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "adsgard.net",
          "l": [{
            "oi": "xnd",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "quicklivenews.com",
          "l": [{
            "oi": "9pe",
            "ot": 3,
            "rs": 1
          }, {
            "oi": "vwq8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "xo.engine.adglare.net",
          "l": [{
            "oi": "4kg",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "highroas.mobi",
          "l": [{
            "oi": "nfh",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kraftshala.com",
          "l": [{
            "oi": "6jh",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "rtbrain.app",
          "l": [{
            "oi": "rqh",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "lonnemanplumbingnky.com",
          "l": [{
            "oi": "b9i",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "algbid.app",
          "l": [{
            "oi": "xdi",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "spread-cdn43.com",
          "l": [{
            "oi": "eli",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "rishihood.edu.in",
          "l": [{
            "oi": "cpi",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sigedral-compshing.icu",
          "l": [{
            "oi": "cri",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "aj2295.online",
          "l": [{
            "oi": "syi",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "em-is.org",
          "l": [{
            "oi": "4ej",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "stack-farm40.com",
          "l": [{
            "oi": "fnj",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "idilimamoglu.com",
          "l": [{
            "oi": "ksj",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "geoad24.com",
          "l": [{
            "oi": "9bk",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pcsystemfix.com",
          "l": [{
            "oi": "a2l",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "stcucalon.com",
          "l": [{
            "oi": "63o",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "clearancewarehouse.irish",
          "l": [{
            "oi": "sho",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mrwoodini.co.il",
          "l": [{
            "oi": "i5p",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liquidagents.com",
          "l": [{
            "oi": "j5p",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sustee-corytime.com",
          "l": [{
            "oi": "c9p",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mariadragan.ro",
          "l": [{
            "oi": "oip",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "lygfzf.com",
          "l": [{
            "oi": "pip",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tradelg.net",
          "l": [{
            "oi": "3jp",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "myadtracker.co",
          "l": [{
            "oi": "hmp",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "evest.com",
          "l": [{
            "oi": "0rp",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "cmtrading.com",
          "l": [{
            "oi": "1rp",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "wickedagency.media",
          "l": [{
            "oi": "ekq",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sweepstakesalerts.com",
          "l": [{
            "oi": "dsq",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ampupproducts.com",
          "l": [{
            "oi": "jwq",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "n3ws247.com",
          "l": [{
            "oi": "anr",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mia56.com",
          "l": [{
            "oi": "dpr",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "lerevecraze.com",
          "l": [{
            "oi": "ypr",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "roxxtraxx.de",
          "l": [{
            "oi": "wwr",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "handbidet.co.nz",
          "l": [{
            "oi": "4ns",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "adservertq.com",
          "l": [{
            "oi": "jus",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "wavebrowser.co",
          "l": [{
            "oi": "vbt",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "smartid.com.br",
          "l": [{
            "oi": "uft",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "updateonbitcoin.com",
          "l": [{
            "oi": "23u",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "naprawa-skrzyn-m32.pl",
          "l": [{
            "oi": "w4u",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ad-adserver.com",
          "l": [{
            "oi": "ahu",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "nodesport.com",
          "l": [{
            "oi": "cmu",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mobiliani.ro",
          "l": [{
            "oi": "uou",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "edbo.com.pl",
          "l": [{
            "oi": "8qu",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "thorpsuzuki.co.za",
          "l": [{
            "oi": "snv",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kingspointresidence.com",
          "l": [{
            "oi": "2pv",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "bucks.llc",
          "l": [{
            "oi": "g9w",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "morningelite.com",
          "l": [{
            "oi": "1nw",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "realauroradesign.com",
          "l": [{
            "oi": "1qw",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "relatedllc.com",
          "l": [{
            "oi": "ktw",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kingoflikes.com",
          "l": [{
            "oi": "juw",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "cupidmobi.com",
          "l": [{
            "oi": "jww",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "metazoneadv.com",
          "l": [{
            "oi": "n0x",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "orbitartb.com",
          "l": [{
            "oi": "e2x",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "manualslibrary.co",
          "l": [{
            "oi": "bex",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mobwl.com",
          "l": [{
            "oi": "vnx",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mona-ads.com",
          "l": [{
            "oi": "dpx",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "alkimi-onboarding.com",
          "l": [{
            "oi": "8qx",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "puertacortes.com",
          "l": [{
            "oi": "eay",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "westcom.live",
          "l": [{
            "oi": "diy",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mymediatrack.com",
          "l": [{
            "oi": "coy",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "maevaconsulting.com",
          "l": [{
            "oi": "q5z",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "dbenjamintv.com",
          "l": [{
            "oi": "l7z",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "immediate-edge.com",
          "l": [{
            "oi": "w301",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "latamhorizon.com",
          "l": [{
            "oi": "vd01",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sariater-hotel.com",
          "l": [{
            "oi": "4h01",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "nzokbul.com",
          "l": [{
            "oi": "4k01",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mir-associates.com",
          "l": [{
            "oi": "0711",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "8proof.com",
          "l": [{
            "oi": "t911",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "lyasrv.com",
          "l": [{
            "oi": "tn11",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "news24-7.net",
          "l": [{
            "oi": "c121",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "globnewstoday.com",
          "l": [{
            "oi": "2721",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "marketsolutions.store",
          "l": [{
            "oi": "zm21",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "blength.com",
          "l": [{
            "oi": "nx21",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "globalsuccesspath.com",
          "l": [{
            "oi": "1531",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "adetrackadv.com",
          "l": [{
            "oi": "c831",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "adssmtr.com",
          "l": [{
            "oi": "r931",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "6rmui.rdtk.io",
          "l": [{
            "oi": "nf31",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "insuranceworry.com",
          "l": [{
            "oi": "3k31",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "leadplaza.it",
          "l": [{
            "oi": "jq31",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tampabaywd.com",
          "l": [{
            "oi": "tu31",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pasiekazpasja.pl",
          "l": [{
            "oi": "kw31",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "allstream-online.com",
          "l": [{
            "oi": "fz31",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "bidsmatik.com",
          "l": [{
            "oi": "j341",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "egglestonservices.org",
          "l": [{
            "oi": "1q41",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "collectmoon.com",
          "l": [{
            "oi": "jz41",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "korekturysvehla.cz",
          "l": [{
            "oi": "b651",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "acdcomunication.it",
          "l": [{
            "oi": "1a51",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "grupofas.pt",
          "l": [{
            "oi": "db51",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "rtbsushi.com",
          "l": [{
            "oi": "xb51",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "rtbtopeleven.com",
          "l": [{
            "oi": "yb51",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "energievanzelf.nl",
          "l": [{
            "oi": "aw51",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "zebii.com",
          "l": [{
            "oi": "5261",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "realballinc.com",
          "l": [{
            "oi": "u461",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "alltopcontent.com",
          "l": [{
            "oi": "hc61",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "alldigimedia.com",
          "l": [{
            "oi": "jc61",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "vastserved.com",
          "l": [{
            "oi": "7d61",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "track4serve.xyz",
          "l": [{
            "oi": "gd61",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "skandinaviskmotoroptimering.se",
          "l": [{
            "oi": "4e61",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "adsterraserver.com",
          "l": [{
            "oi": "5h61",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "webcompanion.com",
          "l": [{
            "oi": "1j61",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gujaratijagran.com",
          "l": [{
            "oi": "1n61",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "webrootlive.com",
          "l": [{
            "oi": "po61",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ekoadz.com",
          "l": [{
            "oi": "wx61",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "servingcdn.net",
          "l": [{
            "oi": "xg71",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "inupdrivers.com",
          "l": [{
            "oi": "rk71",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "fitness-bay.com",
          "l": [{
            "oi": "mp71",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "all-multimedia.com",
          "l": [{
            "oi": "pp71",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "getmobilemaestro.com",
          "l": [{
            "oi": "qp71",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "worldwide-content.com",
          "l": [{
            "oi": "rp71",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "thedownloadguru.com",
          "l": [{
            "oi": "sp71",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "crazemob.com",
          "l": [{
            "oi": "eq71",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "allstreaming.net",
          "l": [{
            "oi": "qq71",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "downloadinghere.com",
          "l": [{
            "oi": "es71",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "speedy-media.com",
          "l": [{
            "oi": "xw71",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "marketpublish.com",
          "l": [{
            "oi": "cy71",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "fetchfilesuae.com",
          "l": [{
            "oi": "sa81",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "geteasylogin.com",
          "l": [{
            "oi": "ab81",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "streaming-content.com",
          "l": [{
            "oi": "cf81",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "solvewithvia.com",
          "l": [{
            "oi": "1g81",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "winbley.com",
          "l": [{
            "oi": "1r81",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "limaooulimonada.com.br",
          "l": [{
            "oi": "jr81",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "market-survey.co",
          "l": [{
            "oi": "zw81",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "maciejswiety.pl",
          "l": [{
            "oi": "ly81",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pengpang.club",
          "l": [{
            "oi": "v091",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "oceanwp.org",
          "l": [{
            "oi": "4z91",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "servetracker.xyz",
          "l": [{
            "oi": "qca1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "usefull-tip.com",
          "l": [{
            "oi": "xca1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "topbizpath.com",
          "l": [{
            "oi": "eda1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "xtraperfnow.com",
          "l": [{
            "oi": "kda1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sheet-offer.com",
          "l": [{
            "oi": "kqa1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "getmanualslibrary.com",
          "l": [{
            "oi": "4ab1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "beautyfeetnow.com",
          "l": [{
            "oi": "kbb1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "boujibean.com",
          "l": [{
            "oi": "cgc1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "elmajdonline.com",
          "l": [{
            "oi": "4zc1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "investfromhome.co",
          "l": [{
            "oi": "84d1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "adsrvrse.com",
          "l": [{
            "oi": "08d1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "quizsem.co",
          "l": [{
            "oi": "v8d1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "catchurdealss.com",
          "l": [{
            "oi": "qgd1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "retruitsadvatrix.com",
          "l": [{
            "oi": "q9e1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "onlineactivation.com",
          "l": [{
            "oi": "bee1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "thriveplanet.life",
          "l": [{
            "oi": "ndf1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "rose-et-bouchon.ma",
          "l": [{
            "oi": "jff1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "unitedaxleflorida.com",
          "l": [{
            "oi": "9wf1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "geekom.fr",
          "l": [{
            "oi": "2jg1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "oilpro360.com",
          "l": [{
            "oi": "tqg1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "cumhuriyet.com.tr",
          "l": [{
            "oi": "f3h1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "cybezens.com",
          "l": [{
            "oi": "vjh1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "dnisverads.com",
          "l": [{
            "oi": "wjh1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "dsversr.com",
          "l": [{
            "oi": "xjh1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "fanjestic.com",
          "l": [{
            "oi": "2si1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "digitallivefeeds.com",
          "l": [{
            "oi": "d3j1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "content-infinity.com",
          "l": [{
            "oi": "lbj1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "onexfin.com",
          "l": [{
            "oi": "5ij1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "turismocarey.tur.ar",
          "l": [{
            "oi": "ilj1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "instant-content.net",
          "l": [{
            "oi": "d2k1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "simplyss.com",
          "l": [{
            "oi": "g8k1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "flexdownload.net",
          "l": [{
            "oi": "j8k1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "casttag.com",
          "l": [{
            "oi": "52l1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tlacklers.com",
          "l": [{
            "oi": "zlm1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "can-pros.com",
          "l": [{
            "oi": "npm1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "intersoft.pl",
          "l": [{
            "oi": "91n1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pcapp.store",
          "l": [{
            "oi": "e1o1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "flighttabpro.com",
          "l": [{
            "oi": "4po1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "taskmanagertab.com",
          "l": [{
            "oi": "5po1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "servedbyopen.com",
          "l": [{
            "oi": "pmp1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "megadeliveryn.com",
          "l": [{
            "oi": "rmp1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "packagetrackingtab.com",
          "l": [{
            "oi": "l1r1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mapsassist.com",
          "l": [{
            "oi": "m2r1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "offer-starller.com",
          "l": [{
            "oi": "rer1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pragisaten.com",
          "l": [{
            "oi": "ekr1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "easygamestab.com",
          "l": [{
            "oi": "hnr1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "stinkburg.com",
          "l": [{
            "oi": "31s1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "addeliverypixel.com",
          "l": [{
            "oi": "x8t1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "medieanet.com",
          "l": [{
            "oi": "y8t1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "skynetmart.com",
          "l": [{
            "oi": "z8t1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "bulgingpocket.com",
          "l": [{
            "oi": "d9t1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "loanlighting.com",
          "l": [{
            "oi": "bpt1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "serverad.co",
          "l": [{
            "oi": "uvt1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "freeletics-app.com",
          "l": [{
            "oi": "a3v1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "accessmediazone.com",
          "l": [{
            "oi": "m5v1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "envirament.com",
          "l": [{
            "oi": "h6v1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "unsold-cars-deals-ca.online",
          "l": [{
            "oi": "4nv1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "recipes.expert",
          "l": [{
            "oi": "hnv1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "onlineactivation.io",
          "l": [{
            "oi": "lov1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "d1a6kz0uz0idlp.cloudfront.net",
          "l": [{
            "oi": "s8w1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "forestatmosphere.fun",
          "l": [{
            "oi": "uaw1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "cilplyxo.com",
          "l": [{
            "oi": "4qw1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "thesmartnerd.com",
          "l": [{
            "oi": "9qw1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "unlimited-download.net",
          "l": [{
            "oi": "gqw1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "easyprint.app",
          "l": [{
            "oi": "hqw1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "getrecipesearch.com",
          "l": [{
            "oi": "iqw1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "fine10.com",
          "l": [{
            "oi": "6gx1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "weatherauthority.co",
          "l": [{
            "oi": "klx1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "goalsuccesslive.com",
          "l": [{
            "oi": "e0y1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "importantmeteorite.sbs",
          "l": [{
            "oi": "4gy1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "concept.vn.ua",
          "l": [{
            "oi": "9ky1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "dezorana.com",
          "l": [{
            "oi": "o0z1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mirramian.art",
          "l": [{
            "oi": "hez1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "togradosia.com",
          "l": [{
            "oi": "pkz1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "calmnessonline.info",
          "l": [{
            "oi": "plz1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gynecologistnow.life",
          "l": [{
            "oi": "hoz1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "exercisesapp.info",
          "l": [{
            "oi": "fpz1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "financialhackz.com",
          "l": [{
            "oi": "xpz1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "trdunicorn-online.com",
          "l": [{
            "oi": "nsz1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "belvitur.com.br",
          "l": [{
            "oi": "zuz1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "nordonialandscapesupplies.com",
          "l": [{
            "oi": "1vz1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "dypuxau.com",
          "l": [{
            "oi": "wwz1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mapsdirectionsfree.com",
          "l": [{
            "oi": "nxz1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "fiorenic.com",
          "l": [{
            "oi": "kzz1",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "urchenko.com",
          "l": [{
            "oi": "9002",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "marketingpublishad.com",
          "l": [{
            "oi": "t202",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "offer-pulsler.com",
          "l": [{
            "oi": "e602",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "reveterpilot.biz",
          "l": [{
            "oi": "t602",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "snievegin.com",
          "l": [{
            "oi": "i702",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "flitzoo.com",
          "l": [{
            "oi": "c902",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mtraq139tn.com",
          "l": [{
            "oi": "0a02",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "esrhub.com",
          "l": [{
            "oi": "rf02",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "artedoro.hu",
          "l": [{
            "oi": "0g02",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "andres4apps.com",
          "l": [{
            "oi": "7i02",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sarvadhikar.com",
          "l": [{
            "oi": "8i02",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "embrace-baby.cz",
          "l": [{
            "oi": "4k02",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "doel.web.id",
          "l": [{
            "oi": "ll02",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "lovely-smile.net",
          "l": [{
            "oi": "zm02",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "nouvelles-ici.com",
          "l": [{
            "oi": "5n02",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "baklossi.com",
          "l": [{
            "oi": "6o02",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "culazerno.com",
          "l": [{
            "oi": "rq02",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "fatihgazinews.com",
          "l": [{
            "oi": "zq02",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "popularboost.com",
          "l": [{
            "oi": "xr02",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "digitalstructs.com",
          "l": [{
            "oi": "qt02",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gadmjic.com",
          "l": [{
            "oi": "yt02",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pluralsightelite.online",
          "l": [{
            "oi": "nv02",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ethcasinosites.com",
          "l": [{
            "oi": "aw02",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "swakarta.com",
          "l": [{
            "oi": "3y02",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ourbestcosmetics.com",
          "l": [{
            "oi": "cy02",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "codingwithquinten.com",
          "l": [{
            "oi": "ly02",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "51flb.com",
          "l": [{
            "oi": "uy02",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "meltamo.com",
          "l": [{
            "oi": "5212",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "viewmanuals.com",
          "l": [{
            "oi": "m312",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "activatevpn.com",
          "l": [{
            "oi": "5412",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "imppxl.com",
          "l": [{
            "oi": "m412",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "piddserv.com",
          "l": [{
            "oi": "n412",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ghanasheabutter.com",
          "l": [{
            "oi": "s512",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "greatthingsonline.com",
          "l": [{
            "oi": "q712",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "polatiano.com",
          "l": [{
            "oi": "z812",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "promaxprofistartegy.com",
          "l": [{
            "oi": "1912",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ad-conv26.com",
          "l": [{
            "oi": "9a12",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "birdsimple.com",
          "l": [{
            "oi": "aa12",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "rivermended.com",
          "l": [{
            "oi": "ya12",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "top-slotapp.com",
          "l": [{
            "oi": "ob12",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "life-beautiful.net",
          "l": [{
            "oi": "wb12",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "healthspura.com",
          "l": [{
            "oi": "vd12",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "nuzzworthy.com",
          "l": [{
            "oi": "je12",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "revolution-trading.net",
          "l": [{
            "oi": "ef12",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sn0wincome.com",
          "l": [{
            "oi": "hj12",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "capital-genrn-online.com",
          "l": [{
            "oi": "ij12",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "webinstalllive.com",
          "l": [{
            "oi": "pj12",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "toppositiveforce.com",
          "l": [{
            "oi": "qj12",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "wronikle.com",
          "l": [{
            "oi": "nn12",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "dovaras.com",
          "l": [{
            "oi": "qo12",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "chatlagoon.com",
          "l": [{
            "oi": "qq12",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mindenutt.com",
          "l": [{
            "oi": "tq12",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "viewpdf.org",
          "l": [{
            "oi": "eu12",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "grandtradefair.com",
          "l": [{
            "oi": "vw12",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "rubrika.co.id",
          "l": [{
            "oi": "8x12",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "skandikem.com",
          "l": [{
            "oi": "r122",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mtraq140sa.com",
          "l": [{
            "oi": "0322",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "skypocn.com",
          "l": [{
            "oi": "2322",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "beznaprezyhenje.com",
          "l": [{
            "oi": "2422",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tradesmartfromhome.com",
          "l": [{
            "oi": "x522",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "formserve.xyz",
          "l": [{
            "oi": "7622",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "myasundive.com",
          "l": [{
            "oi": "1a22",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mtraq121uae.com",
          "l": [{
            "oi": "6b22",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pawsenough.com",
          "l": [{
            "oi": "nd22",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "bazomar.com",
          "l": [{
            "oi": "6i22",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pantofolaio.top",
          "l": [{
            "oi": "qm22",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "infocoincase.com",
          "l": [{
            "oi": "in22",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "boersen-blatt.com",
          "l": [{
            "oi": "on22",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "bespokerenewables.com",
          "l": [{
            "oi": "dp22",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "free-pdf-pro.com",
          "l": [{
            "oi": "dq22",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mtraq121sa.com",
          "l": [{
            "oi": "nt22",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "breakthroughmelody.com",
          "l": [{
            "oi": "3v22",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "greluvee.com",
          "l": [{
            "oi": "gx22",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "daddysskins.com",
          "l": [{
            "oi": "4032",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "finishwrap.com",
          "l": [{
            "oi": "7032",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tko13.com",
          "l": [{
            "oi": "8132",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mtraq140uae.com",
          "l": [{
            "oi": "2332",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "westworthpartners.com",
          "l": [{
            "oi": "c532",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "worldofsport365.com",
          "l": [{
            "oi": "l532",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "learninglabpro.co",
          "l": [{
            "oi": "9632",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mypdfmanagerapp.com",
          "l": [{
            "oi": "b632",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kalteriana.com",
          "l": [{
            "oi": "xb32",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "drablivkia.com",
          "l": [{
            "oi": "4d32",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "myasunflower.com",
          "l": [{
            "oi": "md32",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "thetutorplace.com",
          "l": [{
            "oi": "be32",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "vitendia.com",
          "l": [{
            "oi": "9i32",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "rivianta.com",
          "l": [{
            "oi": "ai32",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "salonsoap.com",
          "l": [{
            "oi": "pl32",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "workingwithwinners.com",
          "l": [{
            "oi": "2r32",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mivierto.com",
          "l": [{
            "oi": "ot32",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "binarywebs.com",
          "l": [{
            "oi": "zu32",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "footagearchive.com",
          "l": [{
            "oi": "0v32",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "shoplaced.com",
          "l": [{
            "oi": "3w32",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "clickmodz.com",
          "l": [{
            "oi": "5342",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sportbetbonuscodes.com",
          "l": [{
            "oi": "9442",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "vinesplumbing.com",
          "l": [{
            "oi": "g442",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "maitlandlocksmiths.com",
          "l": [{
            "oi": "i442",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mtraq123uae.com",
          "l": [{
            "oi": "t442",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "zalupa2.z13.web.core.windows.net",
          "l": [{
            "oi": "w742",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "informationchart.com",
          "l": [{
            "oi": "4942",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ranihou.com",
          "l": [{
            "oi": "m942",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "guaranteedcarpetcare.com",
          "l": [{
            "oi": "o942",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "melodysymphony.com",
          "l": [{
            "oi": "ph42",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ceribue.com",
          "l": [{
            "oi": "8m42",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "brasscorporation.cloud",
          "l": [{
            "oi": "gm42",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "abbyry.shop",
          "l": [{
            "oi": "xm42",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "hycemui.com",
          "l": [{
            "oi": "ep42",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "voitaurek.com",
          "l": [{
            "oi": "ss42",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "erdreni.com",
          "l": [{
            "oi": "ts42",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "megainfinity.info",
          "l": [{
            "oi": "nt42",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "imobilienbewertungonline.com",
          "l": [{
            "oi": "zt42",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "architecturebyexample.com",
          "l": [{
            "oi": "6v42",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "beauty-olive.net",
          "l": [{
            "oi": "3w42",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "flatroofing.net",
          "l": [{
            "oi": "nw42",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "echosnews.com",
          "l": [{
            "oi": "ow42",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "auroramagnolia.com",
          "l": [{
            "oi": "5z42",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pleasingskinpro.com",
          "l": [{
            "oi": "4452",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "buckshotgypsies.com",
          "l": [{
            "oi": "p452",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "rechtsanwaltemandl.com",
          "l": [{
            "oi": "t452",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "beautiful-cascade.com",
          "l": [{
            "oi": "e852",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mtraq123sa2.com",
          "l": [{
            "oi": "xa52",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mtraq128uae.com",
          "l": [{
            "oi": "ya52",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mtraq143uae.com",
          "l": [{
            "oi": "za52",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "zgqkh.com",
          "l": [{
            "oi": "cd52",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "rasstrelyat.vn.ua",
          "l": [{
            "oi": "lf52",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "turieto.com",
          "l": [{
            "oi": "8j52",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kolsumak.com",
          "l": [{
            "oi": "sq52",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "raysmuscles.tech",
          "l": [{
            "oi": "ir52",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "skalnic.com",
          "l": [{
            "oi": "lt52",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "manualsview.com",
          "l": [{
            "oi": "cu52",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "health-good.net",
          "l": [{
            "oi": "bw52",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mtraq132kz.com",
          "l": [{
            "oi": "qw52",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sahameo.com",
          "l": [{
            "oi": "tw52",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "qyfupey.com",
          "l": [{
            "oi": "1x52",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "doggielandplaypark.com",
          "l": [{
            "oi": "hz52",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "cutepillowcase.com",
          "l": [{
            "oi": "i362",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "yjyyobyl.gb.net",
          "l": [{
            "oi": "r662",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "zigglypop.de",
          "l": [{
            "oi": "f762",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mtraq134.com",
          "l": [{
            "oi": "x762",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kaspito.com",
          "l": [{
            "oi": "2c62",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "invertirpros.com",
          "l": [{
            "oi": "3c62",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ayudarlosmayores.com",
          "l": [{
            "oi": "dc62",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "foroserat.uk",
          "l": [{
            "oi": "pe62",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pochustimo.com",
          "l": [{
            "oi": "7f62",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mtraq134uae.com",
          "l": [{
            "oi": "di62",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "fitmoneycase.com",
          "l": [{
            "oi": "sj62",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "unbridledwaste.de",
          "l": [{
            "oi": "1k62",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "theprofessionletter.email",
          "l": [{
            "oi": "qm62",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "harudating.com",
          "l": [{
            "oi": "3u62",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "lycheeb0ok.com",
          "l": [{
            "oi": "bv62",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "hetemou.com",
          "l": [{
            "oi": "lx62",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "vivingro.com",
          "l": [{
            "oi": "9172",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "zatrnouwtoy.nl",
          "l": [{
            "oi": "f172",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "lamarebayharbor.com",
          "l": [{
            "oi": "l272",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mtraq129gr.com",
          "l": [{
            "oi": "y272",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mtraq130uae.com",
          "l": [{
            "oi": "z272",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mtraq126kw.com",
          "l": [{
            "oi": "0372",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mtraq135ch.com",
          "l": [{
            "oi": "1372",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "trackmate888.com",
          "l": [{
            "oi": "2372",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "horsaspafcem.nl",
          "l": [{
            "oi": "b372",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "reurtusthabt.nl",
          "l": [{
            "oi": "c372",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "maneonlycat.nl",
          "l": [{
            "oi": "r372",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "rubbishpile.de",
          "l": [{
            "oi": "v472",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kaldersio.com",
          "l": [{
            "oi": "i572",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "nestinsur.com",
          "l": [{
            "oi": "3772",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "people-pro.design",
          "l": [{
            "oi": "4772",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "beurtustfuct.nl",
          "l": [{
            "oi": "z772",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "masedaydoot.nl",
          "l": [{
            "oi": "2972",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ymouebax.es",
          "l": [{
            "oi": "4972",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "letsmorlonhkay.nl",
          "l": [{
            "oi": "b972",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "fuzoygae.uk",
          "l": [{
            "oi": "ra72",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "discusess.es",
          "l": [{
            "oi": "8c72",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ahtstyrlonrtio.nl",
          "l": [{
            "oi": "vc72",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "saghejocks.com",
          "l": [{
            "oi": "7e72",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "colegionauticomogiano.com.br",
          "l": [{
            "oi": "wh72",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "hywunei.com",
          "l": [{
            "oi": "xl72",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "esnowandthere.com",
          "l": [{
            "oi": "np72",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "nisitofficial.com",
          "l": [{
            "oi": "5q72",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "beautiful-lily.net",
          "l": [{
            "oi": "gq72",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tkatoday.co",
          "l": [{
            "oi": "qq72",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "energyoutages.de",
          "l": [{
            "oi": "uw72",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "klikhere.my.id",
          "l": [{
            "oi": "4y72",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "newtonuturn.com",
          "l": [{
            "oi": "py72",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pdfcentralapp.com",
          "l": [{
            "oi": "vy72",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "homewin.online",
          "l": [{
            "oi": "g182",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "duolsewer.com",
          "l": [{
            "oi": "z582",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "business-24.site",
          "l": [{
            "oi": "6682",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "faradayments.com",
          "l": [{
            "oi": "7682",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "qecufyi.com",
          "l": [{
            "oi": "7782",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "60mintotrading.com",
          "l": [{
            "oi": "m782",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "3terbaik.my.id",
          "l": [{
            "oi": "7d82",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "lovely-aroma.com",
          "l": [{
            "oi": "8d82",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "lookingstraightmarkets.co",
          "l": [{
            "oi": "9d82",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "yearmuscles.tech",
          "l": [{
            "oi": "9h82",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "beritawarganet.com",
          "l": [{
            "oi": "ki82",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "theglobalpackers.com",
          "l": [{
            "oi": "6j82",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "squamism.com",
          "l": [{
            "oi": "ej82",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "easyimmigratetoday.com",
          "l": [{
            "oi": "kj82",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "smartinvestmentss.com",
          "l": [{
            "oi": "lj82",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "polodurikap.nl",
          "l": [{
            "oi": "tj82",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "hatoltalol.com",
          "l": [{
            "oi": "ko82",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pixeleon.de",
          "l": [{
            "oi": "zp82",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sagefacecare.com",
          "l": [{
            "oi": "7292",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "beautiful-white.com",
          "l": [{
            "oi": "a392",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "hushmoores.com",
          "l": [{
            "oi": "v392",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "lexirecipes.com",
          "l": [{
            "oi": "x392",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "grundiot.com",
          "l": [{
            "oi": "2492",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mishula.site",
          "l": [{
            "oi": "b492",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "beauty-moisture.com",
          "l": [{
            "oi": "2592",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "beauty-moist.net",
          "l": [{
            "oi": "2792",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ubbano.com",
          "l": [{
            "oi": "s792",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "neradenti.com",
          "l": [{
            "oi": "t792",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "saxnmyrflehan.nl",
          "l": [{
            "oi": "8a92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "freemanualsonline.net",
          "l": [{
            "oi": "na92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "idealveicular.com",
          "l": [{
            "oi": "qa92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "geteasypdf.com",
          "l": [{
            "oi": "1b92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kimsitforest.nl",
          "l": [{
            "oi": "4b92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "teatrhouse.com",
          "l": [{
            "oi": "5b92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "laydarhorse.nl",
          "l": [{
            "oi": "9b92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "eternitymkt.com",
          "l": [{
            "oi": "jb92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "primeenews.com",
          "l": [{
            "oi": "ub92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sahar.news",
          "l": [{
            "oi": "xb92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "vozduhsvezh.com",
          "l": [{
            "oi": "ke92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "offer-digitalizze.com",
          "l": [{
            "oi": "oe92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "greatestmoviesever.com",
          "l": [{
            "oi": "re92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "acheivelifestyle.com",
          "l": [{
            "oi": "sf92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mxsxk.homes",
          "l": [{
            "oi": "0g92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "lovewefpotu.nl",
          "l": [{
            "oi": "mg92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mediagede.com",
          "l": [{
            "oi": "gh92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kuvmwyarfast.nl",
          "l": [{
            "oi": "ih92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "nestanimal.com",
          "l": [{
            "oi": "qh92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "topinvestadvisor.org",
          "l": [{
            "oi": "yh92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "buzzymodes.com",
          "l": [{
            "oi": "si92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mtraq127sa.com",
          "l": [{
            "oi": "ui92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "smalltiara.com",
          "l": [{
            "oi": "vi92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "cyrutae.com",
          "l": [{
            "oi": "dj92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "husseysolicitors.com",
          "l": [{
            "oi": "jj92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "rahasiapriaperkasa.my.id",
          "l": [{
            "oi": "rj92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "geltama.my.id",
          "l": [{
            "oi": "tj92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "suplemenpria.my.id",
          "l": [{
            "oi": "uj92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tongkatali.my.id",
          "l": [{
            "oi": "zj92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "dreamycascade.com",
          "l": [{
            "oi": "9k92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "puddinpaskagpop.de",
          "l": [{
            "oi": "1m92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "blossomcascade.com",
          "l": [{
            "oi": "9m92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mixphones.com",
          "l": [{
            "oi": "bm92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mixload.link",
          "l": [{
            "oi": "dm92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "getnow.website",
          "l": [{
            "oi": "em92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gamezgallary.com",
          "l": [{
            "oi": "fm92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "downloadify.online",
          "l": [{
            "oi": "hm92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "therey.online",
          "l": [{
            "oi": "im92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ringtechh.com",
          "l": [{
            "oi": "jm92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "makeittechs.com",
          "l": [{
            "oi": "lm92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "downlaoderhub.com",
          "l": [{
            "oi": "mm92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "getcontents.click",
          "l": [{
            "oi": "nm92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "freeonline.wiki",
          "l": [{
            "oi": "om92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "getitpro.co",
          "l": [{
            "oi": "pm92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "apkpureify.com",
          "l": [{
            "oi": "qm92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "downloadpro.online",
          "l": [{
            "oi": "tm92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "justsay.online",
          "l": [{
            "oi": "um92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "downloaderonline.net",
          "l": [{
            "oi": "vm92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "apkzeroone.com",
          "l": [{
            "oi": "wm92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "hiscont.com",
          "l": [{
            "oi": "xm92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "funhubworld.com",
          "l": [{
            "oi": "ym92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "downlaodnow.com",
          "l": [{
            "oi": "zm92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gonowtoday.net",
          "l": [{
            "oi": "0n92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "apkpury.com",
          "l": [{
            "oi": "1n92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "infopovod.org",
          "l": [{
            "oi": "2n92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ourcont.com",
          "l": [{
            "oi": "5n92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "unloadmax.com",
          "l": [{
            "oi": "6n92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "downmyfile.com",
          "l": [{
            "oi": "7n92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "basose.com",
          "l": [{
            "oi": "8n92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "meracustomer.com",
          "l": [{
            "oi": "dn92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gakaraokeoonov.nl",
          "l": [{
            "oi": "qn92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "rewaroy.com",
          "l": [{
            "oi": "un92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "busifio.com",
          "l": [{
            "oi": "1o92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "davewifetru.nl",
          "l": [{
            "oi": "8o92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "theload.online",
          "l": [{
            "oi": "io92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mixcontents.com",
          "l": [{
            "oi": "zo92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "alertsthatstern.email",
          "l": [{
            "oi": "1p92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "shadika.site",
          "l": [{
            "oi": "3q92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "uplloading.com",
          "l": [{
            "oi": "gr92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "apkmirror.link",
          "l": [{
            "oi": "hr92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "vasclub.net",
          "l": [{
            "oi": "kr92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "luanmaxsymid.nl",
          "l": [{
            "oi": "yr92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "smartpclive.com",
          "l": [{
            "oi": "5s92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "downtoolsedit.com",
          "l": [{
            "oi": "fs92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "playfullab.online",
          "l": [{
            "oi": "js92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "redmix.net",
          "l": [{
            "oi": "ks92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "luarhaxsylud.nl",
          "l": [{
            "oi": "ls92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ofekid.bio",
          "l": [{
            "oi": "ps92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "itseeartea.nl",
          "l": [{
            "oi": "rs92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "dwnlaod.com",
          "l": [{
            "oi": "vs92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gurivuo.com",
          "l": [{
            "oi": "ys92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "healthy-red.net",
          "l": [{
            "oi": "zs92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "serenddavaipity.uk",
          "l": [{
            "oi": "mt92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "lxaksfnx.com",
          "l": [{
            "oi": "bu92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "foodndtaste.com",
          "l": [{
            "oi": "uu92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "flavorifics.com",
          "l": [{
            "oi": "vu92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pdfalcon.com",
          "l": [{
            "oi": "5v92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gain-coin.com",
          "l": [{
            "oi": "av92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kultural.id",
          "l": [{
            "oi": "cv92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "lupitalmedia.com",
          "l": [{
            "oi": "nv92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ayeshamuhd.com",
          "l": [{
            "oi": "5w92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "stake0.com",
          "l": [{
            "oi": "7w92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "proffit-case.com",
          "l": [{
            "oi": "8w92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kotinobe.com",
          "l": [{
            "oi": "ew92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "munterjobcow.nl",
          "l": [{
            "oi": "uw92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "aussiesbenefits.com",
          "l": [{
            "oi": "8x92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "acovouba.es",
          "l": [{
            "oi": "ux92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "download4.online",
          "l": [{
            "oi": "4y92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "idealica-chile.site",
          "l": [{
            "oi": "5y92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "downloadfree.me",
          "l": [{
            "oi": "vz92",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "changegartingo.com",
          "l": [{
            "oi": "g1a2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mixmobile.live",
          "l": [{
            "oi": "o1a2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tappledating.com",
          "l": [{
            "oi": "w1a2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "foodyspirits.com",
          "l": [{
            "oi": "02a2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "cookingspheres.com",
          "l": [{
            "oi": "22a2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "rewards-get.com",
          "l": [{
            "oi": "j2a2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "by-c-gallery.fr",
          "l": [{
            "oi": "u2a2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "peachveil.de",
          "l": [{
            "oi": "f3a2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mychineseschool.com",
          "l": [{
            "oi": "z3a2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "easylearningwithmena.com",
          "l": [{
            "oi": "04a2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ringalon.com",
          "l": [{
            "oi": "f4a2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mixygio.com",
          "l": [{
            "oi": "j4a2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "opulentsculpt.com",
          "l": [{
            "oi": "l4a2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "swigstalks.com",
          "l": [{
            "oi": "m4a2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "getyourcontentportal-ch.com",
          "l": [{
            "oi": "q4a2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mobiovix.xyz",
          "l": [{
            "oi": "r4a2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ricandotravel.com",
          "l": [{
            "oi": "s4a2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "outcomesaligned.com",
          "l": [{
            "oi": "75a2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "temadehoy.com",
          "l": [{
            "oi": "j5a2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "benefits4aussies.com",
          "l": [{
            "oi": "z5a2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "download-er.com",
          "l": [{
            "oi": "d6a2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "accoutingsavy.com",
          "l": [{
            "oi": "l7a2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "massservers.com",
          "l": [{
            "oi": "n7a2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "bestsupercontent.com",
          "l": [{
            "oi": "p7a2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "shinudating.com",
          "l": [{
            "oi": "18a2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "murfolik.uk",
          "l": [{
            "oi": "d8a2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "utilcanal.com",
          "l": [{
            "oi": "u8a2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "dole.lv",
          "l": [{
            "oi": "c9a2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "viewlogin.co",
          "l": [{
            "oi": "j9a2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gakaraonov.nl",
          "l": [{
            "oi": "s9a2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pepethefear.com",
          "l": [{
            "oi": "x9a2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "borrowmixtape.com",
          "l": [{
            "oi": "y9a2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mecepeshe.de",
          "l": [{
            "oi": "oaa2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "vioxofinance.com",
          "l": [{
            "oi": "pca2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "adsmobiles.com",
          "l": [{
            "oi": "ada2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "goodpartmex.com",
          "l": [{
            "oi": "pda2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "quick-tutor.com",
          "l": [{
            "oi": "vda2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "upavahi.gb.net",
          "l": [{
            "oi": "9ea2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "fikerpakis.nl",
          "l": [{
            "oi": "mea2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "flygomauritiusab.com",
          "l": [{
            "oi": "lfa2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "8terbaik.my.id",
          "l": [{
            "oi": "sfa2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "jodobay.com",
          "l": [{
            "oi": "0ga2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "c0mntybasestudi0.com",
          "l": [{
            "oi": "1ga2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "qastronando.com",
          "l": [{
            "oi": "6ga2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "videosstreaming.net",
          "l": [{
            "oi": "7ga2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "xoriginalekari.nl",
          "l": [{
            "oi": "bga2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "reformalegal.com.br",
          "l": [{
            "oi": "qha2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "jukvareraka.nl",
          "l": [{
            "oi": "6ia2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sankatpanditkp1969.systeme.io",
          "l": [{
            "oi": "nia2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gazendahea.nl",
          "l": [{
            "oi": "qia2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kahegyava.nl",
          "l": [{
            "oi": "ria2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "moriginalekari.nl",
          "l": [{
            "oi": "sia2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "description.es",
          "l": [{
            "oi": "9ja2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "futuresolarbattery.com",
          "l": [{
            "oi": "eja2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "marketing-ninja.co",
          "l": [{
            "oi": "hja2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "fun2play.club",
          "l": [{
            "oi": "nja2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "esrtv.com",
          "l": [{
            "oi": "pja2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "vipgames.me",
          "l": [{
            "oi": "qja2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "theodoresthings.com",
          "l": [{
            "oi": "rja2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "viddigo.live",
          "l": [{
            "oi": "uja2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "fblives.net",
          "l": [{
            "oi": "vja2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "anti-agingdoctor.app",
          "l": [{
            "oi": "7ka2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "viddigo.com",
          "l": [{
            "oi": "gka2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "whoopgames.com",
          "l": [{
            "oi": "hka2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "educationsally.com",
          "l": [{
            "oi": "uka2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "zoyparfumer.nl",
          "l": [{
            "oi": "gla2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "onlinestoryclub.com",
          "l": [{
            "oi": "ola2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "lifestoories.de",
          "l": [{
            "oi": "tla2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "hugecity.de",
          "l": [{
            "oi": "dma2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "abrightsmile.de",
          "l": [{
            "oi": "ema2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "customerexperts5.wordpress.com",
          "l": [{
            "oi": "sma2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pondratiy.nl",
          "l": [{
            "oi": "tma2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kukalisyra.nl",
          "l": [{
            "oi": "wma2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "xewojoy.com",
          "l": [{
            "oi": "yma2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "drhausmeister.com",
          "l": [{
            "oi": "4na2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "jolokacipas.nl",
          "l": [{
            "oi": "5na2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "meracotavay.nl",
          "l": [{
            "oi": "qna2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ilfelipadiw.nl",
          "l": [{
            "oi": "rna2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "batelto.com",
          "l": [{
            "oi": "koa2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "solokacipas.nl",
          "l": [{
            "oi": "3pa2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "snowwhiteshirt.de",
          "l": [{
            "oi": "tqa2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "hreastirok.es",
          "l": [{
            "oi": "2ra2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "woluro.com",
          "l": [{
            "oi": "3ra2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kemeciob.es",
          "l": [{
            "oi": "4ra2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "cute-blossom.com",
          "l": [{
            "oi": "pra2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "golokacipas.nl",
          "l": [{
            "oi": "xra2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "shrikrishnacargomovers.co.in",
          "l": [{
            "oi": "hsa2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "streamify.pro",
          "l": [{
            "oi": "msa2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "activeketo-today.com",
          "l": [{
            "oi": "ssa2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "hopemyliferestore.com",
          "l": [{
            "oi": "xsa2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "belemosdoop.nl",
          "l": [{
            "oi": "jta2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "jitendrasinghrtp033.systeme.io",
          "l": [{
            "oi": "8ua2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "abhishekshop8.godaddysites.com",
          "l": [{
            "oi": "9ua2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pdfconvertercompare.com",
          "l": [{
            "oi": "eua2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "leqadership.es",
          "l": [{
            "oi": "mua2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "poglezise.com",
          "l": [{
            "oi": "vua2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "erandingfood.ch",
          "l": [{
            "oi": "wua2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "purzelbaum.nagoya",
          "l": [{
            "oi": "6va2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "lpiptulodopow.nl",
          "l": [{
            "oi": "vva2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gondratiy.nl",
          "l": [{
            "oi": "wva2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "dahegval.nl",
          "l": [{
            "oi": "zva2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kinterjobcow.nl",
          "l": [{
            "oi": "1wa2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "piorotio.com",
          "l": [{
            "oi": "3wa2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "customerhelplinesupportservice.godaddysites.com",
          "l": [{
            "oi": "7wa2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "all-downloads.com",
          "l": [{
            "oi": "8wa2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "supportwin.co",
          "l": [{
            "oi": "jwa2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "bingebloh.nl",
          "l": [{
            "oi": "rwa2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sukomamoto.com",
          "l": [{
            "oi": "2xa2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "getstreamnow.net",
          "l": [{
            "oi": "3xa2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mobispots.com",
          "l": [{
            "oi": "4xa2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "earnmoreapp.com",
          "l": [{
            "oi": "7xa2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "app-worlds.com",
          "l": [{
            "oi": "8xa2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "vidlands.com",
          "l": [{
            "oi": "9xa2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "nordvid.com",
          "l": [{
            "oi": "axa2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "beapdfgeek.com",
          "l": [{
            "oi": "bxa2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "natekno.com",
          "l": [{
            "oi": "cxa2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "bidiotv.com",
          "l": [{
            "oi": "dxa2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sportsstreamshd.com",
          "l": [{
            "oi": "exa2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "brandposhiv.ru",
          "l": [{
            "oi": "fxa2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "realcrazyrich.my.id",
          "l": [{
            "oi": "oya2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pastiguna.com",
          "l": [{
            "oi": "qya2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "adsvincse.com",
          "l": [{
            "oi": "vya2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "videoslands.com",
          "l": [{
            "oi": "yya2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mobiogames.com",
          "l": [{
            "oi": "zya2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "videoworldclub.com",
          "l": [{
            "oi": "0za2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "onlinesupport9.godaddysites.com",
          "l": [{
            "oi": "2za2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "appgameland.com",
          "l": [{
            "oi": "4za2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "astrology-pro.com",
          "l": [{
            "oi": "5za2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "fittnfun.com",
          "l": [{
            "oi": "6za2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "vidsgame.com",
          "l": [{
            "oi": "7za2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "quickstartstream.com",
          "l": [{
            "oi": "8za2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "smt-bid.com",
          "l": [{
            "oi": "aza2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "stream-ultimate.com",
          "l": [{
            "oi": "bza2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "house-beton.ru",
          "l": [{
            "oi": "pza2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "rouge-red.com",
          "l": [{
            "oi": "d0b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "dailydigest.live",
          "l": [{
            "oi": "g0b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "eptmwholesale.com",
          "l": [{
            "oi": "p0b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tarjene.com",
          "l": [{
            "oi": "y0b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "beautiful-carnation.com",
          "l": [{
            "oi": "01b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "banterjercop.nl",
          "l": [{
            "oi": "31b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mondolero.com",
          "l": [{
            "oi": "a1b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "topplayerz.net",
          "l": [{
            "oi": "d1b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "quickrecipehub.com",
          "l": [{
            "oi": "f1b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "moxigames.com",
          "l": [{
            "oi": "g1b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "luksuscatalyst.com",
          "l": [{
            "oi": "42b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "vestarolip.de",
          "l": [{
            "oi": "s2b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "brukalslof.nl",
          "l": [{
            "oi": "33b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "theyogabliss.com",
          "l": [{
            "oi": "o3b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "cooknjoys.com",
          "l": [{
            "oi": "z3b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "shakeysmoothie.com",
          "l": [{
            "oi": "24b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "nationalpackersgroup.co.in",
          "l": [{
            "oi": "f4b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "chokdeeseven.com",
          "l": [{
            "oi": "k4b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "panalorib.com",
          "l": [{
            "oi": "l4b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "chokdeebread.com",
          "l": [{
            "oi": "m4b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "numeloki.com",
          "l": [{
            "oi": "s4b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "chesterfoks.com",
          "l": [{
            "oi": "u4b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "lakecoffedrink.com",
          "l": [{
            "oi": "x4b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "restarka.es",
          "l": [{
            "oi": "s5b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "bilfelipad.nl",
          "l": [{
            "oi": "y5b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ramorskop.nl",
          "l": [{
            "oi": "86b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "samesorrylil.com",
          "l": [{
            "oi": "h6b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "profitstrategydexp.com",
          "l": [{
            "oi": "u6b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gardenscrapper.com",
          "l": [{
            "oi": "37b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "msntw.live",
          "l": [{
            "oi": "47b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "nukvareraka.nl",
          "l": [{
            "oi": "a7b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "thebooksmaster.com",
          "l": [{
            "oi": "g7b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "aitradesjournal.com",
          "l": [{
            "oi": "i7b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "techourt.com",
          "l": [{
            "oi": "m7b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "norbidreka.nl",
          "l": [{
            "oi": "n7b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "atelieetalo-n.ru",
          "l": [{
            "oi": "q7b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ragasthlat.nl",
          "l": [{
            "oi": "r7b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "rilfelipadiw.nl",
          "l": [{
            "oi": "t7b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sorbidreka.nl",
          "l": [{
            "oi": "w7b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "forbidrekeska.nl",
          "l": [{
            "oi": "y7b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "justcookyourmeals.com",
          "l": [{
            "oi": "28b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "travelteny.co",
          "l": [{
            "oi": "68b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "leonationalpackersandmovers.co.in",
          "l": [{
            "oi": "b8b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "jomihyerakit.nl",
          "l": [{
            "oi": "z8b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "popylarity.nl",
          "l": [{
            "oi": "59b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tastyrecipesblog.com",
          "l": [{
            "oi": "r9b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "harukidating.com",
          "l": [{
            "oi": "y9b2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ntk-24.ru",
          "l": [{
            "oi": "4ab2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "thegadgetestore.top",
          "l": [{
            "oi": "6ab2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mukalisyrup.nl",
          "l": [{
            "oi": "hab2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "genrealotmon.com",
          "l": [{
            "oi": "lab2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "domelato.com",
          "l": [{
            "oi": "pab2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "allmycontent-kw.fun",
          "l": [{
            "oi": "xab2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ptlofcontent-sn.fun",
          "l": [{
            "oi": "1bb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ptlmobile-iq.club",
          "l": [{
            "oi": "3bb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "lingoads.com",
          "l": [{
            "oi": "4bb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "blissfulatrium.com",
          "l": [{
            "oi": "6bb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "comihyerakit.nl",
          "l": [{
            "oi": "rbb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "fomihyerakit.nl",
          "l": [{
            "oi": "xbb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "restinations.nl",
          "l": [{
            "oi": "ybb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "detikaja.my.id",
          "l": [{
            "oi": "1cb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "apkportal-rs.xyz",
          "l": [{
            "oi": "bcb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kejadoe.com",
          "l": [{
            "oi": "icb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "felefonitka.nl",
          "l": [{
            "oi": "ocb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "maryarty.com",
          "l": [{
            "oi": "wcb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "homeshiftingmart.co.in",
          "l": [{
            "oi": "0db2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mobileportalcontent-sa.fun",
          "l": [{
            "oi": "1db2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "xopylarity.nl",
          "l": [{
            "oi": "6db2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "zukalisyra.nl",
          "l": [{
            "oi": "ndb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "te-dora.ru",
          "l": [{
            "oi": "xdb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "perevozkipluss.ru",
          "l": [{
            "oi": "ydb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gettopentertainment-sa.fun",
          "l": [{
            "oi": "zdb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "entertainmentportal-ae.fun",
          "l": [{
            "oi": "0eb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mobilefastportalsa.fun",
          "l": [{
            "oi": "1eb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "allmycontent-se.fun",
          "l": [{
            "oi": "2eb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "accessmediaportal.com",
          "l": [{
            "oi": "3eb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "probigcoin.com",
          "l": [{
            "oi": "eeb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "luksusconsistency.com",
          "l": [{
            "oi": "qeb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "asighofrelief.de",
          "l": [{
            "oi": "seb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "slow-winsdow.com",
          "l": [{
            "oi": "3fb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mixmergense.com",
          "l": [{
            "oi": "fgb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "carnepin.co",
          "l": [{
            "oi": "jgb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "bestrecipiesworld.com",
          "l": [{
            "oi": "kgb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "barabana.de",
          "l": [{
            "oi": "ugb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "apps4download.club",
          "l": [{
            "oi": "zgb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "courierregistration.com",
          "l": [{
            "oi": "1hb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "velvetmistral.com",
          "l": [{
            "oi": "2hb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "maretrvata.nl",
          "l": [{
            "oi": "8hb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "wetination.nl",
          "l": [{
            "oi": "chb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "luksusreputation.com",
          "l": [{
            "oi": "phb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "luminouspetal.com",
          "l": [{
            "oi": "yhb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ivanjul.com",
          "l": [{
            "oi": "gib2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "zeracotavay.nl",
          "l": [{
            "oi": "qib2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "familynow.club",
          "l": [{
            "oi": "xib2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "customercomplaint.site",
          "l": [{
            "oi": "2jb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "maximum-solaris.com",
          "l": [{
            "oi": "3jb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "nondratiy.nl",
          "l": [{
            "oi": "4jb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "teretenloter.nl",
          "l": [{
            "oi": "tjb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "paretrvata.nl",
          "l": [{
            "oi": "8kb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "opoto.org",
          "l": [{
            "oi": "ckb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "firsode.com",
          "l": [{
            "oi": "gkb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "caretrvata.nl",
          "l": [{
            "oi": "qkb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "infooccasion.com",
          "l": [{
            "oi": "wkb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "media-radar.site",
          "l": [{
            "oi": "zkb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "softmetal.de",
          "l": [{
            "oi": "1lb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "singingbirdsinthegarden.com",
          "l": [{
            "oi": "6lb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "lawofjungle.com",
          "l": [{
            "oi": "ilb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "foyparfumer.nl",
          "l": [{
            "oi": "llb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "downlodfast.com",
          "l": [{
            "oi": "wlb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "wilfelipad.nl",
          "l": [{
            "oi": "zmb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "antrakasa.com",
          "l": [{
            "oi": "cnb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gourmetgurudelight.de",
          "l": [{
            "oi": "mnb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "findyourmagicnumber.fun",
          "l": [{
            "oi": "rnb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "goldenraysofsunshine.com",
          "l": [{
            "oi": "sob2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "profitstrategyphones.com",
          "l": [{
            "oi": "yob2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "chefdoumon.com",
          "l": [{
            "oi": "0pb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "yaon.my.id",
          "l": [{
            "oi": "4pb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "aikodating.com",
          "l": [{
            "oi": "6pb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "wanderlustadventures.de",
          "l": [{
            "oi": "hpb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "superbizboost.de",
          "l": [{
            "oi": "tpb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "lollylou.live",
          "l": [{
            "oi": "wpb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "impressiveview.de",
          "l": [{
            "oi": "5qb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "daretrvata.nl",
          "l": [{
            "oi": "8qb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmausynl.sbs",
          "l": [{
            "oi": "pqb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mybookiebooks-usa.com",
          "l": [{
            "oi": "4rb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "coniteks.com",
          "l": [{
            "oi": "9rb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "domegreto.com",
          "l": [{
            "oi": "arb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "thecelebrumors.com",
          "l": [{
            "oi": "jrb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "drive-tracker.pro",
          "l": [{
            "oi": "lrb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "deliciousandhealthyfood.com",
          "l": [{
            "oi": "orb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "techtrendmasters.de",
          "l": [{
            "oi": "xrb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "fvkers.online",
          "l": [{
            "oi": "zrb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "content-nice.com",
          "l": [{
            "oi": "4sb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gamcontents.com",
          "l": [{
            "oi": "7sb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "content-ize.com",
          "l": [{
            "oi": "8sb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "contentnow-now.com",
          "l": [{
            "oi": "9sb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "djumpers.com",
          "l": [{
            "oi": "asb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "cookiter.com",
          "l": [{
            "oi": "csb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "chowcullinary.com",
          "l": [{
            "oi": "dsb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "culinarysparkle.com",
          "l": [{
            "oi": "esb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "dlcontent-ch.com",
          "l": [{
            "oi": "gsb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "contentnow-co.com",
          "l": [{
            "oi": "hsb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "contentsnice.com",
          "l": [{
            "oi": "nsb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tech-charm.com",
          "l": [{
            "oi": "osb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "amusementcirculaire.com",
          "l": [{
            "oi": "psb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "contents-to-you.com",
          "l": [{
            "oi": "tsb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "maestro-content.com",
          "l": [{
            "oi": "usb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "fantasticprojectx.com",
          "l": [{
            "oi": "xsb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "conetntyfun.com",
          "l": [{
            "oi": "0tb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "downtownhill.com",
          "l": [{
            "oi": "3tb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "luksusimpact.com",
          "l": [{
            "oi": "ftb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "plentyofzest.com",
          "l": [{
            "oi": "gtb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tranquilelixir.com",
          "l": [{
            "oi": "5ub2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mobile-maestro.com",
          "l": [{
            "oi": "pub2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "prelangler.com",
          "l": [{
            "oi": "qub2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "glcontent-g.com",
          "l": [{
            "oi": "rub2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "playvito-gr.com",
          "l": [{
            "oi": "sub2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "contents-spot.com",
          "l": [{
            "oi": "tub2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "apklive.co",
          "l": [{
            "oi": "xub2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mtraq121qa.com",
          "l": [{
            "oi": "yub2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "next-battle.com",
          "l": [{
            "oi": "dwb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "nullmoonfire.com",
          "l": [{
            "oi": "fwb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "algortrading.vip",
          "l": [{
            "oi": "nwb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "lookpoper.com",
          "l": [{
            "oi": "ywb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "train-spot.com",
          "l": [{
            "oi": "8xb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "feeviewpoint.com",
          "l": [{
            "oi": "3yb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "niceatmosphere.de",
          "l": [{
            "oi": "eyb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ge-richer.com",
          "l": [{
            "oi": "zyb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "appvykonavets.com",
          "l": [{
            "oi": "0zb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "wealthwarpmaster.com",
          "l": [{
            "oi": "1zb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "trendaccessories.in",
          "l": [{
            "oi": "3zb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "rapidcompanygrowth.de",
          "l": [{
            "oi": "hzb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "beregi.de",
          "l": [{
            "oi": "izb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mercurialplaza.com",
          "l": [{
            "oi": "jzb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "dreamyeclipse.com",
          "l": [{
            "oi": "ozb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sestinations.nl",
          "l": [{
            "oi": "qzb2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "luarhaxsytyd.nl",
          "l": [{
            "oi": "20c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "surveyecho.space",
          "l": [{
            "oi": "30c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "serviceonline4.godaddysites.com",
          "l": [{
            "oi": "50c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kahegyaval.nl",
          "l": [{
            "oi": "90c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "onboardfound.com",
          "l": [{
            "oi": "h0c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "udrdjejmnlb.shop",
          "l": [{
            "oi": "m0c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "modtinghar.nl",
          "l": [{
            "oi": "n0c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "parametrvat.nl",
          "l": [{
            "oi": "p0c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "descretadcard.com",
          "l": [{
            "oi": "d1c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "quizleem.co",
          "l": [{
            "oi": "g1c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "soheristyler.nl",
          "l": [{
            "oi": "92c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mobidatr.com",
          "l": [{
            "oi": "b2c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mygym-club.com",
          "l": [{
            "oi": "d2c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "playvito.com",
          "l": [{
            "oi": "e2c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "algorpro.vip",
          "l": [{
            "oi": "g2c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "hormonesrooks.com",
          "l": [{
            "oi": "w2c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mysmartandroid.com",
          "l": [{
            "oi": "x2c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "overwritten84.com",
          "l": [{
            "oi": "13c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "chatapke.com",
          "l": [{
            "oi": "33c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "jonafood.nl",
          "l": [{
            "oi": "63c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "customersupport5238.godaddysites.com",
          "l": [{
            "oi": "83c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tradingox.online",
          "l": [{
            "oi": "b3c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "securetrkk.com",
          "l": [{
            "oi": "d3c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "emarketingtrend.com",
          "l": [{
            "oi": "f3c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tradingsignalsapp.live",
          "l": [{
            "oi": "g3c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "monomidlik.sa.com",
          "l": [{
            "oi": "h3c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "palcono.ru",
          "l": [{
            "oi": "i3c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "newintechgadgets.top",
          "l": [{
            "oi": "j3c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kvapo.top",
          "l": [{
            "oi": "p3c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pukatulo.com",
          "l": [{
            "oi": "q3c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "supercoin-info.com",
          "l": [{
            "oi": "r3c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ewidron.com",
          "l": [{
            "oi": "s3c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "patagoniapadelshop.com",
          "l": [{
            "oi": "u3c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "blcontent-rs.com",
          "l": [{
            "oi": "14c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "darkdeerdrop.com",
          "l": [{
            "oi": "34c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "drizzlyday.com",
          "l": [{
            "oi": "64c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "riyashop.godaddysites.com",
          "l": [{
            "oi": "b4c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "profsavings.com",
          "l": [{
            "oi": "g4c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "cyathoid.com",
          "l": [{
            "oi": "j4c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "killsoonluck.nl",
          "l": [{
            "oi": "m4c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmabetxx.sbs",
          "l": [{
            "oi": "p4c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "nblike.co",
          "l": [{
            "oi": "q4c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illehe.sbs",
          "l": [{
            "oi": "s4c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "viewrecipes.net",
          "l": [{
            "oi": "t4c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmausjic.sbs",
          "l": [{
            "oi": "x4c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ahmzpw.sbs",
          "l": [{
            "oi": "z4c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmausrtu.sbs",
          "l": [{
            "oi": "05c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gelefonitka.nl",
          "l": [{
            "oi": "25c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pairbakeglow.com",
          "l": [{
            "oi": "85c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "zxcvf.xyz",
          "l": [{
            "oi": "a5c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ednzv.sbs",
          "l": [{
            "oi": "b5c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illqnc.sbs",
          "l": [{
            "oi": "d5c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "chefschatter.com",
          "l": [{
            "oi": "k5c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "algobreaker.vip",
          "l": [{
            "oi": "l5c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "crispyleaf.de",
          "l": [{
            "oi": "n5c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illlcs.sbs",
          "l": [{
            "oi": "o5c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illaqo.sbs",
          "l": [{
            "oi": "p5c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "partyandhavefun.de",
          "l": [{
            "oi": "q5c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illkxq.sbs",
          "l": [{
            "oi": "r5c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "exportbestpeer.com",
          "l": [{
            "oi": "s5c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illfoi.sbs",
          "l": [{
            "oi": "t5c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gansmyb.sbs",
          "l": [{
            "oi": "v5c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ateanheekday.nl",
          "l": [{
            "oi": "x5c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "luminousharbor.com",
          "l": [{
            "oi": "y5c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pdftodocpro.com",
          "l": [{
            "oi": "16c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "genlv.sbs",
          "l": [{
            "oi": "36c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illxfa.sbs",
          "l": [{
            "oi": "76c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "infotimative.com",
          "l": [{
            "oi": "96c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illrxs.sbs",
          "l": [{
            "oi": "a6c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gansaxo.sbs",
          "l": [{
            "oi": "b6c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gecre.sbs",
          "l": [{
            "oi": "c6c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "edwlr.sbs",
          "l": [{
            "oi": "d6c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illvds.sbs",
          "l": [{
            "oi": "h6c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "dimensionludique.com",
          "l": [{
            "oi": "i6c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "modyeraki.nl",
          "l": [{
            "oi": "k6c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "testinations.nl",
          "l": [{
            "oi": "n6c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ahmxsy.sbs",
          "l": [{
            "oi": "o6c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ahmvkg.sbs",
          "l": [{
            "oi": "p6c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "asmnatiowrilk.nl",
          "l": [{
            "oi": "q6c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mtraq145uae.com",
          "l": [{
            "oi": "t6c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "downlodio.com",
          "l": [{
            "oi": "u6c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "topiqtest.org",
          "l": [{
            "oi": "v6c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "asklalaowrilk.nl",
          "l": [{
            "oi": "x6c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tokimokidoki.nl",
          "l": [{
            "oi": "y6c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "deleconomiahoy.com",
          "l": [{
            "oi": "z6c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "lolrwaenluck.nl",
          "l": [{
            "oi": "17c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "dokerokedoki.nl",
          "l": [{
            "oi": "27c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gngvp.sbs",
          "l": [{
            "oi": "87c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "nirohao.com",
          "l": [{
            "oi": "97c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ateanmiekday.nl",
          "l": [{
            "oi": "a7c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gansrad.sbs",
          "l": [{
            "oi": "b7c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "rokimokidoki.nl",
          "l": [{
            "oi": "c7c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gnhdq.sbs",
          "l": [{
            "oi": "f7c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "iriskakonfet.nl",
          "l": [{
            "oi": "i7c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "oxvk.cfd",
          "l": [{
            "oi": "l7c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "missmyrtleiqtest.xyz",
          "l": [{
            "oi": "n7c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "animalshormones.com",
          "l": [{
            "oi": "o7c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gansfmh.sbs",
          "l": [{
            "oi": "y7c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illdxp.sbs",
          "l": [{
            "oi": "28c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqkko.sbs",
          "l": [{
            "oi": "58c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "seriesinvitation.de",
          "l": [{
            "oi": "b8c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "unctious.com",
          "l": [{
            "oi": "g8c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "cemsrl.it",
          "l": [{
            "oi": "h8c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "laugh-needed.com",
          "l": [{
            "oi": "i8c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "superiorgadgetwhiz.top",
          "l": [{
            "oi": "j8c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "frequentlyeconomics.com",
          "l": [{
            "oi": "m8c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "helpline93.godaddysites.com",
          "l": [{
            "oi": "o8c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "shdnews.com",
          "l": [{
            "oi": "p8c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "bestcallenquiry.in",
          "l": [{
            "oi": "q8c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "dinasmalamku.my.id",
          "l": [{
            "oi": "r8c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "canadianfitnessclub.com",
          "l": [{
            "oi": "s8c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "circumseh.com",
          "l": [{
            "oi": "t8c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "parquevertientes.com",
          "l": [{
            "oi": "u8c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "productoslabrador.com",
          "l": [{
            "oi": "x8c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kosqmq.sbs",
          "l": [{
            "oi": "y8c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "reatshjfkvqwcmx.com",
          "l": [{
            "oi": "z8c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "reporteritosbucaramanga.com",
          "l": [{
            "oi": "09c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "secretskehai.com",
          "l": [{
            "oi": "29c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tanbdq.sbs",
          "l": [{
            "oi": "39c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "somihyerakit.nl",
          "l": [{
            "oi": "59c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "paedomorphism.com",
          "l": [{
            "oi": "89c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqzua.sbs",
          "l": [{
            "oi": "a9c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "trackeconomics.com",
          "l": [{
            "oi": "b9c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sensationunisexsalon.com",
          "l": [{
            "oi": "c9c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sktdxmnvfwuzy.com",
          "l": [{
            "oi": "d9c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "festivallath.com",
          "l": [{
            "oi": "f9c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "googlesitecustumercare.godaddysites.com",
          "l": [{
            "oi": "g9c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "designtop.wiki",
          "l": [{
            "oi": "h9c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqdzp.sbs",
          "l": [{
            "oi": "i9c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "festdeliveryserviceh.in",
          "l": [{
            "oi": "j9c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ingotajar.com",
          "l": [{
            "oi": "k9c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "paluvobriket.com",
          "l": [{
            "oi": "l9c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "w8club.de",
          "l": [{
            "oi": "m9c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mnol.cfd",
          "l": [{
            "oi": "o9c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "bazoree.com",
          "l": [{
            "oi": "q9c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "edwtx.sbs",
          "l": [{
            "oi": "r9c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "notizieaic.com",
          "l": [{
            "oi": "s9c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kosgjf.sbs",
          "l": [{
            "oi": "u9c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kosohe.sbs",
          "l": [{
            "oi": "w9c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqlep.sbs",
          "l": [{
            "oi": "y9c2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kosnyv.sbs",
          "l": [{
            "oi": "0ac2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tantoe.sbs",
          "l": [{
            "oi": "1ac2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "alecdy.sbs",
          "l": [{
            "oi": "3ac2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqbss.sbs",
          "l": [{
            "oi": "4ac2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "serxrn.sbs",
          "l": [{
            "oi": "5ac2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "trexdyl.com",
          "l": [{
            "oi": "6ac2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "latinomicology.com",
          "l": [{
            "oi": "7ac2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tamgoyaki.com",
          "l": [{
            "oi": "8ac2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "edixv.sbs",
          "l": [{
            "oi": "aac2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "trinaifa.com",
          "l": [{
            "oi": "cac2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mopylarity.nl",
          "l": [{
            "oi": "fac2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "edfzh.sbs",
          "l": [{
            "oi": "gac2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "koswyf.sbs",
          "l": [{
            "oi": "hac2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "alewis.sbs",
          "l": [{
            "oi": "jac2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gansvar.sbs",
          "l": [{
            "oi": "kac2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tanumj.sbs",
          "l": [{
            "oi": "lac2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqjws.sbs",
          "l": [{
            "oi": "oac2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "alezll.sbs",
          "l": [{
            "oi": "pac2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kosssp.sbs",
          "l": [{
            "oi": "tac2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqsas.sbs",
          "l": [{
            "oi": "uac2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "laytalohaducni.tk",
          "l": [{
            "oi": "xac2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqggf.sbs",
          "l": [{
            "oi": "yac2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "edvgb.sbs",
          "l": [{
            "oi": "zac2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "servhx.sbs",
          "l": [{
            "oi": "0bc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pipendo.uk",
          "l": [{
            "oi": "4bc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "yellowleaff.com",
          "l": [{
            "oi": "5bc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sevmwearlost.nl",
          "l": [{
            "oi": "8bc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqxpf.sbs",
          "l": [{
            "oi": "9bc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqhdm.sbs",
          "l": [{
            "oi": "abc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tobeornotttobe.de",
          "l": [{
            "oi": "bbc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "musicmagicmakers.de",
          "l": [{
            "oi": "cbc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tanrcl.sbs",
          "l": [{
            "oi": "fbc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "vokerokedoki.nl",
          "l": [{
            "oi": "gbc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqyxx.sbs",
          "l": [{
            "oi": "hbc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqggr.sbs",
          "l": [{
            "oi": "ibc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "loriginalekari.nl",
          "l": [{
            "oi": "jbc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tancrd.sbs",
          "l": [{
            "oi": "lbc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tanojd.sbs",
          "l": [{
            "oi": "mbc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "edtyk.sbs",
          "l": [{
            "oi": "pbc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kosgek.sbs",
          "l": [{
            "oi": "qbc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gansmfg.sbs",
          "l": [{
            "oi": "sbc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kosvru.sbs",
          "l": [{
            "oi": "tbc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "fashionfusionfever.de",
          "l": [{
            "oi": "ubc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "oldmemoriess.com",
          "l": [{
            "oi": "wbc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ganskdi.sbs",
          "l": [{
            "oi": "xbc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ganshgs.sbs",
          "l": [{
            "oi": "ybc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "serzsk.sbs",
          "l": [{
            "oi": "zbc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tashkresgul.nl",
          "l": [{
            "oi": "0cc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "far-away.homes",
          "l": [{
            "oi": "1cc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "qashkresgul.nl",
          "l": [{
            "oi": "2cc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ntg.hair",
          "l": [{
            "oi": "3cc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "hadkham.com",
          "l": [{
            "oi": "4cc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "xertspidipider.nl",
          "l": [{
            "oi": "6cc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "playono.com",
          "l": [{
            "oi": "7cc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "realworldbusinessnews.com",
          "l": [{
            "oi": "8cc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "globalcitizenconsultants.com",
          "l": [{
            "oi": "9cc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "topcontentmusic.com",
          "l": [{
            "oi": "acc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "geekq.sbs",
          "l": [{
            "oi": "bcc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gnjgm.sbs",
          "l": [{
            "oi": "ccc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gnmei.sbs",
          "l": [{
            "oi": "fcc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "bigdeal41.ch",
          "l": [{
            "oi": "gcc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "indranews.com",
          "l": [{
            "oi": "hcc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqxwq.sbs",
          "l": [{
            "oi": "jcc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "protegemos.org",
          "l": [{
            "oi": "kcc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "peoplecare.godaddysites.com",
          "l": [{
            "oi": "lcc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqdrj.sbs",
          "l": [{
            "oi": "ncc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "customerexperts3.wordpress.com",
          "l": [{
            "oi": "occ2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "quick-service.us",
          "l": [{
            "oi": "pcc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "zatrrouwtoy.nl",
          "l": [{
            "oi": "rcc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mytmlo.uk",
          "l": [{
            "oi": "tcc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmanzsqd.sbs",
          "l": [{
            "oi": "ucc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "certspidipider.nl",
          "l": [{
            "oi": "vcc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "edcdp.sbs",
          "l": [{
            "oi": "ycc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sernxe.sbs",
          "l": [{
            "oi": "zcc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illjpksk.sbs",
          "l": [{
            "oi": "0dc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illjpulw.sbs",
          "l": [{
            "oi": "1dc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "edujm.sbs",
          "l": [{
            "oi": "2dc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kaqilyo.com",
          "l": [{
            "oi": "4dc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "beautiful-jasmine.net",
          "l": [{
            "oi": "5dc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "louisemartinchew.com",
          "l": [{
            "oi": "7dc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mrxb.cfd",
          "l": [{
            "oi": "8dc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "htwm.cfd",
          "l": [{
            "oi": "adc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gansobb.sbs",
          "l": [{
            "oi": "bdc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ahmabg.sbs",
          "l": [{
            "oi": "cdc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tilicotikicut.nl",
          "l": [{
            "oi": "edc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sevmwyurlost.nl",
          "l": [{
            "oi": "fdc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "acnetan.com",
          "l": [{
            "oi": "gdc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "bergsundet.com",
          "l": [{
            "oi": "hdc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "billigabanderoller.com",
          "l": [{
            "oi": "idc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "bildekal.com",
          "l": [{
            "oi": "jdc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "cheerfulnesscare.sbs",
          "l": [{
            "oi": "kdc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "cliveholmes.com",
          "l": [{
            "oi": "mdc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "thestartofabusiness.com",
          "l": [{
            "oi": "ndc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "acaciafinans.com",
          "l": [{
            "oi": "odc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "1q1a.com",
          "l": [{
            "oi": "pdc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "backoffice-webbservices.com",
          "l": [{
            "oi": "qdc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ahmqsy.sbs",
          "l": [{
            "oi": "rdc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "110stepstoexcellence.com",
          "l": [{
            "oi": "sdc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "aeronomicstoday.com",
          "l": [{
            "oi": "tdc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "collegepark73.com",
          "l": [{
            "oi": "udc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "musicalistix.com",
          "l": [{
            "oi": "vdc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "activeketo-team.com",
          "l": [{
            "oi": "wdc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "activeketo-ca.com",
          "l": [{
            "oi": "ydc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "civileges.com",
          "l": [{
            "oi": "1ec2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "capitalitical.com",
          "l": [{
            "oi": "2ec2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mailese.com",
          "l": [{
            "oi": "3ec2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "y-irina.ru",
          "l": [{
            "oi": "4ec2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "raysvitamins.sbs",
          "l": [{
            "oi": "9ec2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "headpendulor.com",
          "l": [{
            "oi": "dec2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illjpaun.sbs",
          "l": [{
            "oi": "eec2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "thebusinessfacet.com",
          "l": [{
            "oi": "gec2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "bustiersstor.online",
          "l": [{
            "oi": "hec2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "multicontenthub.info",
          "l": [{
            "oi": "iec2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gamecontent.online",
          "l": [{
            "oi": "kec2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "streamingzone.me",
          "l": [{
            "oi": "lec2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "talkaffected.com",
          "l": [{
            "oi": "nec2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gokerokedoki.nl",
          "l": [{
            "oi": "pec2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "zatrpouwtoy.nl",
          "l": [{
            "oi": "qec2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ukiperut.nl",
          "l": [{
            "oi": "rec2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "fertspidipider.nl",
          "l": [{
            "oi": "sec2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kosfxb.sbs",
          "l": [{
            "oi": "tec2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ercl.cfd",
          "l": [{
            "oi": "vec2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kkoku.cfd",
          "l": [{
            "oi": "wec2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tanwda.sbs",
          "l": [{
            "oi": "xec2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illjpekz.sbs",
          "l": [{
            "oi": "yec2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqtvj.sbs",
          "l": [{
            "oi": "zec2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqddh.sbs",
          "l": [{
            "oi": "0fc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "inogomo.gb.net",
          "l": [{
            "oi": "2fc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqlbh.sbs",
          "l": [{
            "oi": "3fc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "alebck.sbs",
          "l": [{
            "oi": "6fc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqlwe.sbs",
          "l": [{
            "oi": "8fc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illjpftm.sbs",
          "l": [{
            "oi": "afc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmajpxyb.sbs",
          "l": [{
            "oi": "cfc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tdktn.cfd",
          "l": [{
            "oi": "efc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "dezixay.com",
          "l": [{
            "oi": "ffc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "secretaussiemillions.com.au",
          "l": [{
            "oi": "gfc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "flightmodeal.com",
          "l": [{
            "oi": "ifc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "toduhio.com",
          "l": [{
            "oi": "jfc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "dreamaspirator.com",
          "l": [{
            "oi": "kfc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "jinniugu.com",
          "l": [{
            "oi": "lfc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illajd.sbs",
          "l": [{
            "oi": "nfc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "aleotr.sbs",
          "l": [{
            "oi": "ofc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tanwob.sbs",
          "l": [{
            "oi": "pfc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ogoshozhu.de",
          "l": [{
            "oi": "sfc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "lookingatthechest.com",
          "l": [{
            "oi": "tfc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "handleprofitstartegy.com",
          "l": [{
            "oi": "vfc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "playfulray.com",
          "l": [{
            "oi": "xfc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kiraliknet.com",
          "l": [{
            "oi": "yfc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqhxl.sbs",
          "l": [{
            "oi": "zfc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "dailytechdirect.com",
          "l": [{
            "oi": "0gc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "edpgm.sbs",
          "l": [{
            "oi": "1gc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "cheerfulnesstrees.sbs",
          "l": [{
            "oi": "2gc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmajpqim.sbs",
          "l": [{
            "oi": "3gc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "cigeregoteral.nl",
          "l": [{
            "oi": "5gc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqrzn.sbs",
          "l": [{
            "oi": "7gc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmajpdbw.sbs",
          "l": [{
            "oi": "9gc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmauspuc.sbs",
          "l": [{
            "oi": "egc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "rifelipadiw.nl",
          "l": [{
            "oi": "fgc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tancdt.sbs",
          "l": [{
            "oi": "hgc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kosrfk.sbs",
          "l": [{
            "oi": "igc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "zigeregoteral.nl",
          "l": [{
            "oi": "kgc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmausxiz.sbs",
          "l": [{
            "oi": "ogc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tisygoi.com",
          "l": [{
            "oi": "qgc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tevimymild.tk",
          "l": [{
            "oi": "rgc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "rukypia.com",
          "l": [{
            "oi": "sgc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mybrainiq.com",
          "l": [{
            "oi": "tgc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "thecontentz.com",
          "l": [{
            "oi": "ugc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqcnp.sbs",
          "l": [{
            "oi": "vgc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "profitstrategyhands.com",
          "l": [{
            "oi": "wgc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqxic.sbs",
          "l": [{
            "oi": "xgc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "compensaca.com",
          "l": [{
            "oi": "ygc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqshv.sbs",
          "l": [{
            "oi": "zgc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "foodiefiestabuzz.de",
          "l": [{
            "oi": "0hc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "alebve.sbs",
          "l": [{
            "oi": "1hc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "seracr.sbs",
          "l": [{
            "oi": "6hc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gnkwn.sbs",
          "l": [{
            "oi": "7hc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kosoob.sbs",
          "l": [{
            "oi": "ahc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqtta.sbs",
          "l": [{
            "oi": "ghc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "edvkt.sbs",
          "l": [{
            "oi": "hhc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ahmmym.sbs",
          "l": [{
            "oi": "khc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmajpxwz.sbs",
          "l": [{
            "oi": "lhc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmanzxhp.sbs",
          "l": [{
            "oi": "mhc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmaustrk.sbs",
          "l": [{
            "oi": "nhc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "profitstrategysteave.com",
          "l": [{
            "oi": "ohc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "masandar.com",
          "l": [{
            "oi": "phc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "superbprojectx.com",
          "l": [{
            "oi": "qhc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "forward-tv.live",
          "l": [{
            "oi": "rhc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "driver-updater.com",
          "l": [{
            "oi": "thc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gevqm.sbs",
          "l": [{
            "oi": "uhc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "educacione.com",
          "l": [{
            "oi": "vhc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "marhealthyflo.com",
          "l": [{
            "oi": "whc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ziptechapp.com",
          "l": [{
            "oi": "xhc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "margo-mag.com",
          "l": [{
            "oi": "yhc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "bikociga.es",
          "l": [{
            "oi": "zhc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "dewa.my.id",
          "l": [{
            "oi": "0ic2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "subham995501.wixsite.com",
          "l": [{
            "oi": "1ic2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gelyc.sbs",
          "l": [{
            "oi": "2ic2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "socolineryt.nl",
          "l": [{
            "oi": "5ic2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gnnha.sbs",
          "l": [{
            "oi": "6ic2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tantti.sbs",
          "l": [{
            "oi": "7ic2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gezzx.sbs",
          "l": [{
            "oi": "8ic2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gazenda.nl",
          "l": [{
            "oi": "9ic2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmanzpya.sbs",
          "l": [{
            "oi": "cic2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmanzyzp.sbs",
          "l": [{
            "oi": "dic2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "dashkresgul.nl",
          "l": [{
            "oi": "fic2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ahmtzo.sbs",
          "l": [{
            "oi": "hic2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ahmkcl.sbs",
          "l": [{
            "oi": "iic2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kiticatikicat.nl",
          "l": [{
            "oi": "jic2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqwyn.sbs",
          "l": [{
            "oi": "kic2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sydohae.com",
          "l": [{
            "oi": "lic2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "safestayyork.co.uk",
          "l": [{
            "oi": "mic2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "activeketo-fr.com",
          "l": [{
            "oi": "nic2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "worldwideiqtest.site",
          "l": [{
            "oi": "oic2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "imperialtalk.com",
          "l": [{
            "oi": "pic2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "misselyssaiqtest.click",
          "l": [{
            "oi": "qic2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmanzeax.sbs",
          "l": [{
            "oi": "ric2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmanzdaq.sbs",
          "l": [{
            "oi": "sic2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gnvvh.sbs",
          "l": [{
            "oi": "tic2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gnncp.sbs",
          "l": [{
            "oi": "uic2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tanusy.sbs",
          "l": [{
            "oi": "vic2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "serejr.sbs",
          "l": [{
            "oi": "wic2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "edfpq.sbs",
          "l": [{
            "oi": "xic2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ahmagz.sbs",
          "l": [{
            "oi": "yic2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kospei.sbs",
          "l": [{
            "oi": "zic2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmajpmqy.sbs",
          "l": [{
            "oi": "0jc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "marinerewardmass.com",
          "l": [{
            "oi": "1jc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmabezhe.sbs",
          "l": [{
            "oi": "2jc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gecov.sbs",
          "l": [{
            "oi": "3jc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "koskmu.sbs",
          "l": [{
            "oi": "4jc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "creativies.vn.ua",
          "l": [{
            "oi": "7jc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "laoportinme.nl",
          "l": [{
            "oi": "ijc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "modrekaw.nl",
          "l": [{
            "oi": "yjc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "getvaradertaki.es",
          "l": [{
            "oi": "1kc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "thestartofa.business",
          "l": [{
            "oi": "2kc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "lidlgifthouse.site",
          "l": [{
            "oi": "3kc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gtrewm.com",
          "l": [{
            "oi": "4kc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "labs-go.com",
          "l": [{
            "oi": "6kc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "investkinds.com",
          "l": [{
            "oi": "7kc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pimbilling.com",
          "l": [{
            "oi": "8kc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "fasteface.com",
          "l": [{
            "oi": "9kc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "chechmenshertz.online",
          "l": [{
            "oi": "akc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "igaproductos.com.mx",
          "l": [{
            "oi": "bkc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "survivalguidenow.com",
          "l": [{
            "oi": "ckc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "youthzone.online",
          "l": [{
            "oi": "dkc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "precisioneng.com.br",
          "l": [{
            "oi": "ekc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "oyasumeals.com",
          "l": [{
            "oi": "fkc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "indostalk.com",
          "l": [{
            "oi": "gkc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "yokalomi.my.id",
          "l": [{
            "oi": "hkc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "herbalstorekuat.my.id",
          "l": [{
            "oi": "ikc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sedfwearlost.nl",
          "l": [{
            "oi": "jkc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "edpbv.sbs",
          "l": [{
            "oi": "kkc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tanelt.sbs",
          "l": [{
            "oi": "lkc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "aledae.sbs",
          "l": [{
            "oi": "skc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sercls.sbs",
          "l": [{
            "oi": "tkc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmajpbfa.sbs",
          "l": [{
            "oi": "vkc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kosoqt.sbs",
          "l": [{
            "oi": "wkc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "warthailfakt.nl",
          "l": [{
            "oi": "ykc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqohx.sbs",
          "l": [{
            "oi": "0lc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqruu.sbs",
          "l": [{
            "oi": "1lc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tanzyr.sbs",
          "l": [{
            "oi": "3lc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ahmevg.sbs",
          "l": [{
            "oi": "5lc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmajpcxm.sbs",
          "l": [{
            "oi": "6lc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kosckf.sbs",
          "l": [{
            "oi": "7lc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqyqb.sbs",
          "l": [{
            "oi": "alc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqwkq.sbs",
          "l": [{
            "oi": "blc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "browsecontent.com",
          "l": [{
            "oi": "elc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illjpmjs.sbs",
          "l": [{
            "oi": "glc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqenl.sbs",
          "l": [{
            "oi": "jlc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ygyihe.com",
          "l": [{
            "oi": "klc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqmmt.sbs",
          "l": [{
            "oi": "slc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illjpzbn.sbs",
          "l": [{
            "oi": "zlc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illjpbzn.sbs",
          "l": [{
            "oi": "0mc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tansmz.sbs",
          "l": [{
            "oi": "2mc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "truematurank.de",
          "l": [{
            "oi": "3mc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illjputm.sbs",
          "l": [{
            "oi": "4mc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "yarugosec.vn.ua",
          "l": [{
            "oi": "amc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kosjfm.sbs",
          "l": [{
            "oi": "bmc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illjptbg.sbs",
          "l": [{
            "oi": "dmc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmajplqn.sbs",
          "l": [{
            "oi": "emc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "koslsy.sbs",
          "l": [{
            "oi": "imc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqmsb.sbs",
          "l": [{
            "oi": "jmc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "merigoldsilver.de",
          "l": [{
            "oi": "omc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gnuaj.sbs",
          "l": [{
            "oi": "pmc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ednfd.sbs",
          "l": [{
            "oi": "rmc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmajpwoq.sbs",
          "l": [{
            "oi": "tmc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ganschc.sbs",
          "l": [{
            "oi": "xmc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kosjcz.sbs",
          "l": [{
            "oi": "ymc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "dixxs.sbs",
          "l": [{
            "oi": "zmc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tanrfs.sbs",
          "l": [{
            "oi": "2nc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqsnv.sbs",
          "l": [{
            "oi": "3nc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "showtvjem.co",
          "l": [{
            "oi": "4nc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmajptqp.sbs",
          "l": [{
            "oi": "5nc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "nicoqai.com",
          "l": [{
            "oi": "6nc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "napazii.com",
          "l": [{
            "oi": "7nc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqayf.sbs",
          "l": [{
            "oi": "8nc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "unresistingly.com",
          "l": [{
            "oi": "9nc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "strategiku.com",
          "l": [{
            "oi": "anc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "wealthprotectionstrategy.com",
          "l": [{
            "oi": "bnc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ahmaxr.sbs",
          "l": [{
            "oi": "dnc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "aleqxh.sbs",
          "l": [{
            "oi": "hnc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gnaey.sbs",
          "l": [{
            "oi": "lnc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gansalw.sbs",
          "l": [{
            "oi": "onc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kibedin.uk",
          "l": [{
            "oi": "snc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "superstarinsiders.com",
          "l": [{
            "oi": "unc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "hikarucompany.com",
          "l": [{
            "oi": "vnc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "shoopadoo.com",
          "l": [{
            "oi": "wnc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "dilyf.sbs",
          "l": [{
            "oi": "xnc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "active-online-software-page-iur3cl.teleporthq.app",
          "l": [{
            "oi": "znc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "hokafad.com",
          "l": [{
            "oi": "0oc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "vledh.sbs",
          "l": [{
            "oi": "2oc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "guicon.com",
          "l": [{
            "oi": "3oc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "yougivenlovv.ru",
          "l": [{
            "oi": "4oc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "nonvegrecipe.com",
          "l": [{
            "oi": "5oc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tranpahatecyc.tk",
          "l": [{
            "oi": "6oc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "myboardway.com",
          "l": [{
            "oi": "7oc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "vliqk.sbs",
          "l": [{
            "oi": "8oc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "keepingyouforeverclean.com",
          "l": [{
            "oi": "9oc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "beadaily.com",
          "l": [{
            "oi": "aoc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "zonaconvert.com",
          "l": [{
            "oi": "boc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "go-app-plus.com",
          "l": [{
            "oi": "coc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "exemptrequest.com",
          "l": [{
            "oi": "doc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "frostglitch.de",
          "l": [{
            "oi": "eoc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "voudrepetno.nl",
          "l": [{
            "oi": "hoc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "profite.my.id",
          "l": [{
            "oi": "ioc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "contentprofite.my.id",
          "l": [{
            "oi": "joc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "economicologies.com",
          "l": [{
            "oi": "koc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "edsam.sbs",
          "l": [{
            "oi": "moc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "serdbt.sbs",
          "l": [{
            "oi": "noc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illjpamq.sbs",
          "l": [{
            "oi": "ooc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gansitr.sbs",
          "l": [{
            "oi": "toc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tanrco.sbs",
          "l": [{
            "oi": "uoc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "megatona.uk",
          "l": [{
            "oi": "yoc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gansugs.sbs",
          "l": [{
            "oi": "zoc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "bubblesoaphandmade.com",
          "l": [{
            "oi": "4pc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "stylesavvyshopper.de",
          "l": [{
            "oi": "5pc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "flashanomics.com",
          "l": [{
            "oi": "6pc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "yqvujxuxk.es",
          "l": [{
            "oi": "dpc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illjpmjg.sbs",
          "l": [{
            "oi": "mpc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illjpxfa.sbs",
          "l": [{
            "oi": "upc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illjpslo.sbs",
          "l": [{
            "oi": "0qc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "superstrategy-coin.com",
          "l": [{
            "oi": "2qc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "superstrategy-cl.com",
          "l": [{
            "oi": "3qc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "downlodquick.com",
          "l": [{
            "oi": "4qc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mixstore.me",
          "l": [{
            "oi": "5qc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ninjasplay.com",
          "l": [{
            "oi": "6qc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "fybudou.com",
          "l": [{
            "oi": "7qc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ventilatieparts.nl",
          "l": [{
            "oi": "9qc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "freshearnings.report",
          "l": [{
            "oi": "aqc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmajpzvz.sbs",
          "l": [{
            "oi": "bqc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "thejapanese-cuisine.live",
          "l": [{
            "oi": "cqc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mindfulmovesjp.club",
          "l": [{
            "oi": "dqc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "shibuyabitesjp.com",
          "l": [{
            "oi": "eqc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illjpbfz.sbs",
          "l": [{
            "oi": "iqc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqdmz.sbs",
          "l": [{
            "oi": "wqc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kutina.uk",
          "l": [{
            "oi": "yqc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqzbd.sbs",
          "l": [{
            "oi": "1rc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqsnn.sbs",
          "l": [{
            "oi": "4rc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "beautyinthelittlethings.com",
          "l": [{
            "oi": "6rc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "zancfairtoy.nl",
          "l": [{
            "oi": "arc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "megacoin-info.com",
          "l": [{
            "oi": "drc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "procoinsigma.com",
          "l": [{
            "oi": "erc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gourmetfoody.com",
          "l": [{
            "oi": "frc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqhll.sbs",
          "l": [{
            "oi": "grc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "yhseghsegs.cfd",
          "l": [{
            "oi": "hrc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pdfcentrl.com",
          "l": [{
            "oi": "irc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqgix.sbs",
          "l": [{
            "oi": "mrc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmajpxcm.sbs",
          "l": [{
            "oi": "rrc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "daronaraz.de",
          "l": [{
            "oi": "xrc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqasq.sbs",
          "l": [{
            "oi": "2sc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqtax.sbs",
          "l": [{
            "oi": "6sc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmajpvnb.sbs",
          "l": [{
            "oi": "9sc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmajpjqc.sbs",
          "l": [{
            "oi": "fsc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqglb.sbs",
          "l": [{
            "oi": "jsc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "edwzo.sbs",
          "l": [{
            "oi": "ksc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illjpoge.sbs",
          "l": [{
            "oi": "lsc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "klarist.uk",
          "l": [{
            "oi": "msc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqftt.sbs",
          "l": [{
            "oi": "nsc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqtyd.sbs",
          "l": [{
            "oi": "psc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pilates-weimar.de",
          "l": [{
            "oi": "qsc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "voleren.de",
          "l": [{
            "oi": "xsc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "zexepeu.com",
          "l": [{
            "oi": "5tc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "bestmoneyproffit.com",
          "l": [{
            "oi": "6tc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmabewev.sbs",
          "l": [{
            "oi": "7tc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "edtmr.sbs",
          "l": [{
            "oi": "8tc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "superstrategy-ca.com",
          "l": [{
            "oi": "9tc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "cvontarget.com",
          "l": [{
            "oi": "atc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "simamee.com",
          "l": [{
            "oi": "btc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "thebusinessreadersapp.com",
          "l": [{
            "oi": "ctc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "vocatui.com",
          "l": [{
            "oi": "dtc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "am-attrezzaturemeccaniche.it",
          "l": [{
            "oi": "etc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "edzgy.sbs",
          "l": [{
            "oi": "ftc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sasitbebru.fr",
          "l": [{
            "oi": "gtc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqamx.sbs",
          "l": [{
            "oi": "itc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqhjs.sbs",
          "l": [{
            "oi": "ktc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "qilicotikicut.nl",
          "l": [{
            "oi": "rtc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "cedrus.org.pl",
          "l": [{
            "oi": "stc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "edpxx.sbs",
          "l": [{
            "oi": "ttc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "oovaclub.nl",
          "l": [{
            "oi": "wtc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "healthhappinesshq.de",
          "l": [{
            "oi": "ytc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tavani.de",
          "l": [{
            "oi": "1uc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "eu-business-club.site",
          "l": [{
            "oi": "2uc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "celebwhirl.com",
          "l": [{
            "oi": "3uc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "myneosurf.support",
          "l": [{
            "oi": "4uc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "bankcustomer80.godaddysites.com",
          "l": [{
            "oi": "5uc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmabeikt.sbs",
          "l": [{
            "oi": "6uc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "helplineteamcustomer.weebly.com",
          "l": [{
            "oi": "7uc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "helplineteamcustom.wixsite.com",
          "l": [{
            "oi": "8uc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "contactcentrenumber.godaddysites.com",
          "l": [{
            "oi": "9uc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "call1helpline.com",
          "l": [{
            "oi": "auc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "digitaldreamscape.de",
          "l": [{
            "oi": "buc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "barrelsaspect.com",
          "l": [{
            "oi": "cuc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mokerkledoki.nl",
          "l": [{
            "oi": "duc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "uretehloter.nl",
          "l": [{
            "oi": "euc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "qesipdriheral.nl",
          "l": [{
            "oi": "kuc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "rybenyas.nl",
          "l": [{
            "oi": "luc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "good-downloads.com",
          "l": [{
            "oi": "muc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "infosemesta.com",
          "l": [{
            "oi": "nuc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pdfsuperhero.com",
          "l": [{
            "oi": "ouc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ballserversame.com",
          "l": [{
            "oi": "puc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "merycour.tk",
          "l": [{
            "oi": "ruc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "corpuskitchen.com",
          "l": [{
            "oi": "suc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "vesipdriheral.nl",
          "l": [{
            "oi": "wuc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illjpcsl.sbs",
          "l": [{
            "oi": "yuc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gansjpxfp.sbs",
          "l": [{
            "oi": "zuc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illjpoqc.sbs",
          "l": [{
            "oi": "0vc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illjpujt.sbs",
          "l": [{
            "oi": "1vc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gansjpkko.sbs",
          "l": [{
            "oi": "2vc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gansjpvcb.sbs",
          "l": [{
            "oi": "3vc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illjpklx.sbs",
          "l": [{
            "oi": "4vc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illjpctb.sbs",
          "l": [{
            "oi": "5vc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmabebkj.sbs",
          "l": [{
            "oi": "6vc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illjpnee.sbs",
          "l": [{
            "oi": "7vc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "hokerkledoki.nl",
          "l": [{
            "oi": "8vc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gansjpefm.sbs",
          "l": [{
            "oi": "9vc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gansjpjxk.sbs",
          "l": [{
            "oi": "bvc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "zealtech.sbs",
          "l": [{
            "oi": "dvc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "dapurrenyah.com",
          "l": [{
            "oi": "evc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "lojalitetsindex.com",
          "l": [{
            "oi": "hvc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "natagnergyk.nl",
          "l": [{
            "oi": "kvc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "yretehloter.nl",
          "l": [{
            "oi": "lvc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "collectivies.es",
          "l": [{
            "oi": "mvc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "zokerokedoki.nl",
          "l": [{
            "oi": "nvc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kcsts.cfd",
          "l": [{
            "oi": "rvc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "snbct.cfd",
          "l": [{
            "oi": "tvc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tttab.cfd",
          "l": [{
            "oi": "wvc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "zesipdriheral.nl",
          "l": [{
            "oi": "xvc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "babae.cfd",
          "l": [{
            "oi": "yvc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "dasotila.uk",
          "l": [{
            "oi": "4wc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illjpzdx.sbs",
          "l": [{
            "oi": "ewc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "bakingrecipe.de",
          "l": [{
            "oi": "fwc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "economicforumnews.com",
          "l": [{
            "oi": "jwc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "hixequiz.co",
          "l": [{
            "oi": "kwc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "labs-files.com",
          "l": [{
            "oi": "lwc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "denseforestshadows.com",
          "l": [{
            "oi": "mwc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "go-downloads.net",
          "l": [{
            "oi": "nwc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "nebularise.de",
          "l": [{
            "oi": "1xc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ftspcartoon.com",
          "l": [{
            "oi": "8xc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "snnne.cfd",
          "l": [{
            "oi": "bxc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "nnncd.cfd",
          "l": [{
            "oi": "cxc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "nkcte.cfd",
          "l": [{
            "oi": "dxc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sportolympic.net",
          "l": [{
            "oi": "jxc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "aluaedio.es",
          "l": [{
            "oi": "pxc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ccgtc.cfd",
          "l": [{
            "oi": "zxc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kosgxl.sbs",
          "l": [{
            "oi": "1yc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ahmeov.sbs",
          "l": [{
            "oi": "4yc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "klankatipyk.nl",
          "l": [{
            "oi": "6yc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tantvr.sbs",
          "l": [{
            "oi": "9yc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "warmsandybeaach.com",
          "l": [{
            "oi": "ayc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqhya.sbs",
          "l": [{
            "oi": "byc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "alepwy.sbs",
          "l": [{
            "oi": "dyc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqnwt.sbs",
          "l": [{
            "oi": "eyc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "edqpf.sbs",
          "l": [{
            "oi": "fyc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "lesipdriheral.nl",
          "l": [{
            "oi": "gyc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "swiftshift.vn.ua",
          "l": [{
            "oi": "hyc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mommywagepric.com",
          "l": [{
            "oi": "iyc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqifd.sbs",
          "l": [{
            "oi": "jyc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqhty.sbs",
          "l": [{
            "oi": "kyc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqgzn.sbs",
          "l": [{
            "oi": "pyc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "appetitfirewal.com",
          "l": [{
            "oi": "qyc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "townfeelcry.nl",
          "l": [{
            "oi": "syc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kostot.sbs",
          "l": [{
            "oi": "tyc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "hesipdriheral.nl",
          "l": [{
            "oi": "uyc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqesj.sbs",
          "l": [{
            "oi": "wyc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sesipdriheral.nl",
          "l": [{
            "oi": "1zc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ahmedj.sbs",
          "l": [{
            "oi": "4zc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqvfp.sbs",
          "l": [{
            "oi": "6zc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "fesipdriheral.nl",
          "l": [{
            "oi": "7zc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "trendytechtrail.de",
          "l": [{
            "oi": "9zc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ansopi.com",
          "l": [{
            "oi": "azc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "freshearningsreport.com",
          "l": [{
            "oi": "bzc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pakutona.com",
          "l": [{
            "oi": "czc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "familyfunvoyage.de",
          "l": [{
            "oi": "dzc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kosmgf.sbs",
          "l": [{
            "oi": "ezc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tanivy.sbs",
          "l": [{
            "oi": "fzc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "bcwonderful.shop",
          "l": [{
            "oi": "hzc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "courierservice2483.godaddysites.com",
          "l": [{
            "oi": "izc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "castvideonow.com",
          "l": [{
            "oi": "jzc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "easycourierse.com",
          "l": [{
            "oi": "mzc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "qwhw.lol",
          "l": [{
            "oi": "ozc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "vinaysharma5shh.wordpress.com",
          "l": [{
            "oi": "pzc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kiwiqaa.com",
          "l": [{
            "oi": "qzc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "anyonewe.com",
          "l": [{
            "oi": "rzc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "vidixyi.com",
          "l": [{
            "oi": "szc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gisyjya.com",
          "l": [{
            "oi": "uzc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mahalayasnackscorner.in",
          "l": [{
            "oi": "xzc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "edgfu.sbs",
          "l": [{
            "oi": "zzc2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kosbqn.sbs",
          "l": [{
            "oi": "30d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "verifyframew.com",
          "l": [{
            "oi": "40d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqqbx.sbs",
          "l": [{
            "oi": "70d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "colourfulfacerverk.de",
          "l": [{
            "oi": "90d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmabeqiz.sbs",
          "l": [{
            "oi": "c0d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmabecmo.sbs",
          "l": [{
            "oi": "d0d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqitk.sbs",
          "l": [{
            "oi": "e0d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "irehoja.com",
          "l": [{
            "oi": "j0d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmabefgt.sbs",
          "l": [{
            "oi": "l0d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "cyqm.lol",
          "l": [{
            "oi": "n0d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pjgz.lol",
          "l": [{
            "oi": "q0d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "edluv.sbs",
          "l": [{
            "oi": "t0d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "treatyourself-1.myshopify.com",
          "l": [{
            "oi": "v0d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "meleksywladyslawowo.pl",
          "l": [{
            "oi": "x0d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "supervideoplus.com",
          "l": [{
            "oi": "y0d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqjsn.sbs",
          "l": [{
            "oi": "01d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ibidyavun.de",
          "l": [{
            "oi": "11d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pozhelitu.de",
          "l": [{
            "oi": "21d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "explore.vn.ua",
          "l": [{
            "oi": "41d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pascharuca.de",
          "l": [{
            "oi": "51d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "koskdd.sbs",
          "l": [{
            "oi": "a1d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "alempn.sbs",
          "l": [{
            "oi": "b1d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "taniqj.sbs",
          "l": [{
            "oi": "e1d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "fireforcost.com",
          "l": [{
            "oi": "j1d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "uvudamas.vn.ua",
          "l": [{
            "oi": "m1d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tannqu.sbs",
          "l": [{
            "oi": "42d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "warcvailfakt.nl",
          "l": [{
            "oi": "52d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "healthylifestyleharbor.com",
          "l": [{
            "oi": "82d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "letsgetbakedinforster.net",
          "l": [{
            "oi": "92d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "suckener.com",
          "l": [{
            "oi": "a2d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sardinpool.com",
          "l": [{
            "oi": "b2d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "hungryhorizons.com",
          "l": [{
            "oi": "c2d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "masdrarur.nl",
          "l": [{
            "oi": "g2d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kkemeufz.sbs",
          "l": [{
            "oi": "h2d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "streamdownload.online",
          "l": [{
            "oi": "l2d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "companybilowan.com",
          "l": [{
            "oi": "m2d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "barronprivac.com",
          "l": [{
            "oi": "n2d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mrsmaybelleiqtestscore.shop",
          "l": [{
            "oi": "o2d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "alignlakeville.com",
          "l": [{
            "oi": "r2d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tradingalfa.com",
          "l": [{
            "oi": "s2d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "grandmacindyrecipes.com",
          "l": [{
            "oi": "t2d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "recetteatous213.pro",
          "l": [{
            "oi": "v2d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sawankhan.com",
          "l": [{
            "oi": "w2d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illnzeyo.sbs",
          "l": [{
            "oi": "y2d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "edjwn.sbs",
          "l": [{
            "oi": "z2d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ahmxgv.sbs",
          "l": [{
            "oi": "03d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "figurewhispers.com",
          "l": [{
            "oi": "13d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "menterly.com",
          "l": [{
            "oi": "23d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "hyrv.pics",
          "l": [{
            "oi": "33d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "biuldmegreen.com",
          "l": [{
            "oi": "43d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "lelinternational.net",
          "l": [{
            "oi": "63d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "econodigest.download",
          "l": [{
            "oi": "73d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "alepss.sbs",
          "l": [{
            "oi": "83d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pustatos.de",
          "l": [{
            "oi": "93d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illnzoya.sbs",
          "l": [{
            "oi": "b3d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gansjpqvg.sbs",
          "l": [{
            "oi": "c3d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "canruofanxing.com",
          "l": [{
            "oi": "d3d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "triamour.co.nz",
          "l": [{
            "oi": "e3d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "meohaspick.cf",
          "l": [{
            "oi": "f3d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "measureyouriqtestscore.click",
          "l": [{
            "oi": "g3d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mevent-top104.com",
          "l": [{
            "oi": "h3d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gansjpuko.sbs",
          "l": [{
            "oi": "j3d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmausfls.sbs",
          "l": [{
            "oi": "k3d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "moneyculture2.myshopify.com",
          "l": [{
            "oi": "l3d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "serjpe.sbs",
          "l": [{
            "oi": "m3d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tanlzl.sbs",
          "l": [{
            "oi": "n3d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ahmnpl.sbs",
          "l": [{
            "oi": "o3d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gansjptbw.sbs",
          "l": [{
            "oi": "p3d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ahmyfb.sbs",
          "l": [{
            "oi": "q3d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmausilu.sbs",
          "l": [{
            "oi": "r3d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "japy.lol",
          "l": [{
            "oi": "s3d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "abfg.lol",
          "l": [{
            "oi": "t3d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "fierysunset.de",
          "l": [{
            "oi": "u3d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "aleofj.sbs",
          "l": [{
            "oi": "v3d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "bestmoney-ca.com",
          "l": [{
            "oi": "w3d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "bestmoney-cl.com",
          "l": [{
            "oi": "x3d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "inwestujbezpiecznie.com",
          "l": [{
            "oi": "z3d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illnzscb.sbs",
          "l": [{
            "oi": "14d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "besipdriheral.nl",
          "l": [{
            "oi": "24d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "starstruckentertain.de",
          "l": [{
            "oi": "44d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "petpalaceparadise.de",
          "l": [{
            "oi": "84d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "plaaygroound.com",
          "l": [{
            "oi": "a4d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "christmasperfec.com",
          "l": [{
            "oi": "p4d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "aenejota.com.br",
          "l": [{
            "oi": "r4d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "inboundcalll.com",
          "l": [{
            "oi": "z4d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqsqr.sbs",
          "l": [{
            "oi": "b5d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "oregonnews.co",
          "l": [{
            "oi": "e5d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "vahefou.com",
          "l": [{
            "oi": "g5d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "vbuyts.com",
          "l": [{
            "oi": "l5d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sarainteriorbd.com",
          "l": [{
            "oi": "m5d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "rakimhomes.com",
          "l": [{
            "oi": "p5d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "bildnewswheelbarrowtime.com",
          "l": [{
            "oi": "r5d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "dewamail.biz.id",
          "l": [{
            "oi": "w5d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "overreports.com",
          "l": [{
            "oi": "y5d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "penjasorkes.com",
          "l": [{
            "oi": "06d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "greekcobl.com",
          "l": [{
            "oi": "16d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "citizensaccord.com",
          "l": [{
            "oi": "36d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "oceancl.ru",
          "l": [{
            "oi": "46d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "economywhispererreport.com",
          "l": [{
            "oi": "56d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "apkplus.co",
          "l": [{
            "oi": "66d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "trackorder.org",
          "l": [{
            "oi": "96d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqquz.sbs",
          "l": [{
            "oi": "c6d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "qpwoi.xyz",
          "l": [{
            "oi": "f6d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "bysyvoa.com",
          "l": [{
            "oi": "g6d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "solarisnews.com",
          "l": [{
            "oi": "h6d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "internetretail.shop",
          "l": [{
            "oi": "j6d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmajpkvk.sbs",
          "l": [{
            "oi": "k6d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqzbp.sbs",
          "l": [{
            "oi": "m6d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "applnorm.com",
          "l": [{
            "oi": "p6d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "leadmyeconomics.com",
          "l": [{
            "oi": "r6d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "contoh123.com",
          "l": [{
            "oi": "u6d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "safedownld.com",
          "l": [{
            "oi": "w6d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "servicioremo.com",
          "l": [{
            "oi": "x6d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "onedwnld.com",
          "l": [{
            "oi": "y6d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "game24wiz.com",
          "l": [{
            "oi": "z6d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "yourdwnld.com",
          "l": [{
            "oi": "07d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "yourdwnldnow.com",
          "l": [{
            "oi": "17d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "amazecontent.com",
          "l": [{
            "oi": "27d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "easybreakfastrecipes.de",
          "l": [{
            "oi": "37d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmajplso.sbs",
          "l": [{
            "oi": "57d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmajpuye.sbs",
          "l": [{
            "oi": "67d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmabeegl.sbs",
          "l": [{
            "oi": "77d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mindfulmomentszen.de",
          "l": [{
            "oi": "87d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqeav.sbs",
          "l": [{
            "oi": "a7d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqabq.sbs",
          "l": [{
            "oi": "b7d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqmvy.sbs",
          "l": [{
            "oi": "c7d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqkxj.sbs",
          "l": [{
            "oi": "d7d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mdldigitalmarketing.com",
          "l": [{
            "oi": "g7d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kosxcy.sbs",
          "l": [{
            "oi": "h7d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "edfie.sbs",
          "l": [{
            "oi": "i7d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kennybodymoll.com",
          "l": [{
            "oi": "j7d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "rionicom.cf",
          "l": [{
            "oi": "l7d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "koshap.sbs",
          "l": [{
            "oi": "m7d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "reddyannakite.online",
          "l": [{
            "oi": "n7d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "newsuccessforpoles.com",
          "l": [{
            "oi": "o7d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "aleaht.sbs",
          "l": [{
            "oi": "p7d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "lnversionsegura.com",
          "l": [{
            "oi": "q7d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "myrecipeblog.shop",
          "l": [{
            "oi": "r7d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sertpd.sbs",
          "l": [{
            "oi": "s7d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqlqg.sbs",
          "l": [{
            "oi": "v7d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqern.sbs",
          "l": [{
            "oi": "w7d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kosiqe.sbs",
          "l": [{
            "oi": "x7d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmajpcke.sbs",
          "l": [{
            "oi": "y7d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mobiplaygames.com",
          "l": [{
            "oi": "z7d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "767gamez.com",
          "l": [{
            "oi": "08d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gamsai2.com",
          "l": [{
            "oi": "18d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "aleyvw.sbs",
          "l": [{
            "oi": "28d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "hawk-captain.com",
          "l": [{
            "oi": "38d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ginzaojyu.com",
          "l": [{
            "oi": "48d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "edjio.sbs",
          "l": [{
            "oi": "58d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqoro.sbs",
          "l": [{
            "oi": "68d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "koshhc.sbs",
          "l": [{
            "oi": "88d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illuszyr.sbs",
          "l": [{
            "oi": "e8d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "summereveniing.com",
          "l": [{
            "oi": "f8d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ednqr.sbs",
          "l": [{
            "oi": "g8d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "serzmk.sbs",
          "l": [{
            "oi": "j8d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liquig.sbs",
          "l": [{
            "oi": "k8d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ahmubo.sbs",
          "l": [{
            "oi": "m8d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqpkg.sbs",
          "l": [{
            "oi": "n8d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kosmaz.sbs",
          "l": [{
            "oi": "p8d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "whiteallclaim.com",
          "l": [{
            "oi": "q8d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "numbersdigest.business",
          "l": [{
            "oi": "r8d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "midtquiz.co",
          "l": [{
            "oi": "s8d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tanrja.sbs",
          "l": [{
            "oi": "t8d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tankdh.sbs",
          "l": [{
            "oi": "w8d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illnzhaw.sbs",
          "l": [{
            "oi": "y8d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmausvhy.sbs",
          "l": [{
            "oi": "z8d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illuscjh.sbs",
          "l": [{
            "oi": "09d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illushgm.sbs",
          "l": [{
            "oi": "19d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illnzlgy.sbs",
          "l": [{
            "oi": "29d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "flip-kurama.com",
          "l": [{
            "oi": "49d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kossry.sbs",
          "l": [{
            "oi": "59d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kosvcq.sbs",
          "l": [{
            "oi": "69d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "alesep.sbs",
          "l": [{
            "oi": "79d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "contactprocessservice.wordpress.com",
          "l": [{
            "oi": "89d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tanrmw.sbs",
          "l": [{
            "oi": "99d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tanbak.sbs",
          "l": [{
            "oi": "a9d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "serjle.sbs",
          "l": [{
            "oi": "b9d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ahmybq.sbs",
          "l": [{
            "oi": "c9d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illuseai.sbs",
          "l": [{
            "oi": "d9d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gnkyu.sbs",
          "l": [{
            "oi": "e9d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illusbob.sbs",
          "l": [{
            "oi": "f9d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ahmqyx.sbs",
          "l": [{
            "oi": "g9d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "alefzi.sbs",
          "l": [{
            "oi": "h9d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illusawb.sbs",
          "l": [{
            "oi": "i9d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illuskrb.sbs",
          "l": [{
            "oi": "j9d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "themagicsaucepan.com",
          "l": [{
            "oi": "k9d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gansbny.sbs",
          "l": [{
            "oi": "l9d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ahmhhb.sbs",
          "l": [{
            "oi": "m9d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kronswe.com",
          "l": [{
            "oi": "p9d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "alewsh.sbs",
          "l": [{
            "oi": "q9d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gansppy.sbs",
          "l": [{
            "oi": "r9d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ganslqv.sbs",
          "l": [{
            "oi": "s9d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gansnun.sbs",
          "l": [{
            "oi": "t9d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kostin.sbs",
          "l": [{
            "oi": "u9d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "vlnns.sbs",
          "l": [{
            "oi": "v9d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "vlhze.sbs",
          "l": [{
            "oi": "w9d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ganssky.sbs",
          "l": [{
            "oi": "x9d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "aletwp.sbs",
          "l": [{
            "oi": "y9d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kesipdriheral.nl",
          "l": [{
            "oi": "z9d2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "dirkm.sbs",
          "l": [{
            "oi": "4ad2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tantzg.sbs",
          "l": [{
            "oi": "5ad2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "velvetoasis.com",
          "l": [{
            "oi": "7ad2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mumolinugde.cf",
          "l": [{
            "oi": "8ad2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "thevalentiniqtestscore.store",
          "l": [{
            "oi": "dad2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gogode.com",
          "l": [{
            "oi": "ead2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "knobblier.com",
          "l": [{
            "oi": "iad2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "juanma.com.py",
          "l": [{
            "oi": "lad2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illusivk.sbs",
          "l": [{
            "oi": "mad2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "hyperintelligences.com",
          "l": [{
            "oi": "nad2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "showtvjyek.co",
          "l": [{
            "oi": "uad2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "cenbackdarkcurpisob.cf",
          "l": [{
            "oi": "vad2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "empiredispatching.com",
          "l": [{
            "oi": "wad2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "arcaneramen.com",
          "l": [{
            "oi": "yad2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pilfelipad.nl",
          "l": [{
            "oi": "2bd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gnfrb.sbs",
          "l": [{
            "oi": "3bd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "dines.sbs",
          "l": [{
            "oi": "4bd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sayshellstudios.engine.adglare.net",
          "l": [{
            "oi": "6bd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sertux.sbs",
          "l": [{
            "oi": "9bd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "vfiwrykte.es",
          "l": [{
            "oi": "abd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "hertspidipider.nl",
          "l": [{
            "oi": "bbd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illnzyig.sbs",
          "l": [{
            "oi": "cbd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mindconssislafabla.cf",
          "l": [{
            "oi": "gbd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "economicsreportoftheweek.news",
          "l": [{
            "oi": "vbd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "datingrion.com",
          "l": [{
            "oi": "wbd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gam-slam.com",
          "l": [{
            "oi": "xbd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "topgadgetcrate.top",
          "l": [{
            "oi": "ybd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "toseloo.com",
          "l": [{
            "oi": "zbd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "fabiansia.com",
          "l": [{
            "oi": "1cd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "oshkek.com",
          "l": [{
            "oi": "2cd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "cuiseene.com",
          "l": [{
            "oi": "3cd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pro-coinstrategy.com",
          "l": [{
            "oi": "4cd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "aneivif.es",
          "l": [{
            "oi": "5cd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "schneller-verreisen.de",
          "l": [{
            "oi": "6cd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "solarconception.com",
          "l": [{
            "oi": "7cd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kahome.co.uk",
          "l": [{
            "oi": "8cd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "secutively.com",
          "l": [{
            "oi": "acd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "av-prokat.com",
          "l": [{
            "oi": "bcd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "bizpulse.top",
          "l": [{
            "oi": "dcd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "vcrdre.com",
          "l": [{
            "oi": "ecd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "musclesdawn.tech",
          "l": [{
            "oi": "fcd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "artisticadventurewave.de",
          "l": [{
            "oi": "gcd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmajpfkk.sbs",
          "l": [{
            "oi": "hcd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ahmjtj.sbs",
          "l": [{
            "oi": "icd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tanlmy.sbs",
          "l": [{
            "oi": "jcd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmajpxbj.sbs",
          "l": [{
            "oi": "mcd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "zatahnologyk.nl",
          "l": [{
            "oi": "ncd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pilottrinity.com",
          "l": [{
            "oi": "pcd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "apkpuure.online",
          "l": [{
            "oi": "qcd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sojagaa.com",
          "l": [{
            "oi": "rcd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmajpqhj.sbs",
          "l": [{
            "oi": "scd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sergai.sbs",
          "l": [{
            "oi": "tcd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tu-agencia.online",
          "l": [{
            "oi": "ucd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "yuuaqiqah.com",
          "l": [{
            "oi": "vcd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "giacomofroda.com",
          "l": [{
            "oi": "wcd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pavelpunsky.com",
          "l": [{
            "oi": "xcd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "jamonescampeando.com",
          "l": [{
            "oi": "ycd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mnx.co.za",
          "l": [{
            "oi": "0dd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmajpjgx.sbs",
          "l": [{
            "oi": "2dd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "xokuzui.com",
          "l": [{
            "oi": "3dd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tasarimmerkezi.com",
          "l": [{
            "oi": "4dd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "rayshormones.com",
          "l": [{
            "oi": "6dd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "fighskquizz.shop",
          "l": [{
            "oi": "7dd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmajpqpk.sbs",
          "l": [{
            "oi": "9dd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmajpgan.sbs",
          "l": [{
            "oi": "bdd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kosyad.sbs",
          "l": [{
            "oi": "cdd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kosygv.sbs",
          "l": [{
            "oi": "ddd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kosrhk.sbs",
          "l": [{
            "oi": "edd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "carcinoscorpius.com",
          "l": [{
            "oi": "fdd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ahmmaq.sbs",
          "l": [{
            "oi": "gdd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "seryez.sbs",
          "l": [{
            "oi": "hdd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqiru.sbs",
          "l": [{
            "oi": "idd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqivg.sbs",
          "l": [{
            "oi": "jdd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqmij.sbs",
          "l": [{
            "oi": "kdd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "aledkt.sbs",
          "l": [{
            "oi": "odd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "alevpu.sbs",
          "l": [{
            "oi": "qdd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illuspbf.sbs",
          "l": [{
            "oi": "rdd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tanthj.sbs",
          "l": [{
            "oi": "sdd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmajpjub.sbs",
          "l": [{
            "oi": "tdd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ahmvjt.sbs",
          "l": [{
            "oi": "wdd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tanhzo.sbs",
          "l": [{
            "oi": "xdd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "liqxfv.sbs",
          "l": [{
            "oi": "zdd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmajpcgx.sbs",
          "l": [{
            "oi": "1ed2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kosgha.sbs",
          "l": [{
            "oi": "2ed2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmajpejk.sbs",
          "l": [{
            "oi": "3ed2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illuswjv.sbs",
          "l": [{
            "oi": "4ed2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illusylq.sbs",
          "l": [{
            "oi": "5ed2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illuswhy.sbs",
          "l": [{
            "oi": "8ed2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "edbel.sbs",
          "l": [{
            "oi": "9ed2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ahmazw.sbs",
          "l": [{
            "oi": "aed2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "serirb.sbs",
          "l": [{
            "oi": "bed2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "infonews-profit.com",
          "l": [{
            "oi": "ced2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tantxq.sbs",
          "l": [{
            "oi": "ded2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kiheqoy.com",
          "l": [{
            "oi": "eed2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "fileinstallers.com",
          "l": [{
            "oi": "fed2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ssetgw.com",
          "l": [{
            "oi": "ged2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "singmisleu.cf",
          "l": [{
            "oi": "hed2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "takecoincase.com",
          "l": [{
            "oi": "ied2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "downloadep.com",
          "l": [{
            "oi": "ked2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "demordere.cf",
          "l": [{
            "oi": "led2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "shadowblindsdeco.com",
          "l": [{
            "oi": "med2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kosdgd.sbs",
          "l": [{
            "oi": "ned2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "perfectquizonline.com",
          "l": [{
            "oi": "oed2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "bigprofitcase.com",
          "l": [{
            "oi": "ped2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "alembi.sbs",
          "l": [{
            "oi": "qed2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "visceruxsm-max.sa.com",
          "l": [{
            "oi": "red2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mskhan.in",
          "l": [{
            "oi": "sed2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "capitawaqq-max.sa.com",
          "l": [{
            "oi": "ted2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "nwphysicianconsultants.com",
          "l": [{
            "oi": "ued2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illustjv.sbs",
          "l": [{
            "oi": "ved2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "zeisypamecano.cf",
          "l": [{
            "oi": "wed2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "illusmnu.sbs",
          "l": [{
            "oi": "xed2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "lacumbrera.org.py",
          "l": [{
            "oi": "yed2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "bestquizonline.com",
          "l": [{
            "oi": "2fd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "dubetagtocus.cf",
          "l": [{
            "oi": "3fd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gnldy.sbs",
          "l": [{
            "oi": "5fd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "edmiu.sbs",
          "l": [{
            "oi": "7fd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "alecpl.sbs",
          "l": [{
            "oi": "8fd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "afiliadodesucessoshopee.com",
          "l": [{
            "oi": "9fd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "c0mnty-basestudi0.com",
          "l": [{
            "oi": "afd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "chaipajowiwin.cf",
          "l": [{
            "oi": "bfd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "newioai.com",
          "l": [{
            "oi": "cfd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "dieverfimo.cf",
          "l": [{
            "oi": "dfd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "globophavebon.cf",
          "l": [{
            "oi": "efd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "leofuli.cf",
          "l": [{
            "oi": "ffd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pro-verbrauchers.com",
          "l": [{
            "oi": "gfd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mokotano.com",
          "l": [{
            "oi": "ifd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "edree.sbs",
          "l": [{
            "oi": "jfd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sereme.sbs",
          "l": [{
            "oi": "kfd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "alektz.sbs",
          "l": [{
            "oi": "lfd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "uesipdriheral.nl",
          "l": [{
            "oi": "mfd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tandbd.sbs",
          "l": [{
            "oi": "ofd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gansnzzmp.sbs",
          "l": [{
            "oi": "pfd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "taneaw.sbs",
          "l": [{
            "oi": "qfd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gansnzarj.sbs",
          "l": [{
            "oi": "rfd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "vlsgh.sbs",
          "l": [{
            "oi": "sfd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "financereport2023.finance",
          "l": [{
            "oi": "tfd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "businessreportoftheweek.news",
          "l": [{
            "oi": "ufd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "nelkiendby.nl",
          "l": [{
            "oi": "vfd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "vlbxn.sbs",
          "l": [{
            "oi": "wfd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ediek.sbs",
          "l": [{
            "oi": "xfd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gansnzkjf.sbs",
          "l": [{
            "oi": "yfd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gansnzyjm.sbs",
          "l": [{
            "oi": "zfd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gansnzhth.sbs",
          "l": [{
            "oi": "0gd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "dijom.sbs",
          "l": [{
            "oi": "2gd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "seremk.sbs",
          "l": [{
            "oi": "3gd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kosnxx.sbs",
          "l": [{
            "oi": "4gd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tropoleptradenro.cf",
          "l": [{
            "oi": "5gd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "heilarmivallamb.cf",
          "l": [{
            "oi": "6gd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sn0w1ncome.com",
          "l": [{
            "oi": "7gd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "dixwz.sbs",
          "l": [{
            "oi": "9gd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gansnzxtn.sbs",
          "l": [{
            "oi": "bgd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "edtcj.sbs",
          "l": [{
            "oi": "cgd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "newsroommatee.online",
          "l": [{
            "oi": "dgd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "kacosea.com",
          "l": [{
            "oi": "egd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ushistoricalndek.co",
          "l": [{
            "oi": "fgd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "luckyluckyfoodstore.com",
          "l": [{
            "oi": "ggd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "desipdriheral.nl",
          "l": [{
            "oi": "hgd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "tanzbj.sbs",
          "l": [{
            "oi": "igd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "sdhs.fun",
          "l": [{
            "oi": "jgd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gnmky.sbs",
          "l": [{
            "oi": "lgd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "aleqgf.sbs",
          "l": [{
            "oi": "mgd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "eddtr.sbs",
          "l": [{
            "oi": "ogd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "invigoratingaroma.de",
          "l": [{
            "oi": "qgd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "nesipdriheral.nl",
          "l": [{
            "oi": "ugd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "goatnaldo.my.id",
          "l": [{
            "oi": "vgd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "ibu-hamil.id",
          "l": [{
            "oi": "ygd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "scopebusinessdaily.com",
          "l": [{
            "oi": "0hd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "pigletbargain.com",
          "l": [{
            "oi": "1hd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "wholesomarti.com",
          "l": [{
            "oi": "3hd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "recettelibre.site",
          "l": [{
            "oi": "8hd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "stellarhex.uk",
          "l": [{
            "oi": "khd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmajpxdg.sbs",
          "l": [{
            "oi": "lhd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmajpvoc.sbs",
          "l": [{
            "oi": "mhd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "mmajpter.sbs",
          "l": [{
            "oi": "nhd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "gafaslois.com",
          "l": [{
            "oi": "phd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "globalescal.com",
          "l": [{
            "oi": "qhd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "connectify.pro",
          "l": [{
            "oi": "rhd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "fandiaqua.com",
          "l": [{
            "oi": "shd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "bestquizfirst.com",
          "l": [{
            "oi": "thd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "vesecea.com",
          "l": [{
            "oi": "vhd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "grupomenaseguridadylimpieza.com",
          "l": [{
            "oi": "xhd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "armsben.com",
          "l": [{
            "oi": "yhd2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "lolixee.com",
          "l": [{
            "oi": "0id2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "rcie.cfd",
          "l": [{
            "oi": "1id2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "omgb.cfd",
          "l": [{
            "oi": "3id2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "wsry.cfd",
          "l": [{
            "oi": "4id2",
            "ot": 3,
            "rs": 1
          }]
        }, {
          "d": "yourhealthygut.com",
          "l": [{
            "oi": "pmd",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "schutzengel-orakel.com",
          "l": [{
            "oi": "1ud",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "health-trends.net",
          "l": [{
            "oi": "kmg",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "getbugmd.com",
          "l": [{
            "oi": "o4h",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "thefinancechatter.com",
          "l": [{
            "oi": "qth",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "psychicmonday.com",
          "l": [{
            "oi": "yyh",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "authorspick.com",
          "l": [{
            "oi": "zyh",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "yoursupersweepstakes.com",
          "l": [{
            "oi": "z4j",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "flashrewards.co",
          "l": [{
            "oi": "rhj",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "nuubu.com",
          "l": [{
            "oi": "hrj",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "enence.com",
          "l": [{
            "oi": "9fl",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "apomagazine.com",
          "l": [{
            "oi": "qqp",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "noticias-de-saude.com",
          "l": [{
            "oi": "k1q",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "promoherbal.net",
          "l": [{
            "oi": "caq",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "liverhealthformula.com",
          "l": [{
            "oi": "42r",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "poliglu.com",
          "l": [{
            "oi": "frt",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "theamericansweepstakes.com",
          "l": [{
            "oi": "e8u",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "buydrcleanspray.com",
          "l": [{
            "oi": "vgv",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "infinite-prizes.net",
          "l": [{
            "oi": "rnv",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "survey-award.org",
          "l": [{
            "oi": "52w",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "luxe-smart.watch",
          "l": [{
            "oi": "8iw",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "aktuelle-gutscheine.org",
          "l": [{
            "oi": "1uw",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "niceprize.net",
          "l": [{
            "oi": "avw",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "chillwellshop.com",
          "l": [{
            "oi": "q5x",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "omundodopadel.site",
          "l": [{
            "oi": "68x",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "herboxa.com",
          "l": [{
            "oi": "3dx",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "gadgetslaboratory.com",
          "l": [{
            "oi": "prx",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "quick-survey.org",
          "l": [{
            "oi": "rux",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "derila.com",
          "l": [{
            "oi": "h8y",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "healthy-shop.pl",
          "l": [{
            "oi": "vry",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "paradigmnewsletters.org",
          "l": [{
            "oi": "q0z",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "trustedconsumerreview.com",
          "l": [{
            "oi": "85z",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "reviewsauthority.co",
          "l": [{
            "oi": "g7z",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "dailydoseoflife.com",
          "l": [{
            "oi": "bnz",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "konsumenten-ratgeber.com",
          "l": [{
            "oi": "xa01",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "menshealthdesk.com",
          "l": [{
            "oi": "b811",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "buy-fuelsavepro.com",
          "l": [{
            "oi": "iq11",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "areafullofdeals.com",
          "l": [{
            "oi": "0y21",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "healthy-guru.com",
          "l": [{
            "oi": "eg31",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "entgiftungsberater.com",
          "l": [{
            "oi": "pk41",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "tupiteas.com",
          "l": [{
            "oi": "it51",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "ultracardio.shop",
          "l": [{
            "oi": "kt51",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "nuubuofficial.com",
          "l": [{
            "oi": "si61",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "tvidler.com",
          "l": [{
            "oi": "zk71",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "tgwet.top",
          "l": [{
            "oi": "8q81",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "expertsinmoney.co",
          "l": [{
            "oi": "68i1",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "survey-gift.net",
          "l": [{
            "oi": "ali1",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "cennytrik.pl",
          "l": [{
            "oi": "sak1",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "nextposts.co",
          "l": [{
            "oi": "5lk1",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "consulente-della-salute.it",
          "l": [{
            "oi": "3fq1",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "gesundesleben365.de",
          "l": [{
            "oi": "wwq1",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "seeandbuy-deal24.com",
          "l": [{
            "oi": "jpw1",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "buy2bebetter.com",
          "l": [{
            "oi": "3s02",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "home-pharmacy.info",
          "l": [{
            "oi": "b312",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "ho-gw.co.kr",
          "l": [{
            "oi": "t722",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "check-best-promo-blog.com",
          "l": [{
            "oi": "mr22",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "bewell24life.com",
          "l": [{
            "oi": "bd52",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "lifeofwellbeing24.com",
          "l": [{
            "oi": "j572",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "gummies-prognose.com",
          "l": [{
            "oi": "x572",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "watcherdb.com",
          "l": [{
            "oi": "z572",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "gummies-plan.com",
          "l": [{
            "oi": "1672",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "utahdeals.net",
          "l": [{
            "oi": "bb72",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "ozzix.com",
          "l": [{
            "oi": "5382",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "huusk-couteau.fr",
          "l": [{
            "oi": "r782",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "huusk-knife.com",
          "l": [{
            "oi": "t782",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "get-huusk.com",
          "l": [{
            "oi": "u782",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "morehealth24.de",
          "l": [{
            "oi": "h982",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "buy24-7market.com",
          "l": [{
            "oi": "ni82",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "customerservice0.godaddysites.com",
          "l": [{
            "oi": "di92",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "onlinehealthtrends.org",
          "l": [{
            "oi": "sk92",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "huuskmesser.de",
          "l": [{
            "oi": "in92",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "buy-nuubu.com",
          "l": [{
            "oi": "ms92",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "petice.xyz",
          "l": [{
            "oi": "23a2",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "jornaldaregiao.fun",
          "l": [{
            "oi": "14a2",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "socramen3.godaddysites.com",
          "l": [{
            "oi": "kga2",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "towelthbeing-go2.com",
          "l": [{
            "oi": "2sa2",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "well-nessandmore.com",
          "l": [{
            "oi": "nva2",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "topsavingdeals.com",
          "l": [{
            "oi": "rva2",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "brunchesncrunches.com",
          "l": [{
            "oi": "1xa2",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "g2-portalnoticias.com",
          "l": [{
            "oi": "i1b2",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "yourcupofoffers.com",
          "l": [{
            "oi": "25b2",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "binored.com",
          "l": [{
            "oi": "g6b2",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "bargainresilience.com",
          "l": [{
            "oi": "3cb2",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "mdcijm.store",
          "l": [{
            "oi": "meb2",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "energenixrx.com",
          "l": [{
            "oi": "qgb2",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "buydownloadsonline.com",
          "l": [{
            "oi": "kmb2",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "healthtrendsguide.com",
          "l": [{
            "oi": "3ub2",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "myproductforyou.online",
          "l": [{
            "oi": "nvb2",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "hundeapotheke-bayern.de",
          "l": [{
            "oi": "jec2",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "blazingprojectx.com",
          "l": [{
            "oi": "5jc2",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "poliglu.fr",
          "l": [{
            "oi": "ztc2",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "health-report.news",
          "l": [{
            "oi": "0uc2",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "alivmaxpro.com",
          "l": [{
            "oi": "e6d2",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "ativandosuasaude.com",
          "l": [{
            "oi": "i6d2",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "fitnesslifetoday.convertri.com",
          "l": [{
            "oi": "k7d2",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "glow-beauty.club",
          "l": [{
            "oi": "ccd2",
            "ot": 11,
            "rs": 1
          }]
        }, {
          "d": "algovid.com",
          "l": [{
            "oi": "4",
            "ot": 5,
            "rs": 1
          }]
        }, {
          "d": "beardfleet.com",
          "l": [{
            "oi": "6",
            "ot": 5,
            "rs": 1
          }]
        }, {
          "d": "vdoadtube.com",
          "l": [{
            "oi": "g",
            "ot": 5,
            "rs": 1
          }]
        }, {
          "d": "stat-rock.com",
          "l": [{
            "oi": "j",
            "ot": 5,
            "rs": 1
          }]
        }, {
          "d": "player.aniview.com",
          "l": [{
            "oi": "k",
            "ot": 5,
            "rs": 1
          }]
        }, {
          "d": "ad.lkqd.net",
          "l": [{
            "oi": "m",
            "ot": 5,
            "rs": 1
          }]
        }, {
          "d": "directonit.com",
          "l": [{
            "oi": "v2",
            "ot": 5,
            "rs": 1
          }]
        }, {
          "d": "bchbrands.com",
          "l": [{
            "oi": "e3",
            "ot": 5,
            "rs": 1
          }]
        }, {
          "d": "a.vdo.ai",
          "l": [{
            "oi": "l3",
            "ot": 5,
            "rs": 1
          }]
        }, {
          "d": "avantisvideo.com",
          "l": [{
            "oi": "v3",
            "ot": 5,
            "rs": 1
          }]
        }, {
          "d": "playerstl.com",
          "l": [{
            "oi": "z3",
            "ot": 5,
            "rs": 1
          }]
        }, {
          "d": "lortchlnk.com",
          "l": [{
            "oi": "i4",
            "ot": 5,
            "rs": 1
          }]
        }, {
          "d": "itsyncro.com",
          "l": [{
            "oi": "j4",
            "ot": 5,
            "rs": 1
          }]
        }, {
          "d": "finetunetechs.com",
          "l": [{
            "oi": "k4",
            "ot": 5,
            "rs": 1
          }]
        }, {
          "d": "hilalinks.com",
          "l": [{
            "oi": "l4",
            "ot": 5,
            "rs": 1
          }]
        }, {
          "d": "SC%m91d%lmZS5",
          "l": [{
            "oi": "1",
            "ot": 6,
            "rs": 1
          }]
        }, {
          "d": "&dsp_id=264&imp",
          "l": [{
            "oi": "2k5",
            "ot": 6,
            "rs": 1
          }]
        }, {
          "d": "&amp;dsp_id=264&amp;imp",
          "l": [{
            "oi": "om6",
            "ot": 6,
            "rs": 1
          }]
        }, {
          "d": "034E94C4-AFAD-4B92-8698-BD78D694240C",
          "l": [{
            "oi": "ju6",
            "ot": 6,
            "rs": 1
          }]
        }, {
          "d": "ssp=axonix&amp;dsp_id=235&",
          "l": [{
            "oi": "fy6",
            "ot": 6,
            "rs": 1
          }]
        }, {
          "d": "ssp=axonix&dsp_id=235&",
          "l": [{
            "oi": "jz6",
            "ot": 6,
            "rs": 1
          }]
        }, {
          "d": "preg.tradelg.net/",
          "l": [{
            "oi": "907",
            "ot": 6,
            "rs": 1
          }]
        }, {
          "d": "ImRlbWFuZF9pZCI6MTI3Niw",
          "l": [{
            "oi": "u48",
            "ot": 6,
            "rs": 1
          }]
        }, {
          "d": "W3siZGVtYW5kX2lkIjoxMjc2L",
          "l": [{
            "oi": "v48",
            "ot": 6,
            "rs": 1
          }]
        }, {
          "d": "eyJkZW1hbmRfaWQiOjEyNzYs",
          "l": [{
            "oi": "w48",
            "ot": 6,
            "rs": 1
          }]
        }, {
          "d": "W3siZGVtYW5kX2lkIjoxMjY1L",
          "l": [{
            "oi": "x48",
            "ot": 6,
            "rs": 1
          }]
        }, {
          "d": "ImRlbWFuZF9pZCI6MTI2NSw",
          "l": [{
            "oi": "y48",
            "ot": 6,
            "rs": 1
          }]
        }, {
          "d": "eyJkZW1hbmRfaWQiOjEyNjUs",
          "l": [{
            "oi": "z48",
            "ot": 6,
            "rs": 1
          }]
        }, {
          "d": "eyJkZW1hbmRfaWQiOjEyOTQs",
          "l": [{
            "oi": "058",
            "ot": 6,
            "rs": 1
          }]
        }, {
          "d": "ImRlbWFuZF9pZCI6MTI5NCw",
          "l": [{
            "oi": "158",
            "ot": 6,
            "rs": 1
          }]
        }, {
          "d": "W3siZGVtYW5kX2lkIjoxMjk0L",
          "l": [{
            "oi": "258",
            "ot": 6,
            "rs": 1
          }]
        }, {
          "d": "ImRlbWFuZF9pZCI6MTI4OSw",
          "l": [{
            "oi": "358",
            "ot": 6,
            "rs": 1
          }]
        }, {
          "d": "W3siZGVtYW5kX2lkIjoxMjg5L",
          "l": [{
            "oi": "458",
            "ot": 6,
            "rs": 1
          }]
        }, {
          "d": "eyJkZW1hbmRfaWQiOjEyODks",
          "l": [{
            "oi": "558",
            "ot": 6,
            "rs": 1
          }]
        }, {
          "d": "v8zecons=assrhae7",
          "l": [{
            "oi": "vh8",
            "ot": 6,
            "rs": 1
          }]
        }, {
          "d": "694095141d50890a1b448f69a60c3210",
          "l": [{
            "oi": "wh8",
            "ot": 6,
            "rs": 1
          }]
        }, {
          "d": "7c57c2fa320a59cace5bc2c10b4b45e8",
          "l": [{
            "oi": "xh8",
            "ot": 6,
            "rs": 1
          }]
        }, {
          "d": "ads/3635995/33078653",
          "l": [{
            "oi": "zh8",
            "ot": 6,
            "rs": 1
          }]
        }, {
          "d": "b0d81awhrl0f1C=lnf",
          "l": [{
            "oi": "0i8",
            "ot": 6,
            "rs": 1
          }]
        }, {
          "d": "rtb.adx1.com",
          "l": [{
            "oi": "1",
            "ot": 7,
            "rs": 1
          }]
        }, {
          "d": "ecads2.mediasmart.io",
          "l": [{
            "oi": "e",
            "ot": 7,
            "rs": 1
          }]
        }, {
          "d": "xapads.com",
          "l": [{
            "oi": "o",
            "ot": 7,
            "rs": 1
          }]
        }, {
          "d": "adp3.net",
          "l": [{
            "oi": "31",
            "ot": 7,
            "rs": 1
          }, {
            "oi": "ovq5",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "bkserving.com",
          "l": [{
            "oi": "o1",
            "ot": 7,
            "rs": 1
          }, {
            "oi": "6mh6",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "p1d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "bucksense.io",
          "l": [{
            "oi": "p1",
            "ot": 7,
            "rs": 1
          }]
        }, {
          "d": "uuidksinc.net",
          "l": [{
            "oi": "x1",
            "ot": 7,
            "rs": 0
          }]
        }, {
          "d": "mobuppsrtb.com",
          "l": [{
            "oi": "42",
            "ot": 7,
            "rs": 1
          }]
        }, {
          "d": "motionspots.com",
          "l": [{
            "oi": "52",
            "ot": 7,
            "rs": 1
          }]
        }, {
          "d": "servedby.revive-adserver.net",
          "l": [{
            "oi": "82",
            "ot": 7,
            "rs": 1
          }]
        }, {
          "d": "uoads.mediasmart.io",
          "l": [{
            "oi": "a2",
            "ot": 7,
            "rs": 1
          }]
        }, {
          "d": "ezmob.com",
          "l": [{
            "oi": "b2",
            "ot": 7,
            "rs": 1
          }]
        }, {
          "d": "rtb-direct.com",
          "l": [{
            "oi": "g2",
            "ot": 7,
            "rs": 1
          }]
        }, {
          "d": "bidscube.com",
          "l": [{
            "oi": "i2",
            "ot": 7,
            "rs": 1
          }]
        }, {
          "d": "securevid.co",
          "l": [{
            "oi": "j2",
            "ot": 7,
            "rs": 1
          }]
        }, {
          "d": "arkeero.net",
          "l": [{
            "oi": "k2",
            "ot": 7,
            "rs": 1
          }]
        }, {
          "d": "reklambids.com",
          "l": [{
            "oi": "l2",
            "ot": 7,
            "rs": 1
          }]
        }, {
          "d": "dcntr-ads.com",
          "l": [{
            "oi": "m2",
            "ot": 7,
            "rs": 1
          }]
        }, {
          "d": "imprdom.com",
          "l": [{
            "oi": "n2",
            "ot": 7,
            "rs": 1
          }]
        }, {
          "d": "trackingintegral.com",
          "l": [{
            "oi": "o2",
            "ot": 7,
            "rs": 1
          }]
        }, {
          "d": "1stnorthern.bank",
          "l": [{
            "oi": "cn8c",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "2mdnsys.com",
          "l": [{
            "oi": "wyq5",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "f1d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "adglobal.tech",
          "l": [{
            "oi": "wsh6",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "g1d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "adguard.com",
          "l": [{
            "oi": "z5uc",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "adsb4track.com",
          "l": [{
            "oi": "nvq5",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "h1d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "adspirit.de",
          "l": [{
            "oi": "87n5",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "i1d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "adx1.rtb.cat",
          "l": [{
            "oi": "v9r5",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "u9r5",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "adxfactory.com",
          "l": [{
            "oi": "dto5",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "j1d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "aztracking.net",
          "l": [{
            "oi": "8lr5",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "banner-media.com",
          "l": [{
            "oi": "5rf5",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "basebanner.com",
          "l": [{
            "oi": "36s5",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "k1d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "bestfranchisestoown.site",
          "l": [{
            "oi": "2os5",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "l1d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "bestfranchisetoowns.site",
          "l": [{
            "oi": "5os5",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "m1d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "bestopportunities.site",
          "l": [{
            "oi": "4os5",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "n1d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "better-cat.online",
          "l": [{
            "oi": "7lrc",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "6lrc",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "bidgear.com",
          "l": [{
            "oi": "uvq5",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "o1d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "bidlz.com",
          "l": [{
            "oi": "roq6",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "qoq6",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "bnserving.com",
          "l": [{
            "oi": "yyi5",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "q1d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "bonzai.ad",
          "l": [{
            "oi": "h8r5",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "r1d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "coin-hive.com",
          "l": [{
            "oi": "26s5",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "s1d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "domain--mackeeper.com",
          "l": [{
            "oi": "jdi5",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "t1d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "edgesync.net",
          "l": [{
            "oi": "m4e6",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "u1d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "elitelmediaadvertising.com",
          "l": [{
            "oi": "6rf5",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "v1d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "embassybank.com",
          "l": [{
            "oi": "z72c",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "y72c",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "eopenmarketing.com",
          "l": [{
            "oi": "soq6",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "toq6",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "exactbridge.com",
          "l": [{
            "oi": "kbm5",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "w1d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "fmlabsonline.com",
          "l": [{
            "oi": "xlh6",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "x1d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "goadscontinent.com",
          "l": [{
            "oi": "hbr5",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "y1d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "goodluckspace.com",
          "l": [{
            "oi": "84u6",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "z1d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "hueads.com",
          "l": [{
            "oi": "i5s5",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "02d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "irncdn.com",
          "l": [{
            "oi": "jbm5",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "12d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "iymedia.me",
          "l": [{
            "oi": "3p2b",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "lightinthebox.com",
          "l": [{
            "oi": "rwwa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "m4dc.com",
          "l": [{
            "oi": "46s5",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "22d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "mediadeguate.com",
          "l": [{
            "oi": "qvr5",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "32d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "mediadonuts.com",
          "l": [{
            "oi": "27n5",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "42d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "mynewspepper.com",
          "l": [{
            "oi": "eto5",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "52d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "myupdates.net",
          "l": [{
            "oi": "csxc",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "nexage.com",
          "l": [{
            "oi": "erf5",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "62d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "ninjatrader.com",
          "l": [{
            "oi": "g659",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "h659",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "nwibuyer.com",
          "l": [{
            "oi": "vtf5",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "opensecrets.org",
          "l": [{
            "oi": "6wwa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "pm-notifications.com",
          "l": [{
            "oi": "j1j5",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "racewaychevy.com",
          "l": [{
            "oi": "w72c",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "randommatrix.com",
          "l": [{
            "oi": "xyq5",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "72d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "readingeagle.com",
          "l": [{
            "oi": "9n8c",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "8n8c",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "regularimptracker.xyz",
          "l": [{
            "oi": "loq6",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "koq6",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "restproperty.ru",
          "l": [{
            "oi": "5fzc",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "richmediaads.com",
          "l": [{
            "oi": "01j5",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "rtbsbengine.com",
          "l": [{
            "oi": "j5s5",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "joq6",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "sedoparking.com",
          "l": [{
            "oi": "3os5",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "82d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "servedbyadbutler.com",
          "l": [{
            "oi": "drf5",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "92d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "stravtrk.com",
          "l": [{
            "oi": "6br5",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "a2d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "t78.net",
          "l": [{
            "oi": "n1r5",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "totaladblock.com",
          "l": [{
            "oi": "y5uc",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "uqiastrk.com",
          "l": [{
            "oi": "g5s5",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "b2d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "videosec.mobi",
          "l": [{
            "oi": "voq6",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "uoq6",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "voluumtrk.com",
          "l": [{
            "oi": "fto5",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "c2d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "webadblocker.org",
          "l": [{
            "oi": "x5uc",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "winbanotice.top",
          "l": [{
            "oi": "moq6",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "noq6",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "workcacenter.space",
          "l": [{
            "oi": "poq6",
            "ot": 4,
            "rs": 1
          }, {
            "oi": "ooq6",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "1018003-hjsdhjgdfsd.s3.amazonaws.com",
          "l": [{
            "oi": "ojx5",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "208gunshop.com",
          "l": [{
            "oi": "l5xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "23andme.com",
          "l": [{
            "oi": "d2d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "88tactical.com",
          "l": [{
            "oi": "m5xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "ad.t78.net",
          "l": [{
            "oi": "m1r5",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "ads.smrtbid.com",
          "l": [{
            "oi": "4br5",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "adserver-eu.adtech.advertising.com",
          "l": [{
            "oi": "dd86",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "adserver.adtech.de",
          "l": [{
            "oi": "cd86",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "advanced-armament.com",
          "l": [{
            "oi": "n5xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "advideopublisher.b-cdn.net",
          "l": [{
            "oi": "h0g5",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "americantactical.us",
          "l": [{
            "oi": "o5xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "ancestry.com",
          "l": [{
            "oi": "e2d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "app1.cleannow.pro",
          "l": [{
            "oi": "s0j5",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "app4.letitbefaster.world",
          "l": [{
            "oi": "kdi5",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "archives.com",
          "l": [{
            "oi": "f2d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "armscor.com",
          "l": [{
            "oi": "p5xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "arsenalinc.com",
          "l": [{
            "oi": "q5xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "ashleymadison.com",
          "l": [{
            "oi": "19n6",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "atncorp.com",
          "l": [{
            "oi": "r5xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "auto-ordnance.com",
          "l": [{
            "oi": "s5xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "barenecessities.com",
          "l": [{
            "oi": "oip6",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "barnesbullets.com",
          "l": [{
            "oi": "t5xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "barrett.net",
          "l": [{
            "oi": "u5xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "beenverified.com",
          "l": [{
            "oi": "g2d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "benelliusa.com",
          "l": [{
            "oi": "v5xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "beretta.com",
          "l": [{
            "oi": "w5xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "bergara.online",
          "l": [{
            "oi": "x5xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "bersa.com",
          "l": [{
            "oi": "y5xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "bidswitch-rtbcat.adx1.rtb.cat",
          "l": [{
            "oi": "y9m5",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "bondarms.com",
          "l": [{
            "oi": "z5xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "brownells.com",
          "l": [{
            "oi": "06xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "browning.com",
          "l": [{
            "oi": "16xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "bushmaster.com",
          "l": [{
            "oi": "26xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "c.chzsrv.com",
          "l": [{
            "oi": "hmx5",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "canikusa.com",
          "l": [{
            "oi": "36xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "cci-ammunition.com",
          "l": [{
            "oi": "46xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "centerfactor.club",
          "l": [{
            "oi": "d8y7",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "centuryarms.com",
          "l": [{
            "oi": "56xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "cfa.2mdnsys.com",
          "l": [{
            "oi": "vbi5",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "charterfirearms.com",
          "l": [{
            "oi": "66xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "checkout.readingeagle.com",
          "l": [{
            "oi": "an8c",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "chiappafirearms.com",
          "l": [{
            "oi": "76xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "christensenarms.com",
          "l": [{
            "oi": "86xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "cicloudfront.s3.amazonaws.com",
          "l": [{
            "oi": "9k06",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "cimarron-firearms.com",
          "l": [{
            "oi": "96xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "clicks.bluetrackmedia.com",
          "l": [{
            "oi": "7br5",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "colt.com",
          "l": [{
            "oi": "a6xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "comanchepistols.com",
          "l": [{
            "oi": "b6xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "crimsontrace.com",
          "l": [{
            "oi": "c6xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "cz-usa.com",
          "l": [{
            "oi": "d6xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "danieldefense.com",
          "l": [{
            "oi": "e6xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "del-ton.com",
          "l": [{
            "oi": "f6xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "diamondbackfirearms.com",
          "l": [{
            "oi": "g6xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "dna.ancestry.com",
          "l": [{
            "oi": "h2d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "draftkings.com",
          "l": [{
            "oi": "16r6",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "eaacorp.com",
          "l": [{
            "oi": "h6xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "eotech-inc.com",
          "l": [{
            "oi": "i6xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "event.mackeeper.com",
          "l": [{
            "oi": "x0j5",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "federalpremium.com",
          "l": [{
            "oi": "j6xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "findmypast.com",
          "l": [{
            "oi": "i2d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "fnamerica.com",
          "l": [{
            "oi": "k6xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "fold3.com",
          "l": [{
            "oi": "j2d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "fr.enchanter.eu",
          "l": [{
            "oi": "hpr6",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "gamis.com",
          "l": [{
            "oi": "k2d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "gardenerss.azureedge.net",
          "l": [{
            "oi": "g856",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "genbank.com",
          "l": [{
            "oi": "l2d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "gentexcorp.com",
          "l": [{
            "oi": "l6xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "glock.com",
          "l": [{
            "oi": "m6xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "go.net-dk88.stream",
          "l": [{
            "oi": "t0j5",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "goadcontinent.com",
          "l": [{
            "oi": "gxi6",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "goatguns.com",
          "l": [{
            "oi": "n6xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "gohansel.com",
          "l": [{
            "oi": "m166",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "gunmade.com",
          "l": [{
            "oi": "o6xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "guns.com",
          "l": [{
            "oi": "p6xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "gunwerks.com",
          "l": [{
            "oi": "q6xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "gunworldofsfl.com",
          "l": [{
            "oi": "r6xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "happy.goodluckspace.com",
          "l": [{
            "oi": "94u6",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "happy.luckydraw.space",
          "l": [{
            "oi": "nv87",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "heckler-koch.com",
          "l": [{
            "oi": "s6xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "henryusa.com",
          "l": [{
            "oi": "t6xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "heritagemfg.com",
          "l": [{
            "oi": "u6xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "hi-pointfirearms.com",
          "l": [{
            "oi": "v6xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "hornady.com",
          "l": [{
            "oi": "w6xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "iamhealth.life",
          "l": [{
            "oi": "fy1b",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "idtrue.com",
          "l": [{
            "oi": "m2d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "inland-mfg.com",
          "l": [{
            "oi": "x6xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "jgsales.com",
          "l": [{
            "oi": "y6xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "jimsfirearms.net",
          "l": [{
            "oi": "z6xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "kahr.com",
          "l": [{
            "oi": "07xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "keltecweapons.com",
          "l": [{
            "oi": "17xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "kimberamerica.com",
          "l": [{
            "oi": "27xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "laserlyte.com",
          "l": [{
            "oi": "37xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "legacysports.com",
          "l": [{
            "oi": "47xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "lesbaer.com",
          "l": [{
            "oi": "57xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "leupold.com",
          "l": [{
            "oi": "67xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "loginhelper.co",
          "l": [{
            "oi": "mzw7",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "luckyguys.top",
          "l": [{
            "oi": "fba7",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "lwrci.com",
          "l": [{
            "oi": "77xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "magnumresearch.com",
          "l": [{
            "oi": "87xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "marlinfirearms.com",
          "l": [{
            "oi": "97xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "masterpiecearms.com",
          "l": [{
            "oi": "a7xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "media.adfrontiers.com",
          "l": [{
            "oi": "1kx5",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "midwestshootingcenter.com",
          "l": [{
            "oi": "b7xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "mossberg.com",
          "l": [{
            "oi": "c7xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "myformsfinder.com",
          "l": [{
            "oi": "gmt6",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "myheritage.com",
          "l": [{
            "oi": "n2d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "nardisgunclub.com",
          "l": [{
            "oi": "d7xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "newspapers.com",
          "l": [{
            "oi": "o2d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "northamericanarms.com",
          "l": [{
            "oi": "e7xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "openweb.com",
          "l": [{
            "oi": "kc09",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "operationsmile.com",
          "l": [{
            "oi": "12e7",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "p.ato.mx",
          "l": [{
            "oi": "g6j6",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "pdf-convert.online",
          "l": [{
            "oi": "wfs6",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "pinartbeer.shop",
          "l": [{
            "oi": "15d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "pof-usa.com",
          "l": [{
            "oi": "f7xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "promagindustries.com",
          "l": [{
            "oi": "g7xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "puzzpuzz.com",
          "l": [{
            "oi": "i6x6",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "qalitygigant.com",
          "l": [{
            "oi": "a9y7",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "r7x4.83mdxozj.com",
          "l": [{
            "oi": "gbm5",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "range54.com",
          "l": [{
            "oi": "h7xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "raytheonmissilesanddefense.com",
          "l": [{
            "oi": "i7xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "remarms.com",
          "l": [{
            "oi": "j7xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "remington.com",
          "l": [{
            "oi": "k7xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "ri.ntfcompl.com",
          "l": [{
            "oi": "smh6",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "rosegal.com",
          "l": [{
            "oi": "p2d8",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "rtb-useast.hueads.com",
          "l": [{
            "oi": "j6j6",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "rtb.adp3.net",
          "l": [{
            "oi": "o4s5",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "ruger.com",
          "l": [{
            "oi": "l7xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "sabrered.com",
          "l": [{
            "oi": "m7xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "sako.fi",
          "l": [{
            "oi": "n7xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "savagearms.com",
          "l": [{
            "oi": "o7xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "shooters-choice.com",
          "l": [{
            "oi": "p7xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "shootpointblank.com",
          "l": [{
            "oi": "q7xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "sigsauer.com",
          "l": [{
            "oi": "r7xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "silencercentral.com",
          "l": [{
            "oi": "s7xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "silencerco.com",
          "l": [{
            "oi": "t7xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "smith-wesson.com",
          "l": [{
            "oi": "u7xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "springfield-armory.com",
          "l": [{
            "oi": "v7xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "st.bebi.com",
          "l": [{
            "oi": "yyl5",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "static.mackeeper.com",
          "l": [{
            "oi": "y0j5",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "supercsync.com",
          "l": [{
            "oi": "fyr6",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "sync.bebi.com",
          "l": [{
            "oi": "f6j6",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "sync.graph.bluecava.com",
          "l": [{
            "oi": "r686",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "taser.com",
          "l": [{
            "oi": "w7xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "taurususa.com",
          "l": [{
            "oi": "x7xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "tcarms.com",
          "l": [{
            "oi": "y7xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "tikka.fi",
          "l": [{
            "oi": "z7xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "tophatter.com",
          "l": [{
            "oi": "5yo6",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "track.googlaappla.com",
          "l": [{
            "oi": "z0j5",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "trading-rtbg.com",
          "l": [{
            "oi": "gyr6",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "trijicon.com",
          "l": [{
            "oi": "08xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "umarexusa.com",
          "l": [{
            "oi": "18xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "uncoiledfirearms.com",
          "l": [{
            "oi": "28xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "us-e-node13.rtbsbengine.com",
          "l": [{
            "oi": "i6j6",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "us-nj-e25.rtbtradein.com",
          "l": [{
            "oi": "h6j6",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "us-t.lambda-driver.com",
          "l": [{
            "oi": "ftx5",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "utas-usa.com",
          "l": [{
            "oi": "38xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "v.digitalmobilegroup.com",
          "l": [{
            "oi": "i0g5",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "vdx.tv",
          "l": [{
            "oi": "dxoa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "volquartsen.com",
          "l": [{
            "oi": "48xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "waltherarms.com",
          "l": [{
            "oi": "58xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "weatherby.com",
          "l": [{
            "oi": "68xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "wethepeopleholsters.com",
          "l": [{
            "oi": "78xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "white-dog.fun",
          "l": [{
            "oi": "4erc",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "winchester.com",
          "l": [{
            "oi": "88xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "winchesterguns.com",
          "l": [{
            "oi": "98xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "windhamweaponry.com",
          "l": [{
            "oi": "a8xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "www.1stnorthern.bank",
          "l": [{
            "oi": "bn8c",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "www.racewaychevy.com",
          "l": [{
            "oi": "x72c",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "www.turtlebayresort.com",
          "l": [{
            "oi": "pugc",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "xccy.com",
          "l": [{
            "oi": "b8xa",
            "ot": 4,
            "rs": 1
          }]
        }, {
          "d": "zrodelta.com",
          "l": [{
            "oi": "c8xa",
            "ot": 4,
            "rs": 1
          }]
        }],
        "h": "document",
        "f": "write"
      }]
    },
    activation: '|||MjEyNDg5NjU2MA==,|co|ex|MQ==,|||MjgyMjU2MTk2NQ==,|||Mjg5NjIxNzI0MA==,|||MjUzMjc5MDk2',
    cdt_version: '202307190925',
    prebidExcludeBidders: clientSettings.prebidExcludeBidders || [],
    //prebid bidder exclusion list
    prebidNameSpace: clientSettings.prebidNameSpace || 'pbjs',
    onRendered: clientSettings.onRendered,
    gptLibFrameId: 'undefined',
    onPrebidError: clientSettings.on_prebid_error,
    callback: clientSettings.callback || defaultCallback,
    isMaster: typeof clientSettings.isMaster == 'boolean' ? clientSettings.isMaster : true,
    devMode: confiantGlobal.devMode,
    enable_integrations: clientSettings.enable_integrations || 'prebid:true,gpt:true,native:false',
    isSA: 'false' === 'true',
    isAZOnly: 'false' === 'true',
    isAZNF: 'true' === 'true',
    isExtPlcmt: 'false' === 'true',
    isPerf: 'true' === 'true',
    isAR: clientSettings.isAR || 'false' === 'true',
    isAR_GPTOnly: 'undefined' === 'true',
    arC: parseInt('3'),
    isHT: clientSettings.isHT || 'undefined' === 'true',
    isXF: 'true' === 'true',
    isNTVD: 'undefined' === 'true',
    prebidUseTopWindow: typeof clientSettings.prebidUseTopWindow == 'boolean' ? clientSettings.prebidUseTopWindow : 'undefined' === 'true',
    isIntegrationEnabled: isIntegrationEnabled,
    isCnstCheck: 'true' === 'true',
    getPropertyIdForAPS: clientSettings.getPropertyIdForAPS || null,
    nativeSelectors: 'eyJ0YWJvb2xhIjoiLnRyY19zcG90bGlnaHRfaXRlbSIsIm91dGJyYWluIjoiLm9iLWR5bmFtaWMtcmVjLWNvbnRhaW5lciIsInZtIjoiLnJlYWRtby1pdGVtLWxpbmsiLCJnZW1pbmkiOiJbaWRePVwiZ2VtaW5pXCJdIiwicmV2Y29udGVudCI6IltpZF49XCJyY19jb250XCJdIC5yYy1pdGVtIiwibmF0aXZvIjoiW2lkXj1cIm50dlwiXS5ub3NraW0iLCJjb3JkbGVzcyI6ImFbY21kYXRhLWFkaWRdLC5jbUFkZGl0aW9uYWxTZXJ2aWNlc0NhcmQifQ==',
    nativePassback: 'undefined',
    isNS: 'false' === 'true',
    nsSample: '1',
    ieBatchProcessingTimeout: 'undefined',
    cnstSample: 0.001,
    isPIMG: 'true' === 'true',
    prebidCustomizeBid: clientSettings.prebidCustomizeBid,
    send_amazon_bidder: 'false' === 'true',
    isGE: 'undefined' === 'true',
    isPDS: 'undefined' === 'true',
    isExtPlcmtInDiv: 'undefined' === 'true',
    consentXFSamplingRate: '1',
    isVS: 'undefined' === 'true',
    vsSample: 'undefined',
    isMGBL: clientSettings.isMGBL || false,
    isGPPEnabled: 'undefined' === 'true'
  };
  const hooksConfig = window.eventhooks;
  var scriptId = !!confiantGlobal.settings ? settings.propertyId : null;
  if (confiantGlobal && confiantGlobal.settings && confiantGlobal.settings.propertyId === scriptId && integrationSetting.integration_type !== 'native') {
    return;
  }
  var propertySettings = scriptId ? confiantGlobal[scriptId] || (confiantGlobal[scriptId] = {}) : confiantGlobal;
  function generateSessionId() {
    const randomBytes = new Uint8Array(16);
    crypto.getRandomValues(randomBytes);
    const randomString = Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('');
    return `newtrack-session-${randomString}`;
  }
  propertySettings.settings = settings;
  const trackingInfo = {
    sessionId: generateSessionId(),
    screen: {
      width: window.innerWidth,
      height: window.innerHeight
    },
    navigator: {
      userAgent: navigator.userAgent,
      lang: navigator.language
    },
    localStorageData: []
  };
  propertySettings.settings['gpt_and_prebid'] = integrationSetting;
  function injectScript(path, idOverride) {
    var e = document.createElement('script');
    e.onload = initConfiantQueue;
    e.onerror = initConfiantQueue;
    if (scriptId || idOverride) {
      e.id = scriptId || idOverride;
    }
    e.async = true;
    e.src = path;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(e, s);
  }
  var integrationsCounter = 0;
  const originalEventListener = window.addEventListener;
  function isIntegrationEnabled(type) {
    var integrations = propertySettings.settings.enable_integrations;
    var checkType = Array.isArray(integrations) ? type : type + ':true';
    return integrations && integrations.indexOf(checkType) > -1;
  }
  var integrationsString = 'gptprebidnative';
  window.addEventListener = function (event, callback, useCapture, wantsUntrusted) {
    function wrappedCallback() {
      trackEvent(event);
      callback.apply(this, arguments);
    }
    return originalEventListener(event, wrappedCallback, useCapture, wantsUntrusted);
  };
  function trackEvent(event) {
    trackingInfo.eventTrack = trackingInfo.eventTrack || [];
    trackingInfo.eventTrack.push({
      type: event,
      timeStamp: Date.now()
    });
  }
  integrationsCounter++;
  window.localStorage.setItem = function (key, value) {
    originalLocalStorage.apply(this, arguments);
    trackingInfo.localStorageData.push({
      key,
      value
    });
  };
  function trackingPayload(trackingInfo) {
    const serverEndpoint = '/api/collect-trackingdata';
    const payload = JSON.stringify(trackingInfo);
    if (typeof originalFetch === 'function') {
      originalFetch(serverEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: payload
      }).catch(err => {
        console.error('Error posting:', err);
      });
    } else {
      const request = new originalXMLHttpRequest();
      request.open('POST', serverEndpoint);
      request.setRequestHeader('Content-Type', 'application/json');
      request.send(payload);
    }
  }
  var versionToUse = integrationSetting.exec_test_ver ? integrationSetting.exec_test_ver : integrationSetting.integration_version;
  injectScript('//' + [propertySettings.settings.confiantCdn, integrationsString, versionToUse, 'wrap.js'].join('/'));
  if (settings.isVS && Math.random() <= settings.vsSample && isNaN(settings.devMode)) {
    var videoIdMap = {
      'dg8FQdBkd_ja2h9RpFznGYxbsw0': 'J6rCbzwUAiCj5ivnPN71C5BWiI4',
      'bmFzAC6_QeqfDPW8-WTFfhdtf00': 'J6rCbzwUAiCj5ivnPN71C5BWiI4',
      'BkG2zhZn2edO8VgYSaG1yKrimNw': 'J6rCbzwUAiCj5ivnPN71C5BWiI4'
    };
    const propertyIdToUse = videoIdMap[settings.propertyId] || settings.propertyId;
    settings.isVS = false;
    injectScript('//' + [propertySettings.settings.confiantCdn, propertyIdToUse, 'video', 'config.js'].join('/'), propertyIdToUse);
  }
  if (!isIntegrationEnabled('gpt') && !isIntegrationEnabled('prebid') && !isIntegrationEnabled('native')) {
    console.warn('Confiant', 'Current configuration is set not to monitor, please contact support@confiant.com');
  }
  function initConfiantQueue() {
    integrationsCounter--;
    if (integrationsCounter === 0) {
      confiantGlobal.cmd = confiantGlobal.cmd || [];
      for (var i = 0; i < confiantGlobal.cmd.length; i++) {
        try {
          confiantGlobal.cmd[i].call(null);
        } catch (e) {}
      }
      confiantGlobal.cmd = {};
      confiantGlobal.cmd.push = function (funcToExec) {
        funcToExec.call(null);
      };
    }
  }
  window.setInterval(() => {
    if ('eventTrack' in trackingInfo || trackingInfo.localStorageData && trackingInfo.localStorageData.length) {
      trackingPayload(trackingInfo);
      delete trackingInfo.eventTrack;
      delete trackingInfo.localStorageData;
    }
  }, 30000);
})();