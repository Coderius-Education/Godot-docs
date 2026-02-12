# Cheatsheet

Een snelle referentie voor alles wat je nodig hebt in Godot en GDScript.

---

## Coördinatensysteem

<details>
<summary>Hoe werkt het coördinatensysteem in Godot?</summary>

| Richting | As | Waarde |
|---|---|---|
| Rechts | X | Wordt groter (+) |
| Links | X | Wordt kleiner (-) |
| Omlaag | Y | Wordt groter (+) |
| Omhoog | Y | Wordt kleiner (-) |

> **Let op:** Het punt (0, 0) zit in de **linkerbovenhoek** van het scherm. Daarom is de jump velocity **negatief**!

</details>

---

## Script structuur

<details>
<summary>Hoe ziet een GDScript bestand eruit?</summary>

```gdscript
extends CharacterBody2D

# 1. Constanten
const SPEED = 300.0
const JUMP_VELOCITY = -800.0

# 2. Variabelen
var op_de_grond
var staat_stil

# 3. Functies
func _physics_process(delta: float) -> void:
    # Jouw code hier
    move_and_slide()
```

</details>

---

## Variabelen & constanten

<details>
<summary>Hoe maak ik variabelen en constanten aan?</summary>

```gdscript
var score            # Variabele zonder type
var richting := 0.0  # Type wordt automatisch bepaald (:=)
const SPEED = 300.0  # Constante (verandert nooit, HOOFDLETTERS)
```

</details>

---

## Input

<details>
<summary>Hoe lees ik toetsenbord-input?</summary>

| Code | Wat doet het? |
|---|---|
| `Input.is_action_just_pressed("ui_accept")` | `true` op het moment dat je de toets indrukt (eenmalig) |
| `Input.is_action_pressed("ui_accept")` | `true` zolang je de toets ingedrukt houdt |
| `Input.get_axis("ui_left", "ui_right")` | Geeft `-1` (links), `0` (niks) of `1` (rechts) |

</details>

---

## Beweging

<details>
<summary>Volledig movement script</summary>

```gdscript
extends CharacterBody2D

const SPEED = 300.0
const JUMP_VELOCITY = -800.0

func _physics_process(delta: float) -> void:
    # Zwaartekracht toepassen
    if not is_on_floor():
        velocity += get_gravity() * delta

    # Springen (alleen als je op de grond staat)
    if Input.is_action_just_pressed("ui_accept") and is_on_floor():
        velocity.y = JUMP_VELOCITY

    # Links/rechts bewegen
    var direction := Input.get_axis("ui_left", "ui_right")
    if direction:
        velocity.x = direction * SPEED
    else:
        velocity.x = move_toward(velocity.x, 0, SPEED)

    move_and_slide()
```

</details>

---

## Velocity waarden

<details>
<summary>Welke velocity hoort bij welke situatie?</summary>

| Situatie | velocity |
|---|---|
| Stilstaan | `(0, 0)` |
| Naar rechts | `(300, 0)` |
| Naar links | `(-300, 0)` |
| Vallen | `(0, positief getal)` |
| Springen | `(0, negatief getal)` |

</details>

---

## Handige functies

<details>
<summary>Welke functies gebruik ik het meest?</summary>

| Functie | Uitleg |
|---|---|
| `move_and_slide()` | Past velocity toe en handelt botsingen af. **Altijd aan het einde aanroepen!** |
| `is_on_floor()` | Geeft `true` als het karakter de grond raakt |
| `get_gravity()` | Geeft de zwaartekracht-vector terug |
| `move_toward(huidige, doel, stap)` | Beweegt een waarde richting het doel (handig voor afremmen) |
| `print(waarde)` | Print een waarde naar de console (handig voor debuggen) |

</details>

---

## Animaties

<details>
<summary>Hoe speel ik animaties af?</summary>

```gdscript
# Animatie afspelen
$Sprite2D.play('Idle')
$Sprite2D.play('Run')
$Sprite2D.play('Jump')

# Sprite spiegelen (links/rechts kijken)
$Sprite2D.flip_h = false  # Kijkt naar rechts
$Sprite2D.flip_h = true   # Kijkt naar links
```

</details>

<details>
<summary>Hoe kies ik animaties op basis van beweging?</summary>

```gdscript
# Stilstaan
if velocity.x == 0:
    $Sprite2D.play('Idle')

# In de lucht
if not is_on_floor():
    $Sprite2D.play('Jump')

# Naar rechts bewegen
if velocity.x > 0:
    $Sprite2D.play('Run')
    $Sprite2D.flip_h = false

# Naar links bewegen
if velocity.x < 0:
    $Sprite2D.play('Run')
    $Sprite2D.flip_h = true
```

</details>

---

## Nodes openen in code

<details>
<summary>Hoe gebruik ik het <code>$</code>-teken?</summary>

```gdscript
$Sprite2D              # Toegang tot een child-node ($ is een snelkoppeling)
$Sprite2D.play()       # Een functie aanroepen op een child-node
$Sprite2D.flip_h       # Een eigenschap van een child-node lezen/aanpassen
```

</details>

---

## Vergelijkingen & logica

<details>
<summary>Welke vergelijkingen kan ik gebruiken?</summary>

```gdscript
if velocity.x == 0:        # Is gelijk aan
if velocity.x > 0:         # Groter dan
if velocity.x < 0:         # Kleiner dan
if not is_on_floor():       # NIET (draait true/false om)

if conditie:
    # doe iets
else:
    # doe iets anders
```

</details>

---

## Resources (bestanden toevoegen)

<details>
<summary>Hoe voeg ik afbeeldingen toe aan mijn project (<code>res://</code>)?</summary>

- Klik linksonder in Godot met de rechtermuisknop op `res://`
- Kies daarna `Opening in bestandsbeheer`

![res](../../docs/images/res.png)

Er opent zich een map in je Windows Verkenner.
Als je afbeeldingen wilt toevoegen aan je project, kopieer ze dan naar deze map. Wanneer je teruggaat naar Godot, zul je zien dat Godot even moet nadenken en daarna zijn je afbeeldingen te gebruiken in je project.

</details>

---

## Handige links

- [GDScript leren (interactief)](https://gdquest.github.io/learn-gdscript/)
- [Pixel Adventure assets](https://pixelfrog-assets.itch.io/pixel-adventure-1)
- [Godot documentatie](https://docs.godotengine.org/en/stable/)
