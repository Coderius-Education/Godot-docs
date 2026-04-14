---
sidebar_position: 12
---

# Animaties in GDScript

## Informatie opvragen
We hebben drie stukjes informatie nodig:
1. Bevindt onze hoofdpersoon zich op de grond?
2. Naar welke kant beweegt onze hoofdpersoon zich?
3. Staat onze hoofdpersoon stil?

We gaan uiteraard drie `variabelen` aanmaken om deze informatie bij te houden.
Plaats dit bovenaan je script (onder `JUMP_VELOCITY` en boven `_physics_process`):

```gdscript
var op_de_grond
var staat_stil
```

<details>
    <summary>Bekijk het antwoord</summary>

```gdscript
extends CharacterBody2D

const SPEED = 300.0
const JUMP_VELOCITY = -800.0

var op_de_grond
var staat_stil

func _physics_process(delta: float) -> void:
	# Add the gravity.
	if not is_on_floor():
		velocity += get_gravity() * delta

	# Handle jump.
	if Input.is_action_just_pressed("ui_accept") and is_on_floor():
		velocity.y = JUMP_VELOCITY

	# Get the input direction and handle the movement/deceleration.
	# As good practice, you should replace UI actions with custom gameplay actions.
	var direction := Input.get_axis("ui_left", "ui_right")
	if direction:
		velocity.x = direction * SPEED
	else:
		velocity.x = move_toward(velocity.x, 0, SPEED)		
		
	move_and_slide()
```
</details>

## op_de_grond
Welke functie kunnen we gebruiken om te weten of onze hoofdpersoon op de grond staat?
- Geef de variabele `op_de_grond` de waarde van deze functie.
- Hoe zou je in GDScript kunnen zeggen dat als je hoofdpersoon niet op de grond staat, dat dan de animatie `jump` afgespeeld moet worden?

<details>
    <summary>Bekijk het antwoord</summary>

```gdscript
extends CharacterBody2D

const SPEED = 300.0
const JUMP_VELOCITY = -800.0

var op_de_grond
var staat_stil

func _physics_process(delta: float) -> void:
	# Add the gravity.
	if not is_on_floor():
		velocity += get_gravity() * delta

	# Handle jump.
	if Input.is_action_just_pressed("ui_accept") and is_on_floor():
		velocity.y = JUMP_VELOCITY

	# Get the input direction and handle the movement/deceleration.
	# As good practice, you should replace UI actions with custom gameplay actions.
	var direction := Input.get_axis("ui_left", "ui_right")
	if direction:
		velocity.x = direction * SPEED
	else:
		velocity.x = move_toward(velocity.x, 0, SPEED)	
	
	op_de_grond = is_on_floor()
	if not op_de_grond:
		$AnimatedSprite2D.play('jump')
		
	move_and_slide()
```

</details>

## Stilstaan
`velocity.x` houdt de beweging op de horizontale as bij.
- Bij welke waarde van `velocity.x` staat je hoofdpersoon stil?
- Hoe zou je de animatie `idle` aan kunnen zetten als de hoofdpersoon stilstaat?

<details>
    <summary>Bekijk het antwoord</summary>

```gdscript
extends CharacterBody2D

const SPEED = 300.0
const JUMP_VELOCITY = -800.0

var op_de_grond
var staat_stil

func _physics_process(delta: float) -> void:
	# Add the gravity.
	if not is_on_floor():
		velocity += get_gravity() * delta

	# Handle jump.
	if Input.is_action_just_pressed("ui_accept") and is_on_floor():
		velocity.y = JUMP_VELOCITY

	# Get the input direction and handle the movement/deceleration.
	# As good practice, you should replace UI actions with custom gameplay actions.
	var direction := Input.get_axis("ui_left", "ui_right")
	if direction:
		velocity.x = direction * SPEED
	else:
		velocity.x = move_toward(velocity.x, 0, SPEED)	
	
	staat_stil = velocity.x == 0	
	if staat_stil:
		$AnimatedSprite2D.play('idle')
	op_de_grond = is_on_floor()
	if not op_de_grond:
		$AnimatedSprite2D.play('jump')
		
	move_and_slide()
```

</details>

## Richting
`velocity.x` houdt de beweging op de horizontale as bij.
- Bij welke waarde van `velocity.x` beweegt je hoofdpersoon naar links? En bij welke waarde naar rechts?
- Hoe zou je de animatie `run` aan als je hoofdpersoon niet stilstaat?
- We gebruiken `$AnimatedSprite2D.flip_h = true` om je afbeelding te spiegelen (dus dat de hoofdpersoon naar links kijkt in plaats van naar rechts). Hoe zou je dit kunnen gebruiken in je script?

<details>
    <summary>Bekijk het antwoord</summary>

```gdscript
extends CharacterBody2D

const SPEED = 300.0
const JUMP_VELOCITY = -800.0

var op_de_grond
var staat_stil

func _physics_process(delta: float) -> void:
	# Add the gravity.
	if not is_on_floor():
		velocity += get_gravity() * delta

	# Handle jump.
	if Input.is_action_just_pressed("ui_accept") and is_on_floor():
		velocity.y = JUMP_VELOCITY

	# Get the input direction and handle the movement/deceleration.
	# As good practice, you should replace UI actions with custom gameplay actions.
	var direction := Input.get_axis("ui_left", "ui_right")
	if direction:
		velocity.x = direction * SPEED
	else:
		velocity.x = move_toward(velocity.x, 0, SPEED)	
	
	staat_stil = velocity.x == 0	
	if staat_stil:
		$AnimatedSprite2D.play('idle')
	op_de_grond = is_on_floor()
	if not op_de_grond:
		$AnimatedSprite2D.play('jump')
		
	if velocity.x > 0:
		$AnimatedSprite2D.play('run')
		$AnimatedSprite2D.flip_h = false	
	if velocity.x < 0:
		$AnimatedSprite2D.play('run')
		$AnimatedSprite2D.flip_h = true	
		
	move_and_slide()
```

</details>

---

## Make-opdracht: landing-animatie

Je hebt nu `idle`, `run` en `jump` werkend. Maak nu zelf een extra animatie.

**Opdracht:** Voeg een `landing`-animatie toe die **één keer** afspeelt op het moment dat de speler landt (van in de lucht naar op de grond gaat).

<details>
<summary>Tip</summary>

Je moet het verschil detecteren tussen de vorige frame en de huidige frame:
- Vorige frame: de speler was **niet** op de grond
- Huidige frame: de speler **is** op de grond

Gebruik een extra variabele `was_op_de_grond` die je bijhoudt vóórdat je `op_de_grond` bijwerkt.

Om een animatie één keer af te spelen (niet loopen), gebruik je `$AnimatedSprite2D.play("landing")` en zet je in SpriteFrames **Loop uit** voor die animatie.

</details>

<details>
<summary>Antwoord</summary>

Voeg de variabele toe bovenaan het script:
```gdscript
var was_op_de_grond = true
```

Vervang het animatie-gedeelte in `_physics_process` door:
```gdscript
was_op_de_grond = op_de_grond
op_de_grond = is_on_floor()

# Landing detecteren: vorige frame in lucht, nu op de grond
if not was_op_de_grond and op_de_grond:
    $AnimatedSprite2D.play('landing')
elif not op_de_grond:
    $AnimatedSprite2D.play('jump')
elif staat_stil:
    $AnimatedSprite2D.play('idle')
elif velocity.x > 0:
    $AnimatedSprite2D.play('run')
    $AnimatedSprite2D.flip_h = false
elif velocity.x < 0:
    $AnimatedSprite2D.play('run')
    $AnimatedSprite2D.flip_h = true
```

**Vergeet niet** om in SpriteFrames de `landing`-animatie aan te maken en **Loop uit te zetten**, anders speelt hij continu opnieuw af.

</details>