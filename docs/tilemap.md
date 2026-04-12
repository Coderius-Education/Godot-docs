---
sidebar_position: 6
---

# Tilemap & Tileset

- Gebruik niet `TileMap` maar `TileMapLayer`!
- Let bij het slepen van de `Tileset` erop dat je onderaan eerst op `Tileset` klikt.

<iframe width="100%" height="500px" src="https://www.youtube.com/embed/5V9f3MT86M8?start=240&end=347" title="Start Your Game Creation Journey Today! (Godot beginner tutorial)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Physics Layer toevoegen

Zonder een physics layer valt je karakter dwars door de tiles heen. Een physics layer zorgt ervoor dat tiles **collision** (botsing) krijgen.

### Stap 1: Open de TileSet

1. Selecteer je `TileMapLayer` node in de scene tree
2. Klik in de **Inspector** op je `TileSet` resource om deze te openen

### Stap 2: Voeg een Physics Layer toe

1. In de TileSet Inspector, zoek het kopje **Physics Layers**
2. Klik op **Add Element**
3. Er verschijnt een nieuwe physics layer (standaard `Layer 0`)

> Je hoeft hier verder niks aan te veranderen. De standaardinstellingen zijn goed.

### Stap 3: Collision koppelen aan tiles

Nu moet je per tile aangeven **waar** de collision zit. Dit doe je in het **TileSet** paneel onderaan het scherm.

1. Klik onderaan op het **TileSet** tabblad
2. Selecteer een tile die collision moet krijgen (bijv. een grond-tile)
3. Klik op **Paint** (het verfkwastje) in de werkbalk bovenaan het TileSet paneel
4. Kies bij de dropdown **Physics Layer 0**
5. Klik nu op alle tiles die een botsing moeten hebben

Elke tile die je aanklikt krijgt een **lichtblauw vlak** — dat is de collision shape.

:::tip
Je hoeft niet elke tile collision te geven. Achtergrond-tiles en decoratie-tiles kunnen zonder collision blijven. Geef alleen collision aan tiles waar je karakter **op moet kunnen staan of tegenaan moet botsen**, zoals grond, muren en platformen.
:::

### Collision handmatig aanpassen

Soms wil je de collision shape van een specifieke tile aanpassen (bijv. voor een schuin platform):

1. Klik onderaan op het **TileSet** tabblad
2. Klik op **Select** in de werkbalk
3. Klik op de tile die je wilt aanpassen
4. Aan de rechterkant verschijnen de eigenschappen van die tile
5. Open **Physics** → **Physics Layer 0**
6. Hier kun je de collision-punten handmatig verplaatsen door ze te slepen

### Controleren of het werkt

Start je spel en kijk of je karakter:
- Op de grond-tiles kan staan
- Niet door muren heen loopt
- Niet door platformen heen valt

Als je karakter nog steeds door tiles valt, controleer dan:
- Heeft je `TileMapLayer` een `TileSet` met een **Physics Layer**?
- Heb je collision **toegewezen** aan de juiste tiles?
- Heeft je karakter (`CharacterBody2D`) een eigen `CollisionShape2D`?
