import $ from 'jquery';

function attach(attachPoint) {
  // Make absolutely sure attachPoint is jQuery object
  const $attachPoint = $(attachPoint);
  const { hash } = { hash: window.location.hash };
  const acticeTab = hash && $(`a[href="${hash}"]`);

  // Bail if our attach point is not on screen
  if (!$attachPoint.length) {
    return null;
  }

  // Set active tab based on hash
  if (acticeTab) {
    acticeTab.tab('show');
  }

  // Set hash based on active tab
  $attachPoint.on('shown.bs.tab', e => {
    const newHash = e.target.hash;

    if (window.history.pushState) {
      window.history.pushState(null, null, newHash);
    } else {
      window.location.hash = newHash;
    }
  });

  return $attachPoint;
}

export default attach;
