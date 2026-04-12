# Er gaat iets mis!

Geen paniek! Zoek hieronder je probleem op. De oplossingen zijn gegroepeerd per onderwerp.

---

## Opstarten

## Mijn spel doet niks als ik op play druk

<details>
<summary>Oorzaak: geen main scene ingesteld, of scene niet opgeslagen</summary>

**Oorzaak:** Godot weet niet welke scene hij moet opstarten, of de scene bestaat nog niet als bestand op schijf.

**Oplossing:**
- Sla je scene op met `Ctrl + S` als je dat nog niet gedaan hebt
- Godot vraagt de eerste keer automatisch welke scene de main scene is — kies je level of world scene
- Wil je het later wijzigen? Ga naar **Project → Project Settings → Application → Run → Main Scene**

</details>

---

## Beweging & physics

## Mijn karakter beweegt niet

<details>
<summary>Oorzaak: script niet gekoppeld, of move_and_slide() mist</summary>

**Oorzaak:** Beweging via `velocity` en `move_and_slide()` werkt alleen als het script correct is gekoppeld aan een `CharacterBody2D` én `move_and_slide()` wordt aangeroepen.

**Oplossing:**
- Controleer of je script **gekoppeld is** aan de juiste node (je ziet een script-icoontje naast de node in de Scene Tree)
- Controleer of bovenaan je script `extends CharacterBody2D` staat
- Controleer of `move_and_slide()` aan het **einde** van `_physics_process()` staat
- Staat je `SPEED` waarde hoog genoeg? Probeer `300.0`

</details>

## Mijn karakter valt door de grond

<details>
<summary>Oorzaak: CollisionShape2D mist bij het karakter of de tilemap heeft geen Physics Layer</summary>

**Oorzaak:** Godot detecteert botsingen alleen als zowel het karakter als de grond een collision shape hebben. Als één van de twee ontbreekt, valt het karakter er doorheen.

**Oplossing:**
- Controleer of je karakter een `CollisionShape2D` heeft als child-node
- Controleer of de TileMapLayer een **Physics Layer** heeft: open de TileSet → tabblad **Physics** → klik **Add Element**
- Controleer of de collision shapes niet te klein zijn t.o.v. de sprite

</details>

## Mijn karakter kan niet springen

<details>
<summary>Oorzaak: is_on_floor() geeft false, of is_action_just_pressed mist het woord "just"</summary>

**Oorzaak:** Springen werkt alleen als Godot weet dat het karakter op de grond staat. Dat vereist een werkende collision met de grond. Daarnaast moet je `just_pressed` gebruiken — anders wordt de sprong elke frame herhaald.

**Oplossing:**
- Gebruik `Input.is_action_just_pressed("ui_accept")` — het woord `just` is verplicht
- Controleer of `is_on_floor()` `true` teruggeeft: voeg tijdelijk `print(is_on_floor())` toe
- Is je `JUMP_VELOCITY` **negatief**? Omhoog = negatieve Y. Gebruik bijv. `-800.0`

</details>

## Mijn TileMap collision doet niks

<details>
<summary>Oorzaak: Physics Layer vergeten toe te voegen aan de TileSet</summary>

**Oorzaak:** Tiles zien er wel uit als platforms, maar hebben standaard geen fysische eigenschappen. Die moet je handmatig toevoegen via een Physics Layer in de TileSet.

**Oplossing:**
1. Selecteer de `TileMapLayer` node
2. Klik op de `TileSet` resource in de Inspector
3. Ga naar het tabblad **Physics**
4. Klik op **Add Element** om een Physics Layer toe te voegen
5. Selecteer daarna de tiles in de TileSet-editor en teken de collision shape

</details>

---

## Code & scripting

## Ik krijg een foutmelding in de console

<details>
<summary>Oorzaak: zie de tabel hieronder voor veelvoorkomende meldingen</summary>

**Oorzaak:** Foutmeldingen geven altijd het regelnummer en een beschrijving. Lees de melding volledig — het regelnummer vertelt je precies waar het misgaat.

| Foutmelding | Betekenis | Oplossing |
|---|---|---|
| `Invalid call. Nonexistent function` | Je roept een functie aan die niet bestaat | Controleer de spelling en of je het juiste node-type gebruikt |
| `Node not found: "Sprite2D"` | De node `$Sprite2D` bestaat niet | Controleer of de naam in je code **exact** overeenkomt met de naam in de Scene Tree (hoofdlettergevoelig!) |
| `Identifier not found: velocity` | `velocity` is niet beschikbaar | Zorg dat je script `extends CharacterBody2D` heeft bovenaan |
| `Expected end of statement` | Syntaxfout in je code | Controleer of je geen `:`, `)` of inspringing mist |

</details>

## Global werkt niet / `Global.score` geeft een fout

<details>
<summary>Oorzaak: Autoload is niet ingesteld in Project Settings</summary>

**Oorzaak:** `Global` is geen ingebouwd Godot-concept. Het is een script dat je zelf als Autoload moet registreren. Zonder die instelling kent Godot de naam `Global` niet.

**Oplossing:**
1. Ga naar **Project → Project Settings → Autoload**
2. Klik op het mapje naast **Path** en kies `global.gd`
3. Vul bij **Node Name** precies `Global` in (met hoofdletter)
4. Klik op **Add**

</details>

---

## Visueel & animaties

## Mijn animatie speelt niet af

<details>
<summary>Oorzaak: verkeerde node, typo in animatienaam, of play() wordt niet aangeroepen</summary>

**Oorzaak:** `play()` werkt alleen op `AnimatedSprite2D`. Een typo in de animatienaam of een fout in de conditie zorgt ervoor dat de aanroep nooit plaatsvindt.

**Oplossing:**
- Controleer of je `$AnimatedSprite2D` gebruikt (niet `$Sprite2D`)
- De animatienaam is **hoofdlettergevoelig**: `"idle"` is niet hetzelfde als `"Idle"`
- Voeg tijdelijk `print("animatie speelt")` toe om te checken of de code wordt bereikt

</details>

## Mijn animatie stopt na één frame of loopt niet door

<details>
<summary>Oorzaak: Loop staat uit in SpriteFrames, of play() wordt elke frame opnieuw aangeroepen</summary>

**Oorzaak:** Als Loop uitstaat, speelt de animatie één keer en stopt. Als je `play()` elke frame aanroept, herstart de animatie steeds opnieuw en lijkt hij stil te staan.

**Oplossing:**
- Open de **SpriteFrames**-editor → controleer of het **Loop**-icoontje is ingeschakeld voor de animatie
- Zorg dat je `play()` alleen aanroept als de animatie verandert, niet elke frame opnieuw

</details>

## Mijn sprite is onzichtbaar

<details>
<summary>Oorzaak: geen texture ingesteld, sprite staat buiten beeld, of zichtbaarheid is uit</summary>

**Oorzaak:** Godot toont een lege node als er geen texture is ingesteld, of als de node buiten de camera valt.

**Oplossing:**
- Heb je een **texture** toegewezen? Sleep een afbeelding naar de `Texture` eigenschap in de Inspector
- Controleer de **positie** — staat de sprite buiten het scherm?
- Is `Visible` aangevinkt in de Inspector?

</details>

## Mijn afbeelding is wazig / pixel art ziet er wazig uit

<details>
<summary>Oorzaak: Godot gebruikt standaard lineaire filtering, wat pixel art vervaagt</summary>

**Oorzaak:** Godot past standaard een blur-filter toe op afbeeldingen om ze vloeiender te laten schalen. Voor pixel art wil je juist harde pixels.

**Oplossing:**
1. Ga naar **Project → Project Settings**
2. Zoek naar `Default Texture Filter`
3. Verander `Linear` naar `Nearest`

</details>

## Mijn bestanden staan niet in het project

<details>
<summary>Oorzaak: bestanden staan niet in de projectmap</summary>

**Oorzaak:** Godot kan alleen bestanden gebruiken die in de projectmap staan (`res://`). Bestanden elders op je computer zijn niet zichtbaar.

**Oplossing:**
- Klik linksonder in Godot met de rechtermuisknop op `res://` → **Open in File Manager**
- Kopieer je afbeeldingen naar deze map
- Ga terug naar Godot — het importeert de bestanden automatisch

> Sleep bestanden **nooit** rechtstreeks vanuit de Windows Verkenner naar Godot. Kopieer ze altijd naar de projectmap eerst.

</details>

---

## Signals

## Mijn signal `body_entered` wordt niet aangeroepen

<details>
<summary>Oorzaak: collision layers komen niet overeen, of het signal is niet gekoppeld</summary>

**Oorzaak:** Godot voert signals alleen uit als de signal is gekoppeld én de collision layers van de twee objecten elkaar overlappen. Als de layers niet overeenkomen, detecteert de `Area2D` de `CharacterBody2D` niet.

**Oplossing:**
- Controleer of het signal is gekoppeld: selecteer de `Area2D` → tabblad **Node** → staat er een functienaam naast `body_entered`?
- Controleer de **Collision Layer en Mask** van zowel de `Area2D` als de `CharacterBody2D` in de Inspector — minstens één waarde moet overlappen
- Heeft de `Area2D` een `CollisionShape2D` als child? Zonder dit detecteert hij niks

</details>

---

## Algemene tips

- **Sla regelmatig op** met `Ctrl + S`
- Gebruik `print()` om te debuggen — print variabelen om te zien wat er werkelijk gebeurt
- Lees foutmeldingen **volledig** — het regelnummer en de beschrijving wijzen je direct naar het probleem
- **Godot is hoofdlettergevoelig** — `Sprite2D` is niet hetzelfde als `sprite2d`
