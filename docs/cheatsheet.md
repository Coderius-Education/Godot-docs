---
sidebar_position: 15
---

# Cheatsheet

Snelle naslag — alleen syntax, geen uitleg.

---

## Variabelen

```gdscript
var naam      = "speler"   # tekst     (String)
var score     = 0          # geheel getal (int)
var snelheid  = 3.14       # decimaal  (float)
var is_actief = true       # waar/niet waar (bool)

const SPEED         = 300.0    # vaste waarde — verandert nooit
const JUMP_VELOCITY = -800.0
```

---

## Functies

```gdscript
func _ready() -> void:
    # Wordt één keer uitgevoerd bij start
    print("Klaar!")

func _process(delta: float) -> void:
    # Wordt elke frame uitgevoerd

func _physics_process(delta: float) -> void:
    # Wordt elke physics-frame uitgevoerd
    move_and_slide()  # altijd als laatste regel!
```

---

## If / Else

```gdscript
if score > 10:
    print("Gewonnen!")
elif score > 5:
    print("Bijna!")
else:
    print("Probeer opnieuw.")
```

---

## Operatoren

```gdscript
# Vergelijking          # Toewijzing
==   # gelijk aan       +=   # score += 1  →  score = score + 1
!=   # niet gelijk      -=   # levens -= 1 →  levens = levens - 1
>    # groter dan       *=   # x *= 2      →  x = x * 2
<    # kleiner dan
>=   # groter of gelijk
<=   # kleiner of gelijk

and  # beide waar       (x > 0 and x < 10)
or   # één van beide    (x == 0 or x == 1)
not  # omgekeerd        (not is_on_floor())
```

---

## Input

```gdscript
# Eenmalig indrukken (bijv. springen)
Input.is_action_just_pressed("ui_accept")   # spatie

# Ingehouden houden (bijv. rennen)
Input.is_action_pressed("ui_left")

# Richting: geeft -1 (links), 0 (niets) of 1 (rechts)
var direction = Input.get_axis("ui_left", "ui_right")
```

---

## Beweging

```gdscript
velocity.x =  300.0   # beweeg naar rechts
velocity.x = -300.0   # beweeg naar links
velocity.y = -800.0   # spring omhoog

# Zwaartekracht toevoegen
if not is_on_floor():
    velocity += get_gravity() * delta

# Karakter stilzetten
velocity.x = move_toward(velocity.x, 0, SPEED)

# Beweging toepassen — altijd als laatste
move_and_slide()
```

---

## Nodes aanspreken

```gdscript
$Sprite2D                   # node op naam uit de Scene Tree
$Sprite2D.play("run")       # methode aanroepen
$Sprite2D.flip_h = true     # eigenschap instellen (kijk naar links)
$Sprite2D.flip_h = false    # eigenschap instellen (kijk naar rechts)

queue_free()    # verwijder deze node uit het spel

position.x      # horizontale positie (pixels vanaf links)
position.y      # verticale positie   (groter = lager in beeld)
```

---

## Signals

```gdscript
# Area2D-script: reageert wanneer karakter het object raakt
func _on_body_entered(body: Node2D) -> void:
    print("Geraakt door: ", body.name)
    queue_free()   # verwijder dit object
```

Signal koppelen via de editor:
1. Selecteer de `Area2D` → **Node**-tabblad → dubbelklik `body_entered` → **Connect**

---

## Global variables

```gdscript
# global.gd  (ingesteld als Autoload onder de naam "Global")
extends Node
var score  = 0
var levens = 3

# Vanuit elk ander script:
Global.score  += 1    # score ophogen
Global.levens -= 1    # leven verliezen
print(Global.score)
```

---

## Animaties

```gdscript
$AnimatedSprite2D.play("idle")   # stilstaan
$AnimatedSprite2D.play("run")    # rennen
$AnimatedSprite2D.play("jump")   # springen

# Animatielogica
staat_stil = velocity.x == 0
op_de_grond = is_on_floor()

if staat_stil:                          $AnimatedSprite2D.play("idle")
if not op_de_grond:                     $AnimatedSprite2D.play("jump")
if velocity.x > 0:
    $AnimatedSprite2D.play("run")
    $AnimatedSprite2D.flip_h = false    # kijk rechts
if velocity.x < 0:
    $AnimatedSprite2D.play("run")
    $AnimatedSprite2D.flip_h = true     # kijk links
```

---

## Volledig bewegingsscript

```gdscript
extends CharacterBody2D

const SPEED         = 300.0
const JUMP_VELOCITY = -800.0

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
