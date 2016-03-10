react-callout
===========

Lightweight and stateless callout component for React.js

It uses only css for positioning.

Usage
-----
Add `react-callout` as a dependency

`$ npm install --save react-callout`

then simply use the provided component

Note that the component is stateless, so updating the `isVisible` property should
be handled in the model of your app (e.g. using redux or similar flux
implementations)

The component is also unstyled (except for the layout).

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import Callout from 'react-callout';

const content = (
    <div className="content">
        CALLOUT CONTENT
    </div>
);


ReactDOM.render(
    <div>
        <Callout
            isOpen={true} // show or hide the callout (default to false)
            position="top" // position relative to children elements ["top", "bottom"] (default to top)
            alignment="right" // alignment relative to children elements ["left", "right"] (default to left)
            offset={{ // offset from the current layout position
                x: '-20px' // horizontal offset in css format (default to "0")
                y: '5%' // vertical offset in css format (default to "0")
            }}
            content={content} // jsx content of the callout
        >

            ... // element owning the callout

        </Callout>
    </div>,
    document.getElementById('callout-example')
);

```

Development
-----------
Clone the repository then

`$ npm install`

use

`$ make dist`

to build

and

`make dev`

to start a dev server on `localhost:8080`

to run tests just use

`$ npm test`

Warnings
--------
This component should not not be considered ready for production (until it will reach 1.0.0),
however testing and contributions are really welcome.
