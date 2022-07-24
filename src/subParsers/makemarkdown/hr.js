showdown.subParser('makeMarkdown.hr', function (node, globals) {
  'use strict';

  let txt = '---';
  const afterEvent = globals.converter.dispatch(new showdown.Event('makeMarkdown.hr.onEnd', txt)
    .setOutput(txt)
    ._setGlobals(globals)
    ._setNode(node));
  if (afterEvent.output !== null) {
    txt = afterEvent.output;
  }

  return txt;
});
