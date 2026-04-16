---
sidebar_position: 5
---

# Bestanden downloaden

Voor je spel heb je afbeeldingen nodig: een achtergrond, een karakter, vijanden, muntjes. Deze afbeeldingen noemen we **assets**. We gebruiken een gratis asset-pack van internet.

## Wat ga je doen?

- Een asset-pack downloaden van itch.io
- Het zip-bestand uitpakken
- De bestanden in je Godot-projectmap plaatsen

## Stap 1: Download het asset-pack

- Open [pixelfrog-assets.itch.io/pixel-adventure-1](https://pixelfrog-assets.itch.io/pixel-adventure-1)
- Klik op de knop **Download Now**
- Je krijgt een scherm te zien waar je een bedrag kunt invullen. Dit pack is gratis — klik op **No thanks, just take me to the downloads**
- Klik op **Download** naast het bestand

Er wordt nu een `.zip`-bestand gedownload naar je `Downloads`-map.

## Stap 2: Uitpakken

- Ga naar je `Downloads`-map in de Verkenner
- Dubbelklik op het `.zip`-bestand
- Klik bovenaan op **Alles uitpakken**
- Kies een locatie en klik op **Uitpakken**

:::note
Op sommige computers (Windows 11) kun je bestanden direct uit de zip slepen zonder eerst uit te pakken. Dat werkt ook.
:::

Je hebt nu een map met daarin alle afbeeldingen uit het pack.

## Stap 3: Kopieer naar je projectmap

Godot kan alleen bestanden gebruiken die **in je projectmap** staan. Via de Godot-editor kun je die map snel openen:

1. Open je project in Godot
2. Klik met de **rechtermuisknop** op `res://` in het **FileSystem**-paneel (linksonder)
3. Kies **Open in File Manager** — de Verkenner opent nu je projectmap

4. Open in een tweede Verkenner-venster de map die je zojuist hebt uitgepakt
5. Sleep de mappen of bestanden die je nodig hebt naar je projectmap

:::tip
Je hoeft niet alles te kopiëren. Voor de achtergrond heb je alleen de map `Background` nodig. Later kun je altijd meer bestanden toevoegen.
:::

Ga terug naar Godot — de bestanden verschijnen automatisch in het FileSystem-paneel.

:::note[Chromebook / online editor]
Gebruik je de [online editor](https://editor.godotengine.org/)? Dan kun je geen bestanden via de Verkenner kopiëren. Sleep in plaats daarvan de uitgepakte bestanden rechtstreeks naar het **FileSystem**-paneel in de editor.
:::

## Er gaat iets mis

<details>
<summary>Ik zie de bestanden niet in Godot</summary>

**Oorzaak:** De bestanden staan niet in je projectmap, maar ergens anders op je computer. Godot toont alleen bestanden die in de map staan waar ook `project.godot` staat.

**Oplossing:**
1. Zoek in de Verkenner waar je `project.godot`-bestand staat — dat is je projectmap
2. Kopieer de gedownloade bestanden naar die map
3. Ga terug naar Godot — de bestanden verschijnen automatisch in het FileSystem-paneel

</details>

<details>
<summary>Ik heb een map-in-een-map (dubbele map)</summary>

**Oorzaak:** Bij het uitpakken van een zip wordt soms een extra map aangemaakt. Je krijgt dan bijvoorbeeld `Pixel Adventure 1/Pixel Adventure 1/...` — een map in een map.

**Oplossing:** Open de buitenste map en kopieer de **binnenste** map (of de bestanden daarin) naar je projectmap.

</details>
