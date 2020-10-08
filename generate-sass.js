const fs = require('fs');
let json = JSON.stringify(JSON.parse(fs.readFileSync('coxy.names.json')),null,2);
var scssFile = fs.createWriteStream('coxy.scss', {
  flags: 'a'
})
const deepGet = `$private-sassy-maps-suppress-warnings: false !default;
@function map-deep-get($map, $keys...) {
  /**
   * Courtesy : Yoannis Jamar 
   * Code : https://github.com/at-import/Sassy-Maps/blob/0.x.x/sass/sassy-maps/_map-get.scss
   */
  @if length($keys) == 1 {
    $keys: nth($keys, 1);
  }
  $warn: "#{nth($keys, 1)}";
  $length: length($keys);
  $get: map-get($map, nth($keys, 1));
  @if $length > 1 {
    @for $i from 2 through $length {
      @if $get != null and type-of($get) == 'map' {
        $warn: $warn + "->#{nth($keys, $i)}";
        $get: map-get($get, nth($keys, $i));
        @if $get == null {
          @return map-get-deep-warning($warn, $get, nth($keys, $i));
        }
      }
      @else {
        @return map-get-deep-warning($warn, $get, nth($keys, $i));
      }
    }
  }
  @return $get;
}
@function map-get-deep-warning($warn, $get, $key) {
  @if not $private-sassy-maps-suppress-warnings {
    @if $get == null {
      @warn "Map has no value for key search \`#{$warn}\`";
    }
    @else if type-of($get) != 'map' {
      @warn "Non-map value found for key search \`#{$warn}\`, cannot search for key \`#{$key}\`";
    }
  }
  @return null;
}`
scssFile.write(deepGet);
let sassMap = '\n$coxyMap: ' + json.replace(/{/gm,'(').replace(/}/gm,')')
scssFile.write(sassMap);
let classLoop = `;\n@each $name in map-keys($coxyMap) {
  .#{$name} {
    &.text {
      color: unquote(map-deep-get($coxyMap, $name, "lch"));
      color: unquote(map-deep-get($coxyMap, $name, "p3"));
      color: unquote(map-deep-get($coxyMap, $name, "srgb"));
    }
    &.background {
      background-color: unquote(map-deep-get($coxyMap, $name, "lch"));
      background-color: unquote(map-deep-get($coxyMap, $name, "p3"));
      background-color: unquote(map-deep-get($coxyMap, $name, "srgb"));
    }
    &.border {
      border-color: unquote(map-deep-get($coxyMap, $name, "lch"));
      border-color: unquote(map-deep-get($coxyMap, $name, "p3"));
      border-color: unquote(map-deep-get($coxyMap, $name, "srgb"));
    }
    &.left-border {
      border-left-color: unquote(map-deep-get($coxyMap, $name, "lch"));
      border-left-color: unquote(map-deep-get($coxyMap, $name, "p3"));
      border-left-color: unquote(map-deep-get($coxyMap, $name, "srgb"));
    }
    &.right-border {
      border-right-color: unquote(map-deep-get($coxyMap, $name, "lch"));
      border-right-color: unquote(map-deep-get($coxyMap, $name, "p3"));
      border-right-color: unquote(map-deep-get($coxyMap, $name, "srgb"));
    }
    &.top-border {
      border-top-color: unquote(map-deep-get($coxyMap, $name, "lch"));
      border-top-color: unquote(map-deep-get($coxyMap, $name, "p3"));
      border-top-color: unquote(map-deep-get($coxyMap, $name, "srgb"));
    }
    &.bottom-border {
      border-bottom-color: unquote(map-deep-get($coxyMap, $name, "lch"));
      border-bottom-color: unquote(map-deep-get($coxyMap, $name, "p3"));
      border-bottom-color: unquote(map-deep-get($coxyMap, $name, "srgb"));
    }
    &.caret {
      caret-color: unquote(map-deep-get($coxyMap, $name, "lch"));
      caret-color: unquote(map-deep-get($coxyMap, $name, "p3"));
      caret-color: unquote(map-deep-get($coxyMap, $name, "srgb"));
    }
    &.column-rule {
      column-rule-color: unquote(map-deep-get($coxyMap, $name, "lch"));
      column-rule-color: unquote(map-deep-get($coxyMap, $name, "p3"));
      column-rule-color: unquote(map-deep-get($coxyMap, $name, "srgb"));
    }
    &.outline {
      outline-color: unquote(map-deep-get($coxyMap, $name, "lch"));
      outline-color: unquote(map-deep-get($coxyMap, $name, "p3"));
      outline-color: unquote(map-deep-get($coxyMap, $name, "srgb"));
    }
    &.text-decoration {
      text-decoration-color: unquote(map-deep-get($coxyMap, $name, "lch"));
      text-decoration-color: unquote(map-deep-get($coxyMap, $name, "p3"));
      text-decoration-color: unquote(map-deep-get($coxyMap, $name, "srgb"));
    }
  }
}`
scssFile.write(classLoop);
scssFile.close();