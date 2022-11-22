const HTML_LINE = RegExp(
  /(?:__|[^\r\n<])*(?:\r\n?|\n|(?:__|[^\r\n<])(?![^\r\n])(?:__)?)(?:__)?/.source.replace(
    /__/g,
    function () {
      return HTML_TAG.source;
    }
  ),
  'gi'
);