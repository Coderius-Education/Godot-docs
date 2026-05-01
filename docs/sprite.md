---
sidebar_position: 9
---

# Sprite

In deze stap voeg je een speelbaar karakter toe aan je scène. Het karakter bestaat uit drie nodes die samenwerken.

## Wat ga je doen?

- Een `CharacterBody2D` node aanmaken als basis voor je karakter
- Een `Sprite2D` toevoegen zodat je karakter zichtbaar is
- Een `CollisionShape2D` toevoegen zodat je karakter kan botsen

## Stappen

1. Klik met rechts in de Scene Tree → **Add Child Node**
2. Zoek naar `CharacterBody2D` en voeg hem toe
3. Klik met rechts op de `CharacterBody2D` → **Add Child Node** → voeg `Sprite2D` toe
4. Klik met rechts op de `CharacterBody2D` → **Add Child Node** → voeg `CollisionShape2D` toe
5. Selecteer de `Sprite2D` en sleep je karakter-afbeelding naar het **Texture** veld in de Inspector
6. Selecteer de `CollisionShape2D` en kies bij **Shape** in de Inspector een `CapsuleShape2D`
7. Pas de grootte aan zodat het over je karakter-afbeelding past

Je scene tree ziet er zo uit:
```
CharacterBody2D
├── Sprite2D
└── CollisionShape2D
```

<iframe width="100%" height="500px" src="https://www.youtube.com/embed/5V9f3MT86M8?start=365&end=570" title="Start Your Game Creation Journey Today! (Godot beginner tutorial)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Er gaat iets mis

<details>
<summary>Mijn karakter valt door de vloer</summary>

**Oorzaak:** De `CollisionShape2D` ontbreekt of is niet goed ingesteld, of de tiles hebben geen collision.

**Oplossing:**
1. Controleer of je `CharacterBody2D` een `CollisionShape2D` child heeft
2. Controleer of die `CollisionShape2D` een **Shape** heeft ingesteld (bijv. `CapsuleShape2D`)
3. Controleer of je TileMapLayer een **Physics Layer** heeft — zie de [Level bouwen: Tilemap & Collision](./tilemap_en_collision.md) pagina

</details>

<details>
<summary>Ik zie mijn karakter niet in het scherm</summary>

**Oorzaak:** De `Sprite2D` heeft geen texture, of het karakter staat buiten het zichtbare gebied.

**Oplossing:**
- Selecteer de `Sprite2D` en sleep een afbeelding naar het **Texture** veld in de Inspector
- Klik op je `CharacterBody2D` en gebruik de pijltjes in de viewport om hem naar het midden te slepen

</details>

<details>
<summary>Ik krijg een waarschuwing bij CollisionShape2D</summary>

**Oorzaak:** De `CollisionShape2D` heeft nog geen shape.

**Oplossing:**
- Selecteer de `CollisionShape2D`
- Klik in de Inspector op het **Shape** veld
- Kies `New CapsuleShape2D`

</details>
