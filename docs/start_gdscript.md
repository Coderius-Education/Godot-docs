---
sidebar_position: 11
---

# Start programmeertaal GDScript

Je hebt nu een werkende scène met een bewegend karakter. Maar om het spel echt te laten doen wat jij wil, moet je leren programmeren in **GDScript** — de programmeertaal van Godot.

## Waarom GDScript?

In de vorige stap gebruikte je al het standaard bewegingsscript van Godot. Dat script is ook GDScript. In de komende stappen ga je dat script zelf begrijpen en aanpassen.

## Wat ga je leren?

Dit zijn de GDScript-concepten die je in dit project nodig hebt:

| Concept | Waarvoor gebruik je het? |
|---|---|
| `var` | Informatie opslaan (bijv. snelheid, score) |
| `const` | Vaste waarden die niet veranderen (bijv. `SPEED`) |
| `if` / `else` | Beslissingen nemen (bijv. "als op de grond, dan springen") |
| `func` | Code groeperen in een herbruikbare functie |
| `print()` | Waarden bekijken tijdens het testen |

## De tutorial

We volgen [deze interactieve tutorial](https://gdquest.github.io/learn-gdscript/) om de basis te leren.

Maak de volgende lessen — de afbeelding hieronder toont welke lessen je nodig hebt:

![gdscript leren](images/gdscript.png)

:::tip
Je hoeft niet alle lessen te maken. Focus op de lessen over:
- **Variabelen** (`var`)
- **Functies** (`func`)
- **Voorwaarden** (`if` / `else`)
- **Vergelijkingsoperatoren** (`==`, `>`, `<`)
- **`print()`**

Die dekken precies de concepten die je in dit project gaat gebruiken.
:::

## Test het in je eigen project!

De GDQuest tutorial is handig om de syntax te leren, maar het is nog leuker om het direct in je eigen game te zien werken.

1. Ga in Godot naar de script van je karakter (`CharacterBody2D`).
2. Voeg de `_ready()` functie toe. Deze functie wordt één keer uitgevoerd, helemaal aan het begin zodra het spel start. 
3. Maak binnen die functie een variabele aan en gebruik `print()`:

```gdscript
func _ready():
    var levens = 3
    print("Het spel is gestart!")
    print("Ik heb ", levens, " levens.")
```

4. Druk op `F5` om je spel te starten.
5. Kijk onderin je Godot-scherm op het tabblad **Uitvoer** (of **Output**). Als het goed is, zie je jouw tekst daar verschijnen!

Dit laat zien hoe GDScript in jouw game werkt en informatie kan printen. We gaan dit 'Uitvoer' tabblad later vaak gebruiken om foutjes op te sporen.

## Wat daarna?

Na deze lessen ga je het bewegingsscript van je karakter stap voor stap uitleggen en aanpassen. Je hoeft de tutorial niet perfect te begrijpen — als je de bovenstaande concepten globaal kent, kom je al een heel eind.

Tijdens de volgende lessen kun je de [GDScript cheatsheet](./cheatsheet.md) gebruiken als naslagwerk voor syntax.
