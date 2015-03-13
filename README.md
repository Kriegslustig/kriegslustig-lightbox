# kriegslustig-lightbox
A simple meteor package that defines a template 'kriegslustigLightbox'

# Install
`meteor add kriegslustig:lightbox`

# Use
kriegslustig:lightbox simply defines a template 'kriegslustigLightbox'. After you have installed it you can use it anywhere.

```
{{ > kriegslustigLightbox name='message' }}
    <h1>Important Message</h1>
{{ /kriegslustigLightbox }}
```

The blockContent you pass kriegslustigLightbox will be rendered into the lightbox.

kriegslustig:lightbox works with url hash fragments. The `name` variable you have to pass to kriegslustigLightbox is the hash fragment kriegslustig:lightbox will listen for. As soon as it sees that string in the hash fragment the light box opens. When it then isn't found in the hash fragment anymore, kriegslustig:lightbox closes the lightbox.

So to link to the lightbox we have named 'message', you can just do:
```
<a href="#message">Open Message</a>
```

# Customize

## Add a custom close button

Because kriegslustig:lightbox works with hash fragments, it's very easy to make a custom close button. You just have to add an anchor tag:

```
<a href="#">Close Lightbox</a>
```

You can then simply put this inside your kriegslustigLightbox.

## Triggering a close or an open event

kriegslustig:lightbox exports a dictionary (Object) to the clients global space called `kriegslustigLightbox`. It has a property `boxes` in which is another dictionary. The `kriegslustig.boxes` dictionary has a key corresponding to it's name for each defined kriegslustigLightbox.

`kriegslustigLightbox.Lightbox` is the prototype of all the `kriegslustigLightbox.boxes`. `kriegslustigLightbox.Lightbox` has two functions called `open` and `close` which do what their name sugests. This means that you can use the following code to open and close a kriegslustigLightbox:

```
// To open the kriegslustigLightbox called 'message'
kriegslustigLightbox.boxes['message'].open()
// To close the kriegslustigLightbox called 'message'
kriegslustigLightbox.boxes['message'].close()
```