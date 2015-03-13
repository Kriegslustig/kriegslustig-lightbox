# kriegslustig-lightbox
A simple meteor package that defines a template 'kriegslustig-lightbox'

# Installation
`meteor add kriegslustig:lightbox`

# Usage
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
<a href="#message" alt="Open a message">Open Message</a>
```