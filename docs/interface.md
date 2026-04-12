---
sidebar_position: 3
---

# De Godot-interface

Nadat je Godot opent, zie je als eerste de **Project Manager**. Daarna — als je een project opent — kom je in de editor terecht. Op deze pagina leer je wat je te zien krijgt en waar alles staat.

## De Project Manager

Dit is het startscherm van Godot. Het opent automatisch als je Godot start.

Hier kun je:
- een **bestaand project** importeren of openen
- een **nieuw project** aanmaken

In de volgende stap open je een project dat je docent heeft klaargezet. Je hoeft nu nog niets aan te klikken.

## De editor

Zodra je een project opent, zie je de editor. De editor bestaat uit vijf vaste gebieden:

```
┌─────────────────────────────────────────────────────┐
│                   Toolbar (▶ Stop ⚙)                │
├──────────────┬──────────────────────┬────────────────┤
│              │                      │                │
│    Scene     │      Viewport        │   Inspector    │
│   (links)    │     (midden)         │   (rechts)     │
│              │                      │                │
├──────────────┴──────────────────────┴────────────────┤
│         FileSystem / Uitvoer (onderin)               │
└─────────────────────────────────────────────────────┘
```

### Viewport (midden)
Hier zie je je gamewereld. Alles wat je in je scène plaatst — een karakter, een platform, een achtergrond — is hier zichtbaar. Je kunt nodes hierin slepen om ze te positioneren.

### Scene-paneel (linksboven)
Dit is de **Scene Tree**: een overzicht van alle nodes in de huidige scène. Een node is een bouwblok — je karakter is een node, een platform is een node, een geluid is een node. Nodes kunnen children hebben (kleinere onderdelen).

### Inspector (rechtsboven)
Als je een node selecteert in de Scene Tree, zie je hier de eigenschappen van die node. Hier stel je dingen in zoals positie, grootte en texture.

### FileSystem (linksonder)
Alle bestanden van je project staan hier: scripts, afbeeldingen, scènes. Je kunt bestanden hiervandaan naar de editor slepen.

### Uitvoer / Debugger (onderin)
Hier verschijnen berichten van `print()` en foutmeldingen als je je spel runt. Als er iets misgaat, kijk je hier als eerste.

## Het spel starten en stoppen

| Actie | Knop | Sneltoets |
|---|---|---|
| Spel starten | ▶ (rechtsboven) | `F5` |
| Spel stoppen | ■ (rechtsboven) | `F8` |

## Er gaat iets mis

<details>
<summary>Ik zie een grijs scherm / de editor laadt niet volledig</summary>

**Oorzaak:** Het project is nog niet correct geïmporteerd, of Godot heeft nog niet alle bestanden verwerkt.

**Oplossing:**
- Wacht even — Godot importeert bestanden op de achtergrond bij de eerste keer openen
- Als het lang duurt: sluit Godot, open het opnieuw en wacht tot de statusbalk onderin klaar is

</details>

<details>
<summary>Ik zie de Scene Tree of Inspector niet</summary>

**Oorzaak:** Een paneel is per ongeluk gesloten of verschoven.

**Oplossing:**
- Ga naar **Editor** → **Editor Layout** → **Default**
- Dit herstelt de standaardindeling van de editor

</details>
