---
sidebar_position: 8
---

# Sprite movement

In deze stap voeg je een script toe aan je karakter zodat het kan bewegen en springen.

## Wat ga je doen?

- Een GDScript toevoegen aan je `CharacterBody2D`
- Het standaard bewegingsscript van Godot gebruiken als startpunt

## Predict

Godot genereert automatisch een startscript als je een script koppelt aan een `CharacterBody2D`. Hier is dat script:

```gdscript
extends CharacterBody2D

const SPEED = 300.0
const JUMP_VELOCITY = -400.0

func _physics_process(delta: float) -> void:
    if not is_on_floor():
        velocity += get_gravity() * delta

    if Input.is_action_just_pressed("ui_accept") and is_on_floor():
        velocity.y = JUMP_VELOCITY

    var direction := Input.get_axis("ui_left", "ui_right")
    if direction:
        velocity.x = direction * SPEED
    else:
        velocity.x = move_toward(velocity.x, 0, SPEED)

    move_and_slide()
```

**Wat denk je dat dit script doet? Welke regels herken je?**

<details>
<summary>Bekijk het antwoord</summary>

- `extends CharacterBody2D` — dit script hoort bij een `CharacterBody2D` node
- `SPEED` en `JUMP_VELOCITY` — vaste waarden voor snelheid en sprongkracht
- `if not is_on_floor()` — als het karakter niet op de grond staat, voeg zwaartekracht toe
- `if Input.is_action_just_pressed("ui_accept")` — als de spatiebalk wordt ingedrukt én het karakter staat op de grond: spring
- `Input.get_axis("ui_left", "ui_right")` — geeft -1 (links), 0 (stil) of 1 (rechts) terug
- `move_and_slide()` — past de beweging toe op het karakter

Je hoeft dit nu nog niet volledig te begrijpen. In de volgende les ga je elk onderdeel stap voor stap onderzoeken.

</details>

## Stappen

1. Selecteer je `CharacterBody2D` node in de Scene Tree
2. Klik op het script-icoontje bovenaan de Inspector (of klik met rechts → **Attach Script**)
3. Laat alles op de standaardwaarden staan en klik op **Create**
4. Godot opent automatisch het script — klik op **OK** als er een pop-up is over het gebruik van een template
5. Start het spel met `F5` en test of je karakter beweegt met de pijltjestoetsen en springt met de spatie

<iframe width="100%" height="500px" src="https://www.youtube.com/embed/5V9f3MT86M8?start=570&end=712" title="Start Your Game Creation Journey Today! (Godot beginner tutorial)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Er gaat iets mis

<details>
<summary>Mijn karakter beweegt niet</summary>

**Oorzaak:** Het script is niet gekoppeld aan de `CharacterBody2D`, of de input-acties zijn niet ingesteld.

**Oplossing:**
1. Controleer of je `CharacterBody2D` een script-icoontje heeft in de Scene Tree
2. Dubbelklik op het script om het te openen en controleer of de code er zo uitziet:

```gdscript
extends CharacterBody2D

const SPEED = 300.0
const JUMP_VELOCITY = -400.0

func _physics_process(delta: float) -> void:
    ...
    move_and_slide()
```

3. Controleer of `move_and_slide()` aanwezig is — zonder deze regel beweegt niets

</details>

<details>
<summary>Mijn karakter zweeft of valt niet</summary>

**Oorzaak:** De zwaartekrachtcode ontbreekt in het script.

**Oplossing:** Controleer of dit stukje aanwezig is in `_physics_process`:

```gdscript
if not is_on_floor():
    velocity += get_gravity() * delta
```

</details>

<details>
<summary>Ik zie een fout: "CharacterBody2D: move_and_slide called without physics frame"</summary>

**Oorzaak:** `move_and_slide()` staat buiten `_physics_process`.

**Oplossing:** Zorg dat `move_and_slide()` altijd als laatste regel **binnen** `_physics_process` staat.

</details>
