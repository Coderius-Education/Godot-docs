---
sidebar_position: 6
---

# Achtergrond

## Wat ga je doen?

- Een achtergrondafbeelding toevoegen aan je scène
- De afbeelding schalen zodat hij het hele scherm vult

:::note
Heb je de assets nog niet gedownload? Volg dan eerst de stappen op de pagina [Bestanden downloaden](bestanden-downloaden).
:::

Als je `Green.png` hebt toegevoegd, zie je dat het erg klein is. Vergroot de afbeelding in de viewport tot de randen van de blauwe lijnen (de schermgrenzen).

<iframe width="100%" height="500px" src="https://www.youtube.com/embed/5V9f3MT86M8?start=130&end=240" title="Start Your Game Creation Journey Today! (Godot beginner tutorial)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Er gaat iets mis

<details>
<summary>Mijn afbeelding ziet er wazig uit / pixel art is niet scherp</summary>

**Oorzaak:** Godot gebruikt standaard een blur-filter (lineaire filtering) op afbeeldingen. Daardoor worden pixel art-afbeeldingen vloeiend geschaald in plaats van scherp.

**Oplossing:**
1. Ga naar **Project** → **Project Settings**
2. Zoek naar `Default Texture Filter`
3. Verander `Linear` naar `Nearest`

Na deze instelling worden alle afbeeldingen in je project scherp weergegeven.

</details>
