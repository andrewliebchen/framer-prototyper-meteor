const snippets = [
  {
    name: "Create Layers",
    description:
      "Duis est sit cillum esse ipsum sit adipisicing eu eu consequat officia minim ad.",
    code: `
let index;
let asc, end;
let asc1, end1;
const screenA = new Layer({
  size: Screen.size,
  backgroundColor: "#00AAFF"
});

const screenB = new Layer({
  size: Screen.size,
  backgroundColor: "#FFCC33"
});
    `
  },
  {
    name: "Set up FlowComponent",
    description:
      "Duis est sit cillum esse ipsum sit adipisicing eu eu consequat officia minim ad.",
    code: `
const flow = new FlowComponent;
flow.showNext(screenA);

// Switch on click
screenA.onClick(() => flow.showNext(screenB));

screenB.onClick(() => flow.showPrevious());
    `
  },
  {
    name: "Variables",
    code: `
const pageCount = 8;
let gutter = 60;
    `
  },
  {
    name: "Create PageComponent",
    code: `
const pageScroller = new PageComponent({
	point: Align.center,
	width: Screen.width / 2,
	height: Screen.height / 2,
	scrollVertical: false,
	clip: false
});
`
  },
  {
    name: "Loop to create pages",
    code: `
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
}
    `
  },
  {
    name: "Create a range slider",
    code: `
const range = new RangeSliderComponent({
  x: Align.center,
  y: Align.center,
  min: 0,
  max: 100,
  minValue: 0,
  maxValue: 50
});
    `
  }
];

export default snippets;

/*
COMPONENT AND LAYER SNIPPETS...
INCLUDE OTHERS?


// decaffeinate suggestions:
// DS102: Remove unnecessary code created because of implicit returns
// DS202: Simplify dynamic range loops
// Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md

// Create layers


// Set up FlowComponent



// Variables











// Variables
const rows = 16;
gutter = 10;
const rowHeight = 200;

const scroll = new ScrollComponent({
	size: Screen.size,
	scrollHorizontal: false
});

// Loop to create row layers
for (index = 0, end1 = rows, asc1 = 0 <= end1; asc1 ? index < end1 : index > end1; asc1 ? index++ : index--) {

	const cell = new Layer({
		width:  Screen.width,
		height: rowHeight,
		y: index * (rowHeight + gutter),
		parent: scroll.content,
		backgroundColor: "#00AAFF",
		hueRotate: index * 10
	});
}



// Create slider
const slider = new SliderComponent({
	point: Align.center,
	knobSize: 44
});

// Listen for slider value updates
slider.onValueChange(() => Screen.backgroundColor = Color.mix("black", "#00AAFF", slider.value));




// Create layer
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
);


// Create the constraints layer
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
layer.draggable.constraints = constraints.frame;



// Create the draggable layer
layer = new Layer({
	x: Align.center,
	y: Align.center
});

// Enable dragging
layer.draggable.enabled = true;



// Create layer, define image
layer = new Layer({
	image: "http://i.imgur.com/SdLS9us.jpg",
	borderRadius: 4,
	x: Align.center,
	y: Align.center
});



// Create layer
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
layer.onClick(() => layer.stateCycle("one", "two"));



// Create text layer
const text = new TextLayer({
	text: "Hello World",
	fontSize: 64,
	fontWeight: 600,
	x: Align.center,
	y: Align.center
});

*/
