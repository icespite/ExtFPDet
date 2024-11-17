
    if (navigator.joinAdInterestGroup) {
        const addIgScript = document.createElement('script');
        let src = null;
        if (navigator.runAdAuction) {
            if (window.FencedFrameConfig || 'src' in document.createElement('fencedframe')) {
                src = 'https://fledge-usa.creativecdn.com/fledge-igmembership?ntk=RQ7qNtKQB-AIkHi3aO93FU6eAVms_dPpImE677W8bM7B8HYVGLSlnCDbB0Dm7fNCVppVzGaahGVLjCztsYrGuA';
            } else {
                src = 'https://fledge-usa.creativecdn.com/fledge-igmembership?ntk=RQ7qNtKQB-AIkHi3aO93FU6eAVms_dPpImE677W8bM7B8HYVGLSlnCDbB0Dm7fNCs9DR2Pg_kTK68K7ucfcr6Q';
            }
        } else {
            if (window.FencedFrameConfig || 'src' in document.createElement('fencedframe')) {
                src = 'https://fledge-usa.creativecdn.com/fledge-igmembership?ntk=RQ7qNtKQB-AIkHi3aO93FU6eAVms_dPpImE677W8bM7B8HYVGLSlnCDbB0Dm7fNCqC1ESq7jOmuqCqJPfSEEAg';
            } else {
                src = 'https://fledge-usa.creativecdn.com/fledge-igmembership?ntk=RQ7qNtKQB-AIkHi3aO93FU6eAVms_dPpImE677W8bM7B8HYVGLSlnCDbB0Dm7fNCzBBskcUoXM5KUwTdm-bwvA';
            }
        }
        addIgScript.setAttribute('src', src);
        document.body.appendChild(addIgScript);
    }
