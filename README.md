<p align="center">
  <img src="docs/polyavatarlogo.svg" />
</p>

# What it is
Simple plygin to generate polygonal avatars with customization options.

## How to install
Copy the file to your project

## Quick Start
1. Create a canvas element with the desired width:

``` html
<canvas class="polyavatar" width="256" height="256"></canvas>
```
2. Instantiate the plugin poiting to the canvas element
``` javascript
var newInstance = new PolygonAvatar({
    selector: '.polyavatar'
})
```

3. Enjoy the result

![ludustack](docs/sample.png)

## Options

The plugin can be configured using the one of a combination of the following options:

| Parameter        |                                             Description                                             |  Default  | Mandatory |
|------------------|:---------------------------------------------------------------------------------------------------|:---------:|:---------:|
| selector         | A CSS selector to the destination canvas to render.                                                 |     ''    |     x     |
| sides            | How many sides (more than 2, of course) the polygon should have.                                    | 6         |           |
| image            | Sets the image to be rendered inside the polygon.                                                   |     ''    |           |
| percentage       | The percentage of the progress bar around the image.                                                | 0.98      |           |
| progressBarColor | The color of the progress bar.                                                                      | '#4ff461' |           |
| showProgress     | If the avatar should render the progressbar                                                         | true      |           |
| animated         | If the progress bar will be animated until it reaches the target percentage                         | true      |           |
| online           | The online status of the user. Omitting it will not generate the status indicator.                  | undefined |           |
| levelNumber      | The level of the user. It will be shown as a smal polygon on the right with the level number in it. | undefined |           |

## Contributing
Please read this [style guidelines](https://github.com/joemottershaw/style-guidelines) documentation project and please follow the [contribution guidelines](./.github/CONTRIBUTING.md) and [code of conduct](./.github/CODE_OF_CONDUCT.md).

## License
This project is open-sourced and licensed under the [MIT License](./LICENSE).
