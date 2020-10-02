# 🌈 Chromataxy

**Chromataxy** (abbreviated ***coxy***) is a perceptually intuitive **c**olor **n**aming **s**ystem based on the ***Lightness-Chroma-Hue*** *color space* that covers a sizeable spectrum of colors while boasting a negligible learning curve.
 
 ### Features

* **Perceptually uniform**<sup>[1]</sup> colours
* **Semantically sound** names
* **ii8n**<sup>[2]</sup> friendly 
* **Accessible** by design

### Why not other Color Spaces?

* **HSL**  While this transformation of RGB color space is more intuitive in its representation, the *lightness* in *HSL* does *not* represent *perceptual lightness* but rather *relative brightness*.
* **Munsell**  : While colors were loosely based on perception, they were mostly inconsistent and dependent on the environment. Moreover, quantitative differences could only be defined over a single color attribute<sup>[3]</sup>.
* **NCS** : Based on the psychophysics of color perception, *NCS* is better than *Munsell* as environmental lighting conditions do not impact color choices. However, this system must not be used to model perceived color differences<sup>[4]</sup>, which is necessary requirement for a naming system to be accessible.
* **LAB** : Though the *CIELAB* color space represents a broader color gamut with better perceptual accuracy than the *Munsell* System, the parameters **a*** and **b*** makes it harder to arrive at a mental model.

### How does it work?
<h4> Degrees of Hue Table </h4>

All the numbers have units in degrees (not radians).

| **Colour**           | **Coolest** | **Cooler** | **Cool** | **Base** | **Warm** | **Warmer** | **Warmest** |
| -------------------- | ----------- | ---------- | -------- | -------- | -------- | ---------- | ----------- |
| **Rose**             | 1           | 4          | 7        | 10       | 13       | 16         | 19          |
| **Red**              | 21          | 24         | 27       | 30       | 33       | 36         | 39          |
| **Orange**           | 41          | 44         | 47       | 50       | 53       | 56         | 59          |
| **Amber**            | 61          | 64         | 67       | 70       | 73       | 76         | 79          |
| **Yellow**           | 81          | 84         | 87       | 90       | 93       | 96         | 99          |
| **Chartreuse Green** | 101         | 104        | 107      | 110      | 113      | 116        | 119         |
| **Green**            | 121         | 124        | 127      | 130      | 133      | 136        | 139         |
| **Spring Green**     | 141         | 144        | 147      | 150      | 153      | 156        | 159         |
| **Teal**             | 161         | 164        | 167      | 170      | 173      | 176        | 179         |
| **Cyan**             | 181         | 184        | 187      | 190      | 193      | 196        | 199         |
| **Cobalt Blue**      | 201         | 204        | 207      | 210      | 213      | 216        | 219         |
| **Sky Blue**         | 221         | 224        | 227      | 230      | 233      | 236        | 239         |
| **Azure Blue**       | 241         | 244        | 247      | 250      | 253      | 256        | 259         |
| **Blue**             | 261         | 264        | 267      | 270      | 273      | 276        | 279         |
| **Indigo**           | 281         | 284        | 287      | 290      | 293      | 296        | 299         |
| **Violet**           | 301         | 304        | 307      | 310      | 313      | 316        | 319         |
| **Magenta**          | 321         | 324        | 327      | 330      | 333      | 336        | 339         |
| **Pink**             | 341         | 344        | 347      | 350      | 353      | 356        | 359         |

This results in a whopping **126 hue variations per combination** of chroma and lightness. The corresponding **Extended Backur Naur Form** definition for validating the hue color tokens is as follows: 

```shell
<hue> ::= (<temp> <space>)? <base_color>
<base_color> ::= (<rose> | <red> | <orange> | <amber> | <yellow> | <chartreuse_green> | <green> | <spring_green> | <teal> | <cyan> | <cobalt_blue> | <sky_blue> | <azure_blue> | <blue> | <indigo> | <violet> | <magenta> | <pink>)
<rose> ::= ("r" | "R") "ose"
<red> ::= ("r" | "R") "ed"
<orange> ::= ("o" | "O") "range"
<amber> ::= ("a" | "A") "mber"
<yellow> ::= ("y" | "Y") "ellow"
<green> ::= ("g" | "G") "reen"
<chartreuse_green> ::= ("c" | "C") "hartreuse" <space>? <green>
<spring_green> ::= ("s" | "S") "pring" <space>? <green>
<teal> ::= ("t" | "T") "eal"
<cyan> ::= ("c" | "C") "yan"
<blue> ::= ("b" | "B") "lue"
<cobalt_blue> ::= ("c" | "C") "obalt" <space>? <blue>
<sky_blue> ::= ("s" | "S") "ky" <space>? <blue>
<azure_blue> ::= ("a" | "A") "zure" <space>? <blue>
<indigo> ::= ("i" | "I") "ndigo"
<violet> ::= ("v" | "V") "iolet"
<magenta> ::= ("m" | "M") "agenta"
<pink> ::= ("p" | "P") "ink"
<temp> ::= (<cool> | <warm>)
<cool> ::= ("c" | "C") "ool" ("er"? | "est"?)
<warm> ::= ("w" | "W") "arm" ("er"? | "est"?)
<space> ::= "-" | " "
```

---

### Footnotes

[**1**]: *A system is perceptually uniform if a small perturbation to a component value is approximately equally perceptible across the range of that value*. In terms of colour spaces, a small degree of change between hues across the range (0°-360°) correspond to a similar increase in chroma and lightness that are perceptually equivalent under natural vision.

[**2**]: Abbreviation for Internationalisation, which in this context, refers to multilingual compatibility.

[**3**]: Modern Color Models - Munsell Color System. http://www.handprint.com/HP/WCL/color7.html#MUNSELL

[**4**]: Modern Color Models - Swedish Natural Color System. http://www.handprint.com/HP/WCL/color7.html#NCS 
