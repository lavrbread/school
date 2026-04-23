// lavr.SCHOOL — service worker (offline cache)
const CACHE = 'lavr-school-v11';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon.png',
  './img/xleb-bokatto.jpg',
  './img/rustik-na-arom-levene.jpg',
  './img/xleb-brie.jpg',
  './img/xleb-na-kefire-domashnij.jpg',
  './img/pampushki-ukrainskie.jpg',
  './img/xleb-borodinskij.jpg',
  './img/xleb-belorusskij.jpg',
  './img/chiabatta-maisovaya.jpg',
  './img/chiabatta-na-zakvaske.jpg',
  './img/chiabatta.jpg',
  './img/xleb-chiabatta-ekstra-temnaia.jpg',
  './img/lavash.jpg',
  './img/lepeshka-fokachcho.jpg',
  './img/baget.jpg',
  './img/tostovyj-xleb-amerikanskij.jpg',
  './img/xleb-tostovyj-bezdrozhzhevoj.jpg',
  './img/bulochka-piknik-aktiv.jpg',
  './img/xleb-kartofelnyj-s-lukom.jpg',
  './img/plyushka-moskovskaya.jpg',
  './img/sdoba-figurnaya-2.jpg',
  './img/kuglof-sladkij.jpg',
  './img/ulitka-s-zavarnym-kremom-i-izyumom.jpg',
  './img/kulich-pasxalnyj-nezhnyj.jpg',
  './img/panetonne.jpg',
  './img/xleb-prazhskij-zavarnoj.jpg',
  './img/xleb-pshenichnyj-kraft.jpg',
  './img/tostovyi-xleb-extra-temnyi.jpg',
  './img/xleb-pave.jpg',
  './img/xleb-pen-bier.jpg',
  './img/grechishnyj-xleb-s-lukom.jpg',
  './img/lukovyj-xleb.jpg',
  './img/xleb-toskano.jpg',
  './img/xleb-derevenskij.jpg',
  './img/xleb-solodovyj.jpg',
  './img/xleb-karelskij-ekstra.jpg',
  './img/xleb-stokgolmskij.jpg',
  './img/xleb-yarovoj-zavarnoj.jpg',
  './img/xleb-rozh.jpg',
  './img/chiabatta-bezoparnyj-sposob.jpg',
  './img/chiabatta-artizan.jpg',
  './img/chiabatta-yarovaya.jpg',
  './img/chiabata-rzhanaya.jpg',
  './img/chiabatta-s-polboj.jpg',
  './img/chiabatta-na-pulishe.jpg',
  './img/pita.jpg',
  './img/lavash-krem-ruayal-na-kefire.jpg',
  './img/tortilia.jpg',
  './img/bulochka-dlya-gamburgera.jpg',
  './img/briosh-pasado.jpg',
  './img/briosh-severnaya.jpg',
  './img/briosh-limonnaya.jpg',
  './img/romovaya-briosh.jpg',
  './img/bulochka-kresty.jpg',
  './img/rozhok-obsypnoj.jpg',
  './img/bretcel.jpg',
  './img/pastis-landej.jpg',
  './img/kokil.jpg',
  './img/pechene-sibirskoe.jpg',
  './img/rulet-s-makom.jpg',
  './img/slojka-datskaya.jpg',
  './img/slojka-sverdlovskaya.jpg',
  './img/slojka-drozhzhevaya.jpg',
  './img/kruassan-tradisionel.jpg',
  './img/kruassan-na-pulishe.jpg',
  './img/zernovoj-kruassan.jpg',
  './img/kruassan-extra-temnyi.jpg',
  './img/pen-shokolya-take-bake.jpg',
  './img/kulich-pasxalnyj-limonnyj.jpg',
  './img/kulich-pasxalnyj-pryanyj.jpg',
  './img/kulich-pasxalnyj.jpg',
  './img/rozhdestvenskij-shtollen.jpg',
  './img/shtollen-richmont.jpg',
  './img/keks-pandoro.jpg',
  './img/avstrijskij-rozhdestvenskij-kuglof.jpg',
  './img/xleb-darnickij-formovoj.jpg',
  './img/xleb-darnickij-podovyj.jpg',
  './img/xleb-darnickij-novyj.jpg',
  './img/xleb-zalivnoi-ekstra-temnyi-s-podsolnechnikom.jpg',
  './img/xleb-peno-leven-na-zakvaske.jpg',
  './img/xleb-peno-leven-na-zakvaske-len-i-morkov.jpg',
  './img/xleb-zavarnoj-s-polboj.jpg',
  './img/xleb-na-zakvaske-pen-leven-medovyj.jpg',
  './img/xleb-polbyanoj.jpg',
  './img/xleb-ovsyanyj-kraftovyj.jpg',
  './img/xleb-solodovyj-s-semechkoj-na-zakvaske.jpg',
  './img/xleb-alpijskij-na-zakvaske.jpg',
  './img/xleb-maisovyj-na-zakvaske.jpg',
  './img/xleb-panini.jpg',
  './img/xleb-tartin-provans.jpg',
  './img/khleb-s-tminom-i-yablokom.jpg',
  './img/khleb-borodinskii-s-yablokom.jpg',
  './img/xleb-rzhanoe-koltco.jpg',
  './img/xleb-remeslennyj-s-proroshhennym-zernom-2.jpg',
  './img/xleb-bogatyrskij.jpg',
  './img/xleb-multizernovoj.jpg',
  './img/xleb-s-syrom-tirolskij.jpg',
  './img/xleb-vulkan.jpg',
  './img/xleb-pen-pateron.jpg',
  './img/baton-gorchichnyj.jpg',
  './img/batonchik-grechishnyj.jpg',
  './img/batonchik-ruayal-provans.jpg',
  './img/xleb-tostovyj-multizernovoj.png',
  './img/tostovyj-xleb-na-zakvaske.jpg',
  './img/tostovyi-khleb-aktimiks-s-semenami.jpg',
  './img/baget-venskij.jpg',
  './img/baget-na-zakvaske-francuzskij.jpg',
  './img/baget-industrialnyj-s-proroshhennym-zernom.jpg',
  './img/lepeshka-skandinavskaya.jpg',
  './img/lavash-maisovyj.jpg',
  './img/fokachcho-s-paprikoi.jpg',
  './img/pletenka.jpg',
  './img/gash.jpg',
  './img/keks-pechyonoe-yabloko.jpg',
  './img/pirog-ruletiki-s-koricej.jpg',
  './img/rogalik-pechyonoe-yabloko.jpg',
  './img/sdoba-kuglof-sale.jpg',
  './img/sdoba-tvorozhnaya.jpg',
  './img/sdobnaya-bulochka-maritoccco.jpg',
  './img/tartin-yablochnyj.jpg',
  './img/baget-ovsyanyj.jpg',
  './img/francuzskij-baget.jpg',
  './img/krayushki-ovsyanye.jpg',
  './img/parizhskaya-briosh.jpg',
  './img/pirog-rozhdestvenskaya-zvezda.jpg',
  './img/xleb-pshenichnyj-na-opare.jpg',
  './img/xleb-peruanskij.jpg',
  './img/xleb-kupecheskij.jpg',
  './img/xleb-kampan.jpg',
  './img/xleb-kupecheskij-s-koriandrom.jpg',
  './img/xleb-pshenichnyj-zalivnoj.jpg',
  './img/bulochka-s-syrom.jpg',
  './img/baget-na-zavarnoj-paste.png',
  './img/bulochki-s-proroshhennym-zernom.jpg',
  './img/fokachcho-brekfast.jpg',
  './img/lepyoshka-smetannaya.jpg',
  './img/zavarnoj-formovoj-xleb-s-proroshhenym-zernom.jpg',
  './img/antarkticheskij-xleb.png',
  './img/kruassan-na-margarine.jpg',
  './img/kruassan-na-masle.jpg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).catch(() => caches.match('./index.html'))
    );
    return;
  }

  e.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        if (res.ok && url.origin === self.location.origin) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      }).catch(() => cached);
    })
  );
});
