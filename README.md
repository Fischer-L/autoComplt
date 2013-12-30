autoComplt
==========
## What is autoComplt ?
The autoComplt is written in Javascript and lightweight and simple to use. It auto-generates the autocomplete list when user inputs some text in the &lt;input&gt; element.

Try it here => http://jsfiddle.net/Fischer/eTw62/


## No need of any extra lib/framework
The autoComplt has no dependencies on other libs or frameworks.


## How to use
== Load the script ==

Load the autoComplt js script into your document. After loading, there would be one global object called autoComplt. Use that global autoComplt object to enable the autocomplete feature on the desired &lt;input&gt; element.


== Example ==

Suppose the HTML:
```html
<input name="name" type="text"></input>
````

Call autoComplt.enable to enable the autocompelte feature on the &lt;input&gt; element above as below:
```javascript
var input = document.querySelector("input[name=name]");
autoComplt.enable(input, {
    // the dataFetcher is your customized function which searchs the proper autocomplete hints based on the user's input value.
    dataFetcher : function (v, openList) {
        var hints = [],
            names = [ "Masahiro Tanaka", "Darvish", "Daisuke Matsuzaka" ];
        
        for (var i = 0; i < names.length; i++) {
            if (names[i].indexOf(v) >= 0) {
                hints.push(names[i]);
            }
        }
        
        openList(hints);
    }
});
```

After running the codes here, the autocomplete list will appear to give the hints for users.


## Configuration and styles
The &lt;input&gt; element which is enabled with the autocomplete feature would carrys one property named "autoComplt". Use that property's input.autoComplt.config method to config the autocomplete features and change the UI styles. There are more public APIs for use, please refer to the autoComplt.js.


