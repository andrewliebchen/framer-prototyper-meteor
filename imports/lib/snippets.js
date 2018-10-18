// Snippet library

export const settings = {
  title: 'Settings',
  snippets: [
    {
      name: 'Disable context menu',
      code: {
        javascript: `// Disable right-click context menu
  if (document.addEventListener != null) {
  	document.addEventListener("contextmenu", event => event.preventDefault());
  }`,
        coffeescript: `# Disable right-click context menu
  if document.addEventListener?
  	document.addEventListener "contextmenu", (event) ->
  		event.preventDefault()`,
      },
    },
    {
      name: 'Disable multi-touch',
      code: {
        javascript: `Framer.Extras.TouchEmulator.disable();`,
        coffeescript: `Framer.Extras.TouchEmulator.disable()`,
      },
    },
    {
      name: 'Normal cursor',
      code: {
        javascript: `// Use desktop cursor
document.body.style.cursor = "auto";`,
        coffeescript: `# Use desktop cursor
document.body.style.cursor = "auto"`,
      },
    },
    {
      name: 'Show hints',
      code: {
        javascript: `// Show Hints
Framer.Extras.Hints.enable();`,
        coffeescript: `# Show Hints
Framer.Extras.Hints.enable()`,
      },
    },
  ],
};

export const device = {
  title: 'Device',
  snippets: [
    {
      name: 'Customize device',
      code: {
        javascript: `// Define and set custom device
  Framer.Device.customize({
  	deviceType: Framer.Device.Type.Tablet,
  	devicePixelRatio: 2,
  	screenWidth: 720,
  	screenHeight: 1024,
  	deviceImage: "http://f.cl.ly/items/001L0v3c1f120t0p2z24/custom.png",
  	deviceImageWidth: 800,
  	deviceImageHeight: 1214
  });`,
        coffeescript: `# Define and set custom device
  Framer.Device.customize
  	deviceType: Framer.Device.Type.Tablet
  	devicePixelRatio: 2
  	screenWidth: 720
  	screenHeight: 1024
  	deviceImage: "http://f.cl.ly/items/001L0v3c1f120t0p2z24/custom.png"
  	deviceImageWidth: 800
  	deviceImageHeight: 1214`,
      },
    },
    {
      name: 'Canvas image',
      code: {
        javascript: `// Set Device background
    Screen.backgroundColor = null;
    Canvas.image = Utils.randomImage(Canvas.size);`,
        coffeescript: `# Set Device background
  Screen.backgroundColor = null
  Canvas.image = Utils.randomImage(Canvas.size)`,
      },
    },
    {
      name: 'Screen color',
      code: {
        javascript: `// Set Screen background
    Screen.backgroundColor = "#00AAFF";`,
        coffeescript: `# Set Screen background
  Screen.backgroundColor = "#00AAFF"`,
      },
    },
  ],
};

export const components = {
  title: 'Components',
  snippets: [
    {
      name: 'Flow Component',
      code: {
        javascript: `// Create layers
    const screenA = new Layer({
    	size: Screen.size,
    	backgroundColor: "#00AAFF"
    });

    const screenB = new Layer({
    	size: Screen.size,
    	backgroundColor: "#FFCC33"
    });

    // Set up FlowComponent
    const flow = new FlowComponent;
    flow.showNext(screenA);

    // Switch on click
    screenA.onClick(() => flow.showNext(screenB));

    screenB.onClick(() => flow.showPrevious());`,
        coffeescript: `# Create layers
    screenA = new Layer
    	size: Screen.size
    	backgroundColor: "#00AAFF"

    screenB = new Layer
    	size: Screen.size
    	backgroundColor: "#FFCC33"

    # Set up FlowComponent
    flow = new FlowComponent
    flow.showNext(screenA)

    # Switch on click
    screenA.onClick ->
    	flow.showNext(screenB)

    screenB.onClick ->
    	flow.showPrevious()`,
      },
    },
    {
      name: 'Page Component',
      code: {
        javascript: `// Variables
    const pageCount = 8;
    let gutter = 60;

    // Create PageComponent
    const pageScroller = new PageComponent({
    	point: Align.center,
    	width: Screen.width / 2,
    	height: Screen.height / 2,
    	scrollVertical: false,
    	clip: false
    });

    // Loop to create pages
    for (index = 0, end = pageCount, asc = 0 <= end; asc ? index < end : index > end; asc ? index++ : index--) {
    	const page = new Layer({
    		size: pageScroller.size,
    		x: (pageScroller.width + gutter) * index,
    		backgroundColor: "#00AAFF",
    		hueRotate: index * 20,
    		parent: pageScroller.content
    	});

    	page.onClick(function() {
    		return pageScroller.snapToPage(this);
    	});
    }`,
        coffeescript: `# Variables
    pageCount = 8
    gutter = 60

    # Create PageComponent
    pageScroller = new PageComponent
    	point: Align.center
    	width: Screen.width / 2
    	height: Screen.height / 2
    	scrollVertical: false
    	clip: false

    # Loop to create pages
    for index in [0...pageCount]
    	page = new Layer
    		size: pageScroller.size
    		x: (pageScroller.width + gutter) * index
    		backgroundColor: "#00AAFF"
    		hueRotate: index * 20
    		parent: pageScroller.content

    	page.onClick ->
    		pageScroller.snapToPage(this)`,
      },
    },
    {
      name: 'Range Slider',
      code: {
        javascript: `// Create a range slider
    const range = new RangeSliderComponent({
    	x: Align.center,
    	y: Align.center,
    	min: 0,
    	max: 100,
    	minValue: 0,
    	maxValue: 50
    });`,
        coffeescript: `# Create a range slider
    range = new RangeSliderComponent
    	x: Align.center
    	y: Align.center
    	min: 0
    	max: 100
    	minValue: 0
    	maxValue: 50`,
      },
    },
    {
      name: 'Scroll grid',
      code: {
        javascript: `// Variables
    const tileCount = 26;
    const columnCount = 3;
    gutter = 8;

    const combinedGutterWidth = gutter * (columnCount - 1);
    const combinedTileWidth = Screen.width - combinedGutterWidth;
    const tileWidth = combinedTileWidth / columnCount;
    const tileOffset = tileWidth + gutter;

    const scroll = new ScrollComponent({
    	size: Screen.size,
    	scrollHorizontal: false
    });

    // Loop to create grid tiles
    for (index = 0, end1 = tileCount, asc1 = 0 <= end1; asc1 ? index < end1 : index > end1; asc1 ? index++ : index--) {

    	const columnIndex = index % columnCount;
    	const rowIndex = Math.floor(index / columnCount);

    	const tile = new Layer({
    		x: columnIndex * tileOffset,
    		y: rowIndex * tileOffset,
    		size: tileWidth,
    		borderRadius: 4,
    		parent: scroll.content
    	});
    	tile.image = Utils.randomImage(tile);
    }`,
        coffeescript: `# Variables
    tileCount = 26
    columnCount = 3
    gutter = 8

    combinedGutterWidth = gutter * (columnCount - 1)
    combinedTileWidth = Screen.width - combinedGutterWidth
    tileWidth = combinedTileWidth / columnCount
    tileOffset = tileWidth + gutter

    scroll = new ScrollComponent
    	size: Screen.size
    	scrollHorizontal: false

    # Loop to create grid tiles
    for index in [0...tileCount]

    	columnIndex = index % columnCount
    	rowIndex = Math.floor(index / columnCount)

    	tile = new Layer
    		x: columnIndex * tileOffset
    		y: rowIndex * tileOffset
    		size: tileWidth
    		borderRadius: 4
    		parent: scroll.content
    	tile.image = Utils.randomImage(tile)
    `,
      },
    },
    {
      name: 'Slider',
      code: {
        javascript: `// Create slider
    const slider = new SliderComponent({
    	point: Align.center,
    	knobSize: 44
    });

    // Listen for slider value updates
    slider.onValueChange(() => Screen.backgroundColor = Color.mix("black", "#00AAFF", slider.value));`,
        coffeescript: `# Create slider
    slider = new SliderComponent
    	point: Align.center
    	knobSize: 44

    # Listen for slider value updates
    slider.onValueChange ->
    	Screen.backgroundColor = Color.mix("black", "#00AAFF", slider.value)`,
      },
    },
  ],
};

export const layers = {
  title: 'Layers',
  snippets: [
    {
      name: 'Click animation',
      code: {
        javascript: `// Create layer
  let layer = new Layer({
  	x: Align.center,
  	y: Align.center
  });

  // Rotate on click
  layer.onClick(() =>
  	layer.animate({
  		rotation: layer.rotation + 90,
  		options: {
  			curve: Spring({damping: 0.5})
  		}
  	})
  );`,
        coffeescript: `# Create layer
  layer = new Layer
  	x: Align.center
  	y: Align.center

  # Rotate on click
  layer.onClick ->
  	layer.animate
  		rotation: layer.rotation + 90
  		options:
  			curve: Spring(damping: 0.5)`,
      },
    },
    {
      name: 'Draggable constraints',
      code: {
        javascript: `// Create the constraints layer
  const constraints = new Layer({
  	width: 400,
  	height: 200,
  	x: Align.center,
  	y: Align.center,
  	opacity: 0.5
  });

  // Create the draggable layer
  layer = new Layer({
  	x: Align.center(-100),
  	y: Align.center
  });

  // Enable dragging, set constraints
  layer.draggable.enabled = true;
  layer.draggable.constraints = constraints.frame;`,
        coffeescript: `# Create the constraints layer
  constraints = new Layer
  	width: 400
  	height: 200
  	x: Align.center
  	y: Align.center
  	opacity: 0.5

  # Create the draggable layer
  layer = new Layer
  	x: Align.center(-100)
  	y: Align.center

  # Enable dragging, set constraints
  layer.draggable.enabled = true
  layer.draggable.constraints = constraints.frame`,
      },
    },
    {
      name: 'Draggable',
      code: {
        javascript: `// Create the draggable layer
  layer = new Layer({
  	x: Align.center,
  	y: Align.center
  });

  // Enable dragging
  layer.draggable.enabled = true;`,
        coffeescript: `# Create the draggable layer
  layer = new Layer
  	x: Align.center
  	y: Align.center

  # Enable dragging
  layer.draggable.enabled = true`,
      },
    },
    {
      name: 'Image',
      code: {
        javascript: `// Create layer, define image
  layer = new Layer({
  	image: "http://i.imgur.com/SdLS9us.jpg",
  	borderRadius: 4,
  	x: Align.center,
  	y: Align.center
  });`,
        coffeescript: `# Create layer, define image
  layer = new Layer
  	image: "http://i.imgur.com/SdLS9us.jpg"
  	borderRadius: 4
  	x: Align.center
  	y: Align.center`,
      },
    },
    {
      name: 'States',
      code: {
        javascript: `// Create layer
  layer = new Layer({
  	x: Align.center,
  	y: Align.center
  });

  // Add states
  layer.states = {
  	one: {
  		scale: 0.75
  	},
  	two: {
  		scale: 1
  	}
  };

  // Define animationOptions
  layer.animationOptions =
  	{curve: Spring({damping: 0.5})};

  // Switch states on click
  layer.onClick(() => layer.stateCycle("one", "two"));`,
        coffeescript: `# Create layer
  layer = new Layer
  	x: Align.center
  	y: Align.center

  # Add states
  layer.states =
  	one:
  		scale: 0.75
  	two:
  		scale: 1

  # Define animationOptions
  layer.animationOptions =
  	curve: Spring(damping: 0.5)

  # Switch states on click
  layer.onClick ->
  	layer.stateCycle("one", "two")`,
      },
    },
    {
      name: 'Text Layer',
      code: {
        javascript: `// Create text layer
  const text = new TextLayer({
  	text: "Hello World",
  	fontSize: 64,
  	fontWeight: 600,
  	x: Align.center,
  	y: Align.center
  });`,
        coffeescript: `# Create text layer
  text = new TextLayer
  	text: "Hello World"
  	fontSize: 64
  	fontWeight: 600
  	x: Align.center
  	y: Align.center`,
      },
    },
  ],
};
