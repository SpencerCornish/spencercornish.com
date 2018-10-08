import 'dart:async';
import 'dart:html' as html;
import 'package:stagexl/stagexl.dart';

Stage stage;

Future<Null> main() async {
  StageOptions options = new StageOptions()
    ..transparent = true
    ..backgroundColor = Color.Transparent
    ..renderEngine = RenderEngine.WebGL;

  var canvas = html.querySelector('#stage');
  stage = new Stage(canvas, width: html.window.innerWidth, height: html.window.innerHeight, options: options);

  var renderLoop = new RenderLoop();
  renderLoop.addStage(stage);

  _generateTriangles(stage);

  var circle = new Shape();
  circle.graphics.circle(0, 0, 100);
  var masker = new Mask.shape(circle);
  stage.mask = masker;

  html.document.onMouseMove.listen(_mouseMoved);
  // See more examples:
  // https://github.com/bp74/StageXL_Samples
}

_mouseMoved(e) async {
  var masker = new Mask.circle(e.client.x, e.client.y, 100);
  stage.mask = masker;
}

_generateTriangles(Stage stage) {
  int numShapesX = html.window.innerWidth ~/ 30;
  int numShapesY = html.window.innerHeight ~/ 30;

  for (int i = 0; i < numShapesX; i++) {
    for (int j = 0; j < numShapesY; j++) {
      var shape = new Shape();
      shape.graphics.rect((i * 30), j * 30, 15, 15);
      shape.graphics.fillColor(Color.DimGray);
      Sprite test = new Sprite();
      test.addChild(shape);

      stage.addChild(test);
    }
  }
}
