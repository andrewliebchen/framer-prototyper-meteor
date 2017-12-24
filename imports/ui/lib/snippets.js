const snippets = [
  {
    name: "Create Layers",
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
  },
  {
    name: "Loop to create row layers",
    code: `
for (index = 0, end1 = rows, asc1 = 0 <= end1; asc1 ? index < end1 : index > end1; asc1 ? index++ : index--) {
  const cell = new Layer({
  	width:  Screen.width,
  	height: rowHeight,
  	y: index * (rowHeight + gutter),
  	parent: scroll.content,
  	backgroundColor: "#00AAFF",
  	hueRotate: index * 10
  });
}`
  },
  {
    name: "Create slider",
    code: `
const slider = new SliderComponent({
	point: Align.center,
	knobSize: 44
});`
  },
  {
    name: "Listen for slider value updates",
    code: `slider.onValueChange(() => Screen.backgroundColor = Color.mix("black", "#00AAFF", slider.value));`
  },
  {
    name: "Create layer",
    code: `
let layer = new Layer({
	x: Align.center,
	y: Align.center
});`
  },
  {
    name: "Rotate on click",
    code: `
layer.onClick(() =>
	layer.animate({
		rotation: layer.rotation + 90,
		options: {
			curve: Spring({damping: 0.5})
		}
	})
);`
  },
  {
    name: "Create the constraints layer",
    code: `
const constraints = new Layer({
	width: 400,
	height: 200,
	x: Align.center,
	y: Align.center,
	opacity: 0.5
});`
  },
  {
    name: "Create the draggable layer",
    code: `
const layer = new Layer({
	x: Align.center(-100),
	y: Align.center
});`
  },
  {
    name: "Enable dragging, set constraints",
    code: `
layer.draggable.enabled = true;
layer.draggable.constraints = constraints.frame;`
  },
  {
    name: "Create the draggable layer",
    code: `
const layer = new Layer({
	x: Align.center,
	y: Align.center
});`
  },
  {
    name: "Enable dragging",
    code: `layer.draggable.enabled = true;`
  },
  {
    name: "Create layer, define image",
    code: `
const layer = new Layer({
	image: "http://i.imgur.com/SdLS9us.jpg",
	borderRadius: 4,
	x: Align.center,
	y: Align.center
});`
  },
  {
    name: "Create layer, add states",
    code: `layer = new Layer({
	x: Align.center,
	y: Align.center
});

layer.states = {
	one: {
		scale: 0.75
	},
	two: {
		scale: 1
	}
};`
  },
  {
    name: "Define animationOptions",
    code: `layer.animationOptions = {curve: Spring({damping: 0.5})};`
  },
  {
    name: "Switch states on click",
    code: `layer.onClick(() => layer.stateCycle("one", "two"));`
  },
  {
    name: "Create text layer",
    code: `
const text = new TextLayer({
	text: "Hello World",
	fontSize: 64,
	fontWeight: 600,
	x: Align.center,
	y: Align.center
});`
  }
];

export default snippets;
