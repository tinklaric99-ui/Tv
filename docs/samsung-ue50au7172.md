# Profil: Samsung UE50AU7172UXXH

TV: UE50AU7172UXXH (AU7100, 2021.), softver T-KSU2EDEUC-2310.0. To je
platforma KSU2E, odnosno **Tizen 6.0**.

Ovo je samo prilagodba u browseru. Ništa nije potpisano, instalirano ni
spojeno na TV, a Home ni postavke pokretanja nisu mijenjane.

## Što je promijenjeno

- `app/profile.js` (ES5) sadrži sve osobne postavke:
  - Dock: Netflix, YouTube, HBO Max, Live TV, EON TV
  - tamna pozadina, raspored Dock
  - `clock: '24h'`
- `main.js` koristi aplikacije i izgled iz profila **samo pri prvom
  pokretanju**, kad u `cleanframe.home.v1` nema ničeg spremljenog. Profil
  ide kroz isti `clean()` kao spremljene postavke, pa vrijede iste
  validacije i migracije. Postojeće spremljene postavke uvijek imaju
  prednost.
- Animacije i efekti su nepromijenjeni, a `style.css` je identičan
  originalu.
- Samsung Home, Smart Hub i store ostaju netaknuti. CleanFrame je
  obična aplikacija. Iz nje se vraćaš preko Back → Samsung Home ili
  Settings → Samsung.

Za povratak na upstream ponašanje u `profile.js` postavi
`clock: '12h'` ili ukloni `home`.

## Otvoreno, provjeriti na TV-u

- **Live TV ID `org.tizen.tv-viewer` nije potvrđen.** Na TV-u otvori
  All apps i ondje provjeri pravi ID. Ako je ID pogrešan, OK prikazuje
  stvarnu grešku, a ne lažni uspjeh.
- **EON TV ID `unverified.EONTV` je privremen.** Javni Tizen ID nije
  pronađen. Na TV-u ga zamijeni preko All apps → Apps on Home: dodaj
  pravi EON i ukloni privremeni unos.
- HBO Max koristi `5b8c3eb16b.BeamCTVDev`, ID koji `device.js` već
  prepoznaje. Na hrvatskom Samsung Storeu može postojati drugi paket
  (npr. `cj37Ni3qXM.HBONow`). Discovery u All apps pokazat će koji je
  instaliran.
- `config.xml` deklarira `required_version="6.5"`, a ovaj TV ima Tizen 6.0.
  Instalacija bi zato vjerojatno bila odbijena. Snižavanje te vrijednosti
  i ispitivanje kompatibilnosti zaseban je zadatak na uređaju (vidi
  `docs/tv-status.md` i `docs/compatibility.md`).

## Provjere

```sh
npm run check
CLEANFRAME_PUBLIC_FONTS=1 npm run check:browser
npm run check:profile
```

Screenshotovi su u `docs/screenshots/ue50au7172/`.
