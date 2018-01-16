import { Meteor } from "meteor/meteor";
import _ from "lodash";

export const deletePrototype = id => {
  if (window.confirm("Are you sure you want to delete this prototype?")) {
    Meteor.call("deletePrototype", id);
  }
};

export const initPreviewCode = args => {
  const bgColor = "white";
  if (args.background === "dark") {
    bgColor = "#111";
  }

  return `<!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            height: 100vh;
            width: 100vw;
            margin: 0;
            position: relative;
          }

          .framerContext {
            height: 100vh;
            width: 100vw;
          }
        </style>
      </head>
      <body>
        <script src="${args.framerURI}"></script>
        <script>const Styles = (...props) => _.assign({}, ...props);</script>
        ${
          args.syntax === "coffeescript"
            ? `<script src="${args.coffeescriptURI}"></script>`
            : ""
        }
        <script>
          ${
            args.syntax === "coffeescript"
              ? `DATA = ${JSON.stringify(args.sampleData)}`
              : `const DATA = ${JSON.stringify(args.sampleData)};`
          }

          ${
            args.syntax === "coffeescript"
              ? `STYLES = ${args.styles}`
              : `const STYLES = ${args.styles};`
          }

          ${
            args.syntax === "coffeescript"
              ? `bg = new BackgroundLayer({backgroundColor: "${bgColor}"})`
              : `const bg = new BackgroundLayer({backgroundColor: "${bgColor}"});`
          }
        </script>
        <script type="text/${args.syntax}">${args.code}</script>
      </body>
    </html>`;
};
