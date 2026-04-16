---
sidebar_position: 4
---

# Scène

In Godot is alles opgebouwd uit **nodes** en **scènes**.

- Een **node** is een bouwblok met een specifieke taak: een afbeelding tonen, botsingen detecteren, geluid afspelen.
- Een **scène** is een groep nodes die samenwerken — opgeslagen als één herbruikbaar bestand.

Je level is een scène. Je karakter is een scène. Een muntje is een scène. Alles wat je maakt, sla je op als scène (`.tscn`).

In deze stap maak je de eerste scène aan — dit is de "wereld" waar je spel zich afspeelt.

## Wat ga je doen?

- Een nieuwe scène aanmaken met een `Node2D` als hoofdnode
- De scène opslaan als `world.tscn`

## Stappen

1. Klik op **Scene** → **New Scene** (of klik op het `+` tabblad bovenaan)
2. Kies **2D Scene** — dit maakt een `Node2D` als root node aan
3. Sla de scène op met `Ctrl + S` en geef het de naam `world.tscn`

<iframe width="100%" height="500px" src="https://www.youtube.com/embed/5V9f3MT86M8?start=66&end=128" title="Start Your Game Creation Journey Today! (Godot beginner tutorial)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Er gaat iets mis

<details>
<summary>Ik zie een foutmelding over een lege scène als ik het spel start</summary>

**Oorzaak:** Godot weet niet welke scène als startscène moet worden geladen.

**Oplossing:**
1. Ga naar **Project** → **Project Settings**
2. Klik op het tabblad **General**
3. Zoek naar **Main Scene** (onder Application → Run)
4. Klik op het mapje en selecteer `world.tscn`

</details>

<details>
<summary>Ik kan mijn scène niet opslaan / de naam verandert niet</summary>

**Oorzaak:** Je hebt nog niet `Ctrl + S` gebruikt, of de scène heeft nog geen naam gekregen.

**Oplossing:**
- Druk op `Ctrl + S`
- Typ `world` als bestandsnaam
- Klik op **Save**

</details>
