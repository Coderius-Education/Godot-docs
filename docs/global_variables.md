---
sidebar_position: 14
---

# Global variables (Autoload)

Wat als een score wilt bijhouden? Bijvoorbeeld in een UI, een game-over scherm, of een ander level? Dan gebruik je **global variables**.

## Predict

Je hebt een score-variabele in je muntje-script. Je wil die score ook zichtbaar maken in een `Label` bovenaan het scherm.

**Hoe zou jij dat aanpakken als je nog geen global variables kent?**

<details>
<summary>Bekijk het antwoord</summary>

Zonder global variables zou je het Label moeten opzoeken vanuit het muntje-script:

```gdscript
# In muntje.gd
func _on_body_entered(body: Node2D) -> void:
    var score_label = get_tree().get_root().get_node("World/UI/ScoreLabel")
    score_label.text = "Score: " + str(score + 1)
    queue_free()
```

Dit is om meerdere redenen problematisch:
- Je moet het **exacte pad** naar het Label kennen — als je iets hernoemt, crasht de code
- De score-waarde staat in het muntje, maar het muntje verdwijnt na het oppakken
- Als je een ander level hebt, werkt het pad niet meer

Global variables lossen dit op: één plek voor de score, toegankelijk vanuit elk script.

</details>

## Het probleem

Variabelen die je in een script zet, bestaan alleen in **die ene node**:

```gdscript
# Dit bestaat alleen in het karakter
extends CharacterBody2D
var score = 0
```

Als je een ander script de score wilt laten lezen, moet je eerst die node opzoeken. Dat wordt snel rommelig. De oplossing: een **globaal script** dat overal toegankelijk is.

## Een globaal script maken

### Stap 1: Maak een nieuw script

1. Ga naar **FileSystem** (linksonder)
2. Klik met rechts → **New Script**
3. Noem het `global.gd`
4. Zorg dat er **geen node** aan gekoppeld is — het is een los script

### Stap 2: Voeg je variabelen toe

```gdscript
extends Node

var score = 0
var levens = 3
```

Dat is alles! Dit script bevat variabelen die je overal wilt gebruiken.

### Stap 3: Stel het in als Autoload

Dit is de belangrijkste stap. Door het script als **Autoload** in te stellen, laadt Godot het automatisch bij het opstarten en is het overal beschikbaar.

1. Ga naar **Project** → **Project Settings**
2. Klik op het tabblad **Autoload**
3. Klik op het mapje naast **Path** en kies `global.gd`
4. Bij **Node Name** vul je `Global` in (met hoofdletter)
5. Klik op **Add**

Nu is `Global` overal beschikbaar in je project.

## Global variables gebruiken

### In je muntje-script

```gdscript
extends Area2D

func _on_body_entered(body: Node2D) -> void:
    Global.score += 1
    print("Score: ", Global.score)
    queue_free()
```

### In je karakter-script

```gdscript
# Ergens in je karakter
print("Huidige score: ", Global.score)
```

### In een UI-script

```gdscript
extends Label

func _process(delta: float) -> void:
    text = "Score: " + str(Global.score)
```

Overal dezelfde syntax: `Global.variabelnaam`

## Functies in je global script

Je kunt ook **functies** toevoegen aan je global script:

```gdscript
extends Node

var score = 0
var levens = 3

func reset():
    score = 0
    levens = 3

func verlies_leven():
    levens -= 1
    if levens <= 0:
        print("Game Over!")
```

Deze functies roep je op dezelfde manier aan:

```gdscript
Global.verlies_leven()
Global.reset()
```

## Samenvatting

| Begrip | Uitleg |
|---|---|
| **Global variable** | Een variabele die overal in je project beschikbaar is |
| **Autoload** | Een instelling waarmee Godot een script automatisch laadt bij het opstarten |
| **`Global.score`** | Zo lees of schrijf je een globale variabele vanuit elk script |
| **`extends Node`** | Het global script extends Node omdat het geen specifiek type nodig heeft |

:::tip
Gebruik global variables voor dingen die je in meerdere scenes nodig hebt, zoals score, levens, of instellingen. Gebruik gewone variabelen (`var`) voor dingen die alleen in één node bestaan.
:::

---

## Make-opdracht: levens weergeven

Je hebt geleerd hoe global variables werken. Pas het nu zelf toe.

**Opdracht:** Voeg een `levens`-variabele toe aan `global.gd`. Maak een `Label` in je level dat het aantal levens toont. Zorg dat wanneer je karakter te ver naar beneden valt (`position.y > 1000`), het een leven verliest.

<details>
<summary>Tip</summary>

- Voeg `var levens = 3` toe aan `global.gd`
- Voeg een `Label` node toe aan je level-scene (bijv. als child van een `CanvasLayer`)
- Gebruik `_process(delta)` in het Label-script om elke frame de tekst bij te werken
- Check in het karakter-script elke frame of `position.y > 1000`

</details>

<details>
<summary>Antwoord</summary>

**global.gd:**
```gdscript
extends Node

var score = 0
var levens = 3
```

**Label-script (levens_label.gd):**
```gdscript
extends Label

func _process(delta: float) -> void:
    text = "Levens: " + str(Global.levens)
```

**Karakter-script (toevoegen aan `_physics_process`):**
```gdscript
if position.y > 1000:
    Global.levens -= 1
    position = Vector2(100, 100)  # Reset naar startpositie
    print("Levens over: ", Global.levens)
```

**Stappen:**
1. Voeg `var levens = 3` toe aan `global.gd`
2. Voeg een `CanvasLayer` toe aan je level-scene (voor UI die altijd zichtbaar blijft)
3. Voeg een `Label` toe als child van de `CanvasLayer`
4. Koppel het label-script hieraan
5. Voeg de val-check toe aan je karakter-script

</details>
