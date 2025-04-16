function expandText(element) {
    element.style.whiteSpace = 'normal';
    element.style.overflow = 'visible';
    element.style.textOverflow = 'unset';
  }
  
function collapseText(element) {
    element.style.whiteSpace = 'nowrap';
    element.style.overflow = 'hidden';
    element.style.textOverflow = 'ellipsis';
  }
