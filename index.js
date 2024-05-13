function animateCounter(element, target) {
    var currentCount = 0;
    var duration = 5000; // Adjust the duration here (in milliseconds)
    var steps = 100; // Number of steps for the animation
    var increment = Math.ceil(target / steps);
    var interval = duration / steps;

    var timer = setInterval(function() {
      currentCount += increment;
      if (currentCount >= target) {
        currentCount = target;
        clearInterval(timer);
        if (element.id === 'exp-counter') {
          element.textContent = currentCount + " Y"; // Append " Y" only for staff experience counter
        } else {
          element.textContent = currentCount;
        }
      } else {
        element.textContent = currentCount;
      }
    }, interval); // Adjust the interval for smoother animation
  }

  // Function to start the counter animations when the counter section comes into view
  function startCounters() {
    var counters = document.querySelectorAll('.counter');
    counters.forEach(function(counter) {
      var target = parseInt(counter.dataset.target);
      animateCounter(counter, target);
    });
  }

  // Intersection Observer to trigger counter animation when the counter section comes into view
  var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.8 // Trigger animation when 80% of the element is in view
  };

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        startCounters();
      }
    });
  }, options);

  var counterSection = document.getElementById('counter-section');
  observer.observe(counterSection); 