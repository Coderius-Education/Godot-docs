---
sidebar_position: 11
---

# Animaties

In deze stap vervang je de statische `Sprite2D` door een `AnimatedSprite2D` zodat je karakter kan bewegen, rennen en springen met animaties.

## Wat ga je doen?

- `Sprite2D` vervangen door `AnimatedSprite2D`
- Drie animaties aanmaken: `idle`, `run` en `jump`
- De frames per animatie instellen vanuit je sprite sheet

## Stappen

1. Verwijder de bestaande `Sprite2D` node (klik met rechts → **Delete Node**)
2. Voeg een `AnimatedSprite2D` toe als child van `CharacterBody2D`
3. Selecteer de `AnimatedSprite2D` en klik in de Inspector op **SpriteFrames** → **New SpriteFrames**
4. Klik onderaan op het **SpriteFrames** paneel om het te openen
5. Maak drie animaties aan: `idle`, `run`, `jump`
6. Voeg voor elke animatie de juiste frames toe vanuit je sprite sheet

:::tip
Zet de **FPS** (frames per seconde) van elke animatie op een waarde die er soepel uitziet — probeer 8 of 10 als startpunt.
:::

<iframe width="100%" height="500px" src="https://www.youtube.com/embed/5V9f3MT86M8?start=712&end=868" title="Start Your Game Creation Journey Today! (Godot beginner tutorial)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Er gaat iets mis

<details>
<summary>Mijn animatie speelt niet af</summary>

**Oorzaak:** Er is geen `play()` aanroep in het script, of de naam van de animatie klopt niet.

**Oplossing:**
1. Controleer of je in het script `$AnimatedSprite2D.play("idle")` (of een andere animatienaam) aanroept
2. Controleer of de naam in het script **exact** overeenkomt met de naam in SpriteFrames (hoofdlettergevoelig!)
3. Controleer of de `AnimatedSprite2D` de juiste naam heeft in de Scene Tree — spreek hem aan met `$AnimatedSprite2D`

</details>

<details>
<summary>Mijn script geeft een fout: "Node not found: Sprite2D"</summary>

**Oorzaak:** Het script verwijst nog naar `$Sprite2D`, maar die node is vervangen door `$AnimatedSprite2D`.

**Oplossing:** Vervang alle verwijzingen naar `$Sprite2D` in je script door `$AnimatedSprite2D`.

</details>

<details>
<summary>De animatie bevriest op één frame</summary>

**Oorzaak:** De animatie is niet ingesteld op loopen, of er zit maar één frame in de animatie.

**Oplossing:**
- Selecteer de animatie in SpriteFrames en zet **Loop** aan (het herhaal-icoontje)
- Controleer of er meer dan één frame is toegevoegd

</details>
