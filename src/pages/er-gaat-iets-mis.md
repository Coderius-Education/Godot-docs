# Er gaat iets mis!

Geen paniek! Hier vind je oplossingen voor veelvoorkomende problemen in Godot.

---

## Mijn spel doet niks als ik op play druk

<details>
<summary>Bekijk de oplossing</summary>

- Heb je een **main scene** ingesteld? Godot vraagt dit de eerste keer dat je op play drukt. Kies je hoofdscene (meestal je level of world scene).
- Controleer of je scene is **opgeslagen** (`Ctrl + S`).

</details>

---

## Mijn karakter beweegt niet

<details>
<summary>Bekijk de oplossing</summary>

- Gebruik je een `CharacterBody2D` node? Beweging met `velocity` en `move_and_slide()` werkt alleen op dit type node.
- Heb je `move_and_slide()` aangeroepen aan het **einde** van `_physics_process()`?
- Staat je `SPEED` waarde hoog genoeg? Probeer `300.0` of hoger.
- Controleer of je script daadwerkelijk **gekoppeld is** aan de juiste node (je ziet een script-icoontje naast de node).

</details>

---

## Mijn karakter valt door de grond

<details>
<summary>Bekijk de oplossing</summary>

- Heeft je karakter een `CollisionShape2D` als child-node? Zonder collision shape kan Godot geen botsingen detecteren.
- Heeft de grond/tilemap ook een collision? Bij een `TileMapLayer` moet je collision instellen in de TileSet.
- Controleer of de collision shapes **niet te klein** zijn.

</details>

---

## Mijn karakter kan niet springen

<details>
<summary>Bekijk de oplossing</summary>

- Gebruik je `is_on_floor()` in je if-statement? Dit werkt alleen als er een collision is met de grond.
- Gebruik je `Input.is_action_just_pressed("ui_accept")` (met **just**)? Zonder `just` wordt de sprong elk frame herhaald.
- Is je `JUMP_VELOCITY` **negatief**? In Godot gaat omhoog = negatieve Y richting. Probeer `-800.0`.

</details>

---

## Ik krijg een foutmelding in de console

<details>
<summary>Bekijk de oplossing</summary>

### Veelvoorkomende foutmeldingen:

| Foutmelding | Betekenis | Oplossing |
|---|---|---|
| `Invalid call. Nonexistent function` | Je roept een functie aan die niet bestaat | Controleer de spelling en of je het juiste node-type gebruikt |
| `Node not found: "Sprite2D"` | De node `$Sprite2D` bestaat niet | Controleer of de naam in je code **exact** overeenkomt met de naam in de scene tree (hoofdlettergevoelig!) |
| `Identifier not found: velocity` | `velocity` is niet beschikbaar | Zorg dat je script `extends CharacterBody2D` heeft bovenaan |
| `Expected end of statement` | Er klopt iets niet in je syntax | Controleer of je geen `:` of `)` mist |

</details>

---

## Mijn animatie speelt niet af

<details>
<summary>Bekijk de oplossing</summary>

- Heb je de animatie aangemaakt in de **AnimationPlayer** of **AnimatedSprite2D**?
- Klopt de naam van de animatie in je code? De naam is **hoofdlettergevoelig**. Dus `'Idle'` is niet hetzelfde als `'idle'`.
- Wordt `$Sprite2D.play('naam')` wel daadwerkelijk aangeroepen? Voeg een `print("animatie speelt")` toe om te testen.

</details>

---

## Mijn sprite is onzichtbaar

<details>
<summary>Bekijk de oplossing</summary>

- Heb je een **texture** toegewezen aan je Sprite2D? Sleep een afbeelding naar de `Texture` eigenschap in de Inspector.
- Staat de sprite op de juiste **positie**? Misschien staat hij buiten het scherm. Controleer de coördinaten.
- Is de **zichtbaarheid** (`visible`) aangevinkt in de Inspector?
- Controleer de **Z-index**: misschien zit de sprite achter een andere node.

</details>

---

## Mijn afbeelding is wazig/blurry

<details>
<summary>Bekijk de oplossing</summary>

Dit komt doordat Godot standaard een filter toepast op afbeeldingen. Ga naar:

1. **Project** → **Project Settings**
2. Zoek naar `Default Texture Filter`
3. Verander dit van `Linear` naar `Nearest`

Dit zorgt voor scherpe pixel art.

</details>

---

## Mijn bestanden staan niet in het project

<details>
<summary>Bekijk de oplossing</summary>

- Klik linksonder in Godot met de rechtermuisknop op `res://`
- Kies `Opening in bestandsbeheer`
- Kopieer je bestanden (afbeeldingen, etc.) naar deze map
- Ga terug naar Godot — het importeert de bestanden automatisch

> **Tip:** Sleep bestanden **nooit** rechtstreeks vanuit de Windows Verkenner naar Godot. Kopieer ze altijd naar de projectmap.

</details>

---

## Godot crasht of reageert niet

<details>
<summary>Bekijk de oplossing</summary>

- Heb je een **oneindige loop** in je code? Bijvoorbeeld een `while` loop zonder stop-conditie.
- Probeer Godot te sluiten via Taakbeheer (`Ctrl + Shift + Esc`) en open het project opnieuw.
- Controleer of je schijf niet vol is.

</details>

---

## Algemene tips

- **Sla regelmatig op** met `Ctrl + S`.
- Gebruik `print()` om te **debuggen**. Print variabelen om te zien wat er gebeurt.
- Lees de **foutmelding** in de console altijd helemaal. Het regelnummer en de beschrijving helpen je de fout te vinden.
- **Godot is hoofdlettergevoelig!** `Sprite2D` is niet hetzelfde als `sprite2d`.
- Als je twijfelt, kijk dan op de [cheatsheet](/cheatsheet) voor de juiste syntax.
