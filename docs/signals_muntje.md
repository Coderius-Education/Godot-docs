---
sidebar_position: 12
---

# Signals & een muntje oppakken

In deze les leer je wat **signals** zijn en hoe je ze gebruikt om een muntje op te pakken.

## Wat zijn signals?

Een signal is een bericht dat een node verstuurt wanneer er iets gebeurt. Andere nodes kunnen naar dat signal **luisteren** en daar dan op reageren.

Denk aan een deurbel:
- De **deurbel** stuurt een signaal als iemand erop drukt
- **Jij** luistert naar dat signaal en doet de deur open

In Godot werkt het precies zo:
- Een node **stuurt** een signal (bijv. "er is een botsing!")
- Een andere node **vangt** dat signal op en voert code uit

## Het muntje maken

### Stap 1: Maak een nieuwe scene

Maak een nieuwe scene aan voor het muntje:

1. Ga naar **Scene** → **New Scene**
2. Kies **Other Node** en zoek naar `Area2D`
3. Hernoem de `Area2D` node naar `Muntje`

### Stap 2: Voeg een sprite toe

1. Klik met rechts op de `Muntje` node → **Add Child Node**
2. Voeg een `Sprite2D` toe
3. Sleep je muntje-afbeelding naar de **Texture** eigenschap in de Inspector

### Stap 3: Voeg een collision shape toe

Zonder collision shape kan Godot niet detecteren dat je karakter het muntje raakt.

1. Klik met rechts op de `Muntje` node → **Add Child Node**
2. Voeg een `CollisionShape2D` toe
3. Kies in de Inspector bij **Shape** een vorm (bijv. `CircleShape2D`)
4. Pas de grootte aan zodat het over het muntje past

Je scene tree ziet er nu zo uit:

```
Muntje (Area2D)
├── Sprite2D
└── CollisionShape2D
```

### Stap 4: Sla de scene op

Sla de scene op als `muntje.tscn` (`Ctrl + S`).

## Het signal koppelen

Nu gaan we ervoor zorgen dat er iets gebeurt wanneer je karakter het muntje raakt.

### Stap 1: Voeg een script toe aan het muntje

1. Selecteer de `Muntje` node
2. Klik op het script-icoontje (📜) bovenaan, of klik met rechts → **Attach Script**
3. Klik op **Create**

### Stap 2: Koppel het signal

De `Area2D` node heeft een ingebouwd signal genaamd `body_entered`. Dit signal wordt verstuurd wanneer een `CharacterBody2D` (jouw karakter) het muntje raakt.

1. Selecteer de `Muntje` node
2. Ga naar het **Node** tabblad (rechts naast de Inspector)
3. Dubbelklik op `body_entered`
4. Kies de `Muntje` node als ontvanger en klik op **Connect**

Godot maakt nu automatisch een functie aan in je script:

```gdscript
func _on_body_entered(body: Node2D) -> void:
    pass # Hier komt je code
```

### Stap 3: Schrijf de code

Vervang de `pass` met code die het muntje laat verdwijnen:

```gdscript
extends Area2D

func _on_body_entered(body: Node2D) -> void:
    print("Muntje opgepakt!")
    queue_free()  # Verwijdert het muntje uit het spel
```

| Code | Wat doet het? |
|---|---|
| `_on_body_entered(body)` | Wordt aangeroepen wanneer een body het muntje raakt |
| `body` | De node die het muntje raakt (jouw karakter) |
| `queue_free()` | Verwijdert deze node (het muntje) uit het spel |

## Het muntje in je level plaatsen

1. Open je **level/world scene**
2. Sleep het bestand `muntje.tscn` vanuit het FileSystem paneel naar je level
3. Plaats het muntje waar je wilt
4. Je kunt het muntje meerdere keren slepen om meerdere muntjes te plaatsen

## Samenvatting

| Begrip | Uitleg |
|---|---|
| **Signal** | Een bericht dat een node verstuurt wanneer er iets gebeurt |
| **`body_entered`** | Signal van `Area2D` — wordt verstuurd bij een botsing |
| **`queue_free()`** | Verwijdert een node uit het spel |
| **`Area2D`** | Een node die botsingen kan detecteren zonder fysica (geen zwaartekracht, geen botsen) |
| **Connect** | Een signal koppelen aan een functie |
