---
sidebar_position: 7
---

# Level bouwen: Tilemap & Collision

In deze stap bouw je de wereld (het level) voor je karakter. Je gebruikt hiervoor tegels (tiles). We zorgen er meteen voor dat de grondtegels massief worden (**collision**), anders valt je karakter straks dwars door de vloer heen!

We gebruiken hiervoor de nieuwe `TileMapLayer` in Godot. Volg dit 5-stappenplan *nauwkeurig* om je eerste level te tekenen.

## Stap 1: Een TileMapLayer toevoegen

1. Ga naar je Level/World scene.
2. Klik met de rechtermuisknop op de hoofd-node (bijv. `Node2D`) en kies **Add Child Node**.
3. Zoek naar `TileMapLayer` en voeg deze toe.

## Stap 2: De TileSet instellen

Een `TileSet` is simpelweg de verzameling afbeeldingen die je als tegels gebruikt.

1. Selecteer je `TileMapLayer` in de Scene Tree.
2. Kijk rechts in de **Inspector**. Helemaal bovenaan zie je de eigenschap `Tile Set` staan.
3. Klik op het pijltje en kies **New TileSet**.
4. Klik vervolgens *op* de nieuw aangemaakte TileSet om de instellingen open te klappen.
5. Kijk nu helemaal onderin het Godot-scherm en klik op het **TileSet** tabblad (naast Output/Uitvoer).
6. Sleep vanuit je FileSystem (bijvoorbeeld uit je `assets` map) je tegel-afbeelding direct in het grote lege vak onderin het scherm.
7. Godot vraagt of hij automatisch tiles moet aanmaken ("Automatically create tiles?"). Klik op **Yes**.

## Stap 3: Physics (Botsingen) aanzetten

Voordat we gaan tekenen, vertellen we Godot dat we botsingen willen gebruiken.

1. Kijk weer rechts in de **Inspector** (terwijl je TileSet opengeklapt is).
2. Zoek het kopje **Physics Layers** en klap het open.
3. Klik op **Add Element**.
4. Er is nu een `Layer 0` aangemaakt. (Je hoeft de instellingen hier niet verder aan te passen).

## Stap 4: Collision "verven" (Cruciaal!)

Nu gaan we tegen de grondtegels zeggen dat ze massief moeten zijn.

1. Zorg dat je onderin je scherm in het tabblad **TileSet** (NIET TileMap!) zit.
2. Klik bovenaan in dat paneel op de knop **Paint** (het icoontje van een verfroller of kwastje).
3. Naast de knop verschijnt een dropdown-menu met eigenschappen (standaard staat dit misschien op Terrain of Navigation). Klik hierop en kies **Physics Layer 0**.
4. Klik en sleep nu over alle tegels in je afbeelding die massief moeten zijn (zoals gras, zand en stenen muren).
5. De tegels die je verft krijgen een **lichtblauw vierkantje**. Alles wat lichtblauw is, is vanaf nu massief!


:::tip
Je hoeft niet elke tile collision te geven. Achtergrond-tiles en decoratie (zoals wolkjes of struiken) kun je leeg laten. Je karakter loopt daar dan gewoon overheen!
:::

## Stap 5: Je level tekenen!

Nu alles goed is ingesteld, kunnen we eindelijk tekenen.

1. Klik helemaal onderin het scherm op het tabblad **TileMap** (naast TileSet).
2. Je ziet nu aan de rechterkant van dit paneel je tegels staan.
3. Klik op de **teken-tool** (het potlood-icoontje) bovenaan het paneel.
4. Selecteer een tegel (of sleep om meerdere tegels te selecteren).
5. Klik in je grote werkveld in het midden om je level te tekenen!

*Tip: Je kunt de rechtermuisknop gebruiken om gemaakte tegels weer weg te gummen.*

---

## Er gaat iets mis

<details>
<summary>Mijn karakter valt nog steeds door de tegels heen</summary>

**Oorzaak:** Je hebt waarschijnlijk de collision niet goed geverfd in Stap 4.
**Oplossing:** 
1. Selecteer je `TileMapLayer`.
2. Ga onderin naar het tabblad **TileSet**.
3. Kies de **Paint** tool en selecteer **Physics Layer 0**.
4. Check of de tegels die je in je level gebruikt daadwerkelijk een *lichtblauw vlak* over zich heen hebben.
</details>

<details>
<summary>De afbeelding wordt niet herkend / ik kan hem niet slepen</summary>

**Oorzaak:** Je sleept de afbeelding naar het verkeerde veld.
**Oplossing:** Zorg dat je in Stap 2 echt onderin op het tabblad **TileSet** hebt geklikt voordat je sleept.
</details>
