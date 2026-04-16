---
sidebar_position: 14
---

# Global variables (Autoload)

Wat als een score wilt bijhouden? Bijvoorbeeld in een UI, een game-over scherm, of een ander level? Dan gebruik je **global variables**.

## Predict

Stel: je wil een score bijhouden. Elke keer dat je een muntje oppakt, moet de score met 1 ophogen. Je wil die score ook zichtbaar maken in een label bovenaan het scherm.

**Hoe zou jij dat aanpakken als je nog geen global variables kent?**

<details>
<summary>Bekijk het antwoord</summary>

Zonder global variables zou je de score moeten opslaan in het muntje-script zelf:

```gdscript
# In muntje.gd
var score = 0

func _on_body_entered(body: Node2D) -> void:
    score += 1
    print("Score: ", score)
    queue_free()  # Het muntje verdwijnt — en daarmee ook de score-variabele
```

Dit heeft een groot probleem: zodra het muntje verdwijnt (`queue_free()`), verdwijnt ook de `score`-variabele. Je kunt de score dan niet meer lezen vanuit een Label of een ander script.

Global variables lossen dit op: één plek voor de score, buiten alle nodes om, die de hele speelsessie beschikbaar blijft.

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

## Er gaat iets mis

<details>
<summary>Global werkt niet / <code>Global.score</code> geeft een fout</summary>

**Oorzaak:** `Global` is geen ingebouwd Godot-concept. Het is een script dat je zelf als Autoload moet registreren. Zonder die instelling kent Godot de naam `Global` niet.

**Oplossing:**
1. Ga naar **Project → Project Settings → Autoload**
2. Klik op het mapje naast **Path** en kies `global.gd`
3. Vul bij **Node Name** precies `Global` in (met hoofdletter G)
4. Klik op **Add**

</details>

<details>
<summary>Mijn score-variabele reset elke keer als ik een nieuwe scene laad</summary>

**Oorzaak:** Je gebruikt een gewone `var score = 0` in een script dat aan een node is gekoppeld. Als die node verdwijnt (bijv. bij het laden van een nieuwe scene), verdwijnt ook de variabele.

**Oplossing:** Zet de variabele in `global.gd` in plaats van in het node-script. Dat script blijft de hele speelsessie bestaan.

</details>

---

## Make-opdracht: score weergeven

Je hebt geleerd hoe global variables werken. Pas het nu zelf toe.

**Opdracht:** Maak een `Label`-node in je level-scene die de huidige score toont. De score moet automatisch bijwerken zodra je een muntje oppakt.

<details>
<summary>Tip</summary>

- Voeg een `Label` node toe aan je level-scene (klik met rechts op de root node → **Add Child Node** → zoek `Label`)
- Geef de Label een naam, bijv. `ScoreLabel`
- Koppel een script aan de Label
- Gebruik `_process(delta)` om elke frame de tekst bij te werken: `text = "Score: " + str(Global.score)`
- De `Global.score` wordt al bijgehouden in je muntje-script — je hoeft dat niet aan te passen

</details>

<details>
<summary>Antwoord</summary>

**Stappen:**
1. Open je level-scene
2. Klik met rechts op de root node → **Add Child Node** → kies `Label`
3. Hernoem de Label naar `ScoreLabel`
4. Koppel een script aan de Label (**Attach Script** → **Create**)
5. Schrijf dit script:

```gdscript
extends Label

func _process(delta: float) -> void:
    text = "Score: " + str(Global.score)
```

Zodra je een muntje oppakt, verhoogt `Global.score` in het muntje-script, en de Label toont de nieuwe waarde automatisch.

</details>
