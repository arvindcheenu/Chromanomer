# 💄 **Sass Api**

- [💄 **Sass Api**](#----sass-api--)
    + [🎛️ **Functions**](#------functions--)
      - [#️⃣ percentMatch(\$str, \$substr) ⇒ `Number`](#----percentmatch---str----substr-----number-)
      - [#️⃣ cono(\$name, \$opacity) ⇒ `Sass::Color`](#----cono---name----opacity-----sass--color-)
      - [#️⃣ get-all-matching(\$substring,\$opacity) ⇒ `Sass::List`](#----get-all-matching---substring---opacity-----sass--list-)
    + [🎛️ **Mixins**](#------mixins--)
      - [#️⃣ color(\$name, \$opacity) ⇒ `Sass::Mixin`](#----color---name----opacity-----sass--mixin-)
      - [#️⃣ background-color(\$name, \$opacity) ⇒ `Sass::Mixin`](#----background-color---name----opacity-----sass--mixin-)
      - [#️⃣ text-decoration-color(\$name, \$opacity) ⇒ `Sass::Mixin`](#----text-decoration-color---name----opacity-----sass--mixin-)
      - [#️⃣ text-emphasis-color(\$name, \$opacity) ⇒ `Sass::Mixin`](#----text-emphasis-color---name----opacity-----sass--mixin-)
      - [#️⃣ caret-color(\$name, \$opacity) ⇒ `Sass::Mixin`](#----caret-color---name----opacity-----sass--mixin-)
      - [#️⃣ border-color(\$name, \$opacity) ⇒ `Sass::Mixin`](#----border-color---name----opacity-----sass--mixin-)
      - [#️⃣ border-left-color(\$name, \$opacity) ⇒ `Sass::Mixin`](#----border-left-color---name----opacity-----sass--mixin-)
      - [#️⃣ border-right-color(\$name, \$opacity) ⇒ `Sass::Mixin`](#----border-right-color---name----opacity-----sass--mixin-)
      - [#️⃣ border-top-color(\$name, \$opacity) ⇒ `Sass::Mixin`](#----border-top-color---name----opacity-----sass--mixin-)
      - [#️⃣ border-bottom-color(\$name, \$opacity) ⇒ `Sass::Mixin`](#----border-bottom-color---name----opacity-----sass--mixin-)
      - [#️⃣ border-block-start-color(\$name, \$opacity) ⇒ `Sass::Mixin`](#----border-block-start-color---name----opacity-----sass--mixin-)
      - [#️⃣ border-block-end-color(\$name, \$opacity) ⇒ `Sass::Mixin`](#----border-block-end-color---name----opacity-----sass--mixin-)
      - [#️⃣ border-inline-start-color(\$name, \$opacity) ⇒ `Sass::Mixin`](#----border-inline-start-color---name----opacity-----sass--mixin-)
      - [#️⃣ border-inline-end-color(\$name, \$opacity) ⇒ `Sass::Mixin`](#----border-inline-end-color---name----opacity-----sass--mixin-)
      - [#️⃣ outline-color(\$name, \$opacity) ⇒ `Sass::Mixin`](#----outline-color---name----opacity-----sass--mixin-)
    + [ℹ️ **Examples**](#-----examples--)

### 🎛️ **Functions**
**Kind**: *Exported Sass Module* 
#### #️⃣ percentMatch(\$str, \$substr) ⇒ `Number` 
Finds the Percentage Match between two Strings.

**Kind**: *Exported Sass Function* 
|Param|Type|Description|
|--|--|--|
| **`$str`** | `String` | The Base String to be compared to. |
| **`$substr`** | `String` | The Substring to compare with |
#### #️⃣ cono(\$name, \$opacity) ⇒ `Sass::Color`  
Finds the Nearest Matched Color for the given Cono Color. 

**Kind**: *Exported Sass Function* 
|Param|Type|Description|
|--|--|--|
| **`$name`** | `String` | The Cono Name to Lookup. |
| **`$opacity`** | `Float` | The Opacity to apply to returned color. |
#### #️⃣ get-all-matching(\$substring,\$opacity) ⇒ `Sass::List` 
Finds the all Matched Color Strings for the given Cono Color Substring. 

**Kind**: *Exported Sass Function* 
|Param|Type|Description|
|--|--|--|
| **`$substring`** | `String` | The Cono Name Substring to Lookup. |
| **`$opacity`** | `Float` | The Opacity to apply to returned colors in List. |
### 🎛️ **Mixins**
**Kind**: *Exported Sass Module*

#### #️⃣ color(\$name, \$opacity) ⇒ `Sass::Mixin`  
Finds the Nearest Matched Color for the given Cono Color and adds it to the `color` property. 

**Kind**: *Exported Sass Function* 
|Param|Type|Description|
|--|--|--|
| **`$name`** | `String` | The Cono Name to Lookup. |
| **`$opacity`** | `Float` | The Opacity to apply to returned color. |

#### #️⃣ background-color(\$name, \$opacity) ⇒ `Sass::Mixin`  
Finds the Nearest Matched Color for the given Cono Color and adds it to the `background-color` property. 

**Kind**: *Exported Sass Function* 
|Param|Type|Description|
|--|--|--|
| **`$name`** | `String` | The Cono Name to Lookup. |
| **`$opacity`** | `Float` | The Opacity to apply to returned color. |

#### #️⃣ text-decoration-color(\$name, \$opacity) ⇒ `Sass::Mixin`  
Finds the Nearest Matched Color for the given Cono Color and adds it to the `text-decoration-color` property. 

**Kind**: *Exported Sass Function* 
|Param|Type|Description|
|--|--|--|
| **`$name`** | `String` | The Cono Name to Lookup. |
| **`$opacity`** | `Float` | The Opacity to apply to returned color. |

#### #️⃣ text-emphasis-color(\$name, \$opacity) ⇒ `Sass::Mixin`  
Finds the Nearest Matched Color for the given Cono Color and adds it to the `text-emphasis-color` property. 

**Kind**: *Exported Sass Function* 
|Param|Type|Description|
|--|--|--|
| **`$name`** | `String` | The Cono Name to Lookup. |
| **`$opacity`** | `Float` | The Opacity to apply to returned color. |

#### #️⃣ caret-color(\$name, \$opacity) ⇒ `Sass::Mixin`  
Finds the Nearest Matched Color for the given Cono Color and adds it to the `caret-color` property. 

**Kind**: *Exported Sass Function* 
|Param|Type|Description|
|--|--|--|
| **`$name`** | `String` | The Cono Name to Lookup. |
| **`$opacity`** | `Float` | The Opacity to apply to returned color. |

#### #️⃣ border-color(\$name, \$opacity) ⇒ `Sass::Mixin`  
Finds the Nearest Matched Color for the given Cono Color and adds it to the `border-color` property. 

**Kind**: *Exported Sass Function* 
|Param|Type|Description|
|--|--|--|
| **`$name`** | `String` | The Cono Name to Lookup. |
| **`$opacity`** | `Float` | The Opacity to apply to returned color. |

#### #️⃣ border-left-color(\$name, \$opacity) ⇒ `Sass::Mixin`  
Finds the Nearest Matched Color for the given Cono Color and adds it to the `border-left-color` property. 

**Kind**: *Exported Sass Function* 
|Param|Type|Description|
|--|--|--|
| **`$name`** | `String` | The Cono Name to Lookup. |
| **`$opacity`** | `Float` | The Opacity to apply to returned color. |

#### #️⃣ border-right-color(\$name, \$opacity) ⇒ `Sass::Mixin`  
Finds the Nearest Matched Color for the given Cono Color and adds it to the `border-right-color` property. 

**Kind**: *Exported Sass Function* 
|Param|Type|Description|
|--|--|--|
| **`$name`** | `String` | The Cono Name to Lookup. |
| **`$opacity`** | `Float` | The Opacity to apply to returned color. |

#### #️⃣ border-top-color(\$name, \$opacity) ⇒ `Sass::Mixin`  
Finds the Nearest Matched Color for the given Cono Color and adds it to the `border-top-color` property. 

**Kind**: *Exported Sass Function* 
|Param|Type|Description|
|--|--|--|
| **`$name`** | `String` | The Cono Name to Lookup. |
| **`$opacity`** | `Float` | The Opacity to apply to returned color. |

#### #️⃣ border-bottom-color(\$name, \$opacity) ⇒ `Sass::Mixin`  
Finds the Nearest Matched Color for the given Cono Color and adds it to the `border-bottom-color` property. 

**Kind**: *Exported Sass Function* 
|Param|Type|Description|
|--|--|--|
| **`$name`** | `String` | The Cono Name to Lookup. |
| **`$opacity`** | `Float` | The Opacity to apply to returned color. |

#### #️⃣ border-block-start-color(\$name, \$opacity) ⇒ `Sass::Mixin`  
Finds the Nearest Matched Color for the given Cono Color and adds it to the `border-block-start-color` property. 

**Kind**: *Exported Sass Function* 
|Param|Type|Description|
|--|--|--|
| **`$name`** | `String` | The Cono Name to Lookup. |
| **`$opacity`** | `Float` | The Opacity to apply to returned color. |

#### #️⃣ border-block-end-color(\$name, \$opacity) ⇒ `Sass::Mixin`  
Finds the Nearest Matched Color for the given Cono Color and adds it to the `border-block-end-color` property. 

**Kind**: *Exported Sass Function* 
|Param|Type|Description|
|--|--|--|
| **`$name`** | `String` | The Cono Name to Lookup. |
| **`$opacity`** | `Float` | The Opacity to apply to returned color. |

#### #️⃣ border-inline-start-color(\$name, \$opacity) ⇒ `Sass::Mixin`  
Finds the Nearest Matched Color for the given Cono Color and adds it to the `border-inline-start-color` property. 

**Kind**: *Exported Sass Function* 
|Param|Type|Description|
|--|--|--|
| **`$name`** | `String` | The Cono Name to Lookup. |
| **`$opacity`** | `Float` | The Opacity to apply to returned color. |

#### #️⃣ border-inline-end-color(\$name, \$opacity) ⇒ `Sass::Mixin`  
Finds the Nearest Matched Color for the given Cono Color and adds it to the `border-inline-end-color` property. 

**Kind**: *Exported Sass Function* 
|Param|Type|Description|
|--|--|--|
| **`$name`** | `String` | The Cono Name to Lookup. |
| **`$opacity`** | `Float` | The Opacity to apply to returned color. |

#### #️⃣ outline-color(\$name, \$opacity) ⇒ `Sass::Mixin`  
Finds the Nearest Matched Color for the given Cono Color and adds it to the `outline-color` property. 

**Kind**: *Exported Sass Function* 
|Param|Type|Description|
|--|--|--|
| **`$name`** | `String` | The Cono Name to Lookup. |
| **`$opacity`** | `Float` | The Opacity to apply to returned color. |

### ℹ️ **Examples**
The following CSS files incorporating the above API,
```scss
@import "~chromanomer/style/cono";

.example {
  color: cono("palest mild greenish red",0.4);
  @include background-color("blackish vivid reddish purple")
}
@include generate-classes-for("warmest vivid bluish green",0.25)
```
compiles to:
```css
.example {
  color: rgba(122, 182, 152, 0.4);
  background-color: #230421; }

.green.color {
  color: rgba(78, 129, 104, 0.25); }

.green.background-color {
  background-color: rgba(78, 129, 104, 0.25); }

.green.text-decoration-color {
  text-decoration-color: rgba(78, 129, 104, 0.25); }

.green.text-emphasis-color {
  text-emphasis-color: rgba(78, 129, 104, 0.25); }

.green.caret-color {
  caret-color: rgba(78, 129, 104, 0.25); }

.green.column-rule-color {
  column-rule-color: rgba(78, 129, 104, 0.25); }

.green.border-color {
  border-color: rgba(78, 129, 104, 0.25); }

.green.border-top-color {
  border-top-color: rgba(78, 129, 104, 0.25); }

.green.border-bottom-color {
  border-bottom-color: rgba(78, 129, 104, 0.25); }

.green.border-left-color {
  border-left-color: rgba(78, 129, 104, 0.25); }

.green.border-right-color {
  border-right-color: rgba(78, 129, 104, 0.25); }

.green.border-block-start-color {
  border-block-start-color: rgba(78, 129, 104, 0.25); }

.green.border-block-end-color {
  border-block-end-color: rgba(78, 129, 104, 0.25); }

.green.border-inline-start-color {
  border-inline-start-color: rgba(78, 129, 104, 0.25); }

.green.border-inline-end-color {
  border-inline-end-color: rgba(78, 129, 104, 0.25); }

.green.outline-color {
  outline-color: rgba(78, 129, 104, 0.25); }

.bluish-green.color {
  color: rgba(80, 128, 118, 0.25); }

.bluish-green.background-color {
  background-color: rgba(80, 128, 118, 0.25); }

.bluish-green.text-decoration-color {
  text-decoration-color: rgba(80, 128, 118, 0.25); }

.bluish-green.text-emphasis-color {
  text-emphasis-color: rgba(80, 128, 118, 0.25); }

.bluish-green.caret-color {
  caret-color: rgba(80, 128, 118, 0.25); }

.bluish-green.column-rule-color {
  column-rule-color: rgba(80, 128, 118, 0.25); }

.bluish-green.border-color {
  border-color: rgba(80, 128, 118, 0.25); }

.bluish-green.border-top-color {
  border-top-color: rgba(80, 128, 118, 0.25); }

.bluish-green.border-bottom-color {
  border-bottom-color: rgba(80, 128, 118, 0.25); }

.bluish-green.border-left-color {
  border-left-color: rgba(80, 128, 118, 0.25); }

.bluish-green.border-right-color {
  border-right-color: rgba(80, 128, 118, 0.25); }

.bluish-green.border-block-start-color {
  border-block-start-color: rgba(80, 128, 118, 0.25); }

.bluish-green.border-block-end-color {
  border-block-end-color: rgba(80, 128, 118, 0.25); }

.bluish-green.border-inline-start-color {
  border-inline-start-color: rgba(80, 128, 118, 0.25); }

.bluish-green.border-inline-end-color {
  border-inline-end-color: rgba(80, 128, 118, 0.25); }

.bluish-green.outline-color {
  outline-color: rgba(80, 128, 118, 0.25); }

.vivid-bluish-green.color {
  color: rgba(46, 132, 118, 0.25); }

.vivid-bluish-green.background-color {
  background-color: rgba(46, 132, 118, 0.25); }

.vivid-bluish-green.text-decoration-color {
  text-decoration-color: rgba(46, 132, 118, 0.25); }

.vivid-bluish-green.text-emphasis-color {
  text-emphasis-color: rgba(46, 132, 118, 0.25); }

.vivid-bluish-green.caret-color {
  caret-color: rgba(46, 132, 118, 0.25); }

.vivid-bluish-green.column-rule-color {
  column-rule-color: rgba(46, 132, 118, 0.25); }

.vivid-bluish-green.border-color {
  border-color: rgba(46, 132, 118, 0.25); }

.vivid-bluish-green.border-top-color {
  border-top-color: rgba(46, 132, 118, 0.25); }

.vivid-bluish-green.border-bottom-color {
  border-bottom-color: rgba(46, 132, 118, 0.25); }

.vivid-bluish-green.border-left-color {
  border-left-color: rgba(46, 132, 118, 0.25); }

.vivid-bluish-green.border-right-color {
  border-right-color: rgba(46, 132, 118, 0.25); }

.vivid-bluish-green.border-block-start-color {
  border-block-start-color: rgba(46, 132, 118, 0.25); }

.vivid-bluish-green.border-block-end-color {
  border-block-end-color: rgba(46, 132, 118, 0.25); }

.vivid-bluish-green.border-inline-start-color {
  border-inline-start-color: rgba(46, 132, 118, 0.25); }

.vivid-bluish-green.border-inline-end-color {
  border-inline-end-color: rgba(46, 132, 118, 0.25); }

.vivid-bluish-green.outline-color {
  outline-color: rgba(46, 132, 118, 0.25); }
```
