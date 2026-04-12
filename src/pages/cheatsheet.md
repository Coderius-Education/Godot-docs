# Godot nodes — overzicht

Snelle naslag van alle node-types die in deze tutorial worden gebruikt.

---

## Coördinatensysteem

<details>
<summary>Hoe werkt het coördinatensysteem?</summary>

| Richting | As | Waarde |
|---|---|---|
| Rechts | X | Wordt groter (+) |
| Links | X | Wordt kleiner (-) |
| Omlaag | Y | Wordt groter (+) |
| Omhoog | Y | Wordt kleiner (-) |

Het punt `(0, 0)` zit in de **linkerbovenhoek** van het scherm. Daarom is de jump velocity **negatief** — omhoog springen betekent Y kleiner maken.

</details>

---

## Level & wereld

<details>
<summary>Node2D — basis van je level-scene</summary>

De basisnode voor alles in een 2D-wereld. Heeft een positie, rotatie en schaal.

**Wanneer gebruik je het?**
Als root van je level/wereld-scene — de node waar alle andere nodes als child onder hangen.

**Instellen in de Inspector:**
- `Position` — waar de node staat in de wereld
- `Rotation` — hoek in graden
- `Scale` — grootte

</details>

<details>
<summary>TileMapLayer — level bouwen met tegels</summary>

Een node waarmee je de wereld opbouwt uit herhalende tegels (tiles), zoals platforms en de grond.

**Wanneer gebruik je het?**
Voor het bouwen van je level — sneller dan losse sprites voor elk platform.

**Instellen:**
1. Maak een `TileSet` aan via de Inspector → `Tile Set` → **New TileSet**
2. Sleep een tileset-afbeelding erin
3. Voeg een **Physics Layer** toe zodat de tiles botsen
4. Teken je level met de TileMap-editor onderin

</details>

---

## Hoofdpersoon

<details>
<summary>CharacterBody2D — je speler</summary>

Een node voor een speelbaar karakter dat beweegt en botst met de wereld. Heeft ingebouwde ondersteuning voor `move_and_slide()`.

**Vaste children:**
```
CharacterBody2D
├── AnimatedSprite2D   ← zichtbaar uiterlijk
└── CollisionShape2D   ← botsingsgebied
```

**Heeft een script nodig** om te bewegen (via `_physics_process`).

</details>

<details>
<summary>AnimatedSprite2D — animaties voor je karakter</summary>

Toont een afbeelding die kan wisselen tussen animaties, opgebouwd uit losse frames.

**Wanneer gebruik je het?**
Als child van `CharacterBody2D` voor animaties zoals idle, run en jump.

**Instellen in de Inspector:**
- `Sprite Frames` → **New SpriteFrames** → open de SpriteFrames-editor
- Maak animaties aan (`idle`, `run`, `jump`) en sleep frames erin
- Stel FPS in per animatie (aanbevolen: 8–12 FPS)

</details>

<details>
<summary>CollisionShape2D — hitbox / botsingsgebied</summary>

Definieert het botsingsgebied (hitbox) van een node. Godot gebruikt dit om te detecteren wanneer twee objecten elkaar raken.

**Wanneer gebruik je het?**
Als child van `CharacterBody2D` of `Area2D` — zonder dit kan Godot geen botsingen detecteren.

**Instellen in de Inspector:**
- `Shape` — kies een vorm:
  - `CapsuleShape2D` — voor een karakter
  - `RectangleShape2D` — voor rechthoekige objecten
  - `CircleShape2D` — voor ronde objecten (bijv. muntje)

</details>

---

## Collectibles & vijanden

<details>
<summary>Area2D — muntjes en vijanden detecteren</summary>

Een node die detecteert wanneer andere objecten er doorheen bewegen — zonder zelf te botsen of te vallen.

**Wanneer gebruik je het?**
Voor muntjes, vijanden of checkpoints die een reactie moeten geven wanneer de speler ze aanraakt.

**Vaste children:**
```
Area2D
├── Sprite2D of AnimatedSprite2D
└── CollisionShape2D
```

**Signal:** Koppel `body_entered` om te reageren wanneer een `CharacterBody2D` de area binnengaat.

</details>

<details>
<summary>Sprite2D — stilstaande afbeelding</summary>

Toont één stilstaande afbeelding in de scene.

**Wanneer gebruik je het?**
Voor objecten zonder animatie, zoals een muntje of een stilstaande vijand.

**Instellen in de Inspector:**
- `Texture` — sleep hier een afbeelding naartoe vanuit het FileSystem

</details>

---

## UI

<details>
<summary>CanvasLayer — UI die altijd op het scherm blijft</summary>

Een speciale node die zijn children **los van de camera** rendert — de inhoud blijft altijd op dezelfde plek op het scherm, ongeacht hoe de camera beweegt.

**Wanneer gebruik je het?**
Als container voor je score-display, levensbalken of andere UI-elementen.

**Structuur:**
```
CanvasLayer
└── Label   ← score, levens, etc.
```

</details>

<details>
<summary>Label — score of levens weergeven</summary>

Toont tekst op het scherm.

**Wanneer gebruik je het?**
Voor het weergeven van de score, het aantal levens, of andere informatie aan de speler.

**Instellen in de Inspector:**
- `Text` — de tekst die getoond wordt
- `Font Size` — lettertypegrootte

</details>

---

## Handige links

- [Godot documentatie](https://docs.godotengine.org/en/stable/)
- [Pixel Adventure assets](https://pixelfrog-assets.itch.io/pixel-adventure-1)
- [GDScript leren (interactief)](https://gdquest.github.io/learn-gdscript/)
